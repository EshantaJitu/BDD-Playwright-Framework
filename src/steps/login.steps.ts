import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/bdd-fixtures';
// Pass the custom test fixture so loginPage is injected automatically
const { Given, When, Then } = createBdd(test);
Given('I navigate to the login view', async ({ loginPage }) => {
await loginPage.navigate();
});
When('I execute login with {string} and {string}', async ({ loginPage },
user: string, pass: string) => {
await loginPage.login(user, pass);
});
Then('I see the authentication error message', async ({ loginPage }) =>
{
await expect(loginPage.errorMessage).toBeVisible();
});