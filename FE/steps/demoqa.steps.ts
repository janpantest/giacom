import { Page, test } from "@playwright/test";
import { DemoqaHomePage } from "../pages/demoqaHome.page";

export async function checkDemoqaHome(page: Page, url: string, timeout: number): Promise<void> {
    await test.step('Check home page', async () => {
        const demoqaHome = new DemoqaHomePage(page);

        await demoqaHome.goToHome(url);
        await demoqaHome.checkHomePage(timeout);
    })
}

export async function searchForBoook(page: Page, title: string): Promise<void> {
    await test.step('Search for book', async () => {
        const demoqaHome = new DemoqaHomePage(page);

        await demoqaHome.searchForBoook(title);
    })
}

export async function checkResults(page: Page, title: string, timeout: number): Promise<void> {
    await test.step('Check book', async () => {
        const demoqaHome = new DemoqaHomePage(page);

        await demoqaHome.checkResult(title, timeout);
    })
}

export async function getBookDetail(page: Page, nthElement: number, timeout: number): Promise<void> {
    await test.step('Get book detail', async () => {
        const demoqaHome = new DemoqaHomePage(page);

        await demoqaHome.goToBookDetail(nthElement, timeout);
    })
}

export async function checkUrl(page: Page, expectedUrl: string): Promise<void> {
    await test.step('Check URL', async () => {
        const demoqaHome = new DemoqaHomePage(page);

        await demoqaHome.checkUrl(expectedUrl);
    })
}

export async function changeNumberOfRows(page: Page, timeout: number): Promise<void> {
    await test.step('Change number of rows', async () => {
        const demoqaHome = new DemoqaHomePage(page);

        await demoqaHome.changeNumberOfRows(timeout);
    })
}

export async function clickNextButton(page: Page, timeout: number): Promise<string> {
    return await test.step('Click next button', async () => {
        const demoqaHome = new DemoqaHomePage(page);

        return await demoqaHome.clickNextButton(timeout);
    })
}

export async function clickPreviousButton(page: Page, titleOne: string, timeout: number): Promise<void> {
    return await test.step('Click previous button', async () => {
        const demoqaHome = new DemoqaHomePage(page);

        await demoqaHome.clickPreviousButton(titleOne, timeout);
    })
}