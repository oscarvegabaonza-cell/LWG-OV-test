import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Welcome/);
});

test('homepage contains heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Welcome');
});

test('can interact with button', async ({ page }) => {
  await page.goto('/');
  const button = page.locator('button:has-text("Click me")');
  await button.click();
  await expect(page.locator('.result')).toContainText('Clicked!');
});
