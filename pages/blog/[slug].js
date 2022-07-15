import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  process.env.GRAPHCMS_URL_ENDPOINT,
  // 'https://api-eu-central-1.graphcms.com/v2/cl4dxlaps78ve01w8alkh1bhl/master'
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

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post,
      params
    },
    revalidate: 60 * 60 * 24
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
    paths: posts.map(({ slug }) => ({params: { slug }})),
    fallback: 'blocking',
  };
}

export default ({ post, params }) => (
  <article>
    <h1>{post.title}</h1>
  </article>
);
