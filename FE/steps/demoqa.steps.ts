import { Page, test } from "@playwright/test";
import { DemoqaHomePage } from "../pages/demoqaHome.page";

type MyFixtures = {
    demoHome: DemoqaHomePage;
};

export async function checkDemoqaHome(demoHome: DemoqaHomePage, url: string): Promise<void> {
    await test.step('Check home page', async () => {
        await demoHome.goToHome(url);
        await demoHome.checkHomePage();
    });
}

// export async function checkDemoqaHome(demoHome: DemoqaHomePage, url: string): Promise<void> {
//     await test.step('Check home page', async () => {
//         const demoqaHome = new DemoqaHomePage(page);

//         await demoqaHome.goToHome(url);
//         await demoqaHome.checkHomePage();
//     })
// }

export async function searchForBoook(demoHome: DemoqaHomePage, title: string): Promise<void> {
    await test.step('Search for book', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.searchForBoook(title);
        await demoHome.searchForBoook(title);
    })
}

export async function checkResults(demoHome: DemoqaHomePage, title: string): Promise<void> {
    await test.step('Check book', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.checkResult(title);
        demoHome.checkResult(title);
    })
}

export async function checkNumberOfRows(demoHome: DemoqaHomePage): Promise<void> {
    await test.step('Check number of rows', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.checkNumberOfRows();
        await demoHome.checkNumberOfRows();
    })
}

export async function getBookDetail(demoHome: DemoqaHomePage, nthElement: number): Promise<void> {
    await test.step('Get book detail', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.goToBookDetail(nthElement);
        await demoHome.goToBookDetail(nthElement);
    })
}

export async function checkUrl(demoHome: DemoqaHomePage, expectedUrl: string): Promise<void> {
    await test.step('Check URL', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.checkUrl(expectedUrl);
        await demoHome.checkUrl(expectedUrl);
    })
}

export async function changeNumberOfRows(demoHome: DemoqaHomePage): Promise<void> {
    await test.step('Change number of rows', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.changeNumberOfRows();
        await demoHome.changeNumberOfRows();
    })
}

export async function clickNextButton(demoHome: DemoqaHomePage): Promise<string> {
    return await test.step('Click next button', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.clickIfEnabledThree();
        // return await demoqaHome.clickNextButton();
        await demoHome.clickIfEnabledThree();
        return await demoHome.clickNextButton();
    })
}

export async function clickPreviousButton(demoHome: DemoqaHomePage, titleOne: string): Promise<void> {
    return await test.step('Click previous button', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.clickIfEnabledThree();
        // await demoqaHome.clickPreviousButton(titleOne);
        await demoHome.clickIfEnabledThree();
        await demoHome.clickPreviousButton(titleOne);
    })
}

export async function getBookList(demoHome: DemoqaHomePage, run: 'First' | 'Second'): Promise<void> {
    return await test.step('Get list', async () => {
        // const demoqaHome = new DemoqaHomePage(page);

        // await demoqaHome.getBookList(run);
        await demoHome.getBookList(run);
    })
}