import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/cl4dxlaps78ve01w8alkh1bhl/master'
);

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `
    query PostQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`
    {
      posts {
        slug
        title
      }
    }
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ({ post }) => (
  <article>
    <h1>{post.title}</h1>
  </article>
);
