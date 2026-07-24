const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint: add two numbers
// Usage: /add?a=5&b=3
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.send('Error: please provide valid numbers using query parameters a and b.');
  }
  res.send(`The sum of ${a} and ${b} is: ${a + b}`);
});

// GET endpoint: subtract two numbers
// Usage: /subtract?a=5&b=3
app.get('/subtract', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.send('Error: please provide valid numbers using query parameters a and b.');
  }
  res.send(`${a} minus ${b} is: ${a - b}`);
});

// GET endpoint: multiply two numbers
// Usage: /multiply?a=5&b=3
app.get('/multiply', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.send('Error: please provide valid numbers using query parameters a and b.');
  }
  res.send(`${a} times ${b} is: ${a * b}`);
});

// GET endpoint: divide two numbers
// Usage: /divide?a=6&b=3
app.get('/divide', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.send('Error: please provide valid numbers using query parameters a and b.');
  }
  if (b === 0) {
    return res.send('Error: cannot divide by zero.');
  }
  res.send(`${a} divided by ${b} is: ${a / b}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});