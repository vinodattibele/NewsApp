# The News App

## Setup
This project is set up using Vue and Vite

You can read more about Vite and Vue here https://vitejs.dev/guide/ and  here https://vuejs.org/guide/introduction.html

## Prerequisites
To run this project you need Node version 16 or later  

index.html is the main entry-point and some resources and components are already present for you to get started.

## Run the news app to get started
Install the dependencies `npm install`  
Start the app by running `npm run dev`  

This will give you a localhost instance where you can inspect that the server is running.

Run the tests with  `npm run test`

## Task overview

The main task is to create a small news app that consists of a frontpage and two articles  
 
* Frontpage
* Free Article
* Paid Article  

You should create a routing mechanism so that you are easily able to navigate between these three pages. 

The content for all 3 resources are found via a server. So you would have fetch the contents from the API as documented here:
https://github.com/nhst/the-news-app-db

Some details about the News App:
* The Frontpage and the Free Article is marked as free and can therefore be displayed without limitations
* the Paid Article is not free, and shall therefore only display the first 20 words of its article content
* the Paid Article shall also have a button that you can click, i.e. with the text "Read more for free by clicking here"
* When clicking the button you will get access to all the content within the Paid Article. 

## Test coverage
The news app should also contain a couple of unit or component tests

