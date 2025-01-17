import React, {useEffect, useState} from "react";
import {FaArrowLeft} from "react-icons/fa6";
import {useNavigate, useParams} from "react-router-dom";
import {IoMdArrowDropdown} from "react-icons/io";
import "./style.css";
import axios from "axios";
import API_BASE_URL from "../../../config/config";
import {message, Spin} from "antd";

const LeadContent = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [leadsData, setLeadsData] = useState([]);
  const [architectData, setArchitectData] = useState([]);
  const [selectedArchitectId, setSelectedArchitectId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const statuses = ["OPEN", "NO RESPONSE", "CLOSED"];

  const handleUpdate = async (type, value) => {
    try {
      let response;
      if (type === "status") {
        // Handle Status Change
        response = await axios.patch(`${API_BASE_URL}/leads/${id}`, {status: value});
        if (response.status === 200) {
          setSelectedStatus(value);
          message.success("Stage Updated Successfully");
          fetchLead();
        }
      } else if (type === "architect") {
        // Handle Architect Assignment
        response = await axios.patch(`${API_BASE_URL}/leads/${id}`, {assignedArchitect: value});
        if (response.status === 200) {
          setSelectedArchitectId(value);
          message.success("Architect Assigned Successfully");
          fetchLead();
        }
      }
    } catch (error) {
      console.error("Error updating lead:", error);
      message.error("Failed to update lead.");
    }
    setIsModalOpen(false);
  };
  const fetchLead = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/leads/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setLeadsData(result);

      if (result.assignedArchitect) {
        setSelectedArchitectId(result.assignedArchitect);
      }
      setSelectedStatus(result.status);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchAllArchitect = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/architect`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setArchitectData(result);
    } catch (error) {}
  };
  useEffect(() => {
    fetchLead();
    fetchAllArchitect();
  }, []);

  return (
    <Spin className="custom-spinner" spinning={loading} tip="Loading...">
      <div className="flex flex-col gap-2">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex primary-btn-boarded rounded-2 gap-1 px-2 py-2 items-center"
          >
            <FaArrowLeft className="text-2xl" />
            Go back
          </button>
        </div>
        <div className="bg-[#99683033] min-w-full border flex flex-col gap-6 border-[#996830] rounded-lg p-10 ">
          <h3 className="primary-txt text-2xl text-center p-3">Contact Us lead</h3>
          <div className="flex flex-row">
            <div className="basis-8/12 flex flex-col gap-4">
              <div className="flex flex-row align-middle">
                <div className="basis-1/4 flex ">
                  <h2 className="secondary-txt flex align-middle">Name :</h2>
                </div>
                <div className="basis-1/4">
                  <h2 className="secondary-txt">{leadsData.name}</h2>
                </div>
              </div>
              <div className="flex flex-row align-middle">
                <div className="basis-1/4 flex ">
                  <h2 className="secondary-txt flex align-middle">Email :</h2>
                </div>
                <div className="basis-1/4">
                  <h2 className="secondary-txt">{leadsData.email}</h2>
                </div>
              </div>
              <div className="flex flex-row align-middle">
                <div className="basis-1/4 flex ">
                  <h2 className="secondary-txt flex align-middle">Phone Number :</h2>
                </div>
                <div className="basis-1/4">
                  <h2 className="secondary-txt">{leadsData.phone}</h2>
                </div>
              </div>
              <div className="flex flex-row align-middle">
                <div className="basis-1/4 flex ">
                  <h2 className="secondary-txt flex items-center">Assign Architect :</h2>
                </div>
                <div className="basis-1/4">
                  <select
                    className="custome-select   px-5 py-1.5"
                    onChange={(e) => handleUpdate("architect", e.target.value)}
                    name="assignedArchitect"
                    id="assignedArchitect"
                    value={selectedArchitectId}
                    disabled={selectedArchitectId}
                  >
                    {" "}
                    <option value="" disabled>
                      Select Architect
                    </option>
                    {architectData.map((data, index) => (
                      <option value={`${data.id}`}>{data.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="basis-4/12 flex flex-col justify-center items-center">
              <div className="flex flex-col gap-4">
                <button
                  className="custome-select px-5 py-1.5 bg-gray-200 inline-flex gap-2 items-center justify-center"
                  onClick={() => setIsModalOpen(true)}
                  disabled={selectedStatus === "CLOSED"}
                >
                  {selectedStatus} <IoMdArrowDropdown className="text-2xl" />
                </button>
                <p className="text-m">Last updated on : 03/10/2024</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="basis-10/12">
              <textarea className="custom-textarea" value={leadsData.description} rows="5" cols="20" name="blog">
                Share your knowledge by writing your own blog!
              </textarea>
            </div>
            <div className="basis-2/12 flex items-end">
              <p className="text-m">09:00 pm, 03 Oct 2024</p>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="bg-white rounded-2xl shadow-lg w-40 overflow-hidden">
              <ul>
                {statuses.map((status) => (
                  <li key={status}>
                    <button
                      className={`w-full text-center bg-white text-[#996830] px-3 py-2.5  font-medium ${
                        selectedStatus === status ? "bg-gray-100 cursor-not-allowed" : "bg-white hover:bg-gray-100"
                      }`}
                      onClick={() => handleUpdate("status", status)}
                      disabled={selectedStatus === status}
                    >
                      {status}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Spin>
  );
};

export default LeadContent;
