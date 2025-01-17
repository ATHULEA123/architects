// import React, {useState} from "react";

// // Your data
// const projectData = {
//   id: "7CBwjt1tv2c3yGQPkaOZ",
//   projectId: "Project 0027",
//   name: "client",
//   email: "client@example.com",
//   phone: "0201757890",
//   assignedArchitect: "Architect1",
//   stages: [
//     {img: [], name: "Work Started", description: "", enabled: true},
//     {img: [], name: "Material Arrived", description: "", enabled: false},
//     {img: [], name: "Assembly Finished", description: "", enabled: false},
//     {img: [], name: "Ready to deliver", description: "", enabled: false},
//   ],
//   status: "In Progress",
//   createdAt: "2024-12-12T16:46:34.276Z",
//   updatedAt: "2024-12-12T16:46:34.276Z",
// };

// const CustomStepper = () => {
//   // Initialize the current step with the first enabled step (if any)
//   const enabledStages = projectData.stages.filter((stage) => stage.enabled);
//   const [current, setCurrent] = useState(enabledStages.length > 0 ? projectData.stages.indexOf(enabledStages[0]) : 0);

//   const handleStepClick = (index) => {
//     if (projectData.stages[index].enabled) {
//       setCurrent(index);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-10">
//       {/* Stepper */}
//       <div className="flex items-center justify-between">
//         {projectData.stages.map((step, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center w-1/4"
//             onClick={() => handleStepClick(index)}
//           >
//             {/* Step Indicator */}
//             <div
//               className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
//                 current === index
//                   ? "bg-yellow-700 text-white border-yellow-700"
//                   : step.enabled
//                   ? "bg-white text-yellow-700 border-yellow-700 cursor-pointer"
//                   : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
//               } transition`}
//             >
//               {index + 1}
//             </div>
//             {/* Step Title */}
//             <p
//               className={`mt-2 text-sm ${
//                 current === index ? "text-yellow-700 font-semibold" : step.enabled ? "text-yellow-700" : "text-gray-300"
//               }`}
//             >
//               {step.name}
//             </p>
//             {/* Dashed Line */}
//             {index !== projectData.stages.length - 1 && (
//               <div
//                 className={`w-full h-1 border-dashed border-t-2 ${
//                   current >= index + 1 ? "border-yellow-700" : "border-gray-300"
//                 } mt-2`}
//               ></div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Step Content */}
//       <div className="mt-8 p-6 border border-dashed rounded-lg bg-yellow-50 border-yellow-700">
//         <p className="text-gray-800">{projectData.stages[current].description || "No description available"}</p>
//       </div>
//     </div>
//   );
// };

// export default CustomStepper;

// import React, { useState, useEffect } from 'react';
// import { Steps } from 'antd';

// const steps = [
//   { title: 'Work Started', content: 'Content for Work Started' },
//   { title: 'Material Arrived', content: 'Content for Material Arrived' },
//   { title: 'Assembly Finished', content: 'Content for Assembly Finished' },
//   { title: 'Ready to Deliver', content: 'Content for Ready to Deliver' },
// ];

// const CustomStepper = () => {
//   const [current, setCurrent] = useState(steps.length - 1); // Set to last step initially

//   const onStepChange = (step) => {
//     setCurrent(step);
//   };

//   useEffect(() => {
//     // Optionally, you can set the default current step when the component mounts
//     setCurrent(steps.length - 1); // Ensures that the last step is displayed
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto py-10">
//       {/* Stepper Component */}
//       <Steps
//         current={current}
//         onChange={onStepChange}
//         className="custom-steps"
//       >
//         {steps.map((step, index) => (
//           <Steps.Step
//             key={index}
//             title={
//               <span
//                 className={`block text-sm mt-2 ${
//                   current === index
//                     ? 'text-yellow-700 font-semibold'
//                     : 'text-gray-500'
//                 }`}
//               >
//                 {step.title}
//               </span>
//             }
//           />
//         ))}
//       </Steps>

