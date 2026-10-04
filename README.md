# Tessa's Baking Business Website

## Project Description

Tessa's Baking Business is a multi-page website created for a small home bakery.

The website provides customers with information about the business, allows them to browse different baked products, view a gallery of baking creations and make an enquiry about placing an order.

The website was designed to create a warm, welcoming and professional online presence for the bakery.

---

## Business Overview

Tessa's Baking Business is a small home bakery that started from Tessa's passion for baking cakes, cupcakes and biscuits for family and friends.

The business focuses on creating homemade baked goods for birthdays, celebrations and special occasions.

The website is designed to help customers discover the bakery, view its products and easily get in contact with Tessa.

---

## Website Goals

The main goals of the website are:

- Create a professional online presence.
- Introduce customers to Tessa's Baking Business.
- Display the bakery's products.
- Showcase cakes, cupcakes, cookies and brownies.
- Provide a gallery of baking creations.
- Encourage customers to make enquiries.
- Make it easy for customers to navigate the website.
- Provide a simple way for customers to enquire about orders.
- Build trust with potential customers.

---

## Target Audience

The website is aimed at:

- Adults and families.
- Parents ordering birthday cakes and cupcakes.
- Customers planning celebrations.
- Customers looking for custom cakes.
- People looking for homemade baked goods.
- Local customers interested in placing an order.

The target age group is approximately 18–55 years old.

---

# Website Pages

The website is made up of several separate HTML pages.

## 1. Home

File:

`index.html`

The Home page introduces Tessa's Baking Business.

It contains:

- Business introduction.
- Hero image.
- Welcome section.
- Featured products.
- Reasons to choose Tessa's Baking Business.
- Call-to-action buttons.
- Footer navigation.

The Home page provides links to the other sections of the website.

---

## 2. About Us

File:

`about.html`

The About Us page provides information about Tessa and the history of the business.

It contains:

- Introduction to Tessa.
- Business story.
- Mission.
- Vision.
- Reasons to choose the bakery.
- Contact call-to-action.

---

## 3. Products

File:

`products.html`

The Products page acts as the main product category page.

Customers can select:

- Cakes
- Cupcakes
- Cookies
- Brownies

Each category has a button that takes the user to a separate product page.

---

## 4. Cakes

File:

`cakes.html`

The Cakes page contains information about:

- Birthday Cakes
- Custom Cakes
- Special Occasion Cakes

Each product includes an image, description and enquiry button.

The enquiry button takes the customer to the Contact page.

---

## 5. Cupcakes

File:

`cupcakes.html`

The Cupcakes page displays:

- Decorated Cupcakes
- Vanilla Cupcakes

Customers can click the enquiry button to contact Tessa.

---

## 6. Cookies

File:

`cookies.html`

The Cookies page displays homemade cookies and provides an enquiry button.

---

## 7. Brownies

File:

`brownies.html`

The Brownies page displays chocolate brownies and provides an enquiry button.

---

## 8. Gallery

File:

`gallery.html`

The Gallery page displays images of the bakery's products.

The gallery includes:

- Cakes
- Custom cakes
- Cupcakes
- Cookies
- Brownies
- Chocolate cakes
- Vanilla cupcakes

The images include hover effects to make the gallery more interactive.

---

## 9. Contact

File:

`contact.html`

The Contact page allows customers to make an enquiry.

The form contains:

- Full Name
- Email Address
- Phone Number
- Product selection
- Order details

The page also contains contact information sections.

The form currently provides front-end feedback when submitted.

A real email or database connection would need to be added before using the form as a live business contact system.

---

# Navigation

The website uses a consistent navigation bar across all pages.

The main navigation contains:

- Home
- About Us
- Products
- Gallery
- Order Now

The Products menu also contains a dropdown with:

- All Products
- Cakes
- Cupcakes
- Cookies
- Brownies

This allows users to move directly between different product categories.

The footer also contains navigation links so users can easily move around the website.

---

# Website Structure

The project uses the following structure:

