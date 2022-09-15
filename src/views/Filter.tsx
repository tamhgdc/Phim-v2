import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { getConFigSearch } from "../api/search";
import Error from "../components/Error";
import FilterConfig from "../components/Filter/FilterConfig";
import MainLayout from "../components/Layout/MainLayout";

const Filter = () => {
  const { data, error } = useSWR("config", getConFigSearch);

  const [filter, setFilter] = useState({ name: "", params: "" });

  if (error) {
    return <Error />;
  }

  useEffect(() => {
    data &&
      setFilter({
        name: data[0]?.name,
        params: data[0]?.params,
      });
  }, [data?.length]);

  return (
    <MainLayout>
      <div className="text-white">
        <ul className="flex items-center">
          {data?.map((item: any) => (
            <li
              onClick={() =>
                setFilter({ name: item.name, params: item.params })
              }
              className="p-2 first:pl-0 cursor-pointer"
              key={item.id}
            >
              <p
                className={`line relative ${
                  filter.name === item.name && "active"
                }`}
              >
                {item.name}
              </p>
            </li>
          ))}
        </ul>

        {data && (
          <FilterConfig filter={filter} data={data[0]?.screeningItems} />
        )}
      </div>
    </MainLayout>
  );
};

export default Filter;
