import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import send from './send';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  await send();
  return {
    statusCode: 200,
    body: 'OK!',
  };
}