```text
Tessas-Baking-Website/

│
├── index.html
├── about.html
├── products.html
├── cakes.html
├── cupcakes.html
├── cookies.html
├── brownies.html
├── gallery.html
├── contact.html
│
├── style.css
├── script.js
│
└── images/
    ├── hero-cake.jpg
    ├── birthday-cake.jpg
    ├── custom-cake.jpg
    ├── cupcakes.jpg
    ├── cookies.jpg
    ├── brownies.jpg
    ├── chocolate-cake.jpg
    └── vanilla-cupcakes.jpg
    |
 
Technologies Used 
HTML5

HTML is used to create the structure and content of the website.

HTML is used for:

- Headings
- Paragraphs
- Images
- Navigation
- Buttons
- Links
- Forms
- Product cards
- Page sections
- CSS3

## CSS is used to style the website.

CSS is used for:

- Colours
- Fonts
- Layout
- Navigation
- Buttons
- Product cards
- Gallery
- Forms
- Responsive design
- Hover effects
- Mobile layouts
- JavaScript

## JavaScript is used to add basic interactivity.

JavaScript is used for:

- Mobile navigation.
- Opening and closing the mobile menu.
- Contact form feedback.
- Resetting the contact form after submission.
- Design

The website uses a warm and welcoming bakery-inspired design.

## Colour Scheme

The main colours include:

- Soft pink
- Peach
- Cream
- White
- Chocolate brown

Pink is used as the main accent colour.

Brown is used for headings and text to create a bakery-inspired appearance.

Cream and white are used as background colours to keep the website clean and easy to read.

## Typography

The website uses:

Playfair Display

Used mainly for:

- Main headings
- Section headings
- Product headings
- Logo
- Poppins

Used mainly for:

- Paragraphs
- Navigation
- Buttons
- Form fields
- General website text

This combination creates a balance between a stylish bakery appearance and good readability.

Responsive Design

The website is responsive and designed to work on:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

CSS media queries are used to change the layout depending on the screen size.

On smaller screens:

- The navigation becomes a mobile menu.
- Product cards become one column.
- Gallery images adjust to the available screen width.
- Content sections stack vertically.
- Buttons become easier to use on touch screens.
- Images

Images are stored inside the images folder.

Images can be replaced with actual bakery photographs as long as the file names match the names used in the HTML code.

## Navigation System

Each page contains links to other HTML pages.

When the user clicks the link, the browser opens the about.html page.

The Products section uses a dropdown navigation system.

## Call-To-Action Buttons

The website contains several call-to-action buttons.

Examples include:

- Explore Our Bakes
- Order Now
- View Cakes
- View Cupcakes
- View Cookies
- Enquire Now
- Contact Tessa
- Make An Enquiry

These buttons help guide users through the website and encourage them to contact the bakery.

## Contact Form

The Contact page includes a form where customers can enter:

- Name
- Email
- Phone number
- Product type
- Order details

JavaScript prevents the page from refreshing and displays a confirmation message when the form is submitted.

The current form is a front-end demonstration.

For a live website, a backend or online form service would need to be connected so that enquiries can actually be sent to the business.

## Accessibility

The website includes several basic accessibility considerations.

These include:

- Descriptive image alt text.
- Clear headings.
- Readable fonts.
- Good contrast between text and backgrounds.
- Clearly labelled form fields.
- Simple navigation.
- Responsive layouts.
- Buttons that are easy to identify.

## How To Run The Website
Step 1

Open the project folder in Visual Studio Code.

Step 2

Make sure all HTML files are in the same folder.

Step 3

Make sure style.css and script.js are also in the main folder.

Step 4

Create an images folder.

Step 5

Add the required images to the images folder.

Step 6

Open index.html in a web browser.

The Home page will load.

From there, the navigation buttons can be used to move between the different pages.

## Testing

The website should be tested by checking:

- Home navigation.
- About Us navigation.
- Products navigation.
- Product dropdown.
- Cakes page.
- Cupcakes page.
- Cookies page.
- Brownies page.
- Gallery page.
- Contact page.
- Order buttons.
- Mobile navigation.
- Images.
- Contact form.
- Responsive layout.

Each navigation link should open the correct HTML page.

## Future Improvements

Possible future improvements include:

- Add real business contact details.
- Connect the contact form to email.
- Add an online ordering system.
- Add real product prices.
- Add more product categories.
- Add more gallery images.
- Add customer reviews.
- Add social media links.
- Add an online payment system.
- Add a shopping cart.
- Add a database for orders.
- Add a backend system for managing products.


## Project Purpose

The purpose of this website is to create a professional and user-friendly online presence for Tessa's Baking Business.

The website allows customers to learn about the business, browse products, view baking creations and make an enquiry.

The multi-page structure also makes the website easier to navigate because each major section has its own dedicated page.

