import { expect, Locator, Page } from '@playwright/test';

export class DemoqaHomePage {
    readonly page: Page;
    readonly logoHome: Locator;
    readonly inputBox: Locator;
    readonly result: Locator;
    readonly dropdown: Locator;
    readonly selectValue: Locator;
    readonly buttonPrevious: Locator;
    readonly buttonNext: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoHome = this.page.locator('div#app header a');
        this.inputBox = this.page.locator('input#searchBox');
        this.result = this.page.locator('span a');
        this.dropdown = this.page.getByLabel('rows per page');
        this.selectValue = this.page.locator('span select option');
        this.buttonPrevious = this.page.getByRole('button', { name: 'Previous' });
        this.buttonNext = this.page.getByRole('button', { name: 'Next' });
    }

    async goToHome(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async checkHomePage(timeout: number): Promise<void> {
        await expect(this.logoHome).toBeVisible({ timeout });
        await expect(this.inputBox).toBeVisible({ timeout });

    }

    async searchForBoook(title: string): Promise<void> {
        await this.inputBox.fill(title);
    }

    async checkResult(title: string, timeout: number): Promise<void> {
        await expect(this.result).toBeVisible({ timeout});
        await expect(this.result).toHaveText(title);
    }

    async checkNumberOfRows(): Promise<void> {
        const numberOfRows = await this.result.all();
        expect(numberOfRows.length).toEqual(1);
    }

    async goToBookDetail(nthElement: number, timeout: number): Promise<void> {
        await expect(this.result.nth(nthElement)).toBeVisible({ timeout});
        await this.result.nth(nthElement).click();
    }

    async checkUrl(expectedUrl: string): Promise<void> {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async changeNumberOfRows(timeout: number): Promise<void> {
        await expect(this.dropdown).toBeVisible({ timeout });
        await this.dropdown.click();
        await this.dropdown.selectOption('5');
        await this.page.waitForTimeout(2000);
    }

    async clickNextButton(timeout: number): Promise<any> {
        await expect(this.buttonNext).toBeEnabled();
        await this.buttonNext.click();
        await this.page.waitForTimeout(2000);
        const bookTitle = await this.result.first().textContent();
        return bookTitle;
    }

    async clickPreviousButton(titleOne: string, timeout: number): Promise<void> {
        await expect(this.buttonPrevious).toBeEnabled();
        await this.buttonPrevious.click();
        await this.page.waitForTimeout(1000);
        await expect(this.result.first()).toBeVisible();
        const bookTitle = await this.result.first().textContent();
        expect(bookTitle).not.toEqual(titleOne);
    }
}