# Arcade High Score Classifier

## Problem

Arcade games reward players with achievement rankings based on their scores.

This program classifies a player's score into an achievement tier and displays an encouraging message. It also validates the score to ensure that only non-negative integers are accepted.

## Specifications

- Accept a player's score.
- Reject negative numbers and decimal values.
- Classify valid scores into five achievement tiers:

Score Range| Achievement
-----------|------------
0–999| Bronze
1,000–4,999| Silver
5,000–9,999| Gold
10,000–19,999| Platinum
20,000+| Legendary

- Display an encouraging message for each achievement.
- Display an error message when the score is invalid.

## Concepts Practised

- "if", "else if", and "else" conditional statements.
- Nested conditional statements.
- Logical operators ("||").
- Boolean conditions and comparisons.
- Input validation using "Number.isInteger()".
- Simplifying conditional expressions by removing redundant comparisons.
- Testing boundary values.

## How to Run

1. Make sure Node.js is installed.

2. Open the project directory in your terminal.

3. Run:
   
   node index.js

4. Change "playerScore" in "index.js" to test different values.

## Future Improvements

- Accept scores through interactive terminal input.
- Refactor the classification logic into reusable functions.
- Add automated tests for score validation and ranking boundaries.