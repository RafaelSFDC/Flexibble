"use client";
import Categories from "@/components/Categories";
import ProjetCard from "@/components/ProjetCard";
import state from "@/store/store";
import { useSnapshot } from "valtio";

export default function Home() {
  const snap = useSnapshot(state);
  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />
      <section className="projects-grid">
        {snap.projects.length > 0 ? (
          snap.projects.map((project: any) => {
            if (
              snap.activeFilter !== "All" &&
              project.category !== snap.activeFilter
            ) {
              return null;
            }

            return (
              <ProjetCard
                key={project.$id}
                id={project.$id}
                image={project.image}
                title={project.title}
                name={project.createdBy[0].name}
                avatarUrl={project.createdBy[0].avatarURL}
                userId={project.createdBy[0].$id}
              />
            );
          })
        ) : (
          <p>No projects found, why don't you create some?</p>
        )}
      </section>
      <h1>Load More</h1>
    </section>
  );
}
