describe('QuizScreens Component Basic Tests', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.contains('Rozpocznij quiz', { timeout: 10000 }) // increased timeout for safety
            .should('be.visible')
            .click();
        cy.get('#question-page', { timeout: 10000 }).should('be.visible');
    });

    it('renders first question correctly after starting quiz', () => {
        cy.contains('Pytanie 1').should('exist');
        cy.get('.answer-btn').should('have.length', 4);
    });

    it('allows user to select an answer and view next question', () => {
        cy.get('.answer-btn').first().click();
        cy.contains('Pytanie 2999').should('exist');
    });

    it('completes quiz and displays final result screen', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('.answer-btn').first().click();
        }
        cy.contains('Twój wynik to:').should('exist');
        cy.get('#final-screen').should('be.visible');
        cy.get('#reset-btn').should('exist');
    });

    it('resets quiz correctly after completion', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('.answer-btn').first().click();
        }
        cy.get('#reset-btn').click();
        cy.contains('Rozpocznij quiz').should('exist');
        cy.get('.btn').should('be.visible');
    });
});