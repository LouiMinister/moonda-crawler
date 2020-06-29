const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
  try {
    return await axios.get("http://www.yongin.go.kr/edu/institutionNLecture/lctrs/BD_selectCteduLctrsList.do");
  } catch (error) {
    console.error(error);
  }
};

const crawl = async () => {
    const trList = [];

    const html = await getHtml();
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.t_list table tbody").children();

    
    //.children("li.section02");

    console.log($bodyList.eq(0).html());
    //console.log($bodyList.text());


    $bodyList.each(function(i, elem) {
      const $tdList = $(this).children();
      const date = new RegExp("신청[0-9]*", "g");

      //onsole.log(date.exec($tdList.eq(5).text()));

      trList[i] = {
        num: $tdList.eq(0).text(),
        sortation: $tdList.eq(1).text(),
        name: $tdList.eq(2).text(),
        institute: $tdList.eq(3).text(),
        hompageURL: $tdList.eq(4).find("a").attr("href"),
        //date_sign: date.exec($tdList.eq(5).text()),
        //date: $tdList.eq(5).text()
      };
    });


    console.log(trList);
    return html;
}

console.log(crawl());
    


// getHtml()
//   .then(html => {
//     let ulList = [];
//     const $ = cheerio.load(html.data);
//     const $bodyList = $("div.headline-list ul").children("li.section02");

//     $bodyList.each(function(i, elem) {
//       ulList[i] = {
//           title: $(this).find('strong.news-tl a').text(),
//           url: $(this).find('strong.news-tl a').attr('href'),
//           image_url: $(this).find('p.poto a img').attr('src'),
//           image_alt: $(this).find('p.poto a img').attr('alt'),
//           summary: $(this).find('p.lead').text().slice(0, -11),
//           date: $(this).find('span.p-time').text()
//       };
//     });

//     const data = ulList.filter(n => n.title);
//     return data;
//   })
//   .then(res => log(res));