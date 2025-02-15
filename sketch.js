let data = {
  people: [
    { 
      name: 'Aliyah',
      color: '#674EA7',
      meals: {
        saturday: {
          breakfast: null, // Fasting
          lunch: null, // Fasting
          dinner: { time: 19.30, category: 'Carbs', food: 'Crispy Noodle' }
        },
        sunday: {
          breakfast: null, // No breakfast
          lunch: { time: 15.00, category: 'Mixed', food: 'Tacos and Burrito' },
          dinner: { time: 18.00, category: 'Mixed', food: 'Hotpot' }
        },
        monday: {
          breakfast: null, // No breakfast
          lunch: { time: 14.00, category: 'Mixed', food: 'Chicken Leg, Eggs, Rice and Chilli' },
          dinner: null // No dinner
        },
        tuesday: {
          breakfast: { time: 10.00, category: 'Mixed', food: 'Fried Rice, Sambal Fish' },
          lunch: null, // No lunch
          dinner: { time: 19.30, category: 'Mixed', food: 'Ramen, Steak, Egg' }
        },
        wednesday: {
          breakfast: null, // No breakfast
          lunch: { time: 15.00, category: 'Mixed', food: 'Kimchi Fried Rice, Steak, Egg' },
          dinner: { time: 22.30, category: 'Mixed', food: 'Cheesy Stack Burger with Fries' }
        },
        thursday: {
          breakfast: null, // No breakfast
          lunch: { time: 14.00, category: 'Carbs', food: 'Cheese Pancake' },
          dinner: { time: 18.00, category: 'Mixed', food: 'Ramen, Egg, Salmon' }
        }
      }
    },
    { 
      name: 'Yu Tong',
      color: '#a64d79',
      meals: {
        saturday: {
          breakfast: null, // Didn't eat breakfast
          lunch: { time: 13.52, category: 'Mixed', food: 'Rice with fish, veggie & beancurd' },
          dinner: { time: 18.34, category: 'Protein', food: 'Salmon Don' }
        },
        sunday: {
          breakfast: null, // No breakfast
          lunch: { time: 14.24, category: 'Carbs', food: 'Instant noodles' },
          dinner: { time: 19.02, category: 'Mixed', food: 'Meat bun' }
        },
        monday: {
          breakfast: null, // No breakfast
          lunch: { time: 15.04, category: 'Mixed', food: 'Rice with scrambled egg & tomato, veggies & duck' },
          dinner: { time: 20.36, category: 'Fruits', food: 'Cherries' }
        },
        tuesday: {
          breakfast: null, // No breakfast
          lunch: { time: 13.37, category: 'Mixed', food: 'Meat bun' },
          dinner: { time: 19.41, category: 'Mixed', food: 'Fried rice' }
        },
        wednesday: {
          breakfast: null, // No breakfast
          lunch: { time: 14.35, category: 'Carbs', food: 'Instant noodles' },
          dinner: { time: 20.47, category: 'Fruits', food: 'Cherries' }
        },
        thursday: {
          breakfast: { time: 9.37, category: 'Carbs', food: 'Sesame buns' },
          lunch: { time: 14.18, category: 'Mixed', food: 'Dumpling' },
          dinner: { time: 19.15, category: 'Mixed', food: 'Beef lasagne' }
        }
      }
    },
    { 
      name: 'Yvette',
      color: '#E78DB9',
      meals: {
        saturday: {
          breakfast: { time: 8.30, category: 'Mixed', food: 'Creamy mushroom bread and milk' },
          lunch: { time: 13.00, category: 'Mixed', food: 'Shrimp fried rice' },
          dinner: { time: 19.00, category: 'Mixed', food: 'Rice with salmon and mixed veggies' }
        },
        sunday: {
          breakfast: null,
          lunch: { time: 12.00, category: 'Mixed', food: 'Noodles with sesame sauce, cabbage and gyoza' },
          dinner: { time: 19.00, category: 'Mixed', food: 'Fried rice with curry, fried ebi, mixed veggies' }
        },
        monday: {
          breakfast: { time: 11.00, category: 'Carbs', food: 'Chocolate waffles and iced tea' },
          lunch: null,
          dinner: { time: 20.00, category: 'Mixed', food: 'Fish soup with rice' }
        },
        tuesday: {
          breakfast: { time: 8.00, category: 'Mixed', food: 'Pork floss bread and milk' },
          lunch: { time: 13.30, category: 'Carbs', food: 'Carbonara pasta' },
          dinner: { time: 20.00, category: 'Mixed', food: 'Gyoza' }
        },
        wednesday: {
          breakfast: { time: 8.00, category: 'Carbs', food: 'Muffin' },
          lunch: { time: 13.00, category: 'Mixed', food: 'Bibimbap' },
          dinner: null
        },
        thursday: {
          breakfast: { time: 8.00, category: 'Mixed', food: 'Milk and apple' },
          lunch: { time: 13.00, category: 'Mixed', food: 'Fishball noodles' },
          dinner: { time: 18.00, category: 'Mixed', food: 'Taiwanese fried chicken with rice' }
        }
      }
    },
    { 
      name: 'Xuan',
      color: '#69A84F',
      meals: {
        saturday: {
          breakfast: { time: 10.00, category: 'Mixed', food: 'Water' },
          lunch: { time: 11.45, category: 'Mixed', food: 'Shake Stack burger with cheese fries' },
          dinner: { time: 18.00, category: 'Mixed', food: 'Winter melon soup and stir fried beef' }
        },
        sunday: {
          breakfast: { time: 10.00, category: 'Mixed', food: 'Water' },
          lunch: { time: 11.08, category: 'Mixed', food: 'Grilled chicken pesto and potted salmon dip' },
          dinner: { time: 18.00, category: 'Mixed', food: 'Asam fish head, ee mian, salted egg squid' }
        },
        monday: {
          breakfast: { time: 9.15, category: 'Mixed', food: 'Roasted nut bar' },
          lunch: { time: 11.55, category: 'Mixed', food: 'Scrambled egg on noodles with Korean spicy chicken' },
          dinner: { time: 20.50, category: 'Mixed', food: 'Beef pepper rice' }
        },
        tuesday: {
          breakfast: { time: 9.15, category: 'Carbs', food: 'Wang Wang biscuit' },
          lunch: { time: 12.45, category: 'Mixed', food: 'Hamburg and sunny side up' },
          dinner: { time: 19.00, category: 'Mixed', food: 'Porridge with pan fried fish and stir fried cabbage' }
        },
        wednesday: {
          breakfast: { time: 11.00, category: 'Mixed', food: 'Water' },
          lunch: { time: 12.45, category: 'Mixed', food: 'Lotus root soup, cod, rice' },
          dinner: { time: 18.30, category: 'Carbs', food: 'Mee hoon kueh' }
        },
        thursday: {
          breakfast: { time: 9.15, category: 'Carbs', food: 'Wang Wang biscuit' },
          lunch: { time: 12.30, category: 'Mixed', food: 'Braised pork rice' },
          dinner: { time: 17.30, category: 'Mixed', food: 'Mala' }
        }
      }
    },
    { 
      name: 'Joseph',
      color: '#ea9f02',
      meals: {
        saturday: {
          breakfast: { time: 10.21, category: 'Mixed', food: 'Nescafe, Instant Coffee' },
          lunch: { time: 12.33, category: 'Mixed', food: 'Pineapple Fried Rice' },
          dinner: { time: 19.21, category: 'Mixed', food: 'Winter Melon Soup w/ Brown Rice' }
        },
        sunday: {
          breakfast: { time: 11.45, category: 'Carbs', food: 'Chee Cheong Fun' },
          lunch: { time: 15.23, category: 'Mixed', food: 'Rice Dumplings' },
          dinner: { time: 20.12, category: 'Mixed', food: 'Beef Soup with Kway Teow' }
        },
        monday: {
          breakfast: { time: 9.45, category: 'Mixed', food: 'Nescafe, Instant Coffee' },
          lunch: { time: 12.36, category: 'Mixed', food: 'Nasi Briyani' },
          dinner: { time: 18.24, category: 'Mixed', food: 'Mee Pok' }
        },
        tuesday: {
          breakfast: { time: 8.34, category: 'Mixed', food: 'Nescafe, Instant Coffee' },
          lunch: { time: 10.41, category: 'Mixed', food: 'Steamed Dumplings' },
          dinner: { time: 20.31, category: 'Mixed', food: 'Nasi Padang' }
        },
        wednesday: {
          breakfast: { time: 8.12, category: 'Mixed', food: 'Egg Sandwich' },
          lunch: { time: 13.12, category: 'Mixed', food: 'Chicken Rice' },
          dinner: { time: 19.26, category: 'Mixed', food: 'Ban Mian' }
        },
        thursday: {
          breakfast: { time: 9.13, category: 'Mixed', food: 'Tuna Sandwich' },
          lunch: { time: 13.05, category: 'Vegetables', food: 'Pumpkin Salad' },
          dinner: { time: 17.23, category: 'Mixed', food: 'Fried and Steamed Dumplings' }
        }
      }
    }
  ],
  foodCategories: {
    'Protein': '#FFD93D',
    'Carbs': '#6BCB77',
    'Vegetables': '#4D96FF',
    'Mixed': '#FF6B6B',
    'Fruits': '#95CD41'
  },
  days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
};

