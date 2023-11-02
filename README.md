# [jobsprint](http://jobsprint.app.s3-website.ap-southeast-3.amazonaws.com/)
Week 18 project: a simple task tracker app.

![Screen Shot 2023-11-02 at 19 59 22](https://github.com/RevoU-FSSE-2/week-18-gkorompis/assets/52250424/1033bfb5-79e9-40b6-98fd-bc190a22a724)

## 1. Project Overview

This is a simple Node.js API application that demonstrates the following deliverables:

- Backend and Database development
- Role Based Access Control
- Authentication
- Security Headers
- React Hooks
- Deployment on VPS

## 2. Contents

[Project overview](#1-project-overview)
[Contents](#2-contents)
[Backend and database deployment](#3-backend-and-database-developement)
[RBAC](#4-role-based-access-control-authentication-and-security-headers)
[API Documentation](#5-api-documentation)
[Frontend development](#6-frontend-development)
[Deployment](#7-deployment)

## 3. Backend and Database developement

Backend-side for this application is developed using express js to provide access routes, while adopting mongodb, a noSQL database, to support functionality of model-control-view (MVC). 
<img width="890" alt="Screen Shot 2023-11-03 at 00 34 35" src="https://github.com/RevoU-FSSE-2/week-18-gkorompis/assets/52250424/f9b549ad-e71e-4905-ad7f-73e011a9c190">

## 4. Role Based Access Control, Authentication, and Security Headers

### RBAC

| Role   | Collection                | Allowed Methods               |
|--------|---------------------------|------------------------------|
| admin  | users, jobs, resetpasses  | get, post, put, delete       |
| member | users, jobs, resetpasses  | get, post (self)             |

### Authentication and Security Headers
| Middleware          | Routes                                   | Functionality                               |
|---------------------|------------------------------------------|---------------------------------------------|
| authenticateLogin  | `/login`                                 | Authenticate login credentials                |
| setXRequestIdHeader | `/login, /users, /jobs, /resetPass`     | Assign an ID to every request header         |
| permitRole          | `/users, /jobs`                          | Ensure Role-Based Access Control (RBAC)      |
| securedHeader       | global                                   | Ensure security by attaching necessary headers |

## 5. API Documentation

Complete documentation of the API can be found in this swagger documentation

[click link here for swagger documentation](https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/api-docs)

## 6. Frontend Development

Client-side for this application is using reactjs typescript template. This architecture is also using redux framework to promote functionality of exchaning states across components. Errors will be handles by MUI snackbars. 

## 7. Deployment 

### Client-side:

- The client-side is deployed on [AWS S3 resource](http://jobsprint.app.s3-website.ap-southeast-3.amazonaws.com).

### Server-side:

- The [server-side](https://5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com/dev) is deployed using AWS services:
  - **API Gateway**: AWS API Gateway is used to manage and expose the API.
  - **AWS Lambda**: AWS Lambda functions are used to host the server-side code.