export default {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "serverless-vb-bucket"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://cxwhsvcst7.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_beIwlB52V",
    APP_CLIENT_ID: "2vevr3u2so84j2junq469l4p4c",
    IDENTITY_POOL_ID: "eu-central-1:a251ea01-12ea-4347-b2ca-43d11262cc8e"
  }
};
