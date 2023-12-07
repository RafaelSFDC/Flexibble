"use client";
import ProjectForm from "@/components/ProjectForm";
import SignUpForm from "@/components/SignUpForm";
import ModalMotion from "@/components/framerMotion/ModalMotion";
import state from "@/store/store";

const CreateAccount = () => {
  if (!state.logged)
    return (
      <ModalMotion>
        <h3 className="modal-head-text">Create a New Account</h3>
        <SignUpForm type="create" />
      </ModalMotion>
    );
};

export default CreateAccount;