let centerX, centerY, radius;
let hoveredMeal = null;
let visiblePeople = new Set(data.people.map(p => p.name)); // Initially all visible

function setup() {
  createCanvas(800, 890);
  angleMode(DEGREES);
  
  centerX = width / 2;
  centerY = height / 2;
  radius = min(width, height) * 0.4;
}

function draw() {
  background(255);
  drawClockFace();
  drawDayLabels();
  drawMealData();
}

function drawClockFace() {
  // Draw outer circle
  noFill();
  stroke(200);
  strokeWeight(1);
  circle(centerX, centerY, radius * 2);
  
  // Draw concentric day circles
  data.days.forEach((day, index) => {
    let dayRadius = radius - (index * 20);
    push();
    noFill();
    stroke(220);
    strokeWeight(0.5);
    circle(centerX, centerY, dayRadius * 2);
    pop();
  });
  
  // Draw hour markers and labels
  for (let i = 0; i < 24; i++) {
    let angle = map(i, 0, 24, -90, 270);
    
    // Draw main hour markers
    let x1 = centerX + cos(angle) * radius;
    let y1 = centerY + sin(angle) * radius;
    let x2 = centerX + cos(angle) * (radius - 10);
    let y2 = centerY + sin(angle) * (radius - 10);
    strokeWeight(1);
    stroke(150);
    line(x1, y1, x2, y2);
    
    // Draw half-hour markers
    let halfHourAngle = map(i + 0.5, 0, 24, -90, 270);
    let x3 = centerX + cos(halfHourAngle) * radius;
    let y3 = centerY + sin(halfHourAngle) * radius;
    let x4 = centerX + cos(halfHourAngle) * (radius - 5);
    let y4 = centerY + sin(halfHourAngle) * (radius - 5);
    strokeWeight(0.5);
    line(x3, y3, x4, y4);
    
    // Add hour labels
    push();
    translate(
      centerX + cos(angle) * (radius + 20),
      centerY + sin(angle) * (radius + 20)
    );
    rotate(angle + 90);
    noStroke();
    fill(100);
    textAlign(CENTER);
    textSize(12);
    text(i + ':00', 0, 0);
    pop();
  }
}

