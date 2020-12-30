/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Log in the app without using the UI
         * and navigates to the given path
         * @example
         * cy.initPage('/glossary')
         */
        initPage(page: string): Chainable<any>;

        /**
         * Checks UI by using Jest snapshots
         */
        checkUI(name?: string): Chainable<any>;
    }
}
