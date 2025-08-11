import { test } from '@playwright/test';
import * as demoqaSteps from '../steps/demoqa.steps';

const url = 'https://demoqa.com/books';
const title = 'Git Pocket Guide';
const timeout = 5000;

test('Search for book', { tag: '@searchBook' }, async ({ page }) => {
    await demoqaSteps.checkDemoqaHome(page, url, timeout);
    await demoqaSteps.searchForBoook(page, title);
    await demoqaSteps.checkResults(page, title, timeout);
});

test('Get book\'s detail', { tag: '@getDetail' }, async ({ page }) => {
    const expectedUrl = 'https://demoqa.com/books?book=9781449337711';
    await demoqaSteps.checkDemoqaHome(page, url, timeout);
    await demoqaSteps.getBookDetail(page, 2, timeout);
    await demoqaSteps.checkUrl(page, expectedUrl);
});

test('Pagination', { tag: '@pagination' }, async ({ page }) => {
    await demoqaSteps.checkDemoqaHome(page, url, timeout);
    await demoqaSteps.changeNumberOfRows(page, timeout);
    const titleOne = await demoqaSteps.clickNextButton(page, timeout);
    await demoqaSteps.clickPreviousButton(page, titleOne, timeout);
});

// npx playwright test demoqa.test.ts --headed --project=chromium