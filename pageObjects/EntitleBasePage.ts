import {Page} from "playwright";

export class EntitleBasePage {
  private readonly daysWorkedPerWeekRadioButton = 'input[type="radio"][name="response"][value="days-worked-per-week"]';
  private readonly hoursWorkedPerWeekRadioButton = 'input[type="radio"][name="response"][value="hours-worked-per-week"]';
  private readonly continueButton = 'button.gem-c-button.govuk-button.gem-c-button--bottom-margin';
  private readonly annualisedHoursRadioButton = 'input#response-3';
  private readonly startingPartWayThroughALeaveYearRadioButton = 'input#response-1';

  constructor(public readonly page: Page) {}

  getEntitlementPage(): EntitleBasePage {
    return new EntitleBasePage(this.page);
  }
  async selectDaysWorkedWeek() {
    await this.page.click(this.daysWorkedPerWeekRadioButton);
    await this.page.click(this.continueButton);
  }

  async SelectHoursWorkedWeek() {
    await this.page.click(this.hoursWorkedPerWeekRadioButton);
  }

  async selectAnnualisedHours() {
    await this.page.click(this.annualisedHoursRadioButton);
    await this.page.click(this.continueButton);
  }

  async selectPartWayThroughALeaveYear() {
    await this.page.click(this.startingPartWayThroughALeaveYearRadioButton);
    await this.page.click(this.continueButton);
  }
}