//       {/* Step Content */}
//       <div className="mt-8 p-6 border border-dashed rounded-lg bg-yellow-50 border-yellow-700">
//         <p className="text-gray-800">{steps[current].content}</p>
//       </div>
//     </div>
//   );
// };

// export default CustomStepper;import React, { useState, useEffect } from 'react';
// import { Steps } from 'antd';
// import { useEffect, useState } from 'react';

// // Example data model from your project
// const projectData = {
//   "id": "7CBwjt1tv2c3yGQPkaOZ",
//   "projectId": "Project 0027",
//   "name": "client",
//   "email": "client@example.com",
//   "phone": "0201757890",
//   "assignedArchitect": "Architect1",
//   "stages": [
//     { "img": [], "name": "Work Started", "description": "Work has been started", "enabled": true },
//     { "img": [], "name": "Material Arrived", "description": "Materials have arrived", "enabled": true },
//     { "img": [], "name": "Assembly Finished", "description": "Assembly is complete", "enabled": true },
//     { "img": [], "name": "Ready to Deliver", "description": "Ready for delivery", "enabled": false }
//   ],
//   "status": "In Progress",
//   "createdAt": "2024-12-12T16:46:34.276Z",
//   "updatedAt": "2024-12-12T16:46:34.276Z"
// };

// const CustomStepper = () => {
//   // Find the last enabled stage
//   const enabledStages = projectData.stages.filter(stage => stage.enabled);
//   const lastEnabledIndex = enabledStages.length > 0 ? projectData.stages.lastIndexOf(enabledStages[enabledStages.length - 1]) : 0;

//   const [current, setCurrent] = useState(lastEnabledIndex); // Set the current to the last enabled step

//   const onStepChange = (step) => {
//     // Update the current step only if it is enabled
//     if (projectData.stages[step].enabled) {
//       setCurrent(step);
//     }
//   };

//   useEffect(() => {
//     // Ensure the current step is the last enabled stage when the component mounts
//     setCurrent(lastEnabledIndex);
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto py-10">
//       {/* Stepper Component */}
//       <Steps
//         current={current}
//         onChange={onStepChange}
//         className="custom-steps"
//       >
//         {projectData.stages.map((step, index) => (
//           <Steps.Step
//             key={index}
//             title={
//               <span
//                 className={`block text-sm mt-2 ${
//                   current === index
//                     ? 'text-yellow-700 font-semibold'
//                     : step.enabled
//                     ? 'text-yellow-700'
//                     : 'text-gray-300'
//                 }`}
//               >
//                 {step.name}
//               </span>
//             }
//             description={step.description || "No description available"}
//             disabled={!step.enabled}
//           />
//         ))}
//       </Steps>

//       {/* Step Content */}
//       <div className="mt-8 p-6 border border-dashed rounded-lg bg-yellow-50 border-yellow-700">
//         <p className="text-gray-800">{projectData.stages[current].description || "No description available"}</p>
//       </div>
//     </div>
//   );
// };

// export default CustomStepper;

import React, {useState, useEffect} from "react";
import {Steps} from "antd";

// Example data model with new structure
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
      images: ["url5", "url6"],
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

const CustomStepper = () => {
  const stagesArray = Object.values(projectData.stages); // Convert stages object to array

  // Initialize the current step to the last enabled step
  const lastEnabledIndex = stagesArray.reduce((lastIndex, stage, index) => {
    return stage.enabled ? index : lastIndex;
  }, 0);
  const [current, setCurrent] = useState(lastEnabledIndex);

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

  return (
    <div className="max-w-4xl mx-auto py-10">
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
      <div className="mt-8 p-6 border border-dashed rounded-lg bg-yellow-50 border-yellow-700">
        <p className="text-gray-800">{stagesArray[current].description || "No description available"}</p>
        <div className="flex gap-2 mt-4">
          {stagesArray[current].images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Stage ${current + 1} Image ${index + 1}`}
              className="w-20 h-20 object-cover border border-gray-300 rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomStepper;
