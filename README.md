# Food Ordering App

A Persian (RTL) food-delivery website built **step by step** while following my frontend development course.
Each numbered folder is a runnable snapshot of the project at one stage, so the repository shows how a plain
landing page grew into a dynamic site with a menu, product details, a shopping cart, search, a registration form
and a drag-and-drop pizza builder.

**Final version (live demo):** [06-pizza-maker](https://eng-mohammadi.github.io/food-ordering-app/06-pizza-maker/)

> Built with **HTML5, CSS3/SCSS and vanilla JavaScript**. No frameworks or libraries, except Font Awesome for icons.
>
> **Project status:** this is a learning project, **not a complete product**. Several parts are intentionally
> missing (see [Project status and limitations](#project-status-and-limitations)). For example, the navigation bar
> lists pages such as "About us" and "Gallery" that were never created.

## Table of contents

- [Stages at a glance](#stages-at-a-glance)
- [Feature highlights](#feature-highlights)
- [Stage details](#stage-details)
- [Tech stack and concepts practiced](#tech-stack-and-concepts-practiced)
- [Project structure](#project-structure)
- [Running locally](#running-locally)
- [Project status and limitations](#project-status-and-limitations)
- [Notes](#notes)

## Stages at a glance

| #   | Folder                                 | Demo                                                                        | What is new in this stage                                        |
| --- | -------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 01  | [01-landing-page](./01-landing-page)   | [Live](https://eng-mohammadi.github.io/food-ordering-app/01-landing-page/)  | Landing page, sticky navbar, food category grid                  |
| 02  | [02-menu-page](./02-menu-page)         | [Live](https://eng-mohammadi.github.io/food-ordering-app/02-menu-page/)     | Categories and menu built from JSON data, URL parameters         |
| 03  | [03-food-details](./03-food-details)   | [Live](https://eng-mohammadi.github.io/food-ordering-app/03-food-details/)  | Product details page, discounts, animated nutrition bars         |
| 04  | [04-shopping-cart](./04-shopping-cart) | [Live](https://eng-mohammadi.github.io/food-ordering-app/04-shopping-cart/) | Shopping cart saved in `localStorage`, JSON data files           |
| 05  | [05-search-page](./05-search-page)     | [Live](https://eng-mohammadi.github.io/food-ordering-app/05-search-page/)   | Product search with an animated search box, registration form    |
| 06  | [06-pizza-maker](./06-pizza-maker)     | [Live](https://eng-mohammadi.github.io/food-ordering-app/06-pizza-maker/)   | Drag-and-drop pizza builder with a rotation ("baking") animation |

Every stage includes everything from the previous stages, so **06-pizza-maker is the most complete version**.

## Feature highlights

- **Pizza maker (stage 06):** drag ingredients and drop them anywhere on the dough, watch the price and calories
  update live, then press "bake" to see the pizza spin until it is ready.
- **Registration form with animation and validation (stage 05):** a pop-up form that opens and closes with a
  transition, and a custom `FormValidator` class that checks every field.
- **Search with an animated search box (stage 05):** the box slides open and closed, and results are rendered
  dynamically from JSON data.
- **Shopping cart (stage 04):** stored in `localStorage`, with quantity buttons, remove buttons and live totals.
- **Product details (stage 03):** image gallery per size, discounted prices and animated nutrition bars.
- **Sticky navigation bar:** changes its style after scrolling (all stages).

## Stage details

### 01 - Landing page

**Pages:** `index.html`

- Header with address, phone, opening hours and social icons.
- Navigation bar that becomes sticky and full-width after scrolling (scroll event plus inline style changes).
- Banner section and a grid of food categories (sushi, burger, pizza, kebab, sandwich, taco).
- Hover effect on the category titles built with mouse events and CSS `clip-path`.
- First use of SCSS: partials (`_generals`, `_components`, `_layouts`), variables, maps and a `@font-face` mixin
  that builds the font rules from a list of font files with `@each`.

### 02 - Menu page

**Pages:** `index.html`, `menu_page.html`

- Food categories are no longer written by hand: they are created from JSON data with
  `JSON.parse`, `forEach` and DOM methods (`createElement`, `appendChild`, `classList`).
- Clicking a category opens the menu page with the category in the URL (`menu_page.html?groupTitle=...`).
- The menu page reads the URL with `URLSearchParams` and renders the products of that category
  (name, price and ingredients).
- Breadcrumb banner that shows the selected category.

### 03 - Food details

**Pages:** `index.html`, `menu_page.html`, `food_details.html`

- Product details page opened from the menu with the product name in the URL.
- Image gallery with one image per size or variant (mini / normal / large pizza, single / double kebab, ...).
- Price list showing the original price (`<del>`) and the discounted price, with a discount per food category.
- Animated energy and protein bars driven by `data-*` attributes and timers.
- Quantity selector with `+` and `-` buttons.
- Product data modelled with ES6 classes and inheritance (`FoodDiscount` and `GroupProducts extends FoodDiscount`).

### 04 - Shopping cart

**Pages:** `index.html`, `menu_page.html`, `food_details.html`, `shop_cart.html`  
**New folder:** `data/` (`food_data.json`, `discount_data.json`)

- Choosing a size or variant on the details page adds the product to the cart.
  Clicking the same product again only increases its quantity; a different product (or size) adds a new row.
- The cart is stored in `localStorage` and rendered on the cart page as a table with image, name, price,
  quantity and line total.
- Quantity buttons, remove button, total price and item counter that update instantly.
- Product and discount data are loaded from the JSON files with `XMLHttpRequest`.
- The number next to the cart icon in the navbar shows how many different products are in the cart.

### 05 - Search page and registration form

**Pages:** all previous pages plus `search_page.html` and `register.html`

- **Search:** a search box that slides open and closed (CSS transitions plus a toggled `active` class).
  Product data is loaded with `fetch` and a `Promise` chain. Press Enter to search in the product names and
  categories; the results (image, name, size and price) are rendered as cards, a message appears when nothing
  matches, and the results are cleared when the text is edited.
- **Registration form:** a pop-up form that opens and closes with a transition animation.
  Validation is done by a `FormValidator` class that reads the rules from `data-validation` attributes, validates
  on submit and on `focusout`, shows an error list, and checks Iranian mobile numbers with a regular expression.

### 06 - Pizza maker (most complete version)

**Pages:** all previous pages plus `pizza_making.html`  
**New data:** `data/food-items.json` (pizza ingredients with image, price, calories and quantity)

- **Build your own pizza:** drag ingredients (tomato, mozzarella, mushroom, olive, pepperoni, ...) from the
  ingredient box and drop them on the pizza dough using the HTML5 Drag and Drop API (`dragstart`, `dragover`,
  `drop`, `dataTransfer`). Each ingredient lands exactly where it is dropped.
- **Live totals:** the total price and calories update with every ingredient.
- **"Bake" animation:** the pizza rotates several full turns with `requestAnimationFrame`, and a message appears
  when it is ready.

## Tech stack and concepts practiced

| Area       | What is used                                                                                                                                                                                                               |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML       | Semantic tags, forms, `data-*` attributes, meta tags, RTL Persian pages                                                                                                                                                    |
| CSS / SCSS | Flexbox, CSS Grid, media queries (mobile to desktop), transitions and animations, SCSS partials, variables, maps, mixins and functions                                                                                     |
| JavaScript | DOM API, events, ES6 classes and inheritance, arrow functions, template literals, `Promise`, `fetch`, `XMLHttpRequest`, `localStorage`, `URLSearchParams`, Drag and Drop API, `requestAnimationFrame`, regular expressions |
| Data       | JSON files and JSON strings, `JSON.parse` / `JSON.stringify`                                                                                                                                                               |
| Other      | Custom Persian web fonts with `@font-face`, Font Awesome icons                                                                                                                                                             |

## Project structure

Every stage folder has the same layout (some pages and folders appear only in later stages):

```
06-pizza-maker/
├── index.html
├── menu_page.html
├── food_details.html
├── shop_cart.html
├── search_page.html
├── register.html
├── pizza_making.html
├── css/            compiled CSS
├── sass/           SCSS source (partials and one file per page)
├── js/             one JavaScript file per page
├── data/           JSON data (from stage 04)
├── fonts/          Persian web fonts
└── images/         favicons, food and ingredient images
```

## Running locally

The project **must be served by a web server**. Several pages load JSON data with `fetch` and `XMLHttpRequest`,
and browsers block those requests when an HTML file is opened directly from the disk (`file://`).

1. Open the stage folder (for example `06-pizza-maker`) in VS Code.
2. Install the **Live Server** extension and click **Go Live**.
   (Any other local web server, such as XAMPP, works too.)
3. To change the styles, edit the files in `sass/` and compile them with the **Live Sass Compiler** extension,
   or with `npx sass sass:css`. The compiled CSS is already included.

On GitHub Pages everything works out of the box because the files are served over HTTPS.

## Project status and limitations

This project was built to practice the topics of the course, so it is **intentionally incomplete**:

- **Pages that do not exist yet:** the navigation bar lists "About us", "Pages", "Gallery" and "Contact us"
  (and "News" in the earlier stages), but these pages were never created and their links are placeholders.
  The social media icons and the "Order online" button are placeholders as well.
- **No checkout:** the cart can be filled, edited and totalled, but there is no payment or order submission.
- **No backend:** the cart is kept in the browser's `localStorage`, and the forms do not send data to a server.
  There is no login or user account, only a registration form that validates its fields.
- **Sample data:** food names, prices, discounts, contact details (address, phone number) and nutrition values
  are sample data used to practice the logic.
- **Data in two places:** the menu and details pages keep their data as JSON strings inside the JavaScript files
  (to practice `JSON.parse`), while the cart, the search and the pizza maker load the JSON files in `data/`.
  A cleaner version would load everything from the JSON files.
- **Persian only:** the interface is written in Persian (RTL) and has no language switch.

## Notes

- Each stage was written while following the course, so it only uses what I had learned up to that point.
  I kept the code of the earlier stages as I originally wrote it to show my learning path.
- Because of that, some parts are not written the way I would write them today (for example repeated code between
  pages and long SCSS selectors).
