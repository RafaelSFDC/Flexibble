"use client";
import ProjectForm from "@/components/ProjectForm";
import ModalMotion from "@/components/framerMotion/ModalMotion";
import state from "@/store/store";

const CreateProject = () => {
  if (state.logged)
    return (
      <ModalMotion>
        <h3 className="modal-head-text">Create a New Project</h3>
        <ProjectForm type="create" />
      </ModalMotion>
    );
};

export default CreateProject;
