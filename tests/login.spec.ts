import { test, expect } from '@playwright/test';

const users = [
  {
    testName: 'successful login',
    username: 'standard_user',
    password: 'secret_sauce',
    expectedResult: 'success'
  },
  {
    testName: 'invalid login',
    username: 'standard_user',
    password: 'Wrong123',
    expectedResult: 'error'
  },
  {
  testName: 'empty password',
  username: 'standard_user',
  password: '',
  expectedResult: 'emptyPassword'
 },
 {
  testName: 'empty username',
  username: '',
  password: 'secret_sauce',
  expectedResult: 'emptyUsername'
}
];


for (const user of users) {
   test(user.testName, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(user.username);
    await page.getByPlaceholder('Password').fill(user.password);
    await page.getByRole('button', { name: 'Login' }).click();
   if (user.expectedResult === 'success') {
  await expect(page.getByText('Products')).toBeVisible();

} else if (user.expectedResult === 'error') {
  await expect(
    page.getByText('Username and password do not match')
  ).toBeVisible();

} else if (user.expectedResult === 'emptyPassword') {
  await expect(
    page.getByText('Password is required')
  ).toBeVisible();
} else if (user.expectedResult === 'emptyUsername') {
  await expect(
    page.getByText('Username is required')
  ).toBeVisible();
}

  });

}
  
/* 

test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Products')).toBeVisible();
});


test('invalid login', async({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('Wrong123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Username and password do not match')).toBeVisible();

});
 */
