describe('SnapEDA Search Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.snapeda.com')
  })

  describe('Search Input Field', () => {
    it('should display the search input field', () => {
      cy.get('#search_autocomplete').should('be.visible')
    })

    it('should accept user input in the search input field', () => {
      cy.get('#search_autocomplete')
        .type('transistor')
        .should('have.value', 'transistor')
    })
  })

  describe('Search Results', () => {
    it('should display search results after performing a search', () => {
      cy.get('#search_autocomplete').type(`${'resistor'}{enter}`)
      cy.get('.search-result-row').should('be.visible')
    })

    it('should display a message when no search results are found', () => {
      const invalidSearchQuery = 'invalidsearchquery'
      cy.get('#search_autocomplete').type(`${invalidSearchQuery}{enter}`)
      cy.get('#message').should('be.visible')
    })
  })

  describe('Filters and Sorting', () => {
    it('should display filters or sorting options in search results', () => {
      const searchQuery = 'capacitor'
      cy.get('#search_autocomplete').type(`${searchQuery}{enter}`)
      cy.get('.adv-search').should('be.visible')
    })
  })

  describe('Search Result Navigation', () => {
    it('should navigate to the corresponding page when a search result is clicked', () => {
      const searchQuery = 'Diode'
      cy.get('#search_autocomplete').type(`${searchQuery}{enter}`)
      cy.get('#result0 > .part-result2 > a').click()
      cy.get('#unipart-shortdesc', { timeout: 15000 }).should('have.value', searchQuery)
    })
  })
})
