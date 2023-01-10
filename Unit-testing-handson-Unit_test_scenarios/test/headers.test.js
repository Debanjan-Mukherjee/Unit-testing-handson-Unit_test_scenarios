import { html, fixture, expect } from '@open-wc/testing';
import { isTemplatePartActive } from 'lit-html';
import { Sinon } from 'sinon';
import '../src/header/Header.js';



describe('loan-header', async () => {
  // Write test cases inside this block
  let element = await fixture(html`<loan-header></loan-header>`);
let form = element.shadowRoot.querySelectorAll('button');
  it('checks for spy', () => {
    const spyCheck = Sinon.spy(element, "localeChanged");
    form[0].click();
    expect(spyCheck.calledOnce).to.be.true;
  });

  it('checks accessible', () => {
    expect(element).to.be.accessible;
  })

  
});
