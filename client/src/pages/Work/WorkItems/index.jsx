import React, {useEffect, useState} from "react";
import {Pageitems} from "../../../components";
import {Link} from "react-router-dom";
import {Spin} from "antd";
import {HiPlus} from "react-icons/hi";
import API_BASE_URL from "../../../config/config";

const Work = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const workDatas = [
    {
      type: "Project 2367",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      work_progress: "started",
    },
  ];
  const fetchWorkData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/workProgress/`);
      const data = await response.json();
      setWorkData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const [workData, setWorkData] = useState([]);
  useEffect(() => {
    fetchWorkData()
  }, []);

  return (
    <>
      <Spin className="custom-spinner" spinning={loading} tip="Loading...">
        <div className="flex flex-col gap-4 ">
          <div className="text-right">
            <Link to="/pannel/add/work">
              <button
                // onClick={() => navigate(-1)}
                className="inline-flex primary-btn-active px-8 py-0.5 text-lg font-medium items-center gap-2"
              >
                <HiPlus className="text-xl" />
                Add
              </button>
            </Link>
          </div>
          {workData.map((data, index) => (
            <Link to="/pannel/workitem/2">
              <Pageitems data={data} type="work" />
            </Link>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default Work;
