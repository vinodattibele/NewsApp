# The News App

## Setup
This project is set up using Vue and Vite

You can read more about
* Vite here https://vitejs.dev/guide/ and
* Vue here https://vuejs.org/guide/introduction.html

## Prerequisites
To run this project you need Node version 16 or later

## Run the news app to get started
Install the dependencies `npm install`  
Start the app by running `npm run dev`  

This will give you a localhost instance where you can inspect that the server is running.  

index.html is the main entry-point and some resources and components are already present for you to get started.

## Task overview

The main task is to create a small news app that consists of a frontpage and two articles  
 
* Frontpage
* Free Article
* Paid Article  

The content for these resources are found via a json API server.  
The API is documented here: https://github.com/nhst/the-news-app-db

Requirements for The News App:
* The content for the 3 pages should be fetched from the API
* There should be a routing mechanism so that it is easy to navigate between the pages
* The Frontpage and the Free Article is marked as free and can therefore be displayed without limitations
* the Paid Article is not free, and shall therefore only display the first 20 words of its article content
* the Paid Article should have a button with the text "Read the article for free by clicking here"
* When clicking the button the user will get access to all the content within the Paid Article.

## Test coverage
The news app should also contain some unit and/or component tests
Run the tests with  `npm run test`