import HomeBlogButton from './HomeBlogButton';

export default function Home() { 
  return (
    // homepage tailwind 
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to My App</h1>
      <p className="mt-2 text-lg text-gray-600">This is a simple Next.js app with Tailwind CSS.</p>
      <a href="/about" className="mt-4 text-blue-500 hover:underline">
        Learn more about us
      </a>
      <HomeBlogButton />
    </div>
  );
}