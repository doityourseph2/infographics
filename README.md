# Meal Diary Visualization

An interactive radial visualization that displays meal patterns of five individuals over six days, built with p5.js.

## Overview

This visualization presents a detailed view of eating habits, timing, and food choices for five people from Saturday to Thursday. The data is displayed in a circular format, with time represented radially (24-hour clock) and days shown as concentric circles.

## Features

### Time Display

- 24-hour clock layout with hour markers (0:00 to 23:00)
- Half-hour markers for precise time readings
- Concentric circles representing different days (Saturday to Thursday)

### Meal Data Visualization

- Each dot represents a meal
- Dot colors indicate food categories:
  - Protein (Yellow)
  - Carbs (Green)
  - Vegetables (Blue)
  - Mixed Meals (Red)
  - Fruits (Light Green)
- Connecting lines between meals show eating patterns across days
- Each person's data is represented by a unique line color

### Interactive Elements

- Toggle visibility of individual people's data by clicking their names
- Hover over meal dots to see detailed information:
  - Person's name
  - Food eaten
  - Exact time of meal

### Legend System

- Top right: Food category legend with color coding
- Bottom: Interactive legend for toggling individual people's data
  - Active/inactive states visually indicated
  - Click to show/hide specific person's data

## Data Structure

The visualization tracks:

- 5 people's meal patterns
- 6 days (Saturday through Thursday)
- 3 meals per day (Breakfast, Lunch, Dinner)
- Food categories
- Specific meal times (in decimal format)
- Missing meals (shown as gaps)

## Technical Implementation

Built using:

- p5.js for visualization
- Custom data structure for meal tracking
- Interactive mouse events for user engagement
- Responsive layout with dynamic positioning
- Color-coded system for easy pattern recognition

## Usage

1. View the full 24-hour pattern of meals
2. Click on names in the bottom legend to show/hide specific people's data
3. Hover over dots to see meal details
4. Observe patterns through connecting lines
5. Use the food category legend to identify meal types

## Data Representation

- Radial Layout: Time of day (24-hour clock)
- Concentric Circles: Days of the week
- Dots: Individual meals
- Lines: Connections between same meal types across days
- Colors: Food categories and person identification

## Purpose

This visualization helps analyze:

- Meal timing patterns
- Food choice variations
- Eating habit consistency
- Missing meal patterns
- Individual vs. group eating behaviors

## Installation

1. Clone the repository
2. Open `index.html` in a web browser
3. No additional dependencies required

## Credits

Created for Information Visualization course
Data collected from real meal tracking of five individuals
