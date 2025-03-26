# Navbar Project 🚀
## 📌 About the Project
### This project is a navigation bar (navbar) built using Vite, React, and React Router DOM. The navbar allows seamless navigation between pages using the Link component from React Router.
## 🛠️ Technologies Used
### - Vite for fast and optimized development.
### - React for building the user interface.
### - React Router DOM for navigation 
## 📤 How I Uploaded the Project to GitHub
### To upload this project to GitHub, I followed these steps:
1️ - **vite.config.js: you have to put the name of your portfolio in base**
``` js
export default defineConfig({
  plugins: [react()],
  base: "/navb4r-routes"
})
```
2️ - **package.json: homepage** 
``` js
  "name": "<name>",
  "homepage": "https://<username>.github.io/<repositoryName>/",
  "private": true,
  "version": "0.0.0",
  "type": "module",
```
3 - **Terminal:**
`npm install gh-pages`

4 - **scripts: predeploy and deploy**
``` js
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
```
5 - **Terminal:**  
`git init` `git add .` `git commit -m "first commit"` `git branch -M main` `git remote add origin https://github.com/<username>/<repositoryName>.git` `git push -u origin main`

6 - **Terminal:**
`npm run deploy`
