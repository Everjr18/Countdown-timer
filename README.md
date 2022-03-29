# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)


## My process

Create The HTML:

- First step: Define How many container need to be created
- Second step: Implement the containers and image
- Third step: Integrate html with javascript and css

Create The CSS:

- First step: Center our main container
- Second step: Put the image at the bottom of the page
- Third step: Add colors 

Create Countdown

- First step : Define the logic for the countdown
- Second step: Implement the logic in javascript
- Third step: Avoid our size on our countdown change
- Four step: Integrate HTML with JS

### Links

- Live Site URL: [https://everjr18.github.io/Countdown-timer/]

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned
I learned how i can organize one container in HTML

```HTML 
<div class="countdown">
    <div class="container-day">
      <h3 class="Day"> time </h3>
      <h3>Days</h3>
  </div>
  <div class="container-hours"> 
      <h3 class="Hour"> time </h3>
      <h3>Hours</h3>
  </div>
  <div class="container-minutes"> 
      <h3 class="Minute"> time </h3>
      <h3>Minutes</h3>
  </div>
  <div class="container-seconds"> 
      <h3 class="Second"> time </h3>
      <h3>Seconds</h3>
  </div>
 </div>
```
```
I learned how I can separate a paragraph letter by letter
```
```CSS
 h1 {
    letter-spacing: 3px;
}
```
```
I learned how I can do a DATE in javascript
```
```js
 const countDate = new Date("April 3, 2022 00:00:00").getTime();
    const timeNow = new Date().getTime();
    const gap = countDate - timeNow;
```
### Continued development

My next proyect I am going to be focusing and keep learnig about CSS and JS, I could see things so hard like center a container thank this proyect i went to be able to see that, and Javascript could see we can create a lot of things, so i will keep exploring what i can keep learning like arrays. also I am gonna start learning vue.js and how i can use in my next proyect.js

## Author
 - Ever Rojas




