const Agreement = require("../model/agreement");
const util = require("util");
exports.handler = async (event, context) => {
  //console.log(event.body);
  //console.log(typeof event.body);
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    statusCode: 200,
    body: event.body,
  };
};
