import * as line from '@line/bot-sdk';
import config from './config';

export default async function send() {
  // 送信処理
  const client = new line.messagingApi.MessagingApiClient({ channelAccessToken: config.channelAccessToken });
  const params: Parameters<typeof client.broadcast>[0] = {
    messages: [
      {
        type: 'text',
        text: 'ピンポーン',
      },
    ],
  };
  const messageResponse = await client.broadcast(params);
  return messageResponse;
}
