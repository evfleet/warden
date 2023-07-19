import { FastifyInstance } from "fastify";

import authController from "../controllers/auth.controller";

const authRoutes = async (app: FastifyInstance) => {
  app.route({
    method: "GET",
    url: "/",
    handler: authController.currentUser,
  });
};

export default authRoutes;
