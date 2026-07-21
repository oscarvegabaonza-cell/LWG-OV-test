import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly emailInput = '#email';
  readonly passwordInput = '#password';
  readonly loginButton = 'button:has-text("Login")';
  readonly errorMessage = '.error-message';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto('/login');
  }

  async login(email: string, password: string) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    return await this.getText(this.errorMessage);
  }

  async isErrorVisible(): Promise<boolean> {
    return await this.isVisible(this.errorMessage);
  }
}
