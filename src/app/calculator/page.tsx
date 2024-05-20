"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Calculator() {
  const [sum, setSum] = useState<number>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const firstNumber = parseFloat(target.firstNumber.value);
    const secondNumber = parseFloat(target.secondNumber.value);

    setSum(firstNumber + secondNumber);
  };

  return (
    <main className="flex flex-col h-[93vh]">
      <nav className="container mx-auto p-5">
        <Link href="/">Go Back</Link>
      </nav>
      <article className="m-auto">
        <h1>Sum of Two Numbers</h1>
        <form
          className="flex flex-col gap-6 mt-6 text-black"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            placeholder="First Number"
            name="firstNumber"
            required
          />
          <input
            type="number"
            placeholder="Second Number"
            name="secondNumber"
            required
          />
          <button
            type="submit"
            className="bg-white rounded-md px-4 py-2 button"
          >
            Add two Numbers
          </button>
        </form>
        <p className="mt-5 text-end text-xl">
          Total: <span className="font-bold">{sum || 0}</span>
        </p>
      </article>
    </main>
  );
}
