# Ease Engenharia Website

## Project Presentation
The website is a prototype developed for the engineering company **Ease Engenharia**. It aims to provide a professional and intuitive experience to showcase the company's services and completed projects. The focus was on designing the layout with CSS and implementing key JavaScript functionalities to enhance user interactivity.

## JavaScript Functionalities

1. **Slide Carousel**
   - A system was built to navigate through slides, allowing the display of images or project highlights.
   - The carousel is controlled by:
     - `changeSlide(n)`: Advances or goes back through the slides via button interaction.
     - `showSlides(n)`: Displays the active slide while hiding the others and applying the "active" class.

2. **Client Gallery**
   - A gallery was created dynamically using JavaScript objects. Each client entry includes:
     - An image of the project;
     - A description of the client's project.
     - Alternative text for accessibility.

3. **Smooth Functionality**
   - Safety checks were included to improve reliability:
     - Validates the existence of slides before attempting to access them;
     - Automatically adjusts the slide index to prevent errors caused by out-of-bound indexes (e.g., negative numbers or exceeding the slide count).
    
## Technical Highlights
- **DOM Manipulation**: Efficiently handles HTML elements (`getElementsByClassName`, `querySelector`) for dynamic control.
- **Interactivity**: Uses events like `DOMContentLoaded` to ensure functionalities are triggered after the page has loaded.
- **Flexibility and Expandability**: The code is modular, making it easy to add new slides or client entries.


