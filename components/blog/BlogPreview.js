import Link from 'next/link';

export default function BlogPreview({ blog }) {
  return (
    <article>
      <Link key={blog.id} href={`/blog/${blog.slug}`}>
        <a className="text-xl font-bold">{blog.title}</a>
      </Link>
      <p>{blog.excerpt}</p>
    </article>
  );
}