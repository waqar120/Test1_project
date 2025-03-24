import { sampleOrders } from "../SampleOrder.js";
import { useState, useEffect } from "react";
export default function RenderOrder() {
  const accessLocation = window.location.origin;
  const [companyName, setCompanyName] = useState("daraz");
  const [companyOrderdetail, setCompanyOrderDetail] = useState();
  const findCompnayDetail = () => {
    const orderList = sampleOrders.find(companyName);
    console.log("jfjj", orderList);
  };
  useEffect(() => {}, [companyName]);
  return (
    <>
      <h1> hhghg</h1>
    </>
  );
}
