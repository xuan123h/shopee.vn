import React, { useEffect, useState } from "react";
import T from "./T";

const ProductXtra = () => {
  const [data, setData] = useState([]);
  const [two, setTwo] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getTwo = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6231d42859070d92733bdaf6.mockapi.io/api/v3/ProductXtra"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setTwo(await response.json());
        setLoading(false);
      }
    };
    getTwo();
  }, []);
  const ShowTwo = () => {
    return (
      <ul className="flex items-center w-[1200px] flex-wrap ml-[10px] mt-[5px]">
        {two.map((t) => (
          <li key={t.id} className="ml-3 mb-4 shadow-lg">
            <T t={t} />
          </li>
        ))}
      </ul>
    );
  };
  const Loading = () => {
    return <>Loading ...</>;
  };
  return <>{loading ? <Loading /> : <ShowTwo />}</>;
};

export default ProductXtra;
