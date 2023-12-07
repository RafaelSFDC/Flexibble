"use client";
import state from "@/store/store";
import { useSnapshot } from "valtio";
import { usePathname } from "next/navigation";

const Project = () => {
  const snap = useSnapshot(state);
  const pathname = usePathname();
  const path = pathname;
  const value = path.split("project/")[1];

  const projectIndex = snap.projects.findIndex(
    (project: any) => project.$id === value
  );

  return (
    <div>
      {projectIndex !== -1 ? `Index: ${projectIndex}` : "No project found"}
    </div>
  );
};

export default Project;
