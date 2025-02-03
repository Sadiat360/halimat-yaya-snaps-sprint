## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Sitemap](#sitemap)
- [Implementation](#implementation)
- [Tech Stack](#tech-stack)
- [APIs](#apis)




### Project Title:  
Snaps
link to Live-Demo https://snapsweb.netlify.app/


### Overview

Snaps a photo-sharing app similar to Instagram, where photographers can share their work.And users can view magnificent works of each photographers, view photo details, see likes, read previous comments and add new comments.



## Features 

- As a user, i want to view beautiful photography from photographers
- As s user i want to filter Gallery lists by Photo's location/City

- As a user i want to see photo details
- As a user i want to see photo likes and previous comments
- As a user i want to add new comments on any photogrphic work that i like.

---

### Sitemap
- Homepage
- Filter Gallery List
-Photo Details page
- View old comments
-Add new comment
----

## Implementation 

### Tech Stack

- React
- JavaScript
- Express


- Client Libraries:
    - react
    - react-router
    - axios
   

- Server Libraries:
    - express
    - Cors

---
### APIs

-(https://unit-3-project-c5faaab51857.herokuapp.com/)

---

### Endpoints



**GET /Register**

Response:
````
Response Body Example
  {
      "api_key": "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
  }
  

````
**GET /photos**

Response:
````
[
    {
      "id": "6be619d5-de2c-4f62-ac1b-bd2e36d71ab9",
      "photo": "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-00.png",
      "photoDescription": "Looking up to the Manhattan Bridge, in New York City, New York.",
      "photographer": "Greg Hooper",
      "tags": [
        "New York", 
        "Bridge", 
        "Skyline", 
        "Cars"
      ]
    }
  ]

````


**GET /photos/:id**

  {
    "id": "6be619d5-de2c-4f62-ac1b-bd2e36d71ab9",
    "photo": "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-00.png",
    "photoDescription": "Looking up to the Manhattan Bridge, in New York City, New York.",
    "photographer": "Greg Hooper",
    "likes": 910,
    "timestamp": 1722956264000,
    "tags": [
      "New York", 
      "Bridge", 
      "Skyline", 
      "Cars"
    ]
  }

---

**POST /photos/:id/comments**

[
POST Body Example
      {
        "id": "f3aa5dd5-4c75-4a74-a410-c59d56d04697",
        "name": "Felix Brewer",
        "comment": "What a great angle! It really gives a new perspective on this location.",
        "timestamp": 1724612264000,
      },

      
      Response Body Example
      {
        "id": "b27a60c7-cdd8-47e1-9d13-3d8aa8f7c295",
        "name": "Jan Delroy",
        "comment": "I'm loving this! Thanks for sharing.",
        "timestamp": 1724612055000,
      }
    ]
  

````
**GET /tags**


Response:
Response Body Example
  [
      "Arizona", 
      "Bridge", 
      "Buildings", 
      "California",
      ...
          
  ]
  

````


