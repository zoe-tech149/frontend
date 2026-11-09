# Student Result 

A simple student results webpage built with **HTML, CSS, and JavaScript**. The project displays a student's subject marks, calculates the total marks, and determines the average.

## Features

- Displays the student's name and subject marks.
- Calculates the total marks across three subjects.
- Calculates and rounds the average mark.
- Displays JavaScript values dynamically using the DOM.
- Keeps student data and calculations separate from the HTML structure.

## Technologies

- HTML5
- CSS3
- JavaScript

## Demo

![Student Result](student-result.PNG)


## Key Concepts Practiced

- **Variables:** Storing student information and subject marks using `const`.
- **DOM selection:** Selecting HTML elements with `document.querySelector()`.
- **DOM manipulation:** Displaying values using `textContent`.
- **Arithmetic operators:** Adding marks and dividing the total to calculate an average.
- **Expressions:** Combining values to produce calculated results.
- **Data dependencies:** Using the total marks to calculate the average.
- **Semantic HTML:** Structuring subject results using a table, caption, table header, and table body.

## How It Works

Student information and marks are stored in JavaScript variables. The program adds the three subject marks to calculate the total, then divides the total by three and rounds the result to the nearest integer.

The calculated values are assigned to their corresponding HTML elements using `textContent`.

## Example

| Subject | Mark |
|---|---:|
| Accounting | 86 |
| Mathematics | 76 |
| Physical Sciences | 92 |
| **Total** | **254** |
| **Average** | **85** |

## Testing

The program was tested by changing student data in `script.js` and checking the displayed results in the browser.

The total and average calculations execute when the page loads. Changes to the JavaScript values require a page reload to display the newly calculated results.

## Learning Objective

To understand how JavaScript variables store and reuse values, how arithmetic expressions produce calculated results, and how JavaScript connects those results to HTML elements.