import {multiCrawl} from './sampleCrawler.js';

(async ()=>{
const lectureList = await multiCrawl(1, 4);
    console.log(lectureList);
    console.log("end");
})();
