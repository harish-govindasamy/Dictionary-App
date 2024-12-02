# Interactive Dictionary App

The Interactive Dictionary App is a simple and user-friendly web application that allows users to quickly find definitions for any word they enter. The app uses a dictionary API to fetch word definitions and displays them in a clean and organized manner.

## Features

- **Simple Input**: Users can easily type in any word they want to look up.
- **Instant Search**: With a single click on the search button, the app fetches the definition of the word from a reliable dictionary API.
- **Clear Results**: The definition is displayed in a well-organized manner, making it easy to read and understand.
- **Responsive Design**: Built with Bootstrap, the app looks great on any device, from desktops to smartphones.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript
- Dictionary API

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/harish-govindasamy/interactive-dictionary-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd interactive-dictionary-app
   ```
3. Open

index.html in your web browser.

## File Structure

- index.html : The main HTML file that contains the structure of the app.

- styles.css : The CSS file for custom styles.

- script.js : The JavaScript file that contains the logic for fetching and displaying word definitions.

## Code Explanation

### HTML (`index.html`)

The HTML file sets up the structure of the app, including the input field, search button, and result display area. It also includes links to Bootstrap, Google Fonts, and Font Awesome for styling.

### CSS (`styles.css`)

The CSS file contains custom styles to enhance the appearance of the app.

### JavaScript (`script.js`)

The JavaScript file contains the following functions:

- fetchWordDefinition(word) : Fetches the word definition from the dictionary API using the fetch API and returns a promise.

- displayWordDefinition(wordData) : Displays the fetched word definition in the result area.

- `handleSearchButtonClick()`: Handles the search button click event, fetches the word definition, and displays it.
