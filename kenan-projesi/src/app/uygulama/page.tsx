import Link from "next/link";
import OyunKarti from "../components/OyunKarti";
import TemaButonu from "../components/TemaButonu";

const oyunlar = [
  { id: 1, baslik: "Uzay Avcısı", tur: "Aksiyon" },
  { id: 2, baslik: "Bulmaca Krallığı", tur: "Bulmaca" },
  { id: 3, baslik: "Orman Koşusu", tur: "Platform" },
  { id: 4, baslik: "Siber Yarış", tur: "Yarış" },
  { id: 5, baslik: "Zindan Kaçışı", tur: "Macera" },
  { id: 6, baslik: "Galaksi Savunması", tur: "Strateji" },
];

export default function UygulamaSayfasi() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200">
      {/* 1. Menü: Flex ile sol ve sağ hizalama */}
      <nav className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <span className="text-lg font-bold text-slate-800 dark:text-white">
          🎮 Oyun Portalı
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/uygulama"
            className="text-sm font-semibold text-blue-600 dark:text-blue-400"
          >
            Uygulama
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Blog
          </Link>
          {/* 4. Tema Butonu */}
          <TemaButonu />
        </div>
      </nav>

      {/* 2 & 3. Oyun Listesi & Kartları (Responsive Grid) */}
      <main className="p-6 max-w-6xl mx-auto w-full flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            Oyunlar
          </h1>
        </div>

        {/* Mobilde 1 sütun, tablette 2 sütun, masaüstünde 3 sütun */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {oyunlar.map((oyun) => (
            <OyunKarti key={oyun.id} baslik={oyun.baslik} tur={oyun.tur} />
          ))}
        </div>
      </main>
    </div>
  );
}
