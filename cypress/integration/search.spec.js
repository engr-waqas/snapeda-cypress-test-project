import SearchPage from './pageObjects/SearchPage'

describe('SnapEDA Search Tests', () => {
  const searchPage = new SearchPage()

  beforeEach(() => {
    searchPage.visitSnapEDA()
  })

  describe('Search Input Field', () => {
    it('should display the search input field', () => {
      searchPage.getSearchInputField().should('be.visible')
    })

    it('should accept user input in the search input field', () => {
      const searchQuery = 'transistor'
      searchPage.enterSearchQuery(searchQuery)
      searchPage.getSearchInputField().should('have.value', searchQuery)
    })
  })

  describe('Search Results', () => {
    it('should display search results after performing a search', () => {
      const searchQuery = 'resistor'
      searchPage.performSearch(searchQuery)
      searchPage.waitForSearchResultRows()
      searchPage.getSearchResultRows().should('be.visible')
    })

    it('should display a message when no search results are found', () => {
      const invalidSearchQuery = 'invalidsearchquery'
      searchPage.performSearch(invalidSearchQuery)
      searchPage.waitForNoResultsMessage()
      searchPage.getNoResultsMessage().should('be.visible')
    })
  })

  describe('Filters and Sorting', () => {
    it('should display filters or sorting options in search results', () => {
      const searchQuery = 'capacitor'
      searchPage.performSearch(searchQuery)
      searchPage.waitForFiltersAndSorting()
      searchPage.getFiltersAndSorting().should('be.visible')
    })
  })

  describe('Search Result Navigation', () => {
    it('should navigate to the corresponding page when a search result is clicked', () => {
      const searchQuery = 'Diode'
      searchPage.performSearch(searchQuery)
      searchPage.waitForSearchResultRows()
      searchPage.clickOnSearchResult(0)
      searchPage.getResultDescription().should('have.value', searchQuery)
    })
  })
})
