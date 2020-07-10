import {multiCrawl, crawl} from './YonginCrawler.js';


it('crawling', async () => {
    console.log(await crawl(1));
    expect(await crawl(1));

});

it('multi crawling', async () => {
    console.log(await multiCrawl(1,2));
    expect(await crawl(1,2));
});