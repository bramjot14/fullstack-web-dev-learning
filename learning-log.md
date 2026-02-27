## Full Stack Web Development Learning Log
--------------

Day-1:
### React Module – Basics

Completed:
- What is React
- React module overview
- CodeSandbox introduction
- JSX and Babel
- JavaScript expressions in JSX
- ES6 template literals

--------------

Day-2:
### React Module – Styling

Completed:
- JSX attributes & styling React elements
- Inline styling for React elements
- React styling practice

🔗 Project Repository:
- https://github.com/bramjot14/react-styling-practice

--------------
  
Day-3:
### React Components

Completed:
- Learned how to create and structure functional React components
- Practiced returning JSX correctly from components
- Built a time-based greeting component with conditional rendering and dynamic styling  

🔗 Project Repository:
- https://github.com/bramjot14/react-components-practice

--------------

Day-4:
### ES6 Modules – Import & Export Practice

Completed:
- Created default export and named exports in a separate module
- Imported default and named exports into a React entry file
- Fixed common syntax issues with ES6 imports/exports
- Understood when to call functions vs passing references

🔗 Project Repository:
- https://github.com/bramjot14/es6-import-export-practice

--------------

Day-5:
###  React Project – Keeper App

Completed:
- Built a simple Keeper notes app using React
- Created and composed reusable components (`Header`, `Note`, `Footer`)
- Practiced JSX rules (single parent element, fragments, return syntax)
- Fixed common React mistakes (component naming, returns, semicolons in JSX)
- Improved understanding of default vs named exports in real project usage
- Applied basic styling using CSS

🔗 Project Repository:
- https://github.com/bramjot14/keeper-app-react

--------------

Day-6:
### React Props & Data Handling – Contacts App

Completed:
- Practiced passing data to components using props
- Created reusable Card component for displaying contact details
- Stored contact data in an external JavaScript array
- Imported and consumed external data files in React
- Accessed object properties from arrays using index notation
- Fixed common props and export/import errors
- Strengthened understanding of component reusability and data flow
- Applied CSS styling to dynamic components
- Debugged undefined errors caused by missing exports

🔗 Project Repository:
- https://github.com/bramjot14/keeper-app-react

--------------

Day-7:
### React Module – Mapping Components & Props

Completed:
- Used Array.map() to dynamically render components
- Passed data as props to reusable components
- Separated UI into clean, reusable React components
- Rendered structured data from an external JS file
- Improved component readability and scalability

🔗 Projects Repository:
- https://github.com/bramjot14/react-props-contacts-app
- https://github.com/bramjot14/react-mapping-components-practice

--------------

Day-8:
### JavaScript Array Methods & String Handling

Completed:
- Learned map() to transform each item in an array into a new value
- Practiced filter() to create arrays based on true/false conditions
- Understood reduce() for accumulating values into a single result
- Used find() to get the first matching element from an array
- Used findIndex() to get the index of the first matching element
- Applied substring() to extract specific portions of a string
- Gained clarity on operating at the correct level: array → item → property → string

🔗 Projects Repository:
- https://github.com/bramjot14/js-array-methods-practice

--------------

Day-9:
### JavaScript ES6 Arrow Functions

Completed:
- Learned ES6 arrow function syntax for cleaner and shorter function definitions
- Converted traditional functions into arrow functions
- Practiced arrow functions with single and multiple parameters
- Used implicit return for single-expression functions
- Applied arrow functions as callbacks inside array methods
- Improved code readability and reduced boilerplate code

🔗 Projects Repository:
- https://github.com/bramjot14/javascript-es6-arrow-functions-practice

--------------

Day-10:
### React – Mapping Components & Dynamic Rendering (Keeper App Part 2)

