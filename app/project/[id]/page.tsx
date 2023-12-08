"use client";
import state from "@/store/store";
import { useSnapshot } from "valtio";
import { usePathname } from "next/navigation";
import ModalMotion from "@/components/framerMotion/ModalMotion";
import Link from "next/link";
import Image from "next/image";
import RelatedProjects from "@/components/RelatedProjects";
import ProjectActions from "@/components/ProjectActions";

const Project = () => {
  const snap = useSnapshot(state);
  const pathname = usePathname();
  const path = pathname;
  const value = path.split("project/")[1];

  const projectIndex = snap.projects.findIndex(
    (project: any) => project.$id === value
  );

  type ProjectDetails = {
    $id: string;
    title: string;
    createdBy: [
      {
        $id: string;
        name: string;
        avatarURL: string;
      }
    ];
    category: string;
    image: string;
    description: string;
    liveSiteUrl: string;
    githubUrl: string;
  };
  const projectDetails: ProjectDetails = snap.projects[projectIndex];
  console.log(projectDetails);
  const userProjects = snap.projects.filter(
    (project: any) =>
      project.createdBy[0].$id === projectDetails.createdBy[0].$id &&
      project.$id !== projectDetails.$id
  );
  if (!projectDetails) return <ModalMotion>Loading...</ModalMotion>;
  console.log("FINDED PROJECT", userProjects);
  console.log("CREATEDBY", projectDetails.createdBy[0].$id);
  return (
    <ModalMotion>
      <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full">
        <div className="flex-1 flex items-start gap-5 w-full max-xs:flex-col">
          <Link href={"/"}>
            <Image
              src={projectDetails?.createdBy[0]?.avatarURL}
              width={50}
              height={50}
              alt="profile"
              className="rounded-full"
            />
          </Link>

          <div className="flex-1 flexStart flex-col gap-1">
            <p className="self-start text-lg font-semibold">
              {projectDetails?.title}
            </p>
            <div className="user-info">
              <Link href={""}>{projectDetails?.createdBy[0]?.name}</Link>
              <Image src="/dot.svg" width={4} height={4} alt="dot" />
              <Link
                href={`/?category=${projectDetails?.category}`}
                className="text-primary-purple font-semibold"
              >
                {projectDetails?.category}
              </Link>
            </div>
          </div>
        </div>
        {projectDetails.createdBy[0].$id === snap.userCollection && (
          <div className="flex justify-end items-center gap-2">
            <ProjectActions projectId={projectDetails?.$id} />
          </div>
        )}
      </section>
      <section className="mt-14">
        <Image
          src={`${projectDetails?.image}`}
          className="object-cover rounded-2xl"
          width={1064}
          height={798}
          alt="poster"
        />
      </section>
      <section className="flexCenter flex-col mt-20">
        <p className="max-w-5xl text-xl font-normal">
          {projectDetails?.description}
        </p>

        <div className="flex flex-wrap mt-5 gap-5">
          <Link
            href={projectDetails?.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flexCenter gap-2 tex-sm font-medium text-primary-purple"
          >
            🖥 <span className="underline">Github</span>
          </Link>
          <Image src="/dot.svg" width={4} height={4} alt="dot" />
          <Link
            href={projectDetails?.liveSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="flexCenter gap-2 tex-sm font-medium text-primary-purple"
          >
            🚀 <span className="underline">Live Site</span>
          </Link>
        </div>
      </section>

      <section className="flexCenter w-full gap-8 mt-28">
        <span className="w-full h-0.5 bg-light-white-200" />
        <Link href={""} className="min-w-[82px] h-[82px]">
          <Image
            src={projectDetails?.createdBy[0]?.avatarURL}
            className="rounded-full"
            width={82}
            height={82}
            alt="profile image"
          />
        </Link>
        <span className="w-full h-0.5 bg-light-white-200" />
      </section>
      <RelatedProjects projects={userProjects} />
    </ModalMotion>
  );
};

export default Project;
