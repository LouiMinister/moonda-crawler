import xlsx from 'xlsx';

const jsonToExcel = ({jsonAry, colWidth, filePath, sheetName="DATA"}) => {
    const book = xlsx.utils.book_new();
    const jsonSheet = xlsx.utils.json_to_sheet(jsonAry);

    jsonSheet["!cols"] = colWidth
    xlsx.utils.book_append_sheet( book, jsonSheet, sheetName );
    xlsx.writeFile( book, filePath ); 
}

export {jsonToExcel}