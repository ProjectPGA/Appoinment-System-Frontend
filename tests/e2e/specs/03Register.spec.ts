import { getElem } from './utilities/utils';

import { toastErrorClass } from './utilities/common.classes';
import { toastMainSelector } from './utilities/common.selectors';

import { isDangerSelector } from './utilities/buefy.selectors';

import {
    registerButton,
    invitationalLink,
    registerNameInput,
    registerEmailInput,
    registerSurnameInput,
    registerPasswordInput,
    invitationalCodeInput,
    invitationalCodeButton,
    registerRepeatPasswordInput,
} from './utilities/03Register.selectors';

describe('03 Register', () => {
    beforeEach(() => {
        // Prepare the app to get on to Register view
        cy.visit('/');
        getElem(invitationalLink).click();
        getElem(invitationalCodeInput).clear().type('MSINVITATION');
        getElem(invitationalCodeButton).click();
    });
    it('03 Register', () => {
        cy.log('03.01 - Check all elements initial state');
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

        cy.log('03.01 - Check all inputs validation');
        getElem(registerNameInput).type('test').clear();
        getElem(registerSurnameInput).type('test').clear();
        getElem(registerEmailInput).type('test').clear();
        getElem(registerPasswordInput).type('test').clear();
        getElem(registerRepeatPasswordInput).type('test').clear();

        getElem(registerNameInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');
        getElem(registerSurnameInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');
        getElem(registerEmailInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');
        getElem(registerPasswordInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');
        getElem(registerRepeatPasswordInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');

        getElem(registerNameInput).type('test');
        getElem(registerSurnameInput).type('test');
        getElem(registerEmailInput).type('test@test.com');
        getElem(registerPasswordInput).type('Tests.15');
        getElem(registerRepeatPasswordInput).type('Tests.15');

        getElem(registerButton).should('be.enabled').click();

        getElem(toastMainSelector).should('have.class', toastErrorClass);

        getElem(registerEmailInput).clear().type('test@test');

        getElem(registerEmailInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');
        getElem(registerButton).should('be.disabled');

        getElem(registerEmailInput).clear().type('testtest.com');

        getElem(registerEmailInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');
        getElem(registerButton).should('be.disabled');

        getElem(registerEmailInput).clear().type('test@test.com');
        getElem(registerPasswordInput).clear().type('Tests115');
        getElem(registerRepeatPasswordInput).clear().type('Tests115');

        getElem(registerPasswordInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');
        getElem(registerRepeatPasswordInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');

        getElem(registerPasswordInput).clear().type('Tests.15');
        getElem(registerRepeatPasswordInput).clear().type('Tests1151');

        getElem(registerPasswordInput)
            .parent()
            .parent()
            .find('p')
            .should('not.exist');

        getElem(registerRepeatPasswordInput)
            .parent()
            .parent()
            .find('p')
            .should('have.class', 'help');

        getElem(registerRepeatPasswordInput).clear().type('Tests.15');

        getElem(registerRepeatPasswordInput)
            .parent()
            .parent()
            .find('p')
            .should('not.exist');

        cy.intercept('POST', '/api/auth/checkmail', {
            statusCode: 200,
        });

        cy.intercept('POST', '/api/auth/register', {
            statusCode: 200,
        });

        getElem(registerButton).should('be.enabled').click();
    });
});
