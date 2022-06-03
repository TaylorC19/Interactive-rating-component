# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Bootstrap
- JQuery

### What I learned

This was my first time using Flexbox in a project. I'm sure it was possible to use flexbox or grid on the overall scale or thank you messages, but I found the best use of flexbox was to space out the scale buttons to get the space-between them correct.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>

<div class="container-scale">
  <button type="button" name="button" class="btn btn-secondary btn-scale item" id="1">1</button>
  <button type="button" name="button" class="btn btn-secondary btn-scale item" id="2">2</button>
  <button type="button" name="button" class="btn btn-secondary btn-scale item" id="3">3</button>
  <button type="button" name="button" class="btn btn-secondary btn-scale item" id="4">4</button>
  <button type="button" name="button" class="btn btn-secondary btn-scale item" id="5">5</button>
</div>
```
```css
.container-scale {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
```
```js
$(".submit").click(function () {
  if (selectedScore>0) {
    score(selectedScore);
    $(".rating").addClass("hidden");
    $(".thank-you").removeClass("hidden");
  }
  else {
    alert("Please select a score.")
  }
})
```

### Continued development

I wish to continue learning how to use flexbox and CSS grids in my designs. For this project, the mobile and desktop designs seemed to be the same size of about 350 px, so I saw no need to use them for that responsiveness.

## Author

- Frontend Mentor - [@TaylorC19](https://www.frontendmentor.io/profile/TaylorC19)
