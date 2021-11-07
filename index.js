 const app = require("./app");
 const PORT = process.env.PORT || 3000;

 app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
 });

// const express = require('express');
// const app = new express();
// const cors = require('cors');

// app.use(cors()); // cors middleware
// app.get('/', function(req, res) { // serve main path as static file
//   res.send('Hello World');
// });


// app.listen(process.env.PORT || 3000,
//   () => console.log("Server is running..."));


