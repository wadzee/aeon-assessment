import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: `Create a React (preferably NextJs) page with any design that
    works like a calculator that can add two numbers.
    `,
    link: "/calculator",
  },
  {
    label: `Create a blank page using React (preferably NextJs) that contains
    the navbar`,
    link: "/navbar",
  },
  {
    label: "Two Sum II - Input Array Is Sorted",
    link: "/twosums",
  },
];

export default function Home() {
  return (
    <main className="flex h-[93vh] p-5">
      <section className="sm:m-auto">
        <h1>Aeon Assessment</h1>
        <ol className="flex flex-col gap-4 mt-12 max-w-[500px] !list-decimal px-4">
          {links.map(({ label, link }) => (
            <li>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
