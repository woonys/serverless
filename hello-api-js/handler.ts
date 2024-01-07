import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import "source-map-support/register";

export const hello: APIGatewayProxyHandlerV2 = async (event) => {
  const message = `Hello, ${event.queryStringParameters?.name}!`;
  console.log(message);

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
