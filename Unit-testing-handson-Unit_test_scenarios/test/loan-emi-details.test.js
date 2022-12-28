import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

import Sinon from 'sinon';

const el = await fixture(html`<loanemi-details></loanemi-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');

describe('Loan EMI details', () => {
  it('check customer function', () => {
    const abc = Sinon.spy(el, "_toCustomer");
    form[0].click();
    expect(abc.calledOnce).to.be.true;
  });

  it('check customer function', () => {
    const abc = Sinon.spy(el, "_toBasicDetails");
    form[0].click();
    expect(abc.calledOnce).to.be.true;
  });
  

  it('check accessible', () => {
    expect(el).to.be.accessible;
  });
});
