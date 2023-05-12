const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/students-api', {
   // useCreateIndex: true,
   // useNewUrlParse: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
}).then(()=> {
    console.log("Connection Succesful");
}).catch((err)=> {
    console.log("Connection failed!");
})