# ☀️ SunCart - Summer Products E-Commerce Web Application

SunCart is a highly responsive, modern summer-themed e-commerce platform built using Next.js. This application delivers a smooth shopping exploration experience featuring fluid visual animations, robust authentication guards, and localized dynamic profile syncing.

--------

## Live Deployment URL :

https://suncart-project-nine.vercel.app/

--------

## Purpose of the Project :

The primary intent of SunCart is to demonstrate a fully working product indexing and secure details review workflow tailored for summer essentials. It applies solid route interception via middleware, automated credential/social user registration via Better-Auth, and structured data retention using MongoDB.

---

## Key Features :

### 1. Main Layout 

  Persistent Branding: 
                     Features a globally accessible sticky Header Navbar and structural Footer across all routes.


  Conditional Auth UI:
                    Real-time checking updates the header elements dynamically. If logged in, it showcases the user's active avatar image and a Logout trigger; if logged out, it shifts to clear Login / Register navigational triggers.

### 2. Homepage Sections
            Hero Banner:
                         Features high-converting promotional banners with static calls-to-action like "Summer Sale 50% OFF" and animated Hot Deals text.
            
            Popular Products Grid: 
                         Selects and renders exactly 3 feature products directly from a dynamic local JSON source code block. Every card clearly reflects its thumbnail image, product name, rating badge, price tag, and an attached dynamic 'View Details' forwarder.
 
            Interactive Sections:
                        Includes a "Summer Care Tips" informative layout and a dedicated 4-card static "Top Brands" grid.

### 3. Bulletproof Route Protection
  
  Strict Interception:
                    The Product Details page , user Profile page , and Update Data form are completely secure from unauthenticated entry.

  Smart Back-Route Memory:
                    Unauthorized visitors hitting guarded endpoints are routed to  with an appended query parameter containing their original target path. Upon completing verification, they are immediately redirected back to their intended target view.

### 4. Modular Authentication via Better-Auth
   
   Credentials Flow: 
                   Provides fully validated Email & Password login and registration routines with instant custom form field error triggers for mismatched structures.
    

    Social Authentication:
                  Integrates native single-tap Google Account connectivity that automatically bridges and provisions identical user entries smoothly.

### 5. Profile Vault & Update Engine
    
    My Profile Dashboard:
                       Neatly lists logged-in profile metrics such as display name, email, and connected Google profile avatar.
    
    Live Update Feature: 
                       Includes a specialized update form under `/profile/edit-page` that utilizes Better-Auth's native user client update protocol to seamlessly alter display credentials and custom avatar links.

-------------

##  NPM Packages Used

The application includes the following package dependencies to drive performance, database communication, and layout aesthetics:

* **next** (v16+) 

* **@heroui/react** 

* **better-auth**

* **mongodb** 

* **animate.css**

* **react-icons** 
----------


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
