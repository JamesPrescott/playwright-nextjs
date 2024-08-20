import { test, expect } from '@playwright/test';
import { CalorieForm } from './page-objects/calorie-form';

const testPage = 'http://localhost:3000';

test('when loading the home page, the calories form should be visible', async ({ page }) => {
  await page.goto(testPage);
  const calorieForm = new CalorieForm(page);

  await expect(calorieForm.form).toBeVisible();
});

test('when valid data is entered into the calorie form, it should show a confirmation', async ({page}) => {
  await page.goto(testPage);
  const calorieForm = new CalorieForm(page);

  await calorieForm.inputData('testInput', '200');
  await calorieForm.submitData();

  const flashMessage = calorieForm.form.getByText(/Calories record created successfully/);
  await expect(flashMessage).toBeVisible();
});

test('when invalid data is entered in to the calorie form, it should show an error', async ({page}) => {
  await page.goto(testPage);
  const calorieForm = new CalorieForm(page);

  await calorieForm.submitData();

  const flashMessage = calorieForm.form.getByText(/Failed to submit data/);
  await expect(flashMessage).toBeVisible();
});