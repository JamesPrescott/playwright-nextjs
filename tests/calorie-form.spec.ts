import { test, expect } from '@playwright/test';
import { CalorieForm } from './page-objects/calorie-form';

const testPage = 'http://localhost:3000';

test('has form', async ({ page }) => {
  await page.goto(testPage);
  const calorieForm = new CalorieForm(page);

  expect(calorieForm.form).toBeVisible();
});

test('can input into form and submit successfully', async ({page}) => {
  await page.goto(testPage);
  const calorieForm = new CalorieForm(page);

  await calorieForm.inputData('testInput', '200');
  await calorieForm.submitData();

  const flashMessage = calorieForm.form.getByText(/Record entered successfully/);
  expect(flashMessage).toBeVisible();
})