import { getElem } from './utilities/utils';

import { toastErrorClass } from './utilities/common.classes';
import {
    loading,
    logoApp,
    toastMainSelector,
    translationButtonSelector,
} from './utilities/common.selectors';

import { isDangerSelector } from './utilities/buefy.selectors';
import { helpClass } from './utilities/buefy.classes';

import {
    registerTitle,
    registerButton,
    registerNameInput,
    registerNameField,
    registerEmailInput,
    registerEmailField,
    registerSurnameInput,
    registerSurnameField,
    registerPasswordInput,
    registerPasswordField,
    registerRepeatPasswordInput,
    registerRepeatPasswordField,
} from './utilities/03Register.selectors';

import {
    invitationalLink,
    invitationalCodeInput,
    invitationalCodeButton,
} from './utilities/02Invitational.selectors';

describe('03 Register', () => {
    beforeEach(() => {
        // Prepare the app to get on to Register view
        cy.visit('/');
        getElem(invitationalLink).click();
        getElem(invitationalCodeInput).clear().type('MSINVITATION');
        getElem(invitationalCodeButton).click();
    });
    it('03 Register', () => {
        cy.log('03.01 - Check all common elements initial state');
        getElem(registerTitle).should('be.visible');
        getElem(translationButtonSelector).should('be.visible');
        getElem(logoApp).should('be.visible');

        cy.log('03.02 - Check all register elements initial state');
        getElem(registerNameInput).should('be.visible').not(isDangerSelector);
        getElem(registerSurnameInput)
            .should('be.visible')
            .not(isDangerSelector);
        getElem(registerEmailInput).should('be.visible').not(isDangerSelector);
        getElem(registerPasswordInput)
            .should('be.visible')
            .not(isDangerSelector);
        getElem(registerRepeatPasswordInput)
            .should('be.visible')
            .not(isDangerSelector);
        getElem(registerButton).should('be.visible').should('be.disabled');

        cy.log('03.03 - Check all inputs on fail validation');
        getElem(registerNameInput).type('test').clear();
        getElem(registerSurnameInput).type('test').clear();
        getElem(registerEmailInput).type('test').clear();
        getElem(registerPasswordInput).type('test').clear();
        getElem(registerRepeatPasswordInput).type('test').clear();

        getElem(registerNameField).find('p').should('have.class', helpClass);
        getElem(registerSurnameField).find('p').should('have.class', helpClass);
        getElem(registerEmailField).find('p').should('have.class', helpClass);
        getElem(registerPasswordField)
            .find('p')
            .should('have.class', helpClass);
        getElem(registerRepeatPasswordField)
            .find('p')
            .should('have.class', helpClass);

        cy.log('03.04 - Check all inputs on success validation');
        getElem(registerNameInput).type('test');
        getElem(registerSurnameInput).type('test');
        getElem(registerEmailInput).type('test@test.com');
        getElem(registerPasswordInput).type('Tests.15');
        getElem(registerRepeatPasswordInput).type('Tests.15');

        getElem(registerNameField).find('p').should('not.exist');
        getElem(registerSurnameField).find('p').should('not.exist');
        getElem(registerEmailField).find('p').should('not.exist');
        getElem(registerPasswordField).find('p').should('not.exist');
        getElem(registerRepeatPasswordField).find('p').should('not.exist');

        cy.log('03.05 - Check form submit with invalid data');
        getElem(registerButton).should('be.enabled').click();

        getElem(loading).should('be.visible');

        getElem(toastMainSelector).should('have.class', toastErrorClass);

        cy.log('03.06 - Form clear and correct form data check');
        getElem(registerEmailInput).clear().type('test@test');

        getElem(registerEmailField).find('p').should('have.class', helpClass);
        getElem(registerButton).should('be.disabled');

        getElem(registerEmailInput).clear().type('testtest.com');

        getElem(registerEmailField).find('p').should('have.class', helpClass);
        getElem(registerButton).should('be.disabled');

        cy.log('03.07 - Password invalid format validation check');
        getElem(registerEmailInput).clear().type('test@test.com');
        getElem(registerPasswordInput).clear().type('Tests115');
        getElem(registerRepeatPasswordInput).clear().type('Tests115');

        getElem(registerPasswordField)
            .find('p')
            .should('have.class', helpClass);
        getElem(registerRepeatPasswordField)
            .find('p')
            .should('have.class', helpClass);

        cy.log('03.08 - Password not the same validation check');
        getElem(registerPasswordInput).clear().type('Tests.15');
        getElem(registerRepeatPasswordInput).clear().type('Tests1151');

        getElem(registerPasswordField).find('p').should('not.exist');

        getElem(registerRepeatPasswordField)
            .find('p')
            .should('have.class', helpClass);

        cy.log('03.08 - Check form submit with valid data');
        getElem(registerRepeatPasswordInput).clear().type('Tests.15');

        getElem(registerRepeatPasswordField).find('p').should('not.exist');

        cy.intercept('POST', '/api/auth/checkmail', {
            statusCode: 200,
        });

        cy.intercept('POST', '/api/auth/register', {
            statusCode: 200,
        });

        getElem(registerButton).should('be.enabled').click();
    });
});
