import { test, chromium, expect } from 'playwright/test';

test('Test Login', async () => {
  // Launch browser > Create a new browser context > Create a new page
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the login page
  await page.goto('https://test.dwf.mptc.gov.kh/');

  // correct email and password
  const validEmail = 'staff1@gmail.com';
  const validPassword = 'test';

  // input email and password
  const inputEmail = await page.getByLabel('ឈ្មោះគណនី ឬសារអេឡិកត្រូនិច').fill(validEmail);
  const inputPassword = await page.getByLabel('លេខសម្ងាត់').fill(validPassword);

  // if condition to check the input email and password
  if (inputEmail == validEmail && inputPassword == validPassword) {
    const originalUrl = page.url();
    const expectedUrl = originalUrl + '/dashboard';

    await page.click('button:has-text("ចូល")');
    await page.waitForNavigation();

    expect(page.url()).toBe(expectedUrl);
  } else if (inputEmail == '' && inputPassword == validPassword) {
    await page.click('button:has-text("ចូល")');

    expect(() => {
      throw new Error('ការបញ្ជាក់');
    }).toThrowError();
    expect(() => {
      throw new Error('ឈ្មោះគណនី ឬសារអេឡិចត្រូនិច និងពាក្យសម្ងាត់មិនត្រឹមត្រូវ');
    }).toThrowError();
  } else if (inputEmail == validEmail && inputPassword == '') {
    await page.click('button:has-text("ចូល")');

    expect(() => {
      throw new Error('ការបញ្ជាក់');
    }).toThrowError();
    expect(() => {
      throw new Error('password should not be empty');
    }).toThrowError();
  } else if (inputEmail != validEmail && inputPassword == '') {
    await page.click('button:has-text("ចូល")');

    expect(() => {
      throw new Error('ការបញ្ជាក់');
    }).toThrowError();
    expect(() => {
      throw new Error('password should not be empty');
    }).toThrowError();
  } else if (inputEmail == '' && inputPassword != validPassword) {
    await page.click('button:has-text("ចូល")');

    expect(() => {
      throw new Error('ការបញ្ជាក់');
    }).toThrowError();
    expect(() => {
      throw new Error('ឈ្មោះគណនី ឬសារអេឡិចត្រូនិច និងពាក្យសម្ងាត់មិនត្រឹមត្រូវ');
    }).toThrowError();
  } else if (inputEmail != validEmail && inputPassword != validPassword) {
    await page.click('button:has-text("ចូល")');

    expect(() => {
      throw new Error('ការបញ្ជាក់');
    }).toThrowError();
    expect(() => {
      throw new Error('password should not be empty');
    }).toThrowError();
  } else if (inputEmail == validEmail && inputPassword != validPassword) {
    await page.click('button:has-text("ចូល")');

    expect(() => {
      throw new Error('ការបញ្ជាក់');
    }).toThrowError();
    expect(() => {
      throw new Error('ឈ្មោះគណនី ឬសារអេឡិចត្រូនិច និងពាក្យសម្ងាត់មិនត្រឹមត្រូវ');
    }).toThrowError();
  } else if (inputEmail != validEmail && inputPassword == validPassword) {
    await page.click('button:has-text("ចូល")');

    expect(() => {
      throw new Error('ការបញ្ជាក់');
    }).toThrowError();
    expect(() => {
      throw new Error('ឈ្មោះគណនី ឬសារអេឡិចត្រូនិច និងពាក្យសម្ងាត់មិនត្រឹមត្រូវ');
    }).toThrowError();
  } else {
    console.log('Invalid input');
  }

});
