# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge
### The challenge

The goal of this challenge was to create a responsive Bento grid layout that adapts to different screen sizes.

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See a clean and organized grid layout on mobile, tablet, and desktop screens

### Screenshot

![](./assets/images/image.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this challenge, I learned how to use CSS Grid to create a responsive layout.
I discovered that `repeat(3, minmax(0, 1fr))` creates three equal columns while allowing the content to fit correctly inside the grid.

For example, I used this CSS to organize the cards into three columns:

```css
.div-2 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
```

