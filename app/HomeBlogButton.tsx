import Link from 'next/link';

export default function HomeBlogButton() {
  return (
    <div className="mt-8 text-center">
      <Link href="/blog" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Lihat Blog
      </Link>
    </div>
  );
}
