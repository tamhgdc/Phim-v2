import React, { FC, useState } from "react";
import FiliterResults from "./FiliterResults";

interface FilterConfigProps {
  data: any[];
  filter: { name: string; params: string };
}

const FilterConfig: FC<FilterConfigProps> = ({ data, filter }) => {
  const [selects, setSelectes] = useState<any>(
    data.reduce((acc, current) => {
      acc[current.items[0].screeningType] = current.items[0].params;
      return acc;
    }, {})
  );

  const handleOnChange = (e: any) => {
    setSelectes({ ...selects, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-4">
      {data.map((item: any, index: number) => (
        <select
          disabled={!filter.name.trim()}
          className="outline-none bg-dark-lighten px-3 py-2 rounded bg-[#333] mr-5 mb-4"
          key={`${index}`}
          onChange={handleOnChange}
          name={data[index].items[0].screeningType}
        >
          {item.items.map((selection: any) => (
            <option
              className="outline-none bg-dark-lighten px-3 py-2"
              key={selection.params}
              value={selection.params}
            >
              {selection.name}
            </option>
          ))}
        </select>
      ))}

      <div className="mt-4">
        <FiliterResults filter={filter} config={selects} />
      </div>
    </div>
  );
};

export default FilterConfig;