Completed:
- Used Array.map() to render multiple React components dynamically
- Passed data from a separate file (notes.js) into components via props
- Rendered reusable Note components instead of hardcoding UI
- Applied the key prop correctly while mapping components
- Improved component structure by separating data and UI logic
- Strengthened understanding of parent-to-child data flow in React
- Built a scalable notes UI similar to Google Keep

🔗 Project Repository:
- https://github.com/bramjot14/react-keeper-app-mapping

--------------

Day-11:
### React Conditional Rendering

Completed:
- Practiced conditional rendering in React using:
- Ternary operator (condition ? A : B)
- Logical AND operator (condition && A)
- Controlled UI rendering based on application state
- Passed state as props to child components
- Dynamically changed button text and form fields
- Improved understanding of when to use ternary vs AND rendering
- Built a clean, minimal practice project to reinforce concepts

Key Takeaway:
Conditional rendering allows React apps to stay dynamic and responsive without unnecessary components or routes.

🔗 Project Repository:
- https://github.com/bramjot14/react-conditional-rendering

--------------

Day-12:
### React State & useState Hook

Completed:
- Learned the concept of state in React and why it is needed for dynamic UI
- Understood the difference between declarative and imperative programming
- Explored how React automatically re-renders components when state changes
- Practiced using the useState hook to store and update component data
- Updated state based on user interactions (button clicks)
- Separated logic (functions) from UI (JSX) for cleaner components
- Built a simple practice project to reinforce state updates and re-rendering behavior

Key Takeaway:
State is the core of interactivity in React. Using useState allows components to manage data and automatically keep the UI in sync with user actions.

🔗 Project Repository:
- https://github.com/bramjot14/react-usestate-hook-practice

--------------

Day-13:
### React Lists, Keys & Dynamic Rendering

Completed:
- Learned how to render lists in React using the map() method
- Understood why React requires keys for list items
- Used unique keys to help React efficiently update the UI
- Practiced rendering dynamic data instead of hardcoded JSX
- Built reusable components for list items
- Improved component structure by separating data and UI logic
- Gained confidence handling real-world array-based rendering patterns

Key Takeaway:
Rendering lists with proper keys is essential for performance and predictable UI updates in React applications.

🔗 Project Repository:
- https://github.com/bramjot14/javascript-es6-destructuring-practice

--------------

Day-14: 
### React Event Handling

Completed:
- Learned how React handles user interactions through event handlers
- Used onClick to trigger state updates
- Practiced onMouseOver and onMouseOut events
- Managed UI changes using useState
- Implemented conditional styling based on user interaction
- Strengthened understanding of React re-rendering on state change

Key Takeaway:
React event handlers allow components to respond to user actions. State should represent behavior (like hover or click), while UI styles should be derived from that state.

🔗 Project Repository:
- https://github.com/bramjot14/react-event-handling-practice


---

Day-15:
### React Forms & Controlled Inputs

Completed:
- Learned how forms work in React using controlled components
- Used `useState` to store and manage form input values
- Connected input fields to state using the `value` attribute
- Handled user input through `onChange` events
- Understood the difference between input change events and button click events
- Prevented common mistakes like setting state to `undefined` from non-input elements
- Observed how React re-renders UI when form state updates

Key Takeaway:
In React, form inputs should be controlled by state. The input value must come from state, and all changes should update that state to keep the UI predictable and in sync.

🔗 Project Repository:
- https://github.com/bramjot14/react-forms-practice

---

Day-16:
### React – Changing Complex State

Completed:
- Learned how to manage multiple related values using a single state object
- Updated complex state safely using the functional form of `useState`
- Used `prevValue` to preserve existing state while updating specific fields
- Handled multiple inputs with a single `onChange` handler using the `name` attribute
- Implemented controlled inputs for reliable form state management
- Understood why React requires immutable state updates
- Observed how React re-renders components when complex state changes

Key Takeaway:
When state depends on previous values, React requires functional updates to ensure predictable behavior and prevent accidental data loss.

🔗 Project Repository:
- https://github.com/bramjot14/react-changing-complex-state

