import { html, fixture, expect } from '@open-wc/testing';
import { Sinon } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { BasicDetails } from '../src/LoanBasicDetails/BasicDetails.js';


describe('Basic details', async () => {
  // Write test cases inside this block
  // refer basic-details.js files
  let element = await fixture(html`<basic-details></basic-details>`);
  let form = element.shadowRoot.querySelectorAll('lion-button');
  it('checks for spy', () => {
    let checkSpy = Sinon.spy(element, "_toDashboard");
    form[0].click();
    expect(checkSpy.calledOnce).to.be.true;
  });

  it('is accessible', () => {
    expect(element).to.be.accessible;
  });

  it('checks for capture', () => {
    let captureDetails = Sinon.spy(element, "_captureDetails");
    form[1].click();
    expect(captureDetails.calledOnce).to.be.true;
  });

  it('converts number to word', () => {
    let val = 10005;
    let num = 10005;
    element._numToWord(val, num);
    expect(num).to.equal(10005.00);
  })


  
});
