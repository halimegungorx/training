const mongoose = require("mongoose");
constvalidator = require("validator");

// when working with remote server then add these 2 parameters as well {useCreateIndex : true, useFindAndModify : true}
mongoose
  .connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection successful!"))
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    // lowercase: true,
    uppercase: true,
    trim : true,
    minlength:2,
    maxlength:30,
  },
  type: {
    type: String,
    enum : ["frontend", "backend","database"]
  },
  lec:{
    type : Number,
    validate(value){
      if(value<0){
        throw new Error("The number of lectures can not be in negative range");
      }
    }
  },
  published: Boolean,
  author: String,
  date: {
    type: Date,
    default: Date.now,
  },
  email :  {
    type: String,
    required: true,
    unique: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Email is invalid");
      }
    }
}});

const model = mongoose.model("model", schema);

const createDocument = async () => {
  try {
    // const htmlSchema = new model({
    //   name: "html",
    //   type: "frontend",
    //   lec: 30,
    //   published: true,
    //   author: "Halime",
    // });

    // const cssSchema = new model({
    //   name: "CsS",
    //   type: "frontend",
    //   lec: 3,
    //   published: true,
    //   author: "Halime",
    // });

    // const jsSchema = new model({
    //   name: "javaScript",
    //   type: "frontend",
    //   lec: 25,
    //   published: true,
    //   author: "Halime",
    // });

    // const bootstrapSchema = new model({
    //   name: "bootstrap",
    //   type: "frontend",
    //   lec: 25,
    //   published: true,
    //   author: "Halime",
    // });

    // const javaSchema = new model({
    //   name: "java",
    //   type: "backend",
    //   lec: 21,
    //   published: true,
    //   author: "Halime",
    // });
    const pythonSchema = new model({
      name: "java",
      type: "backend",
      lec: 21,
      published: true,
      author: "Halime",
      email : "python@gmail.com",
    });

    // const nodeSchema = new model({
    //   name: "node",
    //   type: "backend",
    //   lec: 30,
    //   published: true,
    //   author: "Halime",
    // });

  
    // const mongoseeSchema = new model({
    //   name: "     mongosee      JS",
    //   type: "database",
    //   lec: 55,
    //   published: true,
    //   author: "Halime",
    // });

    const result = await model.insertMany([pythonSchema]);
    console.log(result);
  } 
  catch (err) {
    console.log(err);
  }
};

createDocument();

const getDocument = async() => {
  try{
    //$gt used for greater than
    //const result = await model.find({lec : {$gt : 50}}).select({name : 1})//.limit(1);
    
    //$gte used for greater than or equal to
    //const result = await model.find({lec : {$gte : 50}}).select({name : 1})//.limit(1);
    
    //$lt used for less than
    //const result = await model.find({lec : {$lt : 50}}).select({name : 1})//.limit(1);
    
    //$lte used for less than or equal to
    //const result = await model.find({lec : {$lte : 50}}).select({name : 1})//.limit(1);
    
    //$in Matches any of the values specified in an array.
    //const result = await model.find({type :{$in : ["frontend","backend"]}}).select({name : 1})//.limit(1);
   
    //$nin Matches none of the values specified in an array.
    //const result = await model.find({type :{$in : ["frontend","backend"]}}).select({name : 1})//.limit(1);
   
    //$or if either of conditions are matched then that document will be displayed
    //const result = await model.find({$or : [{type:"database"},{author:"Halime"}]}).select({name : 1})//.limit(1);
   
    //$and if both of conditions are matched then that document will be displayed
    //const result = await model.find({$and : [{type:"database"},{author:"Halime"}]}).select({name : 1})//.limit(1);
   
    //Query Methods
   
    // when you want to count no of documents
    //const result = await model.find({$or : [{type:"database"},{author:"Halime"}]}).select({name : 1}).countDocuments();//.limit(1);
   
    // when you want to sort data in ascending order
    const result = await model.find({$or : [{type:"database"},{author:"Halime"}]}).select({name : 1}).sort({name:1})//.limit(1);
   
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
  
}

getDocument();

const updateDocument = async(_id) => {
  try{
    const result = await model.findByIdAndUpdate({_id}, {
      $set: {
        name: "javascript ES6 2015"
      }
    }, {new :true,useFindAndModify: false})
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
}
//updateDocument("645cb5a21c84694401bfa874");

const deleteDocument = async(_id) => {
  try{
    const result = await model.findByIdAndDelete({_id});
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
}

// deleteDocument("645cb5a21c84694401bfa873");