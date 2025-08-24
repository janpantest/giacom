import { test } from '@playwright/test';
import * as demoqaSteps from '../steps/demoqa.steps';
import { DemoqaHomePage } from '../pages/demoqaHome.page';

const url = '/books';
const title = 'Git Pocket Guide';

test('Search for book', { tag: '@searchBook' }, async ({ page }) => {
    const demoHome = new DemoqaHomePage(page);
    await demoqaSteps.checkDemoqaHome(demoHome, url);

    // await demoqaSteps.checkDemoqaHome(page, url);
    await demoqaSteps.searchForBoook(demoHome, title);
    await demoqaSteps.checkResults(demoHome, title);
    await demoqaSteps.checkNumberOfRows(demoHome);
});

test('Get book\'s detail', { tag: '@getDetail' }, async ({ page }) => {
    const demoHome = new DemoqaHomePage(page);
    const expectedUrl = 'https://demoqa.com/books?book=9781449337711';
    await demoqaSteps.checkDemoqaHome(demoHome, url);
    await demoqaSteps.getBookDetail(demoHome, 2);
    await demoqaSteps.checkUrl(demoHome, expectedUrl);
});

test('Pagination', { tag: '@pagination' }, async ({ page }) => {
    const demoHome = new DemoqaHomePage(page);
    await demoqaSteps.checkDemoqaHome(demoHome, url);
    await demoqaSteps.changeNumberOfRows(demoHome);
    await demoqaSteps.getBookList(demoHome, 'First');
    const titleOne = await demoqaSteps.clickNextButton(demoHome);
    await demoqaSteps.getBookList(demoHome, 'Second');
    await demoqaSteps.clickPreviousButton(demoHome, titleOne);
});

// npx playwright test demoqa.test.ts --headed --project=chromium