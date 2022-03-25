import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import O from "./O";
import ProductXtra from "./ProductXtra";

const ProductTab = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const [data, setData] = useState([]);
  const [one, setOne] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getOne = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6231d42859070d92733bdaf6.mockapi.io/api/v3/Product"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setOne(await response.json());
        setLoading(false);
      }
    };
    getOne();
  }, []);
  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowOne = () => {
    return (
      <ul className="flex items-center w-[1200px] flex-wrap ml-[10px] mt-[5px]">
        {one.map((o) => (
          <li key={o.id} className="ml-3 mb-4">
            <O o={o} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="bg-white w-[1230px] mx-auto mt-[40px] h-[920px]">
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="Gợi ý hôm nay" />
        <Tab label="Hoàn xu xtra" />
      </Tabs>
      {selectedTab === 0 && <div>{loading ? <Loading /> : <ShowOne />}</div>}
      {selectedTab === 1 && (
        <div>
          {" "}
          <ProductXtra />{" "}
        </div>
      )}
    </div>
  );
};

export default ProductTab;
