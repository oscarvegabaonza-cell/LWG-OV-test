import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test.describe('Authentication Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('successful login with valid credentials', async ({ page }) => {
    await loginPage.login('user@example.com', 'password123');
    await expect(page).toHaveURL('/dashboard');
  });

  test('login fails with invalid credentials', async () => {
    await loginPage.login('user@example.com', 'wrongpassword');
    expect(await loginPage.isErrorVisible()).toBeTruthy();
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Invalid credentials');
  });

  test('email field is required', async () => {
    await loginPage.fill(loginPage.passwordInput, 'password123');
    await loginPage.click(loginPage.loginButton);
    expect(await loginPage.isErrorVisible()).toBeTruthy();
  });
});
