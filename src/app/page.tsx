import Link from "next/link";
import homeLinks from "@/constant/home_links.json";

export default function Home() {
  return (
    <main className="flex h-[93vh] p-5">
      <section className="sm:m-auto">
        <h1>Aeon Assessment</h1>
        <ol className="flex flex-col gap-4 mt-12 max-w-[500px] !list-decimal px-4">
          {homeLinks.map(({ label, link }, idx) => (
            <li key={idx}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
