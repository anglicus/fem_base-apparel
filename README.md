# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshots

![](./screenshot-desktop.png)
![](./screenshot-mobile.png)

### Links

- Solution URL: (https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0/hub/custom-handling-of-invalid-form-input-using-javascript-zzBV-09oO)
- Live Site URL: (https://fem-base-apparel-eight.vercel.app/)

## My process


### Built with

Basic HTML, CSS and Javascript

### What I learned

I learned how to override default HTML5 validation error messages and customize the handling of such errors using Javascript.


```js
input.addEventListener('invalid', e => {
    e.preventDefault();
    errormsg.classList.remove('hidden');
    erroricon.classList.remove('hidden');
    input.classList.add('invalid-input');
})
```

### Continued development

I want to continue developing front-end capabilities.


## Author

- Codepen - [@anglicus](https://codepen.io/anglicus)
- Frontend Mentor - [@anglicus](https://www.frontendmentor.io/profile/anglicus)
- FreeCodeCamp [@anglicus] (https://www.freecodecamp.org/anglicus)

