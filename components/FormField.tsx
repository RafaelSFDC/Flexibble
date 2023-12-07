import React from "react";
type Props = {
  type?: string;
  title: string;
  name: string;
  placeholder: string;
  isTextArea?: boolean;
};

const FormField = ({ type, title, placeholder, isTextArea, name }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label htmlFor="" className="w-full text-gray-100">
        {title}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className="form_field-input"
        ></textarea>
      ) : (
        <input
          name={name}
          placeholder={placeholder}
          type={type ? type : "text"}
          className="form_field-input"
        />
      )}
    </div>
  );
};

export default FormField;
