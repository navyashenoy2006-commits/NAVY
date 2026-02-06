import { outroHeading, outroSubtext } from "@/data";

export default function OutroScreen() {

  return (
    <div
      className="flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="mb-4">
        <img src="/gifs/happy.gif" alt="happy gif" className="w-40" />
      </div>

      <h1 className="text-4xl md:text-5xl font-dancing text-rose-500/85 font-semibold mb-3">{outroHeading}</h1>
      <p className="text-rose-400/80">{outroSubtext}</p>
    </div>
  );
};
