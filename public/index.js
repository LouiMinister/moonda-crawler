import {multiCrawl} from './YonginCrawler.js';

(async ()=>{
const lectureList = await multiCrawl(1, 4);
    console.log(lectureList);
    console.log("end");
})();
