import { BASE_PATH } from "@/app/const";

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${BASE_PATH}/images/top.png')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4">T.Shimazaki's portfolio</h1>
        <h2 className="text-2xl">Software Engineer</h2>
      </div>
    </div>
  );
}
