export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HZK8aCbIp6mCV6I7NjGuiO8r4UrfHanNn8Qn3T2mvBJiQskh7hYwTSyQJ1H9TUknbLCeNCFt5A6v1WSeK0dY8m800amDzD02w",
    s3: {
      REGION: "us-east-1",
      BUCKET: "justin-young-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://idd8826bug.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_EuP0l1Dco",
      APP_CLIENT_ID: "4pub1sehpb4qto7p10v269qp3a",
      IDENTITY_POOL_ID: "us-east-1:99dcb347-0a5d-43b2-a527-ed2957c1d25d"
    }
  };