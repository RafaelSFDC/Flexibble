"use client";
import ProjectForm from "@/components/ProjectForm";
import ModalMotion from "@/components/framerMotion/ModalMotion";
import state from "@/store/store";
import { useRouter } from "next/navigation";

const EditProject = () => {
  if (!state.logged) {
    const router = useRouter();
    router.push("/");
    return null;
  }
  return (
    <ModalMotion>
      <h3 className="modal-head-text">Edit your project</h3>
      <ProjectForm type="edit" />
    </ModalMotion>
  );
};

export default EditProject;
