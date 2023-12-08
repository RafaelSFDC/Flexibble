import Link from "next/link";
import React from "react";
type Props = {
  projects: [
    {
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
    }
  ];
};
const RelatedProjects = ({ projects }: Props) => {
  return (
    <section className="flex flex-col mt-32 w-full">
      <div className="flexBetween">
        <p className="text-base font-bold">
          More by {projects[0].createdBy[0].name}
        </p>
        <Link
          href={`/profile/${projects[0].createdBy[0].$id}`}
          className="text-primary-purple text-base"
        >
          See all
        </Link>
      </div>
    </section>
  );
};

export default RelatedProjects;
