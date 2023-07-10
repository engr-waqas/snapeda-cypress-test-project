# Automated Testing Documentation

This documentation provides an overview of the automated tests implemented for the SnapEDA project. The tests cover the download feature including 3D model and the search engine functionality. The tests are written using the Cypress framework and follow the Page Object Model pattern.

# Test cases

1. Download Parts in Specific Format
2. Test Case for 3D Model Download
3. Test Case for Search Engine Functionality

## Download Feature Test

The download feature test verifies the ability to download symbols, footprints, and 3D models. The test scenario includes the following steps:

1. Visit the SnapEDA page for the TE Connectivity AMP Connectors part.
2. Click on the "Download" button.
3. Select the desired format for symbols and footprints.
4. Verify that the download is initiated and the file is downloaded successfully.
5. Repeat the process for downloading the 3D model.
6. Verify the successful download of the 3D model file.

## Search Engine Test

The search engine test focuses on the functionality of the SnapEDA search engine. The test scenario includes the following steps:

1. Visit the SnapEDA homepage.
2. Verify the presence and visibility of the search input field.
3. Enter a search query and validate that the input is accepted correctly.
4. Perform a search and verify that the search results are displayed.
5. Verify the display of a message when no search results are found.
6. Check for the availability of filters or sorting options in the search results.
7. Click on a search result and confirm that it navigates to the corresponding page.

## Test Files

The following test files contain the implementation of the automated tests:

- `DownloadPage.js`: Implements the page object for the download page, including methods for downloading symbols, footprints, and the 3D model.
- `LoginPage.js`: Implements the page object for the login page, including methods for interacting with the login form.
- `ModelPage.js`: Implements the page object for the model page, including methods for downloading the 3D model.
- `searchTests.js`: Contains the test scenarios for the SnapEDA search functionality.

Please refer to the individual test files for more details on the implementation.

## Repository

The code for the automated tests, including the test files and supporting modules, is available in the GitHub repository. It can be accessed  [here](https://github.com/Hamza572/SnapEDA-Download-Feature).
