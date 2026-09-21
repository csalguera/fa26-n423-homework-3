# Student Directory

Student Directory is a small client-side web app for adding and reviewing student records. Users can enter a student's name, age, phone number, email address, and classes, then display the saved records in a directory. Data is stored locally in the browser, so the app works without a server-side database or account system.

## Deployment

- GitHub Repository: [fa26-n423-homework-3](https://github.com/csalguera/fa26-n423-homework-3)
- Live Web 4 App: [Student Directory](https://in-info-web4.luddy.indianapolis.iu.edu/~csalguer/n423-homework-3/)

## Features

- Add student records through a validated form.
- Collect name, age, phone, email address, and one or more comma-separated classes.
- Persist records in the browser with `localStorage`.
- Display saved students in a table on larger screens and responsive cards on smaller screens.
- Toggle the saved-student directory between visible and hidden states.
- Show an accessible success message after a student is added.
- Provide an empty state when no records have been saved.
- Use semantic HTML, labels, status messaging, and responsive styling.

## Technologies

- **HTML5**: Provides the document structure, form controls, labels, and accessible sections.
- **CSS3**: Styles the compiled application, including layout, responsive behavior, focus states, tables, and cards.
- **Sass (SCSS)**: Organizes the styles into partials and compiles `scss/styles.scss` into `css/styles.css`.
- **Vanilla JavaScript**: Handles form validation, record creation, rendering, visibility toggling, and browser storage without a frontend framework.
- **Web Storage API**: Stores records under the `studentDirectory` key in the browser's `localStorage`.
- **npm**: Runs the development scripts and manages the Sass and local-server dependencies.
- **live-server**: Serves the project locally and refreshes the browser when files change.

## Project Structure

```text
.
├── index.html            # Application markup and form
├── css/
│   └── styles.css        # Generated CSS used by the browser
├── js/
│   └── app.js            # Directory behavior and localStorage logic
├── scss/
│   ├── buttons.scss      # Button styles
│   ├── directory.scss    # Student directory styles
│   ├── form.scss         # Form and field styles
│   ├── responsive.scss   # Responsive layout rules
│   ├── structure.scss    # Base and page layout styles
│   ├── styles.scss       # Sass entry point
│   └── tokens.scss       # Shared design variables
├── package.json          # Scripts and development dependencies
└── README.md             # Project documentation
```

## Requirements

- Node.js and npm
- A modern web browser

## Installation

From the project directory, install the development dependencies:

```bash
npm install
```

## Development

Compile the Sass styles and watch for changes:

```bash
npm run compile
```

In another terminal, start the local development server:

```bash
npm run serve
```

Open the local URL printed by `live-server` in a browser. The server typically uses `http://127.0.0.1:8080` when that port is available.

The `compile` script watches the SCSS files and updates `css/styles.css`. Stop the watcher with `Ctrl+C` when finished.

## Usage

1. Enter a student's name, age, phone number, email address, and classes.
2. Separate multiple classes with commas, for example `N215, N220, N423`.
3. Select **Add Student**.
4. Select **Display Students** to view saved records.
5. Select **Hide Students** to collapse the directory.

## Data Storage

Student records are saved only in the current browser's local storage. They are not sent to a server and are not shared between browsers or devices.

To clear the saved directory, open the browser's developer tools and remove the site's local storage entry named `studentDirectory`. Clearing the site's browsing data has the same effect.

## Styling Note

The SCSS entry point uses Sass modules with `@use`, avoiding the deprecated `@import` syntax. Sass partials are compiled into `css/styles.css` for the browser.
