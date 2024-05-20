"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function TwoSumsPage() {
  const [result, setResult] = useState<number[]>([]);

  function twoSum(numbers: number[], target: number): number[] {
    const memo: { [key: number]: number } = {};

    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
      if (memo[complement] !== undefined) {
        return [memo[complement] + 1, i + 1]; // Adding 1 to convert to 1-indexed
      }
      memo[numbers[i]] = i;
    }

    return [];
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const array = target.numbers.value.split(",");
    const targetNumber = target.targetNumber.value;

    const indexSum = twoSum(array, targetNumber);
    setResult(indexSum);
  };

  return (
    <main className="flex flex-col h-screen">
      <nav className="container mx-auto p-5">
        <Link href="/">Go Back</Link>
      </nav>
      <div className="m-auto w-[400px]">
        <h1 className="my-6">Find Two Sum</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <p>Numbers (comma-separated): </p>
          <input
            type="string"
            name="numbers"
            placeholder="eg: 1,2,3,5"
            required
          />
          <p>Target: </p>
          <input type="number" name="targetNumber" required />
          <button
            type="submit"
            className="bg-white rounded-md px-4 py-2 button text-black"
          >
            Find Two Sum
          </button>
        </form>
        <div className="mt-6 text-end">
          Result:{" "}
          <span className="font-bold">
            {result.length > 0 && `[${result.toString()}]`}
            {!result.length && "No solution found"}
          </span>
        </div>
      </div>
    </main>
  );
}
