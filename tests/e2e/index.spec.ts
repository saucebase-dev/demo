import { expect, test } from '@playwright/test';
import { expectSSREnabled } from '@e2e/helpers/ssr';

test.describe('Demo index page', () => {
    test('responds successfully when navigating to root', async ({ page }) => {
        const response = await page.goto('/');

        expect(response, 'Expected a navigation response').toBeTruthy();
        expect(
            response?.ok(),
            'Expected a successful status code',
        ).toBeTruthy();
    });

    test('uses SSR and renders Demo::Index component', async ({ page }) => {
        await page.goto('/');

        await expectSSREnabled(page, 'Demo::Index');
    });
});
