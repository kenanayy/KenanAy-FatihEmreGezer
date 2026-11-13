import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 gap-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center">
        Web Tasarımı ve Programlama
      </h1>
      <div className="flex gap-4">
        <Link
          href="/uygulama"
          className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Uygulama
        </Link>
        <Link
          href="/blog"
          className="px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
        >
          Blog
        </Link>
      </div>
    </main>
  );
}

