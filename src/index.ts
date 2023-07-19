import app from "./app";

const start = async () => {
  try {
    app.listen({ port: 8081 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
