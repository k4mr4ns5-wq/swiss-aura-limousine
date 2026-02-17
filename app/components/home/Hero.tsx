import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-6xl">
        {site.name}
      </h1>

      <p className="mt-6 text-xl text-neutral-600">
        {site.slogan}
      </p>

      <p className="mt-8 max-w-2xl text-lg text-neutral-700">
        Premium airport transfers from Zürich Airport across Switzerland and beyond.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <a
    href="#reserve"
    className="rounded-full bg-neutral-900 px-8 py-3 text-white hover:bg-neutral-800"
  >
    Reserve Your Transfer
  </a>
</div>
    </section>
  );
}