function drawDayLabels() {
  data.days.forEach((day, index) => {
    let dayRadius = radius - (index * 20);
    
    // Draw concentric circles for each day
    push();
    noFill();
    stroke(220);
    strokeWeight(1);
    circle(centerX, centerY, dayRadius * 2);
    
    // Add day label
    fill(80);
	strokeWeight(6);
	stroke(255);
	strokeJoin(ROUND);
    textAlign(CENTER);
    textSize(10);
    text(day, centerX, centerY - dayRadius + 3);
    pop();
  });
}

function drawMealData() {
  data.people.forEach((person, personIndex) => {
    if (!visiblePeople.has(person.name)) return; // Skip if person is hidden
    
    data.days.forEach((day, dayIndex) => {
      let dayRadius = radius - (dayIndex * 20);
      let dayMeals = person.meals?.[day.toLowerCase()];
      
      // Only process if the person has meals data for this day
      if (dayMeals) {
        Object.entries(dayMeals).forEach(([mealType, meal]) => {
          // Skip if meal is null or undefined
          if (!meal) return;
          
          let angle = map(meal.time, 0, 24, -90, 270);
          let x = centerX + cos(angle) * dayRadius;
          let y = centerY + sin(angle) * dayRadius;
          
          // Draw meal marker
          push();
          noStroke();
          fill(data.foodCategories[meal.category]);
          circle(x, y, 8);
          
          // Draw connecting line to previous day's same meal
          if (dayIndex > 0) {
            let prevDay = data.days[dayIndex - 1].toLowerCase();
            let prevMeal = person.meals?.[prevDay]?.[mealType];
            
            // Only draw connection if both meals exist
            if (prevMeal) {
              let prevAngle = map(prevMeal.time, 0, 24, -90, 270);
              let prevX = centerX + cos(prevAngle) * (dayRadius + 20);
              let prevY = centerY + sin(prevAngle) * (dayRadius + 20);
              
              stroke(person.color);
              strokeWeight(1);
              line(x, y, prevX, prevY);
            }
          }
          pop();
        });
      }
    });
  });
  
  // To-do: Fix tooltip functionality 

  // Draw tooltip if meal is hovered ( NOT WORKING )
  /* if (hoveredMeal) {
    push();
    // Calculate text dimensions
    textSize(12);
    let personWidth = textWidth(hoveredMeal.person);
    let foodWidth = textWidth(hoveredMeal.food);
    let timeStr = `${Math.floor(hoveredMeal.time)}:${String(Math.round((hoveredMeal.time % 1) * 60)).padStart(2, '0')}`;
    let timeWidth = textWidth(timeStr);
    let tooltipWidth = max(personWidth, foodWidth, timeWidth) + 20;
    
    // Position tooltip to avoid edge of screen
    let tooltipX = min(max(hoveredMeal.x, tooltipWidth/2 + 10), width - tooltipWidth/2 - 10);
    let tooltipY = hoveredMeal.y - 40;
    
    // Draw semi-transparent black background
    fill(0, 0, 0, 220);
    noStroke();
    rectMode(CENTER);
    rect(tooltipX, tooltipY, tooltipWidth + 20, 60, 5);
    
    // Draw white border
    stroke(255);
    strokeWeight(0.1);
    noFill();
    rect(tooltipX, tooltipY, tooltipWidth + 20, 60, 5);
    
    // Draw text in white
    fill(1);
    noStroke();
    textAlign(CENTER, CENTER);
    
    // Person name
    textStyle(BOLD);
    textSize(12);
    text(hoveredMeal.person, tooltipX, tooltipY - 20);
    
    // Food name
    textStyle(NORMAL);
    textSize(11);
    text(hoveredMeal.food, tooltipX, tooltipY);
    
    // Time
    textSize(10);
    text(timeStr, tooltipX, tooltipY + 20);
    
    pop();
  }*/
  
  drawPeopleLegend();
  drawLegend();
} 

