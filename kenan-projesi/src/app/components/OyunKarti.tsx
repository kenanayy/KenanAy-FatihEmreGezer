interface OyunKartiProps {
  baslik: string;
  tur: string;
}

export default function OyunKarti({ baslik, tur }: OyunKartiProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{baslik}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Tür: {tur}</p>
    </div>
  );
}

