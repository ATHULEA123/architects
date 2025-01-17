import React, {useEffect, useState} from "react";
import {FaArrowLeft} from "react-icons/fa6";
import {IoMdArrowDropdown} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import {Image, message, Upload} from "antd";
import API_BASE_URL from "../../config/config";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const FormComponent = ({mode, editData}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    assignedArchitect: "John",
    selectedStatus: "Select Design State",
    images: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Select Design State");
  const designStatuses = ["Mood Board", "Basic Design", "Final Design", "Choose Estimation", "Estimation Confirmed"];
  const workStatuses = ["Work Started", "Material Arrived", "Assembly Finished", "Ready to Deliver"];
  //UPLOAD
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  // const handleStatusChange = (status) => {
  //   setSelectedStatus(status);
  //   setIsModalOpen(false); // Close the modal
  // };
  const navigate = useNavigate();
  useEffect(() => {
    mode === "work" && setSelectedStatus("Select Work Progress");
    if (editData) {
      setFormData({
        ...formData,
        name: editData.name || "",
        email: editData.email || "",
        phone: editData.phone || "",
        assignedArchitect: editData.assignedArchitect || "John",
        selectedStatus: editData.selectedStatus || "Select Design State",
        images: editData.images || [],
      });
    }
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStatusChange = (status) => {
    setFormData((prevData) => ({ ...prevData, selectedStatus: status }));
    setIsModalOpen(false);
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({fileList: newFileList}) => setFileList(newFileList);
  const handleAddImage = () => {
    document.querySelector(".ant-upload input[type='file']").click();
  };
  const handleSubmit = async () => {
    try {
      // Create a new FormData object to handle form data
      const formDataToSend = new FormData();
  
      // Append regular fields from the form
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("assignedArchitect", formData.assignedArchitect);
      formDataToSend.append("status", formData.selectedStatus);
      formDataToSend.append("type", mode); // Or any appropriate type for the work
  
      // Append each file from the fileList
      fileList.forEach((file) => {
        formDataToSend.append("img", file.originFileObj);
      });
  
      // Make a POST request with FormData
      const response = await axios.post(`${API_BASE_URL}/workProgress/`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type for file uploads
        },
      });
      if (response.status === 201) {
        message.success("Work Added successfully");
      } else {
        message.error(`Failed to update architect`);
      }
      console.log("Response:", response.data); // Log the response
      // You can handle success feedback here, e.g., a success message or navigating back
      navigate(-1); // Or any other appropriate action after form submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error feedback here, e.g., a failure message
    }
  };
  
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      +
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <div className="flex flex-col gap-2 px-10">
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
        <div className="flex flex-row">
          <div className="basis-8/12 flex flex-col gap-5">
            <div className="flex flex-row align-middle">
              <div className="basis-1/4 flex items-center ">
                <h2 className="secondary-txt flex align-middle">Name :</h2>
              </div>
              <div className="basis-2/4">
                <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                  type="text"
                  className="custom-input w-full h-[45px] text-base rounded-xl pl-4 outline-none focus:ring-1 focus:ring-[#996833]"
                />
              </div>
            </div>
            <div className="flex flex-row align-middle">
              <div className="basis-1/4 flex items-center">
                <h2 className="secondary-txt flex align-middle">Email :</h2>
              </div>
              <div className="basis-2/4">
                <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                  type="text"
                  className="custom-input w-full h-[45px] text-base rounded-xl pl-4 outline-none focus:ring-1 focus:ring-[#996833]"
                />
              </div>
            </div>
            <div className="flex flex-row align-middle">
              <div className="basis-1/4 flex items-center">
                <h2 className="secondary-txt flex align-middle">Phone Number :</h2>
              </div>
              <div className="basis-2/4">
                <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                  type="text"
                  className="custom-input w-full h-[45px] text-base rounded-xl pl-4 outline-none focus:ring-1 focus:ring-[#996833]"
                />
              </div>
            </div>
            <div className="flex flex-row align-middle">
              <div className="basis-1/4 flex items-center ">
                <h2 className="secondary-txt flex items-center">Assign Architect :</h2>
              </div>
              <div className="basis-2/4">
                <select  name="assignedArchitect"
                  value={formData.assignedArchitect}
                  onChange={handleInputChange} className="custome-select w-full h-[45px] px-5 py-1.5" >
                  <option value="John">John</option>
                  <option value="Hari">Hari</option>
                  <option value="Closed">Joel</option>
                </select>
              </div>
            </div>
          </div>
          <div className="basis-4/12 flex flex-col justify-end items-center">
            <div className="flex flex-col gap-4">
              <button
                className="custome-select px-5 py-2 text-l bg-gray-200 inline-flex gap-2 items-center justify-center"
                onClick={() => setIsModalOpen(true)}
                disabled={
                  mode === "design" ? selectedStatus === "Estimation Confirmed" : selectedStatus === "Ready to Deliver"
                }
              >
                {formData.selectedStatus} <IoMdArrowDropdown className="text-xl" />
              </button>
              <button className="primary-btn-active p-2 font-bold" onClick={handleAddImage}>
                Add Images
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="basis-12/12 p-3">
            {/* <textarea className="custom-textarea" rows="5" cols="20" name="blog">
              Share your knowledge by writing your own blog!
            </textarea> */}
            {fileList.length <= 0 && "No images Added"}
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => false}
            >
              {fileList.length >= 8 && null}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{
                  display: "none",
                }}
                className="custom-img-wrapper"
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        {" "}
        <button onClick={handleSubmit} className="bg-[#996830] text-white p-3 px-16 font-bold rounded-lg">Done</button>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-950 bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white rounded-2xl shadow-lg w-48 overflow-hidden p-1">
            <ul>
              {mode === "design" &&
                designStatuses.map((status) => (
                  <li key={status}>
                    <button
                      className={`w-full text-left bg-white text-[#996830] px-5 py-2  font-medium ${
                        selectedStatus === status ? "cursor-not-allowed bg-gray-100 " : "bg-white hover:bg-gray-100"
                      }`}
                      onClick={() => handleStatusChange(status)}
                      disabled={selectedStatus === status}
                    >
                      {status}
                    </button>
                  </li>
                ))}
              {mode === "work" &&
                workStatuses.map((status) => (
                  <li key={status}>
                    <button
                      className={`w-full text-left bg-white text-[#996830] px-5 py-2  font-medium ${
                        selectedStatus === status ? "cursor-not-allowed bg-gray-100 " : "bg-white hover:bg-gray-100"
                      }`}
                      onClick={() => handleStatusChange(status)}
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
  );
};

export default FormComponent;
