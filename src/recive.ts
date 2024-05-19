import line, { WebhookRequestBody } from '@line/bot-sdk';
import config from './config';

export default async function recive(body: string | null, signature: string | null) {
  // 入力チェック
  if (body == null || signature == null) {
    throw new Error('Invalid request error.');
  }
  const isValid = line.validateSignature(body, config.channelSecret, signature);
  if (!isValid) {
    throw new Error('Invalid request error.');
  }

  const requestBody: WebhookRequestBody = JSON.parse(body);
  return requestBody;
}
