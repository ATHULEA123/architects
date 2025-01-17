
// import {Link} from "react-router-dom";

// import React, {useEffect, useState} from "react";
// import {Link} from "react-router-dom";
// import {HiPlus} from "react-icons/hi";
// import {FaRegEdit} from "react-icons/fa";
// import {IoCloseCircleOutline} from "react-icons/io5";
// import {MdOutlineDeleteForever} from "react-icons/md";
// import API_BASE_URL from "../../config/config";
// import axios from "axios";
// import {message} from "antd";
// const Architect = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [succesModal, setsuccesModal] = useState(false);
//   const [formData, setFormData] = useState({name: "", phone: ""});
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const fetchArchitects = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${API_BASE_URL}/architect`);

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchArchitects();
//   }, []);
//   const ArchiteCard = ({data}) => (
//     <>
//       {" "}
//       <div class="basis-6/12 bg-[#99683033]  border border-[#996830] rounded-lg p-5 pb-10 flex flex-col gap-3">
//         <div className="flex justify-end gap-4 items-center">
//           <button>
//             <FaRegEdit className="text-lg text-[#996830] " />
//           </button>
//           <button>
//             <MdOutlineDeleteForever className="text-xl text-[#996830] " />
//           </button>
//         </div>
//         <div class="flex flex-row align-middle">
//           <div className="basis-4/12 flex ">
//             <h2 class="secondary-txt flex align-middle"> Name :</h2>
//           </div>
//           <div className="basis-6/12">
//             <h2 class="secondary-txt">{data.name}</h2>
//           </div>
//         </div>
//         <div class="flex flex-row align-middle">
//           <div className="basis-4/12 flex ">
//             <h2 class="secondary-txt flex align-middle">Phone Number :</h2>
//           </div>
//           <div className="basis-6/12">
//             <h2 class="secondary-txt">{data.phone}</h2>
//           </div>
//         </div>
//       </div>
//     </>
//   );
//   const handleInputChange = (e) => {
//     const {name, value} = e.target;
//     setFormData((prev) => ({...prev, [name]: value}));
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/architect`, {
//         name: formData.name,
//         phone: formData.phone,
//       });

//       if (response.status === 201) {
//         message.success("Architect added successfully");
//         fetchArchitects();
//       } else {
//         message.error(`Failed to add architect: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error("Error during architect submission:", error);
//     } finally {
//       setIsModalOpen(false);
//       setsuccesModal(true);
//       setFormData({name: "", phone: ""});
//     }
//   };
//   return (
//     <div className="flex flex-col gap-4 ">
//       {" "}
//       <div className="text-right">
//         <button
//           // onClick={() => navigate(-1)}
//           className="inline-flex add-btn px-6 py-1 text-lg  items-center gap-2"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <HiPlus className="text-base" />
//           Add Architect
//         </button>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {data.map((data, index) => (
//           <ArchiteCard data={data} key={index} />
//         ))}
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="bg-[#996830]/80 p-6 rounded-xl shadow-lg relative w-2/5 pb-12">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-black"
//             >
//               <IoCloseCircleOutline className="text-white text-xl" />
//             </button>

//             <div className="flex flex-col gap-4 p-10">
//               <div class="flex flex-row items-center justify-center align-middle">
//                 <div className="basis-4/12 flex ">
//                   <label className="block text-sm  text-white mb-1">Name :</label>
//                 </div>
//                 <div className="basis-6/12">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[#996830] custom-pannel-input"
//                   />
//                 </div>
//               </div>
//               <div class="flex flex-row items-center justify-center align-middle">
//                 <div className="basis-4/12 flex ">
//                   <label className="block text-sm  text-white mb-1">Phone Number :</label>
//                 </div>
//                 <div className="basis-6/12">
//                   <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[#996830] custom-pannel-input"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="text-center">
//               <button
//                 onClick={handleSubmit}
//                 className=" bg-[#996830] px-8 border border-white text-white font-semibold py-2 rounded-xl"
//               >
//                 Add Architect
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {succesModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="bg-[#996830]/80 p-6 rounded-xl shadow-lg relative w-[30%] pb-12">
//             <button
//               onClick={() => setsuccesModal(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-black"
//             >
//               <IoCloseCircleOutline className="text-white text-xl" />
//             </button>

//             <div className="flex flex-col gap-4 p-10">
//               <p className="text-lg text-white text-center">Architect details has been updated successfully.</p>
//             </div>
//             <div className="text-center">
//               <button
//                 onClick={() => setsuccesModal(false)}
//                 className="custom-ok-btn px-14 border border-white text-[#996830] font-semibold py-2 rounded-xl"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Architect;
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {HiPlus} from "react-icons/hi";
import {FaRegEdit} from "react-icons/fa";
import {IoCloseCircleOutline} from "react-icons/io5";
import {MdOutlineDeleteForever} from "react-icons/md";
import API_BASE_URL from "../../config/config";
import axios from "axios";
import {message} from "antd";

const Architect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [formData, setFormData] = useState({name: "", phone: ""});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [architectToDelete, setArchitectToDelete] = useState(null);
  const [currentArchitect, setCurrentArchitect] = useState(null);

  const fetchArchitects = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/architect`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArchitects();
  }, []);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = async () => {
    try {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        message.error("Please enter a valid 10-digit phone number.");
        return;
      }
      if (currentArchitect) {
        // Editing existing architect
        const response = await axios.put(`${API_BASE_URL}/architect/${currentArchitect.id}`, formData);
        if (response.status === 200) {
          message.success("Architect updated successfully");
        } else {
          message.error(`Failed to update architect: ${response.statusText}`);
        }
      } else {
        // Adding a new architect
        const response = await axios.post(`${API_BASE_URL}/architect`, formData);
        if (response.status === 201) {
          message.success("Architect added successfully");
        } else {
          message.error(`${response.statusText}`);
        }
      }
      fetchArchitects();
      setIsModalOpen(false);
      setFormData({name: "", phone: ""});
      setSuccessModal(true);
    } catch (error) {
      console.error("Error during architect submission:", error);
      message.error(`${error.response.data.message}`);
    } finally {
      setCurrentArchitect(null);
    }
  };

  const handleEdit = (architect) => {
    setCurrentArchitect(architect);
    setFormData({name: architect.name, phone: architect.phone});
    setIsModalOpen(true);
  };
  const openDeleteModal = (architect) => {
    setArchitectToDelete(architect);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setArchitectToDelete(null);
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/architect/${architectToDelete.id}`);
      if (response.status === 200) {
        message.success("Architect deleted successfully");
        fetchArchitects();
      } else {
        message.error(`Failed to delete architect: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error during architect deletion:", error);
      message.error("An error occurred while deleting architect details");
    } finally {
      setIsDeleteModalOpen(false);
      setArchitectToDelete(null);
    }
  };

  const ArchiteCard = ({data}) => (
    <div className="basis-6/12 bg-[#99683033] border border-[#996830] rounded-lg p-5 pb-10 flex flex-col gap-3">
      <div className="flex justify-end gap-4 items-center">
        <button onClick={() => handleEdit(data)}>
          <FaRegEdit className="text-lg text-[#996830]" />
        </button>
        <button onClick={() => openDeleteModal(data)}>
          <MdOutlineDeleteForever className="text-xl text-[#996830]" />
        </button>
      </div>
      <div className="flex flex-row align-middle">
        <div className="basis-4/12 flex">
          <h2 className="secondary-txt flex align-middle"> Name :</h2>
        </div>
        <div className="basis-6/12">
          <h2 className="secondary-txt">{data.name}</h2>
        </div>
      </div>
      <div className="flex flex-row align-middle">
        <div className="basis-4/12 flex">
          <h2 className="secondary-txt flex align-middle">Phone Number :</h2>
        </div>
        <div className="basis-6/12">
          <h2 className="secondary-txt">{data.phone}</h2>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="text-right">
        <button
          className="inline-flex add-btn px-6 py-1 text-lg items-center gap-2"
          onClick={() => {
            setCurrentArchitect(null);
            setFormData({name: "", phone: ""});
            setIsModalOpen(true);
          }}
        >
          <HiPlus className="text-base" />
          Add Architect
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((data, index) => (
          <ArchiteCard data={data} key={index} />
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-[#996830]/80 p-6 rounded-xl shadow-lg relative w-2/5 pb-12">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <IoCloseCircleOutline className="text-white text-xl" />
            </button>
            <div className="flex flex-col gap-4 p-10">
              <div className="flex flex-row items-center justify-center align-middle">
                <div className="basis-4/12 flex">
                  <label className="block text-sm text-white mb-1">Name :</label>
                </div>
                <div className="basis-6/12">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[#996830] custom-pannel-input"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center align-middle">
                <div className="basis-4/12 flex">
                  <label className="block text-sm text-white mb-1">Phone Number :</label>
                </div>
                <div className="basis-6/12">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[#996830] custom-pannel-input"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-[#996830] px-8 border border-white text-white font-semibold py-2 rounded-xl"
              >
                {currentArchitect ? "Update Architect" : "Add Architect"}
              </button>
            </div>
          </div>
        </div>
      )}
      {successModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-[#996830]/80 p-6 rounded-xl shadow-lg relative w-[30%] pb-12">
            <button
              onClick={() => setSuccessModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <IoCloseCircleOutline className="text-white text-xl" />
            </button>
            <div className="flex flex-col gap-4 p-10">
              <p className="text-lg text-white text-center">Architect details have been updated successfully.</p>
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
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-[#996830]/80 p-6 rounded-xl shadow-lg relative w-[30%] pb-12">
            <button onClick={closeDeleteModal} className="absolute top-3 right-3 text-gray-500 hover:text-black">
              <IoCloseCircleOutline className="text-white text-xl" />
            </button>

            <div className="flex flex-col gap-4 p-10">
              <p className="text-lg text-white text-center">Are you sure you want to delete this architect?</p>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="px-14 border border-white text-white font-semibold py-2 rounded-xl bg-[#996830]"
              >
                Yes
              </button>
              <button
                onClick={closeDeleteModal}
                className="px-14 border border-white text-[#996830] font-semibold py-2 rounded-xl bg-white hover:bg-gray-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Architect;