---

Day-17:
### React To-Do List 

Completed:
- Built a simple To-Do List using React
- Used `useState` to manage input and list data
- Implemented controlled input using `value` and `onChange`
- Updated array state using previous state and spread operator
- Rendered dynamic list items using `map()`
- Cleared input field after adding an item
- Strengthened understanding of immutability in React state updates

Key Takeaway:
In React, state should always be updated immutably. Using the spread
operator with previous state ensures predictable UI updates and
prevents accidental data loss.

🔗 Project Repository:
https://github.com/bramjot14/react-todo-list-practice

----

Day-18:
### React Managing a Component Tree

Completed:
- Built a to-do list using parent and child components
- Practiced lifting state up to the parent component
- Passed functions as props to child components
- Triggered parent state updates from child events
- Used `filter()` to remove items immutably from state
- Strengthened understanding of unidirectional data flow in React
- Learned why callback functions are required for child-to-parent communication

Key Takeaway:
In React, state should live in the highest common parent. Child components should never modify state directly — instead, they communicate actions back to the parent using callback functions.

🔗 Project Repository:
https://github.com/bramjot14/react-managing-component-tree

---

Day-19:
### React State Management & Component Communication

Completed:
- Built a Keeper (Notes) App using React
- Managed a list of notes using useState as an array of objects
- Added new notes dynamically by appending objects ({ title, content }) to array state
- Understood that prevState (prevItems) always represents the previous array, not the object being added
- Learned that React does not infer types inside arrays — the developer defines the data shape
- Understood that array methods like map(), filter(), and slice() work on arrays, not on objects
- Learned that objects must be accessed via properties, while array methods operate on the array itself
- Passed data and handler functions between components using props
- Implemented delete functionality using note IDs and filter()
- Used map() to render multiple note components
- Practiced immutable state updates using the spread operator
- Learned when the spread operator is required vs unnecessary

Rule of Thumb:
Array methods that return a new array → no spread needed
- filter(), map(), slice()

When manually building a new array → use spread
- add, insert, append ([...prevItems, newItem])

Key Takeaway:
Mapping, filtering, or slicing happens on arrays, not on individual objects inside them. React state simply stores data; understanding the difference between array operations and object access is essential for predictable state updates and clean component rendering.

🔗 Project Repository:
https://github.com/bramjot14/react-keeper-app-part-3

---

Day-20: 
## Introduction to JavaScript & Basics

Completed:
- Learned what JavaScript is and how it adds behavior to websites
- Understood how JavaScript runs in the browser
- Used alert() to display pop-up messages
- Explored basic JavaScript data types (String, Number, Boolean)
- Learned how to declare variables using var
- Understood variable naming rules and best practices
- Practiced storing and updating values in variables
- Reviewed the solution to reinforce correct logic and syntax

Key Takeaway:
JavaScript allows websites to become interactive. Variables store data, data types define what kind of data is stored, and functions like alert() help in understanding how JavaScript communicates with users and the browser.

🔗 Practice Exercises:
- [javascript-basics](./javascript-basics)


---

Day-21: 
### JavaScript Strings, Numbers & Naming Conventions

Completed:

- Learned JavaScript variable naming rules and common naming conventions
- Practiced identifying valid and invalid variable names through a quiz
- Used string concatenation to combine text and variables
- Retrieved string length using the `.length` property
- Extracted parts of a string using slicing methods
- Understood how to convert strings to uppercase and lowercase
- Learned basic arithmetic operations in JavaScript
- Used the modulo (`%`) operator to find remainders
- Practiced increment (`++`) and decrement (`--`) expressions

Key Takeaway:
Strings and numbers are core data types in JavaScript. Understanding how to manipulate text, perform calculations, and follow proper naming conventions helps write clean, readable, and error-free code.

🔗 Practice Exercises:
- [javascript-basics](./javascript-basics)

---

