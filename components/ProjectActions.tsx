import Image from "next/image";
import Link from "next/link";
import ButtonMotion from "./framerMotion/ButtonMotion";
import { type } from "./../commom.types";

const ProjectActions = ({ projectId }: { projectId: string }) => {
  const handleDeleteProject = () => {
    console.log(projectId);
  };
  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencile.svg" alt="edit" width={24} height={24} />
      </Link>
      <ButtonMotion
        type="button"
        className="flexCenter delete-action_btn bg-gray"
      >
        <Image src="/trash.svg" alt="delete" width={24} height={24} />
      </ButtonMotion>
    </>
  );
};

export default ProjectActions;
