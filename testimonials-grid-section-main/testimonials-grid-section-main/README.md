# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
  - [AI Collaboration](#ai-collaboration)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./images/image.png)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

 I discovered how useful CSS Grid's `grid-template-areas` can be for creating a clear and responsive layout. It allows me to give names to different parts of the grid and then position each testimonial card by using its area name.

```css
 main {
     display: grid;
     grid-template-columns: repeat(4, minmax(0, 1fr));
     gap: 1.1rem;
     width: 85vw;
     grid-template-areas:
         "card-1 card-1 card-2 card-5"
         "card-3 card-4 card-4 card-5";
 }
 .card-1 { grid-area: card-1; }
 .card-2 { grid-area: card-2; }
 .card-3 { grid-area: card-3; }
 .card-4 { grid-area: card-4; }
 .card-5 { grid-area: card-5; }
```

### Useful resources

### AI Collaboration

## Author
Blaise

## Acknowledgments
