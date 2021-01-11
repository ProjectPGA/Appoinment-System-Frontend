/// <reference types="cypress" />

declare namespace Cypress {
    interface FixtureData {
        filePath: string;
        encoding?: string;
        mimeType?: string;
    }

    interface FileProcessingOptions {
        subjectType?: 'input' | 'drag-n-drop';
        force?: boolean;
        allowEmpty?: boolean;
    }

    interface Chainable<Subject> {
        /**
         * Command to attach file(s) to given HTML element as subject
         * @param fixture file to attach
         * @param processingOpts affects the way of fixture processing
         */
        attachFile(
            fixture: string | FixtureData,
            processingOpts?: FileProcessingOptions
        ): Chainable<Subject>;

        /**
         * Checks UI by using Jest snapshots
         * @param name snapshot file name
         */
        checkUI(name?: string): Chainable<any>;
    }
}
