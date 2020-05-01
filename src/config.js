const dev = {
  STRIPE_KEY: "pk_test_cXkn61HWTdl8Dq1UnGPgcm6e00TNRgYulT",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "serverless-vb-bucket"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://f6wa8ic8ke.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_pwNnXdXla",
    APP_CLIENT_ID: "4uqouchth80cgegsr4oj6n5sf7",
    IDENTITY_POOL_ID: "eu-central-1:f7fb17e9-e0fc-436b-8bd4-9df50e17e0ca"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_cXkn61HWTdl8Dq1UnGPgcm6e00TNRgYulT",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "serverless-vb-bucket-prod"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://hfc61oor8a.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_guKmApRGs",
    APP_CLIENT_ID: "13d4vtd0uoojjan52061a4hh88",
    IDENTITY_POOL_ID: "eu-central-1:239f86b7-7da9-4a4e-801e-b97cda798881"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
