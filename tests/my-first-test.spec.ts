import { test, expect } from '@playwright/test';

test('My first Playwright test', async ({ page }) => {
      await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
        const getStartedLink = page.getByRole('link', { name: 'Get started' });
        await expect(getStartedLink).toBeVisible();
        await getStartedLink.click();
        await expect(
  page.getByRole('heading', { name: 'Installation' })
).toBeVisible();
        });