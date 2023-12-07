"use client";
import state from "@/store/store";
import { useSnapshot } from "valtio";

export default function Home() {
  const snap = useSnapshot(state);
  return (
    <section className="flex-start flex-col paddings mb-16">
      <h1>Categories </h1>
      <h1>Posts</h1>
      <h1>Load More</h1>
    </section>
  );
}
