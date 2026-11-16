# Frontend Mentor - Interactive rating component

This is my solution to the [Interactive rating component challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI) on Frontend Mentor.

## Overview

The app lets a visitor choose a rating from 1 to 5 and submit it to see a thank-you message showing their selection. The layout adapts to smaller screens.

### Links

- Challenge: [Interactive rating component](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)
- Solution code: [GitHub repository](https://github.com/praistyles/rating-app)
- Live site: [https://praistyles.github.io/rating-app/](https://praistyles.github.io/rating-app/)

### Features

- Select one of five ratings and submit it.
- See a confirmation state with the selected rating.
- Use the rating controls with a keyboard.
- Get visible keyboard focus and reduced-motion support.
- View the component on desktop and mobile screens.

## Built with

- React
- Vite
- CSS custom properties
- CSS Grid
- Responsive CSS
- Accessible button states and labels

## Running locally

From this directory, install dependencies and start the development server:

```sh
npm install
npm run dev
```

To check the code and create a production build:

```sh
npm run lint
npm run build
```

The project is configured for GitHub Pages. To deploy, run:

```sh
npm run deploy
```

## What I learned

- Managing a selected value with React state and passing it to child components.
- Showing a different screen after a user submits a choice.
- Using `aria-pressed` to communicate which rating is selected.
- Adding clear focus styles so keyboard users can see which control is active.

## Acknowledgments

Thanks to Frontend Mentor for providing the challenge and design files.

## Author

- Frontend Mentor - [@praistyles](https://www.frontendmentor.io/profile/praistyles)
- GitHub - [@praistyles](https://github.com/praistyles)