Day-22:
### JavaScript – Functions 

Completed:
- Learned how to create and call functions in JavaScript
- Understood function syntax, naming, and execution flow
- Learned how parameters and arguments allow functions to accept dynamic input
- Practiced performing calculations inside functions
- Learned how to produce outputs using return values
- Understood the difference between logging values vs returning values from functions
- Strengthened understanding of how functions make code reusable, readable, and maintainable

Key Takeaway:
Functions encapsulate logic into reusable blocks. Parameters make functions flexible, and return values allow functions to produce outputs that can be reused elsewhere in the program.

🔗 Practice Exercises:
- [javascript-basics](./javascript-basics)

---

Day-23:
### Intermediate JavaScript – Control Flow, Arrays & Algorithms

Completed:
- Learned random number generation using `Math.random()` and `Math.floor()`
- Practiced conditional logic using `if / else` statements
- Understood comparators (`> < >= <= === !==`) and equality operators
- Learned how to combine multiple conditions using logical operators (`&&`, `||`)
- Learned how to work with JavaScript arrays and array collections
- Practiced adding elements and intermediate array techniques
- Learned about `while` loops and how loop conditions work
- Understood `for` loops and their practical use cases
- Completed the **Fibonacci Generator** challenge using loops and arrays

Key Takeaway:
Control flow (conditions + loops) combined with arrays allows you to solve real-world logic problems like random selection, validation, and sequence generation. Writing functions that return values instead of only using `console.log` leads to cleaner and reusable code.

🔗 Practice Exercises:
- [JS-functions-practice](./javascript-basics/JS-functions-practice.js)

---

## Day-24

### JavaScript DOM Basics

**Completed:**

* Learned how to add JavaScript to websites using:

  * Internal `<script>` tags
  * External `.js` files *(best practice)*
* Understood what the **DOM (Document Object Model)** is
  → How the browser turns HTML into a tree structure that JavaScript can control
* Learned how JavaScript can **access and modify HTML elements dynamically**
* Practiced **selecting HTML elements using JavaScript**, including:

  * `document.querySelector()`
  * `document.querySelectorAll()`
  * `document.getElementById()`
  * `document.getElementsByClassName()`
* Learned how to **manipulate elements and styles using JavaScript**, such as:

  * Changing text content
  * Modifying HTML elements dynamically
  * Updating CSS styles through JavaScript
  * Adding and removing classes

**Key Takeaways:**

* JavaScript can fully control HTML + CSS using the DOM
* `querySelector` is powerful because it works like CSS selectors
* Styles should usually be changed using classes instead of inline styles
* DOM manipulation is the foundation for interactive websites

---

## Day-25

## JavaScript DOM – Deeper Concepts

### Completed:
* Learned the Separation of Concerns principle:
* HTML → Structure
* CSS → Style
* JavaScript → Behaviour
* Understood why keeping these separate makes code cleaner and more maintainable
* Learned about Text Manipulation using the textContent property:
* How to read text from an element
* How to update text dynamically using JavaScript
* Learned how to manipulate HTML element attributes, including:
* Getting attributes using getAttribute()
* Setting attributes using setAttribute()
* Changing links, images, and other element properties dynamically

Key Takeaways:
* Clean projects follow structure/style/behaviour separation
* textContent is safer and more predictable than injecting raw HTML
* Attributes allow JavaScript to fully control how elements behave
* These concepts are essential for building interactive UI

⸻

Great consistency — this is exactly how you build strong fundamentals. Since you completed the jQuery modules (149–159), here is a clean copy-paste ready learning log you can put in your GitHub learning repository.

⸻

## Day 26 

## jQuery Fundamentals

