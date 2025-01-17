import React, { useState } from "react";
import {Link} from "react-router-dom";
import {HiPlus} from "react-icons/hi";
import {Pageitems} from "../../../components";
import { Spin } from "antd";
const designData = [
  {
    type: "Project 2367",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    design_stage: "Mood Board",
  },
  {
    type: "Project 2367",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    design_stage: "Basic Design",
  },
  {
    type: "Project 2367",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    design_stage: "Final Design",
  },
  {
    type: "Project 2367",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    design_stage: "Estimation Conformed",
  },

  {
    type: "Project 2367",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    design_stage: "choose Estimation",
  },
];
const Design = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  return (
    <>
      <Spin className="custom-spinner" spinning={loading} tip="Loading...">
        <div className="flex flex-col gap-4 ">
          <div className="text-right">
            <Link to="/pannel/add/design">
              <button
                // onClick={() => navigate(-1)}
                className="inline-flex primary-btn-active px-8 py-0.5 text-lg font-medium items-center gap-2"
              >
                <HiPlus className="text-xl" />
                Add
              </button>
            </Link>
          </div>
          {designData.map((data, index) => (
            <Link to="/pannel/designitem/2">
              <Pageitems
                data={data}
                type="design"
                className="transition duration-500 ease-in-out transform opacity-0 translate-y-10 animate-slide-up"
              />
            </Link>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default Design;
