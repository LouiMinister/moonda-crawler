import {multiCrawl} from './YonginCrawler.js';
import {jsonToExcel} from './excel_writer'

(async ()=>{
    const lectureList = await multiCrawl(1, 4);
    const header =["번호","분류","강좌명","기관","URL","신청기간","교육기간"];
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
    expect(jsonToExcel({jsonAry: lectureList, colWidth: colWidth, filePath: filePath, sheetName :sheetName}));
})();