### Topics Covered:
	•	What is jQuery and why it is used
	•	How to incorporate jQuery into websites (CDN / local files)
	•	Minification and why reducing file size improves performance
	•	Selecting elements using jQuery selectors
	•	Manipulating styles using .css()
	•	Manipulating text and HTML content using .text() and .html()
	•	Manipulating attributes using .attr()
	•	Adding event listeners using .click(), .keypress(), .on()
	•	Adding and removing elements dynamically using .append(), .remove()
	•	Creating animations using .hide(), .show(), .fadeIn(), .slideToggle()
	•	Tip: Mixing knowledge (combining JavaScript + jQuery + CSS together)

⸻

Key Concepts Learned
	•	jQuery simplifies DOM manipulation compared to vanilla JavaScript.
	•	The $() function is the main entry point to select and manipulate elements.
	•	Events and animations can be implemented with very few lines of code.
	•	Minified files improve website loading speed and performance.

⸻

Example Practice

$("h1").click(function(){
    $(this).css("color", "blue");
});

$("button").click(function(){
    $("p").slideToggle();
});


⸻

Key Takeaway

jQuery is a fast and concise library that simplifies DOM manipulation, event handling, and animations, allowing developers to build interactive web pages more efficiently.

------

Here is your copy-paste ready learning log for these completed modules.

⸻

Day 27 – Express.js Fundamentals

Topics Covered
	•	What Express.js is and why it is used in Node.js applications
	•	Creating the first server using Express
	•	Understanding HTTP requests (GET, POST, etc.)
	•	Using Postman to test API endpoints
	•	Introduction to Middleware and how it works in the request-response cycle
	•	Creating custom middleware functions
	•	Building the Secrets Access Project to practice routing and middleware
	•	Tip: How to solidify knowledge by practicing real small projects

⸻

Key Concepts Learned
	•	Express simplifies backend development by handling routing and server setup easily.
	•	Middleware functions run between request and response to process data or perform checks.
	•	Postman helps test backend APIs without needing a frontend.
	•	Express servers listen on ports and handle routes using app.get() and app.post().

⸻

Example Practice

const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Server is running");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});


⸻

Key Takeaway

Express.js provides a simple and powerful way to build backend servers, manage routes, and use middleware to control request processing efficiently.

⸻

Here is your **copy-paste ready learning log** for the EJS modules.

---

## Day 28 – EJS Templating (Express.js)

### Topics Covered

* What **EJS (Embedded JavaScript)** is and why it is used
* Understanding **EJS tags** and their purposes
* Passing **dynamic data from Express to EJS templates**
* Rendering pages using `res.render()`
* Creating reusable and dynamic HTML views using templates

---

### Key Concepts Learned

* EJS allows embedding JavaScript inside HTML to create dynamic webpages.
* `<%= %>` is used to output values to the page.
* `<% %>` is used for logic (loops, conditions).
* Data can be passed from the server to templates using:

  ```javascript
  res.render("index", { name: "Bramjot" });
  ```
* Templating helps separate backend logic from frontend design.

---

### Example Practice

```javascript
app.get("/", function(req, res){
    res.render("index", { day: "Monday" });
});
```

**index.ejs**

```html
<h1>Today is <%= day %></h1>
```

---

### Key Takeaway

EJS enables dynamic server-rendered webpages by combining HTML with JavaScript logic, making Express applications more flexible and scalable.

---

### Day 29 (Dicee Project)

**Topics Covered**

* Creating an external JavaScript file and linking it to HTML
* Generating random numbers using `Math.random()` and `Math.floor()`
* Selecting elements using:

  * `getElementsByClassName()`
  * `querySelector()`
* Dynamically changing image sources using JavaScript
* Using conditional statements (`if / else`) to determine a winner
* Updating page content dynamically using `innerHTML`

**What I Built**

* A Dicee game where:

  * Two dice roll randomly when the page loads
  * Dice images update automatically
  * The heading displays:

    * *Player 1 Wins*
    * *Player 2 Wins*
    * *Draw*

**Key Learnings**

