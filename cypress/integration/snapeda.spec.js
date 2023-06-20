describe('Download Symbol and Footprint, and 3D Model', () => {
  const downloadsFolder = Cypress.config('downloadsFolder')

  before(() => {
    cy.visit('https://www.snapeda.com/parts/T4041017041-000/TE%20Connectivity%20AMP%20Connectors/view-part/?ref=search&t=T4041017041-000', { timeout: 15000 })
    cy.get('.login-btn', { timeout: 15000 }).click()

    cy.fixture('credentials.json').then((credentials) => {
      cy.get('#id_username').type(credentials.username)
      cy.get('#id_password').type(credentials.password)
    })

    cy.get('.btn-submit').click()
  })

  it('Should download and verify downloaded symbol and footprint in selected format', () => {
    cy.contains('Download Symbol and Footprint', { timeout: 15000 }).click()
    cy.get('.modal-view-download', { timeout: 15000 }).should('be.visible')
    cy.get("[data-format='altium_native']").click()

    const downloadedFilename = path.join(downloadsFolder, 'T4041017041-000.zip')
    cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
  })

  it('Should download and verify downloaded 3D Model', () => {
    cy.get('.3D_model_tab', { timeout: 15000 }).click()
    cy.get('#download_traceparts_3d_model').click()
    cy.get('#samtec-checkbox-3d-modal-download-individual-btn', { timeout: 15000 }).click()
    cy.get('.modal-close', { timeout: 15000 }).click({ force: true })

    const downloadedFilename = path.join(downloadsFolder, '138140339-659-t4041017041-000.zip')
    cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
  })
})
