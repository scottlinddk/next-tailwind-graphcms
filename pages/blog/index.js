import { GraphQLClient } from 'graphql-request';
import BlogPreview from '../../components/blog/BlogPreview';
import Section from '../../components/Layout/Tags/Section';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    process.env.GRAPHCMS_URL_ENDPOINT
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
    <Section>
      {posts && posts.length > 0 && posts.map(blog => {
        return (
          <BlogPreview blog={blog} key={blog.id} />
        );
      })}
    </Section>
  )
} 
