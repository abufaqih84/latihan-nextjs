import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Welcome to My Markdown Blog</h1>
      <p className="mt-2 text-gray-600">Built with Next.js, Tailwind, and Markdown</p>
    </div>
  );
}
