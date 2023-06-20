import LoginPage from '../../pageObjects/LoginPage'
import DownloadPage from '../../pageObjects/DownloadPage'
import ModelPage from '../../pageObjects/ModelPage'

describe('Download Symbol and Footprint, and 3D Model', () => {
  const downloadsFolder = Cypress.config('downloadsFolder')

  const loginPage = new LoginPage()
  const downloadPage = new DownloadPage()
  const modelPage = new ModelPage()

  before(() => {
    cy.visit('https://www.snapeda.com/parts/T4041017041-000/TE%20Connectivity%20AMP%20Connectors/view-part/?ref=search&t=T4041017041-000', { timeout: 15000 })
    cy.get('.login-btn', { timeout: 15000 }).click()

    cy.fixture('credentials.json').then((credentials) => {
      loginPage.login(credentials.username, credentials.password)
    })
  })

  it('Should download and verify downloaded symbol and footprint in selected format', () => {
    downloadPage.downloadSymbolAndFootprint('altium_native')

    const downloadedFilename = path.join(downloadsFolder, 'T4041017041-000.zip')
    cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
  })

  it('Should download and verify downloaded 3D Model', () => {
    modelPage.downloadModel()

    const downloadedFilename = path.join(downloadsFolder, '138140339-659-t4041017041-000.zip')
    cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
  })
})
