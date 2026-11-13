export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sky-50 p-8 text-gray-900">
      {children}
    </div>
  );
}
