import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';
type ContextFixtures = {
loginPage: LoginPage;
};
export const test = base.extend<ContextFixtures>({
loginPage: async ({ page }, use) => {
await use(new LoginPage(page));
},
});