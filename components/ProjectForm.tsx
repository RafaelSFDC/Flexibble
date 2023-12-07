"use client";

import Image from "next/image";
import FormField from "./FormField";
import { categoryFilters } from "@/constants";
import CustomMenu from "./CustomMenu";
import { toast } from "sonner";
import { useState } from "react";
import ButtonMotion from "./framerMotion/ButtonMotion";

const ProjectForm = ({ type }: { type: string }) => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log("RESULTADO DA FUNÇÃO FORMAT FORM:", data);
    console.log(data);
  };
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.includes("image")) {
      toast.error("Please select an image");
      return;
    }

    const objectURL = URL.createObjectURL(file);
    setSelectedImage(objectURL);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!selectedImage && "Upload Image"}
        </label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          required={type === "create"}
          className="form_image-input"
          onChange={handleChangeImage}
        />
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Project poster"
            fill
            className="sm:p-10 object-container z-20 "
          />
        )}
      </div>
      <FormField
        title="Project Title"
        type="text"
        name="title"
        placeholder="Enter the title of your project"
      />
      <FormField
        title="Description"
        type="text"
        name="description"
        placeholder="Enter the description of your project"
      />
      <FormField
        title="Website URL"
        type="url"
        name="liveSiteUrl"
        placeholder="Enter the URL of your project"
      />
      <FormField
        title="GitHub URL"
        type="url"
        name="githubUrl"
        placeholder="Enter the URL of your github repository"
      />
      <CustomMenu title="Category" filters={categoryFilters} name="category" />
      <div className="flexStart w-full">
        <ButtonMotion type="submit" leftIcon="/plus.svg">
          Create
        </ButtonMotion>
      </div>
    </form>
  );
};

export default ProjectForm;
