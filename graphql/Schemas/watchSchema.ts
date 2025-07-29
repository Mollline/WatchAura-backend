import { gql } from "apollo-server-express";

export const WatchTypeDefs = gql`
  type Watch {
    id: ID!
    brand: String!
    price: Float!
    type: String!
    image: String!
    adImage: [String!]!
    onSale: Boolean!
    discountPercent: Float!
    saleEndsAt: String
    createdAt: String!
    quantity: Int!
  }

  type Query {
    getAllWatches: [Watch]
    getWatch(id: ID!): Watch
  }

  input CreateWatchInput {
    brand: String!
    price: Float!
    type: String!
    image: String!
    adImage: [String!]!
    onSale: Boolean
    discountPercent: Float
    saleEndsAt: String
    quantity: Int!
  }

  input UpdateWatchInput {
    id: ID!
    brand: String
    price: Float
    type: String
    image: String
    adImage: [String!]
    onSale: Boolean
    discountPercent: Float
    saleEndsAt: String
    quantity: Int
  }

  type Mutation {
    createWatch(input: CreateWatchInput!): Watch
    updateWatch(input: UpdateWatchInput!): Watch
    deleteWatch(id: ID!): Watch
  }
`;
