import {message, Spin, Steps, Image, Upload} from "antd";
import React, {useEffect, useState} from "react";
import {FaArrowLeft} from "react-icons/fa6";
import {IoMdArrowDropdown} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import API_BASE_URL from "../../../config/config";
import {FaRegEdit} from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./style.css"
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const WorkContent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Work Started");
  const [architectData, setArchitectData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [successModal, setSuccessModal] = useState(false);

  //UPLOAD
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const statuses = ["Work Started", "Materials Arrived", "Assembly Finished", "Ready to Deliver"];
  const leadsData = {
    name: "Hari",
    email: "hari@gmail.com",
    phone: "1234567890",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio placeat eum debitis consectetur, vitae sequi deserunt delectus corporis nisi, asperiores quis, fuga ea ut magnam incidunt repudiandae quo! Quidem, at.",
  };
  const projectData = {
    name: "client",
    email: "client@example.com",
    phone: "0201757890",
    assignedArchitect: "Architect1",
    status: "In Progress",
    createdAt: "2024-12-12T16:46:34.276Z",
    updatedAt: "2024-12-12T16:46:34.276Z",
    stages: {
      stageId1: {
        name: "Work Started",
        description: "Work has been started",
        enabled: true,
        images: ["url1", "url2"],
        updatedAt: "2024-12-12T16:46:34.276Z",
      },
      stageId2: {
        name: "Material Arrived",
        description: "Materials have arrived",
        enabled: true,
        images: ["url3", "url4"],
        updatedAt: "2024-12-12T16:46:34.276Z",
      },
      stageId3: {
        name: "Assembly Finished",
        description: "Assembly is complete",
        enabled: true,
        images: [
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        ],
        updatedAt: "2024-12-12T16:46:34.276Z",
      },
      stageId4: {
        name: "Ready to Deliver",
        description: "Ready for delivery",
        enabled: false,
        images: ["url7"],
        updatedAt: "2024-12-12T16:46:34.276Z",
      },
    },
  };
  const getFileListForStage = (images) => {
    return images.map((img, index) => ({
      uid: `${index}`, // Unique identifier for each image
      name: `image-${index + 1}.jpg`, // Image name
      status: "done", // Mark as done since it's already loaded
      url: img, // Image URL
    }));
  };
  const handleUpdate = async (type, value) => {
    try {
      setSuccessModal(true)
      // let response;
      // if (type === "status") {
      //   // Handle Status Change
      //   response = await axios.patch(`${API_BASE_URL}/leads/${id}`, {status: value});
      //   if (response.status === 200) {
      //     setSelectedStatus(value);
      //     message.success("Stage Updated Successfully");
      //     fetchLead();
      //   }
      // } else if (type === "architect") {
      //   // Handle Architect Assignment
      //   response = await axios.patch(`${API_BASE_URL}/leads/${id}`, {assignedArchitect: value});
      //   if (response.status === 200) {
      //     setSelectedArchitectId(value);
      //     message.success("Architect Assigned Successfully");
      //     fetchLead();
      //   }
      // }
    } catch (error) {
      console.error("Error updating lead:", error);
      message.error("Failed to update lead.");
    }
    // setIsModalOpen(false);
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
  const stagesArray = Object.values(projectData.stages); // Convert stages object to array

  // Initialize the current step to the last enabled step
  const lastEnabledIndex = stagesArray.reduce((lastIndex, stage, index) => {
    return stage.enabled ? index : lastIndex;
  }, 0);

  const onStepChange = (step) => {
    // Update the current step only if it is enabled
    if (stagesArray[step].enabled) {
      setCurrent(step);
    }
  };

  useEffect(() => {
    // Ensure the last enabled step is displayed on mount
    setCurrent(lastEnabledIndex);
  }, [lastEnabledIndex]);
  useEffect(() => {
    fetchAllArchitect();
  }, []);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  // const handleChange = ({fileList: newFileList}) => setFileList(newFileList);

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
        <div className="bg-[#99683033] min-w-full border flex flex-col gap-6 border-[#996830] rounded-lg p-8 ">
          <div className="flex justify-end gap-4 items-center">
            <button onClick={() => console.log("ldskf")}>
              <FaRegEdit className="text-xl text-[#996830]" />
            </button>
          </div>
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
                    // value={selectedArchitectId}
                    // disabled={selectedArchitectId}
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
                  // disabled={selectedStatus === "CLOSED"}
                >
                  {selectedStatus}
                  <IoMdArrowDropdown className="text-2xl" />
                </button>
                <p className="text-m">Last updated on : 03/10/2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 p-20">
          {/* Stepper Component */}
          <Steps current={current} onChange={onStepChange} className="custom-steps">
            {stagesArray.map((step, index) => (
              <Steps.Step
                key={index}
                title={
                  <span
                    className={`block text-sm mt-2 ${
                      current === index
                        ? "text-yellow-700 font-semibold"
                        : step.enabled
                        ? "text-yellow-700"
                        : "text-gray-300"
                    }`}
                  >
                    {step.name}
                  </span>
                }
                // description={step.description || "No description available"}
                // disabled={!step.enabled}
              />
            ))}
          </Steps>

          {/* Step Content */}
          <div className="">
            <div className="py-4">
              <textarea
                className="w-full border border-[#996830] outline-none rounded-lg p-6"
                value={leadsData.description}
                rows="5"
                cols="20"
                name="blog"
              >
                Share your knowledge by writing your own blog!
              </textarea>
            </div>
            <p className="text-lg text-[#444444] font-medium py-4">Add/Edit Images</p>

            <div className="flex gap-2 mt-4 border border-[#996830] rounded-lg p-8">
              {stagesArray[current].images.map((img, index) => {
                const file = {
                  uid: index, // unique identifier for each image
                  name: `image-${index + 1}.jpg`, // give a name to the file
                  status: "done", // the image is already loaded (not uploading)
                  url: img, // the image URL from your data
                };

                const fileList = [file]; // This is the list of files for this upload

                // Create an upload button component that should always show only at the last image
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
                  <div key={index}>
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // you can keep this action URL, but it's not used if you're not uploading
                      listType="picture-card"
                      fileList={fileList} // pass file in the format Upload expects
                      beforeUpload={() => false} // Prevent uploading
                      onPreview={handlePreview}
                    >
                      {/* Only show uploadButton for the last image */}
                      {index === stagesArray[current].images.length - 1 ? uploadButton : null}
                    </Upload>
                  </div>
                );
              })}

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
            <div className="text-center">
              <button
                onClick={handleUpdate}
                className="mt-10 bg-[#996833] hover:bg-[#854e1f] text-white text-lg font-semibold py-2 px-4 rounded-xl w-[170px]"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="bg-white rounded-2xl shadow-lg w-44 overflow-hidden">
              <ul className="py-1.5">
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
        {successModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-[#996830]/90 p-6 rounded-xl shadow-lg relative w-[30%] pb-12">
              <button
                onClick={() => setSuccessModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                <IoCloseCircleOutline className="text-white text-xl" />
              </button>
              <div className="flex flex-col gap-4 p-10">
                <p className="text-lg text-white text-center">Work Progress details have been updated successfully.</p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setSuccessModal(false)}
                  className="custom-ok-btn px-14 border border-white text-[#996830] font-semibold py-2 rounded-xl"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Spin>
  );
};

export default WorkContent;
