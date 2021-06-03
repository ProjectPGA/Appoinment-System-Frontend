import { getElem } from './utilities/utils';

import {
    logoApp,
    toastMainSelector,
    translationButtonSelector,
} from './utilities/common.selectors';

import { toastErrorClass } from './utilities/common.classes';

import { loginInvitationLink } from './utilities/01Login.selectors';

import {
    invitationalCodeTitle,
    invitationalCodeInput,
    invitationalCodeButton,
} from './utilities/02Invitational.selectors';

describe('02 Invitational', () => {
    beforeEach(() => {
        cy.visit('/');
        getElem(loginInvitationLink).click();
    });

    it('02 Invitational', () => {
        cy.log('02.01 Check all elements are visible');
        getElem(logoApp).should('be.visible');
        getElem(translationButtonSelector).should('be.visible');
        getElem(invitationalCodeTitle).should('be.visible');
        getElem(invitationalCodeInput).should('be.visible');
        getElem(invitationalCodeButton)
            .should('be.visible')
            .should('be.disabled');

        cy.log('02.02 Check logoApp is function');
        getElem(logoApp).click();
        cy.url().should('include', '/');
        getElem(loginInvitationLink).click();

        cy.log(
            '02.03 Check when the invitation code has less of 11 characters'
        );
        getElem(invitationalCodeInput)
            .should('have.value', '')
            .type('11111111111');
        getElem(invitationalCodeButton)
            .should('be.visible')
            .should('be.disabled');

        cy.log(
            '02.04 Check when the invitation code has 12 characters but doesn´t exist'
        );
        getElem(invitationalCodeInput).type('1');
        getElem(invitationalCodeButton)
            .should('be.visible')
            .should('be.enabled')
            .click();
        getElem(toastMainSelector)
            .should('be.visible')
            .should('have.class', toastErrorClass);
        cy.wait(4020);
        getElem(toastMainSelector).should('not.be.visible');

        cy.log(
            '02.05 Check when the invitation code has more of 11 characters'
        );
        getElem(invitationalCodeInput).type('1');
        getElem(invitationalCodeButton)
            .should('be.visible')
            .should('be.disabled');

        cy.log('02.06 Check when the invitation code exist');
        getElem(invitationalCodeInput).clear().type('MSINVITATION');
        getElem(invitationalCodeButton)
            .should('be.visible')
            .should('be.enabled')
            .click();
        cy.url().should('include', '/register');
        getElem(logoApp).click();
    });
});
