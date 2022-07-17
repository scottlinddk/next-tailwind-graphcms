import Section from '../Layout/Tags/Section';

export default function BlogDetails({ blog }) {
  return (
    <Section>
      <h1>
        {blog.heading} test
      </h1>
    </Section>
  );
}