import {jsonToExcel} from './excel_writer.js';

it('excel writing', () => {
    const header =["번호","분류","강좌명","기관","URL","신청기간","교육기간"];
    const jsonAry = [
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
            sortation: '테스트2',
            name: '사주명리 상담사(고급)',
            institute: '용인송담대학교 평생교육원',
            hompageURL: 'http://ate.ysc.ac.kr/lifeeducation/CMS/Board/Board.do?mCode=MN025&mode=view&mgr_seq=49&board_seq=31371',
            date_sign: '2019-05-25 ~ 선착순',
            date_edu: '2020-06-22 ~ 3개월 과정'
          }
      ];
    const colWidth = [
        { wch : 5 }   // A열
        , { wch : 10}   // B열
        , { wch : 30 }  // C열
        , { wch : 30 }  // D열
        , { wch : 40 }  // E열
        , { wch : 24 }  // F열
        , { wch : 24 }  // G열
    ];
    const sheetName = "용인";
    const filePath = "doc_files/dramatis_personae.xlsx";
    expect(jsonToExcel({jsonAry: jsonAry, colWidth: colWidth, filePath: filePath, sheetName :sheetName}));
  });



