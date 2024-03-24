import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Go to About Page');

  await expect(page).toHaveURL('http://localhost:3000/about');
  await expect(page.locator('p')).toContainText('About Page');
});
