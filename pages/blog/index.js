import { GraphQLClient } from 'graphql-request';
import BlogPreview from '../../components/blog/BlogPreview';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    process.env.GRAPHCMS_URL_ENDPOINT
    // 'https://api-eu-central-1.graphcms.com/v2/cl4dxlaps78ve01w8alkh1bhl/master'
  );

  const { posts } = await graphcms.request(
    `
      { 
        posts {
          id
          slug
          title
          excerpt
        }
      }
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default function postIndex ({ posts }) {
  return (
    posts.map((blog) => (
      <BlogPreview blog={blog} key={blog.id} />
    ))
  )
} 


