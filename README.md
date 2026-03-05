# Cloud Portfolio – AWS Serverless Deployment

## Overview

This project is my cloud portfolio deployed on AWS using a serverless architecture.
The website is built with Next.js and hosted on Amazon S3, delivered globally through CloudFront, and secured with HTTPS using AWS Certificate Manager.

It also includes a serverless visitor counter implemented using AWS Lambda and API Gateway.

---

## Architecture

User → CloudFront CDN → S3 Static Website
↓
API Gateway
↓
Lambda

---

## Technologies Used

* AWS S3 – Static website hosting
* AWS CloudFront – Global CDN
* AWS Lambda – Serverless backend
* AWS API Gateway – Visitor counter API
* AWS Certificate Manager – HTTPS/SSL
* GitHub Actions – CI/CD deployment pipeline
* Next.js – Frontend framework

---

## Features

* Global CDN delivery via CloudFront
* Custom domain with HTTPS
* Serverless visitor counter
* Automated CI/CD deployment
* Fully serverless architecture

---

## CI/CD Pipeline

Code changes pushed to GitHub automatically trigger GitHub Actions which:

1. Builds the Next.js project
2. Exports the static site
3. Uploads files to S3
4. Invalidates CloudFront cache

---

## Live Website

https://akasharumugam.app

---

## Author

Akash Arumugam
