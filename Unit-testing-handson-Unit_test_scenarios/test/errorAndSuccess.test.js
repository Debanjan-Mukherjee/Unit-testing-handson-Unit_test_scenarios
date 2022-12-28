import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import Sinon from 'sinon';

const errorEl = await fixture(html`<loan-error></loan-error>`);
const form = errorEl.shadowRoot.querySelectorAll('lion-button');

const sucessEl = await fixture(html`<loan-success></loan-success>`);
const formSuces = sucessEl.shadowRoot.querySelectorAll('lion-button');

describe('Success screen ', () => {
  it('Success, check _toHome function', () => {
    const abc = Sinon.spy(sucessEl, "_toHome");
    formSuces[0].click();
    expect(abc.calledOnce).to.be.true;
  });

  it('Success, check accessible', () => {
    expect(sucessEl).to.be.accessible;
  });

});

describe('error screen', () => {
  it('Error, check _toHome function', () => {
    const abc = Sinon.spy(errorEl, "_toHome");
    form[0].click();
    expect(abc.calledOnce).to.be.true;
  });

  it('Error, check accessible', () => {
    expect(errorEl).to.be.accessible;
  });
})
