type Props = {
  title: string;
  filters: Array<string>;
  name: string;
};

const CustomMenu = ({ title, filters, name }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-7 relative">
      <label htmlFor={title} className="w-full text-gray-100">
        {title}
      </label>
      <div className="self-start relative">
        <select
          name={name}
          id={name}
          defaultValue=""
          className="cursor-pointer custom-select"
        >
          <option value="" disabled className="custom-option">
            Select a category
          </option>
          {filters.map((filter) => (
            <option
              key={filter}
              value={filter}
              className="cursor-pointer custom-option"
            >
              {filter}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomMenu;
