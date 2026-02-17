import Hero from "./components/home/Hero";
import { getReserveLinks } from "../lib/reserveLinks";
import { site } from "../lib/site";

export default function Home() {
  const { whatsappLink, mailtoLink } = getReserveLinks();

  return (
  <main
    className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
    style={{ backgroundImage: "url(/header.png)" }}
  >


      <Hero />
<section id="services" className="border-t border-stone-500 bg-stone-400 px-6 py-16">
  <div className="mx-auto max-w-4xl">
    <h2 className="text-4xl font-semibold tracking-tight text-neutral-950">
      Services
    </h2>

    <p className="mt-4 text-lg font-medium text-neutral-900">
      Zürich Airport transfers and dedicated chauffeur service.
    </p>
  </div>
</section>



      <section id="reserve" className="border-t border-neutral-100 bg-neutral-700 px-6 py-16 text-white">
  <div className="mx-auto max-w-4xl">
    <h2 className="text-4xl font-semibold tracking-tight">
      Reserve
    </h2>

    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-white px-8 py-3 text-center text-black hover:bg-neutral-200"
      >
        WhatsApp reservation
      </a>

      <a
        href={mailtoLink}
        className="rounded-full border border-white/40 px-8 py-3 text-center hover:bg-white/10"
      >
        Email reservation
      </a>
    </div>

    <div className="mt-10 rounded-3xl border border-white/20 bg-white/5 p-6">
      <p className="text-sm font-medium text-white/80">Contact details</p>

      <div className="mt-6">
        <p className="text-xs text-white/60">WhatsApp</p>
        <p className="mt-1 text-sm font-semibold">{site.whatsappNumber}</p>

        <p className="mt-5 text-xs text-white/60">Email</p>
        <p className="mt-1 text-sm font-semibold">{site.email}</p>
      </div>
    </div>
  </div>
</section>


      <footer className="border-t border-stone-400 px-6 py-8 text-center text-sm text-neutral-700">
        © {new Date().getFullYear()} {site.name} · {site.hub}
      </footer>

    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-stone-500 bg-stone-400 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-neutral-900">{desc}</p>
    </div>
  );
}
