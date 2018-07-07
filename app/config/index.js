const app = {
  db: {
    host: "ds259855.mlab.com",
    port: 59855,
    name: "server",
    username: "admin",
    password: "Wavei5795"
  },
  jwt: {
    APP_SECRET: "ILOVEYOU8",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
