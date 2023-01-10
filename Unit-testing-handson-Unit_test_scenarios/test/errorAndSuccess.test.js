import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import Sinon from 'sinon';



describe('Success screen ', async () => {
  // Write test cases inside this block
  let successElement = await fixture(html`<loan-success></loan-success>`);
let successForm = successElement.shadowRoot.querySelectorAll('lion-button');

let errorElement = await fixture(html`<loan-error><loan-error>`);
let errorForm = errorElement.shadowRoot.querySelectorAll('lion-button');
  it('checks _toHome function success', () => {
    let success = Sinon.spy(successElement, "_toHome");
    successForm[0].click();
    expect(success.calledOnce).to.be.true;
  });

  it('checks accessible success', () => {
    expect(successElement).to.be.accessible;
  })
});

describe('error screen', () => {
  // Write test cases inside this block
  it('checks _toHome function error', () => {
    let error = Sinon.spy(errorElement, '_toHome');
    errorForm[0].click();
    expect(error.calledOnce).to.be.true;
  });

  it('checks accessible error', () => {
    expect(errorElement).to.be.accessible;
  })
});
