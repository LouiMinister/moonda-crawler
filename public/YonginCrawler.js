const axios = require("axios");
const cheerio = require("cheerio");


const getLectureListURL = (page) => {
    const url = `http://www.yongin.go.kr/edu/institutionNLecture/lctrs/BD_selectCteduLctrsList.do?q_lftmEdcRealm=&q_lftmEdcTrget=&q_searchYear=&q_searchMonth=&q_searchKey=&q_searchVal=&q_currPage=${page}&q_sortName=&q_sortOrder=&`;
    return url;
}

const getHtml = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
}

const crawl = async (page) => {
    const trAry = [];

    const lectureListURL = getLectureListURL(page);
    const html = await getHtml(lectureListURL);
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.t_list table tbody").children();

    $bodyList.each(function(i, elem) {
      const $tdList = $(this).children();

      trAry[i] = {
        num: $tdList.eq(0).text(),
        sortation: $tdList.eq(1).text(),
        name: $tdList.eq(2).text(),
        institute: $tdList.eq(3).text(),
        hompageURL: $tdList.eq(4).find("a").attr("href"),
        date_sign: $tdList.eq(5).text().match(/신청(.*)\n/g)[0].replace(/[신청|\n]/g, ""),
        date_edu: $tdList.eq(5).text().match(/교육(.*)\n/g)[0].replace(/[교육|\n]/g, "")
      };
    });

    return trAry;
}

const multiCrawl = async (startPage, endPage) => {
    let crawlRes = ["PADDING"];
    let pageAry;

    for (let i = startPage; i <= endPage; i++){
        crawlRes[i] = crawl(i);
    }

    try {
        pageAry = await Promise.all(crawlRes);
    } catch (err) {
        console.log(err);
    }
    return pageAry;
}

/*
(async () => {
    //const lectureList = await crawl(4);
    const lectureList = await multiCrawl(1, 4);
    console.log(lectureList);
})();
*/

export {crawl, multiCrawl};