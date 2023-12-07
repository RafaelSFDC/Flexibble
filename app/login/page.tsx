"use client";
import LoginForm from "@/components/LoginForm";
import ModalMotion from "@/components/framerMotion/ModalMotion";
import state from "@/store/store";

const CreateAccount = () => {
  if (!state.logged)
    return (
      <ModalMotion>
        <h3 className="modal-head-text">Log in into your account</h3>
        <LoginForm type="create" />
      </ModalMotion>
    );
};

export default CreateAccount;
