declare namespace Cypress {
  interface Chainable<Subject = any> {
    promisify: () => Promise<Subject>
  }
}

describe('cypress-promise', () => {

  it('can convert cypress Chainable to promise and use async/await', async () => {
    cy.visit('https://example.cypress.io/')
    const text = await cy.get('h1')
      .then(title => title.text())
      .promisify();
    expect(text.trim()).to.equal('Kitchen Sink')
  })

})
