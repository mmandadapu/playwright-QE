import { test, expect, Page } from '@playwright/test';
import { URL } from "../framework/constants/configurations";
import {EntitlementPage} from "../pageobjects/EntitlementPage";
import {EntitleBasePage} from "../pageobjects/EntitleBasePage";
import {CalculateEntitlment} from "../pageobjects/CalculateEntitlement";

test.beforeEach(async ({ page }) => {
  await page.goto(URL.toString());
  const entitlementPage = await new EntitlementPage(page).getEntitlementPage();
  await entitlementPage.clickStartButton();
})

test.describe('Calculate holiday Entitlement', () => {

    test('calculate holioday entilement based upon work days in a week', async ({ page }) => {
      const entitlementPage = await new EntitleBasePage(page).getEntitlementPage();
      await entitlementPage.selectDaysWorkedWeek();
      const calculateEntitlementPage = await new CalculateEntitlment(page).getCalculateEntitlment()
      await calculateEntitlementPage.getCalculateEntitlment();
      await calculateEntitlementPage.selectFullLeaveYear();
      await calculateEntitlementPage.fillDaysPerWeek("5");
      await calculateEntitlementPage.validateEntitlement("28 days holiday");
  });

  test('calculate holioday entilement based annualised hours and verify error message', async ({ page }) => {
    const entitlementPage = await new EntitleBasePage(page).getEntitlementPage();
    await entitlementPage.selectAnnualisedHours();
    await entitlementPage.selectPartWayThroughALeaveYear();
    const calculateEntitlementPage = await new CalculateEntitlment(page).getCalculateEntitlment()
    await calculateEntitlementPage.fillEmploymentDate("02","08","2008");
    await calculateEntitlementPage.fillLeavetDate("02","08","2010");
    await calculateEntitlementPage.verifyEntitlementMessage();
  });

});
