# JD Style — Clothing Website Front-End

> **Version:** 1.0.0  
> **Status:** Stable front-end release

JD Style is a multi-page clothing-store website created as a front-end project. It presents a modern fashion-shopping experience with product discovery, product details, customer information pages, and brand-focused content.

This repository preserves the completed **Version 1** release. It is the stable baseline for all future work, including Version 2.

## Contents

- [Project overview](#project-overview)
- [Version 1 features](#version-1-features)
- [Technology](#technology)
- [Run locally](#run-locally)
- [Project structure](#project-structure)
- [Versioning plan](#versioning-plan)
- [Current scope and limitations](#current-scope-and-limitations)
- [Author](#author)

## Project overview

The website is designed for a clothing brand and includes a storefront experience from browsing through product information and customer-support pages. It is built entirely on the front end and uses local image, icon, and video assets.

## Version 1 features

### Storefront

- Home page with promotional banners, sliders, and product sections
- Popular products, new arrivals, and all-products pages
- Product cards with hover-image effects
- Quick Add product popups
- Product-detail pages with size selection, quantity controls, price updates, and related products
- Horizontal product scrolling controls

### Customer pages

- Shopping cart layout
- Gift-card page
- Contact-us form and store information
- Store-locations page
- VIP registration page
- Sign-up page
- Shipping, returns, and refunds page
- Privacy policy and terms-and-conditions pages
- About-us and work-with-us pages

### Shared interface

- Shared navigation header and footer
- Country selector
- Search and login popups
- Responsive layouts for different screen sizes
- Local brand imagery, social-media icons, and product assets

## Technology

| Area | Technology |
| --- | --- |
| Structure | HTML5 |
| Styling | CSS3 |
| Interactions | Vanilla JavaScript |
| Assets | Local images, SVG icons, and video files |

No front-end framework is required to view Version 1.

## Run locally

Because this project uses root-based asset paths such as `/assets/...`, run it with a local web server from the repository root.

### Option 1 — Visual Studio Code

1. Open the repository folder in Visual Studio Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html` and choose **Open with Live Server**.

### Option 2 — Any local web server

Serve the repository root and open the address shown by your server. Then open `index.html` in the browser.

## Project structure

```text
jd-style/
├── assets/                 # Product images, banners, icons, country flags, and videos
├── css/
│   ├── pages/              # Page-specific styling
│   └── shared/             # Shared header and footer styling
├── js/
│   ├── pages/              # Page-specific interactions
│   └── sharded/            # Shared header behaviour
├── pages/                  # Additional HTML pages
├── Project Docs/           # Original assignment and project documentation
├── index.html              # Main home page
└── README.md               # Project documentation
```

## Versioning plan

This repository will keep all project versions together.

| Version | Purpose |
| --- | --- |
| `v1.0.0` | Initial polished front-end release |
| `v1.0.x` | Version 1 bug fixes and small polish changes |
| `v2-development` | Branch for future Version 2 work |
| `v2.0.0` | Future major Version 2 release |

### Working on Version 2

1. Keep `main` as the latest stable version.
2. Create and work in a branch named `v2-development`.
3. Commit Version 2 work to that branch.
4. Merge it into `main` only when Version 2 is complete and tested.
5. Create a `v2.0.0` release tag after the merge.

The `v1.0.0` tag should remain unchanged so Version 1 can always be restored.

## Current scope and limitations

Version 1 is a **front-end website**. It does not include a back-end service, database, payment processing, user authentication, or persistent shopping-cart storage. Forms and buttons are primarily interface demonstrations until a future back end is connected.

## Author

Designed and developed by **Dulaj Jayasinghe**.
