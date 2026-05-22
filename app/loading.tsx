import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-emerald-950">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/myturn-logo-icon.png"
          alt="MyTurn Logo"
          width={888}
          height={888}
          unoptimized
          className="h-12 w-12 rounded-full object-contain animate-pulse"
          priority
        />
        <p className="text-emerald-100 font-medium animate-pulse">Loading MyTurn...</p>
      </div>
    </div>
  );
}