function drawPeopleLegend() {
  push();
  let totalWidth = data.people.reduce((acc, person) => {
    return acc + textWidth(person.name) + 60;
  }, 0);
  
  let startX = centerX - totalWidth / 2;
  let legendY = height - 30;
  let currentX = startX;
  
  data.people.forEach((person, index) => {
    let isVisible = visiblePeople.has(person.name);
    
    // Draw background for clickable area
    noStroke();
    fill(isVisible ? 255 : 240);
    rect(currentX - 5, legendY - 12, textWidth(person.name) + 45, 24, 5);
    
    // Draw line sample
    stroke(person.color);
    strokeWeight(2);
    if (!isVisible) {
      stroke(200); // Gray out if not visible
    }
    line(currentX, legendY, currentX + 20, legendY);
    
    // Draw name
    noStroke();
    fill(isVisible ? 0 : 150);
    textAlign(LEFT, CENTER);
    textSize(12);
    text(person.name, currentX + 30, legendY);
    
    currentX += textWidth(person.name) + 60;
  });
  pop();
}

function drawLegend() {
  // Position legend in top right corner with padding
  let legendX = width - 150;
  let legendY = 50;
  let spacing = 25;
  
  // Draw legend background
  push();
  fill(255, 255, 255, 220);
  noStroke();
  rect(legendX - 10, legendY - 30, 140, 
       (Object.keys(data.foodCategories).length + 2) * spacing);
  pop();
  
  // Food Categories Section
  push();
  fill(0);
  textSize(14);
  textStyle(BOLD);
  text('Food Categories', legendX, legendY);
  
  // Food category entries
  textStyle(NORMAL);
  textSize(12);
  Object.entries(data.foodCategories).forEach(([category, color], index) => {
    let yPos = legendY + 20 + (index * spacing);
    
    // Draw color dot
    fill(color);
    noStroke();
    circle(legendX + 10, yPos + 2, 8);
    
    // Draw category name
    fill(0);
    textAlign(LEFT, CENTER);
    text(category, legendX + 30, yPos + 2);
  });
  pop();
}

