import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';



describe('LoanApplication', () => {
  // Write test cases inside this block
  it('checks for accessibility', async () => {
    let loanApplicationElement = await fixture(html`<loan-application></loan-application>`);
    expect(loanApplicationElement).to.be.accessible;
  });

  it('checks title', async () => {
    let loanApplicationElement = await fixture(html`<loan-application></loan-application>`);
    expect(loanApplicationElement.title).to.equal('Hey there');
    expect(loanApplicationElement.counter).to.equal(5);
  });

  it('checks dashboard custom element accessibilty', async () => {
    let dashboardElement = await fixture(html`<dash-board></dash-board>`);
    expect(dashboardElement).to.be.accessible;
  });
  
});
