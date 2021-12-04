const mongoose = require("mongoose");
// const { schema } = require('./user');
const schema = mongoose.Schema;
const movieSchema = new schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  Year: {
    type: Number,
  },
  Rated: {
    type: String,
  },
  Runtime: {
    type: String,
  },
  Actor:{
      type:String
  },
  Plot:{
      type:String
  },
  Poster:{
      type:String
  },
  Ratings:[{
      Source:{
          type:String
      },
      Value:{
         type: String
      }

  }],
  imdbRating:{
      type:String
  },
  Director:{
      type:String
  }
  ,
  Writer:{
      type:String
  },
  tags:{
    type:String
}
,
details:{
  type:String
}

});

module.exports=mongoose.model('Movies',movieSchema);