// Add mouse moved handler to check for hover
function mouseMoved() {
  hoveredMeal = null;
  
  // Check each person's meals for hover
  data.people.forEach((person) => {
    if (!visiblePeople.has(person.name)) return; // Skip if person is hidden
    
    data.days.forEach((day, dayIndex) => {
      let dayRadius = radius - (dayIndex * 20);
      let dayMeals = person.meals?.[day.toLowerCase()];
      
      if (dayMeals) {
        Object.entries(dayMeals).forEach(([mealType, meal]) => {
          if (!meal) return;
          
          let angle = map(meal.time, 0, 24, -90, 270);
          let x = centerX + cos(angle) * dayRadius;
          let y = centerY + sin(angle) * dayRadius;
          
          // Check if mouse is within 10 pixels of meal dot
          if (dist(mouseX, mouseY, x, y) < 10) {
            hoveredMeal = {
              person: person.name,
              food: meal.food,
              time: meal.time,
              x: x,
              y: y
            };
          }
        });
      }
    });
  });
  
  // Redraw if hover state changed
  redraw();
}

// Add mouse clicked handler for toggling visibility
function mouseClicked() {
  let legendY = height - 30;
  
  // Calculate legend positions
  let totalWidth = data.people.reduce((acc, person) => {
    return acc + textWidth(person.name) + 60;
  }, 0);
  
  let startX = centerX - totalWidth / 2;
  let currentX = startX;
  
  // Check if click is in legend area
  if (Math.abs(mouseY - legendY) < 15) {
    data.people.forEach((person) => {
      let nameWidth = textWidth(person.name);
      let endX = currentX + nameWidth + 40;
      
      if (mouseX >= currentX && mouseX <= endX) {
        if (visiblePeople.has(person.name)) {
          visiblePeople.delete(person.name);
        } else {
          visiblePeople.add(person.name);
        }
        redraw();
      }
      
      currentX += nameWidth + 60;
    });
  }
}

