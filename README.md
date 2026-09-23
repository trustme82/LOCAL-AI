# QVAC Local AI

A local AI web application built with Tether's QVAC SDK. It provides a simple interface where users can enter questions and receive AI-generated responses.

## Project Repository

[View the source code on GitHub](https://github.com/dumang11121/JosephDan)

## What the App Does

QVAC Local AI processes user questions through local AI inference and displays the generated response in the web application.

## QVAC SDK Integration

This project uses two QVAC functions:

* `loadModel()` - Loads the AI model
* `completion()` - Generates the response to the user's prompt

## Getting Started

### Requirements

* Node.js 22 or newer
* npm
* A computer supported by QVAC

### Installation

Clone the project:

`git clone https://github.com/dumang11121/JosephDan.git`

Move into the project directory:

`cd JosephDan`

Install the required packages:

`npm install`

### Start the Application

Run:

`npm start`

The server runs at:

http://localhost:3000

Open the address in your browser, enter a question, and click **Ask AI**.

## Project Files

* `server.js` - Application server and QVAC integration
* `public/index.html` - Web interface
* `package.json` - Project configuration and dependencies
* `README.md` - Project documentation

## Technologies

* Node.js
* Express
* Tether QVAC SDK
* JavaScript
* HTML
* CSS

## License

MIT License
