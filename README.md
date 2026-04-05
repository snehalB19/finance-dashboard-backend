# Finance Dashboard Backend

Backend assignment for a finance dashboard system demonstrating role-based access control, financial record management, and dashboard analytics.

## Tech Stack

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL (integration in progress)

## Features Implemented

### Authentication APIs

* Register User
* Login User

### Financial Records APIs

* Create Record
* View Records
* Update Record
* Delete Record

### Dashboard Summary API

* Total Income
* Total Expense
* Net Balance

### Role-Based Access Control

* Viewer
* Analyst
* Admin

### Middleware

* Role restriction middleware implemented

## API Endpoints

### Auth Routes

* POST /auth/register
* POST /auth/login

### Record Routes

* POST /records
* GET /records
* PUT /records/:id
* DELETE /records/:id

### Summary Route

* GET /summary

## Run Project

npm install
npm run dev

## Current Storage

* In-memory storage currently used
* Database integration planned using Prisma + PostgreSQL

## Assumptions

* Mock authentication used for assignment simplicity
* Focus is on backend design and logic

## Author

Snehal Bhatlawande
