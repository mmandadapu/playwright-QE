import { expect } from "@playwright/test";
import {Page} from "playwright";

export class CalculateEntitlment {
  private readonly fullYearButton = 'input[type="radio"][name="response"][value="full-year"]';
  private readonly continueButton = 'button.gem-c-button.govuk-button.gem-c-button--bottom-margin';
  private readonly daysPerWeekBox = 'input.gem-c-input.govuk-input.govuk-input--width-10';
  private readonly entitilementSummery = 'div.summary';
  private readonly employmentStartDate = 'input#response-0';
  private readonly employmentStartMonth = 'input#response-1';
  private readonly employmentStartYear = 'input#response-2';
  private readonly entitilementMessage = 'li.gem-c-error-summary__list-item';

  constructor(public readonly page: Page) {}

  getCalculateEntitlment(): CalculateEntitlment {
    return new CalculateEntitlment(this.page);
  }
  async selectFullLeaveYear() {
    await this.page.click(this.fullYearButton);
    await this.page.click(this.continueButton);
  }

  async fillDaysPerWeek(days:string) {
    await this.page.click(this.daysPerWeekBox);
    await this.page.fill(this.daysPerWeekBox,days);
    await this.page.click(this.continueButton);
  }

  async validateEntitlement(entitlemement:string) {
    await this.page.waitForSelector(this.entitilementSummery);
    await expect(await this.page.textContent(this.entitilementSummery)).toContain(entitlemement);
  }

  async fillEmploymentDate(dateDay:string,month:string,year:string) {
    await this.page.click(this.employmentStartDate);
    await this.page.fill(this.employmentStartDate,dateDay);
    await this.page.click(this.employmentStartMonth);
    await this.page.fill(this.employmentStartMonth,month);
    await this.page.click(this.employmentStartYear);
    await this.page.fill(this.employmentStartYear,year);
    await this.page.click(this.continueButton);
  }

  async fillLeavetDate(dateDay:string,month:string,year:string) {
    await this.page.click(this.employmentStartDate);
    await this.page.fill(this.employmentStartDate,dateDay);
    await this.page.click(this.employmentStartMonth);
    await this.page.fill(this.employmentStartMonth,month);
    await this.page.click(this.employmentStartYear);
    await this.page.fill(this.employmentStartYear,year);
    await this.page.click(this.continueButton);
  }
  
  async verifyEntitlementMessage() {
    await this.page.waitForSelector(this.entitilementMessage);
    await expect(await this.page.textContent(this.entitilementMessage)).toContain("Your leave year start date must be earlier than your employment start date");
  }

}