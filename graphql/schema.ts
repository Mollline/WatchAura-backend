import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Note {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: String!
  }

  type Query {
    getAllNotes: [Note]
  }

  input CreateNoteInput {
    title: String!
    completed: Boolean
  }

  input EditNoteInput {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note
    editNote(input: EditNoteInput!): Note
    deleteNote(id: ID!): Note
  }
`;
