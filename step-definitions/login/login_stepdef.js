import {Given, When, Then} from '@cucumber/cucumber';
import { expect } from 'chai';

let url = "https://vms-test.transtrack.id/";

Given(/^I'm on the login page$/, async function(){
    await browser.url(url);
});

When(/^I log in with email (\S+) password (\S+)$/, async function(email, password){
    await browser.$("//input[@id='email']").setValue(email);
    await browser.$("//input[@id='password']").setValue(password);
    await browser.$("[data-test='btn-submit-login']").click();
});

Then(/^I should be on the dashboard page$/, async function(){
    await browser.pause(10000);
    let strUrl = await browser.getUrl();
    let expectedUrl = "https://vms-test.transtrack.id/dashboard";

    expect(strUrl).to.equal(expectedUrl);
});