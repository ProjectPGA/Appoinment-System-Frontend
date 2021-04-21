import { getElem } from './utilities/utils';

import {
    loginView,
    loginTitle,
    loginInputEmail,
    loginFieldEmail,
    loginSubmitButton,
    loginFieldPassword,
    loginInputPassword,
    loginInvitationLink,
} from './utilities/01Login.selectors';

import { isDangerClass } from './utilities/buefy.class';
import { helpSelector } from './utilities/buefy.selectors';

import {
    loading,
    logoApp,
    toastMainSelector,
    toastCloseButtonSelector,
} from './utilities/common.selectors';
import { toastErrorClass } from './utilities/common.class';

describe('01 Login view', () => {
    beforeEach(() => {
        // TODOO: Change to /login when refactor routes

        cy.visit('/');
    });
    it('01 Login view', () => {
        cy.log('01-01 - Login view, show correctly ');

        getElem(logoApp).should('be.visible');
        getElem(loginView).should('be.visible');
        getElem(loginTitle).should('be.visible');
        getElem(loginFieldEmail).should('be.visible');
        getElem(loginInputEmail).should('be.visible');
        getElem(loginSubmitButton).should('be.visible');
        getElem(loginInputPassword).should('be.visible');
        getElem(loginFieldPassword).should('be.visible');
        getElem(loginInvitationLink).should('be.visible');

        getElem(loginInputEmail).should('have.not.class', isDangerClass);
        getElem(loginInputPassword).should('have.not.class', isDangerClass);
        getElem(loginSubmitButton).should('be.disabled');

        cy.log('01-02 - Login view, check link to invitational code');

        getElem(loginInvitationLink).click();

        cy.url().should('include', '/invitation');

        getElem(logoApp).click();

        cy.url().should('not.include', '/invitation');

        cy.log('01-03 - Login view, required inputs errors');

        getElem(loginInputEmail).click();
        getElem(loginInputPassword).click();

        getElem(loginInputEmail).should('have.class', isDangerClass);
        getElem(loginSubmitButton).should('be.disabled');
        getElem(loginFieldEmail)
            .find(helpSelector)
            .should('be.visible')
            .should('have.class', isDangerClass);

        getElem(loginInputEmail).click();

        getElem(loginInputPassword).should('have.class', isDangerClass);
        getElem(loginSubmitButton).should('be.disabled');
        getElem(loginFieldPassword)
            .find(helpSelector)
            .should('be.visible')
            .should('have.class', isDangerClass);

        cy.log('01-04 - Login view, check email and password');

        getElem(loginInputEmail).type('test');

        getElem(loginInputEmail).should('have.class', isDangerClass);
        getElem(loginFieldEmail)
            .find(helpSelector)
            .should('be.visible')
            .should('have.class', isDangerClass);

        getElem(loginSubmitButton).should('be.disabled');

        getElem(loginInputEmail).type('test@test.com');

        getElem(loginInputEmail).should('not.have.class', isDangerClass);

        getElem(loginSubmitButton).should('be.disabled');

        getElem(loginInputPassword).type('Test1');

        getElem(loginInputPassword).should('have.class', isDangerClass);
        getElem(loginFieldPassword)
            .find(helpSelector)
            .should('be.visible')
            .should('have.class', isDangerClass);

        getElem(loginSubmitButton).should('be.disabled');

        getElem(loginInputPassword).type('Test1.test');

        getElem(loginInputPassword).should('not.have.class', isDangerClass);

        getElem(loginSubmitButton).should('not.be.disabled');

        cy.log('01-05 - Login view, check login');

        getElem(loginSubmitButton).click();

        cy.intercept('/api/auth/login').as('login');

        getElem(loading).should('be.visible');

        cy.wait('@login').its('response.statusCode').should('eq', 401);

        getElem(toastMainSelector).should('be.visible');
        getElem(toastMainSelector).should('have.class', toastErrorClass);

        getElem(toastCloseButtonSelector).click();

        getElem(loginInputEmail).clear();
        getElem(loginInputEmail).type('admin@appoint.com');

        getElem(loginInputPassword).clear();
        getElem(loginInputPassword).type('Admin.15');

        getElem(loginSubmitButton).click();

        getElem(loading).should('be.visible');

        cy.wait('@login').its('response.statusCode').should('eq', 200);

        // TODOO: Add check router when routes is defined

        // TODOO: Add check to can't enter on login view if user is logied
    });
});
