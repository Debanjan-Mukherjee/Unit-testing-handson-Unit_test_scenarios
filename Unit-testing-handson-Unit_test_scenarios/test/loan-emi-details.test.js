import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { Sinon } from 'sinon';
import { isTemplatePartActive } from 'lit-html';



describe('Loan EMI details', async () => {
  // Write test cases inside this block
  let element = await fixture(html`<loanemi-details></loanemi-details>`);
  let form = element.shadowRoot.querySelectorAll('lion-button');
  it('checks for spy of _toCustomer', () => {
    let checkSpy = Sinon.spy(element, '_toCustomer');
    form[0].click();
    expect(checkSpy.calledOnce).to.be.true;
  });

  it('checks for spy of _toBasicDetails', () => {
    let checkSpy = Sinon.spy(element, '_toBasicDetails');
    form[0].click();
    expect(checkSpy.calledOnce).to.be.true;
  });

  it('checks accessible', () => {
    expect(element).to.be.accessible;
  });

});
