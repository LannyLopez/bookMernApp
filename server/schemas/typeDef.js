const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}
type User {
    username: String
    email: String
    savedBooks: [books]
}
type Auth {
    token: ID,
    user: User
}
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    saveBook(savedBooks: Array!,description: String!, bookId, INT!): User
    removeBook(bookId: INT!) User
}


`