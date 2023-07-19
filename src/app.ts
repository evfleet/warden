import fastify from "fastify";

import authRoutes from "./routes/auth.routes";

const app = fastify({
  logger: true,
});

app.register(authRoutes, { prefix: "/auth" });

export default app;
