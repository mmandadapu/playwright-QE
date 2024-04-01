import {Page} from "playwright";

export class EntitlementPage {
  private readonly buttonStart = 'a.gem-c-button.govuk-button.govuk-button--start';

  constructor(public readonly page: Page) {}

  getEntitlementPage(): EntitlementPage {
      return new EntitlementPage(this.page);
  }
  async clickStartButton() {
    await this.page.click(this.buttonStart);
  }

}