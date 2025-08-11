import { Locator } from '@playwright/test';

export async function clickIfElementExist(locator: Locator, timeout: number): Promise<void> {
    const elementVisible = await isElementVisible(locator, timeout);
    if (elementVisible) {
        await locator.click();
    }
}

export async function isElementVisible(locator: Locator, timeout?: number): Promise<boolean> {
    try {
        await locator.waitFor({ state: 'visible', timeout: timeout ?? 5000 });
        return true;
    }
    catch {
        return false;
    }
}

export async function clickIfElementClickable(locator: Locator, timeout: number): Promise<void> {
    const elementVisible = await isElementVisible(locator, timeout);
    if (elementVisible) {
        await locator.click();
    }
}

export async function isButtonClickable(locator: Locator, timeout?: number): Promise<boolean> {
    try {
        await locator.waitFor({ state: 'hidden', timeout: timeout ?? 5000 });

        const isEnabled = await locator.isEnabled();
        return isEnabled;
    } 
    catch {
        return false;
    }
}