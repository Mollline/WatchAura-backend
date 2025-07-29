import { resolvers } from '@/graphql/resolver';
import { OrderTypeDefs } from "../../../graphql/Schemas/orderSchema";
import { NoteTypeDefs } from "../../../graphql/Schemas/noteSchema";
import { WatchTypeDefs } from "../../../graphql/Schemas/watchSchema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import connect from "../../../graphql/database/db";

connect()
const server = new ApolloServer({
    typeDefs: [OrderTypeDefs, NoteTypeDefs, WatchTypeDefs],
    resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };
