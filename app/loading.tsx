export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-emerald-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 animate-pulse" />
        <p className="text-emerald-100 font-medium animate-pulse">Loading MyTurn...</p>
      </div>
    </div>
  );
}
