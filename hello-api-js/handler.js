'use strict';

module.exports.hello = async (event) => {
  if (!event.queryStringParameters || !event.queryStringParameters.name) {
    return {
      statusCode: 404,
      body: `Not Found`
    };
  }
  return {
    statusCode: 200,
    body: `Hello, ${event.queryStringParameters.name}!`,
  };
};
