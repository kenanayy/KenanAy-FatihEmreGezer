"use client";
import { useTema } from "./TemaSaglayici";

export default function TemaButonu() {
  const { tema, degistir } = useTema();

  return (
    <button
      onClick={degistir}
      className="px-3 py-1 rounded border border-slate-300 dark:border-slate-600 transition hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-medium text-sm"
    >
      {tema === "acik" ? "🌙 Koyu" : "☀️ Açık"}
    </button>
  );
}

