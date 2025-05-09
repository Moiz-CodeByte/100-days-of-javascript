# GitHub Profile Preview App

A simple web application that allows users to search for GitHub profiles and view detailed information about users.

## Features

- Search for GitHub users by username
- View user profile information including:
  - Profile picture
  - Name and username
  - Bio
  - Followers and following count
  - Number of repositories and gists
  - Location
  - Company
  - Blog/website
  - Twitter handle
  - Account creation date
- Responsive design that works on mobile and desktop
- Error handling for non-existent users

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid layout)
- JavaScript (ES6+)
- GitHub REST API
- Font Awesome for icons

## How to Use

1. Open the `index.html` file in your browser
2. Enter a GitHub username in the search box
3. Click the "Search" button or press Enter
4. View the user's profile information

## API Information

This app uses the GitHub REST API to fetch user data. No API key is required for basic usage, but there are rate limits for unauthenticated requests (60 requests per hour).

API Endpoint used: `https://api.github.com/users/{username}`

## Project Structure

- `index.html` - Main HTML structure
- `style.css` - CSS styling
- `script.js` - JavaScript functionality and API integration 