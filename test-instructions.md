# Full Stack Development Assessment – Instructions

## Duration
**2.5 hours**

The assessment duration is **2.5 hours**.

Since you will be working in your **local development environment**, the test will **not be auto-submitted**.  
You must ensure that your **final code is committed and pushed to the remote repository within the allotted time**.

⚠️ **Important:**
- Any commit or push made **after 2.5 hours** from the start of the test **will not be considered for evaluation**.

---

## Overview
In this round, you will work on a **Full Stack web application**.

You are provided with:

- A frontend boilerplate built using **React**
- A backend boilerplate built using **Node.js**
- One backend API (`GET /posts`) that is already implemented for reference
- Post data stored in a file located at `data/posts.json`

Your task is to implement the remaining backend APIs and integrate them with the frontend to build a functional application.

⚠️ **Note:**
- A web-based VS Code environment is **not provided**
- You must use your **local VS Code or any preferred code editor**

---

## Tech Stack

### Backend
- **Node.js** (boilerplate provided)
- **Python** (FastAPI or Flask) is also allowed

⚠️ **Note:**
- Boilerplate setup is provided **only for Node.js**
- Python is supported, but **no boilerplate is provided**

### Frontend
- **React**
- Boilerplate setup is already provided

---

## Data Storage
- **JSON Server is NOT available**
- Post data is stored in:

```
data/posts.json
```

- A boilerplate function is available to **read** from this file
- You must implement logic to **write, update, and delete** data in this file while building the APIs

---

## Post Data Structure
You must use the same structure already defined in `data/posts.json`:

```json
{
  "id": 1,
  "title": "First Post",
  "author": "Assessment Bot",
  "excerpt": "Use this project to evaluate full-stack skills.",
  "publishedAt": "2024-01-01"
}
```

All APIs must strictly follow this structure.

---

## Objective
The objective of this round is to complete the application end-to-end by:

- Implementing required backend APIs
- Managing data using `posts.json`
- Integrating frontend with backend APIs
- Displaying data correctly in the UI
- Handling loading and error states effectively

---

## APIs to Implement
In addition to the existing `GET /posts` API, implement:

### Create a Post
- Create a new post
- Persist it in `data/posts.json`
- Build UI to create a post

### Update a Post
- Update an existing post by `id`
- Persist changes in `data/posts.json`

### Delete a Post
- Delete an existing post by `id`
- Update `data/posts.json` accordingly

You may choose your API routes as long as they are logical and RESTful.

---

## Expected Implementation

### Backend Expectations
- Implement all required APIs
- Use file-based storage (`posts.json`)
- Follow the provided data structure
- Handle errors gracefully
- Return appropriate HTTP status codes

### Frontend Expectations
- Integrate APIs with the UI
- Display posts correctly
- Implement:
  - Loading states
  - Error handling
  - Clear UX for create, update, and delete

---

## Running the Application
Refer to `README.md` for:

- Dependency installation
- Starting frontend and backend servers
- First-time setup steps

Ensure both servers run correctly before coding.

---

## Dependencies
You may install additional dependencies if required.  
Ensure they are relevant and justified.

---

## Evaluation Criteria
You will be evaluated on:

- Backend API correctness
- Proper data handling using `posts.json`
- Frontend–backend integration
- Code quality and structure
- State management
- User experience
- Overall completeness

> Pixel-perfect UI is not required.

---

## Submission Guidelines
- Commit and push your **final code**
- Ensure the push happens **within 2.5 hours**
- Pushes after the time limit will **not be evaluated**
- The test is **not auto-submitted**

---

## Important Notes
- This document is accessible during the test
- Plan before coding and build incrementally
- Partial but clean solutions are preferred over rushed code

---

### All the Best!
Focus on **correctness**, **clarity**, and **user experience**.