* Difference between modifying **attributes** (`setAttribute`) and **element content** (`innerHTML`)
* Importance of selecting the correct DOM element before modifying it
* How JavaScript controls HTML elements dynamically

**Next Step**

* Add a **Refresh / Roll Dice button**
* Improve UI styling and animations
* Upload the project to GitHub for portfolio practice

🔗 Project Repository:
https://github.com/bramjot14/dice-game-javascript

---

Day 30 – EJS Partials and Layouts

Topics Covered
	•	Understanding EJS partials and why they are used
	•	Creating reusable components such as header, footer, and navbar
	•	Using <%- include("filename") %> to insert partials inside templates
	•	Concept of layouts to maintain consistent structure across pages
	•	Improving project structure by separating repeated UI sections

⸻

Key Concepts Learned
	•	Partials help avoid repeating the same HTML code in multiple pages.
	•	Common sections like navigation bars and footers should be stored as partial files.
	•	Layouts make websites easier to maintain and update because changes in one partial reflect everywhere.
	•	EJS templates become cleaner and more modular using partials.

⸻

Example Practice

<!-- index.ejs -->
<%- include("partials/header") %>

<h1>Welcome to my website</h1>

<%- include("partials/footer") %>


⸻

Key Takeaway

Using EJS partials and layouts improves code organization, reusability, and maintainability, making Express applications easier to scale and manage.

⸻

---

## Day 31 – Simon Game Challenge Completed

---

### ✅ What I Completed

* Built the full **Simon Game** using HTML, CSS, and JavaScript.
* Implemented game logic including:

  * Random sequence generation
  * User input detection
  * Sound effects for each button
  * Animation effects on click
  * Level progression system
  * Game over logic with restart feature

---

### 🧠 What I Learned

* How to use **event listeners** effectively.
* Managing state with arrays (`gamePattern`, `userClickedPattern`).
* Comparing two arrays step-by-step for validation.
* Using `setTimeout()` for sequence animation timing.
* Working with **jQuery** for DOM manipulation and animations.
* Understanding game flow control and resetting variables properly.

---

### ⚡ Challenges Faced

* Matching user input with the correct sequence.
* Handling game restart without page refresh.
* Timing issues between animation and sound.

---

### 💡 Reflection

This project improved my understanding of:

* JavaScript logic building
* DOM manipulation
* Event-driven programming
* Writing cleaner and structured code

It strengthened my confidence in building interactive frontend projects.

---

🔗 Project Repository:
https://github.com/bramjot14/simon-game-javascript

---

Here’s a short and clean Learning Log for Section 28 (APIs):

⸻

📘 Day 32- Application Programming Interfaces (APIs)

🔹 Topics Covered:
	•	Introduction to APIs
	•	Structuring API Requests

🧠 What I Learned:
	•	APIs allow applications to communicate with each other.
	•	REST APIs commonly use HTTP methods like GET, POST, PUT, DELETE.
	•	API requests consist of:
	•	Endpoint (URL)
	•	HTTP Method
	•	Headers
	•	Body (optional)
	•	Data is commonly transferred in JSON format.
	•	Proper request structuring is important for successful communication with servers.

💡 Key Takeaway:

Understanding how to structure API requests is essential for building full-stack applications, especially when connecting React frontends to Express/Node backends.

⸻

Day 33 - JSON Module (Node.js)

⸻

Today I learned about the JSON. I understood how JSON (JavaScript Object Notation) is used to store and exchange data between client and server.

🔹 Key Concepts Learned:
	•	What JSON format looks like (key–value pairs).
	•	Difference between JavaScript objects and JSON.
	•	Using JSON.stringify() to convert a JavaScript object into a JSON string.
	•	Using JSON.parse() to convert a JSON string back into a JavaScript object.
	•	How JSON is commonly used in APIs to send and receive data.

💡 What I Understood:

JSON is very important in full-stack development because it helps in transferring structured data between frontend and backend. It is lightweight and easy to read.

⸻


