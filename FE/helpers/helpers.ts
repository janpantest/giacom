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
        // Wait for the element to be visible first
        await locator.waitFor({ state: 'hidden', timeout: timeout ?? 5000 });

        // Check if the element is enabled (clickable)
        const isEnabled = await locator.isEnabled();
        console.info(isEnabled); // to be deleted
        return isEnabled;
    } catch {
        return false;
    }
}