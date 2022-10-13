const puppeteer = require('puppeteer');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

// Puppeteer screenshots
const takeScreenshot = catchAsync(async (req, res, next) => {
    const { urlDeploy, title } = req.body;

    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        headless: true,
        devtools: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    await page.setViewport({
        width: 1200,
        height: 700,
        deviceScaleFactor: 1
    });

    const path = `./public/temporal/${title}.jpg`;

    await page.goto(urlDeploy, { waitUntil: 'networkidle0' });

    await page.screenshot({ path, type: 'jpeg'});

    await browser.close();

    req.body.imageTemp = `http://localhost:4000/temporal/${title}.jpg`;
    next();
});

module.exports = { takeScreenshot };