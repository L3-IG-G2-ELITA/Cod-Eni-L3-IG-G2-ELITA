import React from "react";
import { IValue } from "@/app/_common/constants/values_data";

interface Props {
  item: IValue;
}

const ValueCard = (props: Props) => {
  return (
    <div className=" hover:scale-x-105 transition duration-300 bg-white rounded-xl p-5 space-y-3">
      <span className="text-[#072BF2] text-[50px]">{props.item.icon}</span>
      <h5 className="font-bold ">{props.item.title}</h5>
      <p className="text-sm">{props.item.description}</p>
    </div>
  );
};

export default ValueCard;
