import { html, fixture, expect } from '@open-wc/testing';
import { Sinon } from 'sinon';
import '../src/Customer/Customer-details.js';


describe('customer details', async () => {
  // Write test cases inside this block
  let element = await fixture(html`<customer-details></customer-details>`);
  let form = element.shadowRoot.querySelectorAll('lion-button');
  it('checks for spy', () => {
    const checkSpy = Sinon.spy(element, "_toEmidetails");
    form[0].click();
    expect(checkSpy.calledOnce).to.be.true;
  });

  it('is accessible', () => {
    expect(element).to.be.accessible;
  });
});
