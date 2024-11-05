const express = require('express');
const app = express();
const blogRoutes = require('./routes/ blogRoutes');

// Middleware
app.use(express.json());

//Routes
app.use('/api', blogRoutes);

//Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Hello, the server is up and running!');
  });