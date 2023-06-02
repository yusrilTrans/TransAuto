import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import RandomizedDataSource from '../../component/random_data_component.js';

Given(/^I'm on the vehicle page$/, async function () {
  const url = "https://vms-test.transtrack.id/vehicles";
  await browser.$("//span[normalize-space()='Vehicles']").click();
  const urlVehicle = await browser.getUrl();
  await browser.url(url);
  expect(url).to.equal(urlVehicle);
});

When(/^I add new vehicle type$/, async function () {
  const typeName = new RandomizedDataSource();
  await browser.$("(//button[normalize-space()='Choose Company'])[1]").click();
  await browser.pause(1000);
  await browser.$("//a[normalize-space()='PT Testing Company']").click();
  await browser.$("//div[contains(text(),'Setting')]").click();
  await browser.pause(10000)
  await browser.$("//body/div[@id='__nuxt']/div[contains(@class,'flex flex-col justify-center sm:ml-64 sm:mr-4')]/div[contains(@class,'p-10')]/div[@id='tabs']/div[@id='myTabContent']/div[@id='vehicle-type']/button[contains(@type,'submit')]/div[1]");
  await browser.$("(//input[@id='model-name-vehicle'])").setValue(typeName.generateRandomName());
  await browser.pause(1000);
  await browser.$("(//button[contains(@type,'submit')])[3]").click();
  await browser.pause(5000);
});

Then(/^I should have new vehicle type$/, async function () {
  await browser.pause(10000);
  const strUrl = await browser.getUrl();
  const expectedUrl = "https://vms-test.transtrack.id/vehicles/vehicle-setting";
  expect(strUrl).to.equal(expectedUrl);
});
