import React from "react";
import "./style.css";
import {MdArrowOutward} from "react-icons/md";
const Pageitems = ({data, type}) => {
  return (
    <>
      <div class="bg-[#99683033] min-w-full border border-[#996830] rounded-lg p-5 flex flex-col gap-4">
        <div class="flex justify-between pb-2">
          <h2 class="primary-txt text-xl">
            Project  {data?.count}
          </h2>
          <p class="text-end text-2xl text-[#996830]">
            <MdArrowOutward />
          </p>
        </div>
        <div class="flex flex-row align-middle">
          <div className="basis-1/4 flex ">
            <h2 class="secondary-txt flex align-middle">Client Name :</h2>
          </div>
          <div className="basis-1/4">
            <h2 class="secondary-txt">{data?.name}</h2>
          </div>
        </div>
        <div class="flex flex-row align-middle">
          <div className="basis-1/4 flex ">
            <h2 class="secondary-txt flex align-middle">Email :</h2>
          </div>
          <div className="basis-1/4">
            <h2 class="secondary-txt">{data?.email}</h2>
          </div>
        </div>
        <div class="flex flex-row align-middle">
          <div className="basis-1/4 flex ">
            <h2 class="secondary-txt flex align-middle">Phone Number :</h2>
          </div>
          <div className="basis-1/4">
            <h2 class="secondary-txt">{data?.phone}</h2>
          </div>
        </div>
        <div class="flex flex-row align-middle">
          <div className="basis-1/4 flex ">
            <h2 class="secondary-txt flex align-middle">
              {" "}
              {type === "leads"
                ? "Status :"
                : type === "design"
                ? "Design Stage :"
                : type === "work"
                ? "Work Progress :"
                : "Stage"}
            </h2>
          </div>
          <div className="basis-1/4">
            <h2 class="primary-txt text-lg">
              {type === "leads"
                ? data?.status
                : type === "design"
                ? data?.design_stage
                : type === "work"
                ? data?.status
                : ""}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pageitems;
