import { getElem } from './utilities/utils';

import { topNavbar } from './utilities/01Navigation.selectors';

describe('01 Navbar', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Navbar overview', () => {
        getElem(topNavbar).should('be.visible');
    });
});
