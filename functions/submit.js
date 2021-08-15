const Agreement = require("../model/agreement");

exports.handler = async (event, context) => {
  console.log(JSON.parse(event.body));
  console.log(event.httpMethod);
  console.log(context);
  return {
    statusCode: 200,
    body: JSON.stringify(JSON.parse(event.body)),
  };
};
