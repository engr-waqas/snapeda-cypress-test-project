class DownloadPage {
  getDownloadSymbolAndFootprintButton() {
    return cy.contains('Download Symbol and Footprint', { timeout: 15000 })
  }

  getDownloadFormatButton(format) {
    return cy.get(`[data-format='${format}']`)
  }

  downloadSymbolAndFootprint(format) {
    this.getDownloadSymbolAndFootprintButton().click()
    cy.get('.modal-view-download', { timeout: 15000 }).should('be.visible')
    this.getDownloadFormatButton(format).click()
  }
}

export default DownloadPage
