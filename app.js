const { server } = require("./server.js");
const config = require("./config.json");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes', () => {
    console.log('connected to mongodb')
});


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
