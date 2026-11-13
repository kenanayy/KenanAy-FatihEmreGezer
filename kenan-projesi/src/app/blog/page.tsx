import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">DİJİTAL OYUN TASARIMI</h1>
      <Link
        href="/"
        className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition"
      >
        Ana Sayfa
      </Link>
    </div>
  );
}
