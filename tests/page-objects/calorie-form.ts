import { type Locator, type Page } from '@playwright/test';

export class CalorieForm {
    readonly page: Page;
    readonly form: Locator;
    readonly nameInput: Locator;
    readonly calorieInput: Locator;
    readonly submit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.form = page.getByRole('form');
        this.nameInput = page.getByRole('textbox', { name: 'name' });
        this.calorieInput = page.getByRole('textbox', { name: 'calories' });
        this.submit = page.locator('button', { hasText: /Submit/ });
    }

    async inputData(name: string, calories: string) {
        await this.nameInput.fill(name);
        await this.calorieInput.fill(calories);
    }

    async submitData() {
        await this.submit.click();
    }
}