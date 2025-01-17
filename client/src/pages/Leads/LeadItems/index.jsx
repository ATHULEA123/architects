import React, {useEffect, useState} from "react";
import "./style.css";
import {Pageitems} from "../../../components";
import {Link} from "react-router-dom";
import API_BASE_URL from "../../../config/config";
import {Spin} from "antd";
const Leads = () => {
  const [leadsData, setLeadsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/leads`);
      console.log("yhigygj", response);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setLeadsData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <>
      <Spin className="custom-spinner" spinning={loading} tip="Loading...">
        <div className="flex flex-col py-10 gap-4 ">
          {leadsData.map((data, index) => (
            <Link to={`/pannel/leaditem/${data.id}`}>
              <Pageitems
                data={data}
                type="leads"
                className="transition duration-500 ease-in-out transform opacity-0 translate-y-10 animate-slide-up"

              />
            </Link>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default Leads;
