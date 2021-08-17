require("dotenv").config();
const Agreement = require("../model/agreement");
const util = require("util");
const mongoose = require("mongoose");

exports.handler = async (event, context) => {
  //console.log(event.body);
  //console.log(typeof event.body);
  if (event.httpMethod === "OPTIONS") {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      statusCode: 200,
    };
  }
  try {
    const result = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    if (result) {
      console.log("connected to mongodb atlas");
      const agreement = Agreement(JSON.parse(event.body));
      const saveResult = await agreement.save();
      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        statusCode: 200,
        body: JSON.stringify({ message: "agreement has been saved!" }),
      };
    }
  } catch (error) {
    console.log(error);
  }
};
