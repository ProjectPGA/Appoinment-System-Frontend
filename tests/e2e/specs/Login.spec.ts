describe('Login Page Test', () => {
    const getLoginLogo = () => cy.get('[data-cy=login-logo]');
    const getEmailField = () => cy.get('[data-cy=email]');
    const getPasswordField = () => cy.get('[data-cy=password]');
    const getLoginButton = () => cy.get('[data-cy=submit]');
    const getInvitationLink = () => cy.get('[data-cy=invitation]');
    const getTranslationButton = () => cy.get('[data-cy=translation]');
    const getSnackbarError = () => cy.get('.snackbar');

    beforeEach(() => {
        cy.visit('/');
    });

    it('should load login page correctly', () => {
        getLoginLogo().should('be.visible');
        getEmailField().should('be.visible');
        getPasswordField().should('be.visible');
        getLoginButton().should('be.visible');
        getInvitationLink().should('be.visible');
        getTranslationButton().should('be.visible');
        getSnackbarError().should('not.be.visible');
    });

    it('should show login error', () => {
        getEmailField().type('xxx');
        getPasswordField().type('*****');
        getLoginButton().click();

        getSnackbarError().should('be.visible');
    });

    it('should complete login succesfully', () => {
        getEmailField().type('test');
        getPasswordField().type('test8574');
        getLoginButton().click();

        getEmailField().should('be.not.visible');
        getPasswordField().should('be.not.visible');
    });
});
