import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import Sinon  from 'sinon';

const el = await fixture(html`<customer-details></customer-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');

describe('customer details', () => {
  
  it('check for spy', () => {
    const abc = Sinon.spy(el, "_toEmidetails");
    form[0].click();
    expect(abc.calledOnce).to.be.true;
  });

it('check accessible', () => {
  expect(el).to.be.accessible;
});

});
