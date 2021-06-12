import { getElem } from './utilities/utils';

import {
  logoApp,
  toastMainSelector,
  toastCloseButtonSelector,
  translationButtonSelector,
} from './utilities/common.selectors';
import {
  invitationalCodeTitle,
  invitationalCodeInput,
  invitationalCodeButton,
} from './utilities/02Invitational.selectors';
import { loginInvitationLink } from './utilities/01Login.selectors';

import { toastErrorClass } from './utilities/common.classes';

describe('02 Invitational', () => {
  beforeEach(() => {
    cy.visit('/');
    getElem(loginInvitationLink).click();
  });

  it('02 Invitational', () => {
    cy.log('02.01 Check if all elements are visible');
    getElem(logoApp).should('be.visible');
    getElem(translationButtonSelector).should('be.visible');
    getElem(invitationalCodeTitle).should('be.visible');
    getElem(invitationalCodeInput).should('be.visible');
    getElem(invitationalCodeButton).should('be.visible').should('be.disabled');

    cy.log('02.02 Check if logoApp is working');
    getElem(logoApp).click();

    cy.url().should('include', '/');

    getElem(loginInvitationLink).click();

    cy.log('02.03 Check when the invitation code has less than 11 characters');
    getElem(invitationalCodeInput).should('have.value', '');

    getElem(invitationalCodeInput).type('11111111111');

    getElem(invitationalCodeButton).should('be.visible').should('be.disabled');

    cy.log(
      '02.04 Check when the invitation code has 12 characters but doesn´t exist'
    );
    getElem(invitationalCodeInput).clear().type('111111111111');

    cy.intercept('/api/auth/invitation').as('invitation');
    getElem(invitationalCodeButton).should('be.visible').should('be.enabled');

    getElem(invitationalCodeButton).click();

    cy.wait('@invitation').its('response.statusCode').should('eq', 400);
    getElem(toastMainSelector)
      .should('be.visible')
      .should('have.class', toastErrorClass);

    getElem(toastCloseButtonSelector).click();

    cy.log('02.05 Check when the invitation code has more than 11 characters');
    getElem(invitationalCodeInput).clear().type('1111111111111');

    getElem(invitationalCodeButton).should('be.visible').should('be.disabled');

    cy.log('02.06 Check when the invitation code exist');
    getElem(invitationalCodeInput).clear().type('MSINVITATION');

    getElem(invitationalCodeButton).should('be.visible').should('be.enabled');

    getElem(invitationalCodeButton).click();

    cy.wait('@invitation').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/register');
  });
});
