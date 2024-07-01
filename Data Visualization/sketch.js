let table;
let data = [];

function preload() {
    table = loadTable('Population of the Citizens.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600, 600);  // adjusting canva size
  parseData();
  drawPieChart();
}

function parseData() {
  for (let i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    let category = row.getString('Citizens');
    let value = row.getNum('Percentage');
    data.push({ category: category, value: value });
  }
}

function drawPieChart() {
  let total = data.reduce((sum, item) => sum + item.value, 0);
  let angleStart = 0;
  let colors = [
    color(0, 0, 255), // blue
    color(0, 255, 0), // green
    color(241, 4, 223),  // pink
    color(241, 140, 4), // orange
    color(252, 5, 5 ), // red
    color(252, 218, 5 ), // yellow
  ];

  for (let i = 0; i < data.length; i++) {
    let angleEnd = angleStart + (data[i].value / total) * TWO_PI;
    fill(colors[i % colors.length]);
    arc(width / 2, height / 2, 400, 400, angleStart, angleEnd);

    // Calculate the position of the text
    let midAngle = angleStart + (angleEnd - angleStart) / 2;
    let x = width / 2 + cos(midAngle) * 200 / 1.5;
    let y = height / 2 + sin(midAngle) * 200 / 1.5;

// Display the Citizens and percentage
fill(0);
noStroke();
textAlign(CENTER, CENTER);

// Display the citizens
text(data[i].category, x, y - 10);

// Display the percentage
text((data[i].value).toFixed(2) + '%', x, y + 10);
    angleStart = angleEnd;
  }
}