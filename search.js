const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function search(query, where = 'default')
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    if(where == 'default')
    {
        await page.goto(encodeURI(`https://yandex.by/search/?text=${query}`), {
            waitUntil: 'networkidle2'
        });
    
        let content = await page.content()
        let searchResults = [];
        const $ = cheerio.load(content);
        let related = []
    
        $('.related__item').each((ind, item) => {
            related.push($(item).text())
        })
    
        $('.serp-item').each((index, elem) => {
    
            searchResults.push({
                title: $(elem).find('.organic__url-text').text(),
                url: $(elem).find('h2').find('.link').attr('href'),
                description: $(elem).find('.extended-text__full').text().slice(0, $(elem).find('.extended-text__full').text().length - 8)
            })
    
        })
        await browser.close();
        return { results: searchResults, related }
    }
    else if(where == 'images')
    {
        // serp-item__thumb
        await page.goto(encodeURI(`https://yandex.by/images/search/?text=${query}`), {
            waitUntil: 'domcontentloaded'
        });
    
        let content = await page.content()
        let searchResults = [];
        const $ = cheerio.load(content);

        $('img.serp-item__thumb').each((ind, elem) => {
            searchResults.push('http:'+$(elem).attr('src'))
        })

        await browser.close();
        return searchResults
    }
}

module.exports = search