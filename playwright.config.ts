import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { Config } from './utils/config'

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: [
    'src/steps/*.ts',
    'src/fixtures/bdd-fixtures.ts',
  ],
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    baseURL: Config.baseUrl,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome' } }
  ],
});




//Ai Agents code
/*
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { Config } from './utils/config';
const testDir = defineBddConfig({
features: 'features/*.feature',
// Step definitions and fixtures are picked up automatically
steps: ['src/steps/*.ts', 'src/fixtures/*.ts'],
});
export default defineConfig({
testDir,
fullyParallel: true,
workers: process.env.CI ? 2 : undefined,
reporter: [
['list'],
['allure-playwright', { outputFolder: 'allure-results' }],
],
use: {
baseURL: Config.baseUrl,
screenshot: 'only-on-failure',
video: 'retain-on-failure',
trace: 'on-first-retry',
},
projects: [
{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
],
});
*/