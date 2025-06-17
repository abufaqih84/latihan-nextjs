import Link from 'next/link';
import { posts } from './posts';

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`}
              className="text-xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
