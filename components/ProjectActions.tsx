import Image from "next/image";
import Link from "next/link";
import ButtonMotion from "./framerMotion/ButtonMotion";
import { toast } from "sonner";
import { appWriteDeleteProject } from "@/app/api/appwrite/api";

const ProjectActions = ({ projectId }: { projectId: string }) => {
  const handleDeleteProject = () => {
    console.log(projectId);
    toast.promise(appWriteDeleteProject(projectId), {
      loading: "Deleting your project...",
      success: (data) => {
        return `Your project has been deleted successfully`;
      },
      error: "Something went wrong, please try again later",
    });
  };
  return (
    <>
      <ButtonMotion className="flexCenter view-action_btn bg-green-500">
        <Link href={`/edit-project/${projectId}`}>
          <Image src="/pencile.svg" alt="edit" width={24} height={24} />
        </Link>
      </ButtonMotion>
      <ButtonMotion
        type="button"
        className="flexCenter delete-action_btn bg-red-500"
        onClick={handleDeleteProject}
      >
        <Image src="/trash.svg" alt="delete" width={24} height={24} />
      </ButtonMotion>
    </>
  );
};

export default ProjectActions;
