import fastify from "fastify";

const app = fastify({
  logger: true,
});

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

export default app;
