in this file i will explain all folder structure that we used in this website 

------------------------------------------------------------ 
# some important links that we used in this project
------------------------------------------------------------ 

* for internationalization  
https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components

* for ...

-------------------------------------------------------------
# folder structure of this projetc
-------------------------------------------------------------

## 1. [locale] -> Most Important
    this folder contain main(root) file of our website.
    in this folder there are layout.js and page.js . 
    we use this folder for making websire internationalization.

## 2. api
    this folder contain all necassary apis that we require in our project.
    in that folder we defined many sub-folder that contian route.js file for creation of api.

## 3. asset
    this folder contain all media file that we use in project.

## 4. components
    this folder conatain components for our project.
    that components we can reuse at any where..

--------------------------------------------------------------
# API DOCUMENTATION FOE THIS E-COMMERCE WEB
--------------------------------------------------------------
### 1. get setting
    Method: GET
    description: This api provide basic setting for our website 
    endpoint: ${url}/get-setting
    parameter: --
    authentication: --

### 2. contact us
    Method: POST
    description: This api is used to get in touch with us
    endpoint: ${url}/contact
    parameter: name, email, message
    authentication: required

-----------------------------------------------------------------
Status Codes:
- 200 OK: The request was successful.
- 201 Created: The resource was successfully created.
- 400 Bad Request: The request format is invalid.
- 404 Not Found: The requested resource does not exist.
- 500 Internal Server Error: An unexpected error occurred on the server.

Authentication:
- This API requires authentication using an API key. Include your API key in the request headers.
-----------------------------------------------------------------