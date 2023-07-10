class SearchPage {
  visitSnapEDA() {
    cy.visit('https://www.snapeda.com')
  }

  getSearchInputField() {
    return cy.get('#search_autocomplete')
  }

  enterSearchQuery(query) {
    this.getSearchInputField().type(query)
  }

  performSearch(query) {
    this.enterSearchQuery(query)
    cy.get('#search_autocomplete').type('{enter}')
  }

  waitForSearchResultRows() {
    cy.get('.search-result-row', { timeout: 60000 }).should('be.visible')
  }

  getSearchResultRows() {
    return cy.get('.search-result-row')
  }

  waitForNoResultsMessage() {
    cy.get('#message', { timeout: 60000 }).should('be.visible')
  }

  getNoResultsMessage() {
    return cy.get('#message')
  }

  waitForFiltersAndSorting() {
    cy.get('.adv-search', { timeout: 60000 }).should('be.visible')
  }

  getFiltersAndSorting() {
    return cy.get('.adv-search')
  }

  clickOnSearchResult(index) {
    cy.get(`#result${index} > .part-result2 > a`).click()
  }

  getResultDescription() {
    return cy.get('#unipart-shortdesc', { timeout: 60000 })
  }
}

export default SearchPage
