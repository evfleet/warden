import { FastifyReply, FastifyRequest } from "fastify";

const currentUser = (req: FastifyRequest, reply: FastifyReply) => {
  reply.send({ user: null });
};

export default {
  currentUser,
};
