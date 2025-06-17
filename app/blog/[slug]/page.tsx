import { posts } from '../posts';
import Link from 'next/link';

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) {
    return (
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">Postingan tidak ditemukan</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">Kembali ke Blog</Link>
      </main>
    );
  }
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>
      <article className="mb-8">{post.content}</article>
      <Link href="/blog" className="text-blue-600 hover:underline">← Kembali ke Blog</Link>
    </main>
  );
}
