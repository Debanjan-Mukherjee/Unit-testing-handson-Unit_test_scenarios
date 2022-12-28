import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('check for accessibility' , async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
    expect(el).to.be.accessible;
  });
  it('Check title', async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('Is custom element dashboard accessible', async () => {
    const el = await fixture(html`<dash-board></dash-board>`);
    await expect(el).to.be.accessible;
  });
});
