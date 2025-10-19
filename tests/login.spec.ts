import { test, expect } from '@playwright/test';

test.describe('Login flow (demo site)', () => {
  test('valid credentials succeed', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();

    // Robust checks: URL and success flash message
    await expect(page).toHaveURL(/\/secure/);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });

  test('invalid credentials show error', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('wrong');
    await page.locator('#password').fill('wrong');
    await page.locator('button[type="submit"]').click();

    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
  });
});
