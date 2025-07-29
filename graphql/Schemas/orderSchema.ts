// import { gql } from "apollo-server-express";

// export const OrderTypeDefs = gql`
//   type Watch {
//     id: ID!
//     brand: String!
//     model: String!
//     price: Float!
//     type: String!
//     image: String!
//     onSale: Boolean!
//     discountPercent: Float!
//     saleEndsAt: String
//     createdAt: String!
//   }

//   type OrderItem {
//     watch: Watch!
//     quantity: Int!
//   }

//   type Order {
//     id: ID!
//     items: [OrderItem!]!
//     totalPrice: Float!
//     phoneNumber: String!
//     deliveryPlace: String!
//     createdAt: String!
//   }

//   input OrderItemInput {
//     watch: ID!
//     quantity: Int!
//   }

//   input CreateOrderInput {
//     items: [OrderItemInput!]!
//     totalPrice: Float!
//     phoneNumber: String!
//     deliveryPlace: String!
//   }

//   input EditOrderInput {
//     items: [OrderItemInput!]
//     totalPrice: Float
//     phoneNumber: String
//     deliveryPlace: String
//   }

//   type Query {
//     getAllOrders: [Order]
//     getOrderById(id: ID!): Order
//   }

//   type Mutation {
//     createOrder(input: CreateOrderInput!): Order
//     editOrder(id: ID!, input: EditOrderInput!): Order
//     deleteOrder(id: ID!): Order
//   }
// `;
import { gql } from "apollo-server-express";

export const OrderTypeDefs = gql`
  type OrderItem {
    watch: String!
    quantity: Int!
  }

  type Order {
    id: ID!
    items: [OrderItem!]!
    totalPrice: Float!
    phoneNumber: String!
    deliveryPlace: String!
    createdAt: String!
  }

  input OrderItemInput {
    watch: ID!
    quantity: Int!
  }

  input CreateOrderInput {
    items: [OrderItemInput!]!
    totalPrice: Float!
    phoneNumber: String!
    deliveryPlace: String!
  }

  input EditOrderInput {
    items: [OrderItemInput!]
    totalPrice: Float
    phoneNumber: String
    deliveryPlace: String
  }

  type Query {
    getAllOrders: [Order]
    getOrderById(id: ID!): Order
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order
    editOrder(id: ID!, input: EditOrderInput!): Order
    deleteOrder(id: ID!): Order
  }
`;
