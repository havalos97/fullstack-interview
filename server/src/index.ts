import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';

const typeDefs = `#graphql
type Query {
  image(
    width: Int!,
    height: Int!,
    young: Boolean!,
    grayscale: Boolean!
  ): String
}
`;

const resolvers = {
  Query: {
    image: (_: unknown, { width, height, young, grayscale }) => {
      const widthParam = width ? width + '/' : ''
      const heightParam = height ? height + '/' : ''
      const youngParam = young ? 'y' : ''
      const grayscaleParam = grayscale ? 'g' : ''
      return `${process.env.KEANU_URL}${widthParam}${heightParam}${youngParam}${grayscaleParam}`;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: new InMemoryLRUCache({ ttl: 120 }),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
});

console.log(`Server running at: ${url}`);