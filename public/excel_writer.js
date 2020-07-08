import xlsx from 'xlsx';

const book = xlsx.utils.book_new();

// @breif 1번 시트

// @breif aoa_to_sheet 방식으로 데이터를 생성한다.

const jsonSheet = xlsx.utils.json_to_sheet([
    {
        num: '24308',
        sortation: '인문교양',
        name: '사주명리 상담사(실전통변)',
        institute: '용인송담대학교 평생교육원',
        hompageURL: 'http://ate.ysc.ac.kr/lifeeducation/CMS/Board/Board.do?mCode=MN025&mode=view&mgr_seq=49&board_seq=31371',
        date_sign: '2019-05-25 ~ 선착순',
        date_edu: '2020-06-22 ~ 3개월 과정'
      },
      {
        num: '24307',
        sortation: '인문교양',
        name: '사주명리 상담사(고급)',
        institute: '용인송담대학교 평생교육원',
        hompageURL: 'http://ate.ysc.ac.kr/lifeeducation/CMS/Board/Board.do?mCode=MN025&mode=view&mgr_seq=49&board_seq=31371',
        date_sign: '2019-05-25 ~ 선착순',
        date_edu: '2020-06-22 ~ 3개월 과정'
      }
  ], {header:["num","sortation","name","institute","hompageURL","date_sign","date_edu"]});

jsonSheet["!cols"] = [

      { wch : 5 }   // A열
    , { wch : 10}   // B열
    , { wch : 30 }  // C열
    , { wch : 30 }  // D열
    , { wch : 40 }  // E열
    , { wch : 24 }  // F열
    , { wch : 24 }  // G열


]


// @breif 첫번째 시트에 작성한 데이터를 넣는다.

xlsx.utils.book_append_sheet( book, jsonSheet, "DATA" );



// @files 엑셀파일을 생성하고 저장한다.

xlsx.writeFile( book, "dramatis_personae.xlsx" ); 