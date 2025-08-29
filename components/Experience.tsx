// "use client";
// import React from "react";

// import { workExperience, learningExperience } from "@/data";
// import Button from "./ui/moving-border";
// import Image from "next/image"

// const Experience = () => {
//   return (
//     <div className="py-20 w-full">
//       <h1 className="heading">
//         My <span className="text-purple">work experience</span>
//       </h1>

//       <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//         {workExperience.map((card) => (
//           <Button
//             key={card.id}
//             duration={Math.floor(Math.random() * 1000) + 10000}
//             borderRadius="1.75rem"
//             style={{
//               background: "rgb(4,7,29)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <Image
//                 src={card.thumbnail}
//                 alt={card.thumbnail}
//                 width={800}
//                 height={800}
//                 className="lg:w-32 md:w-20 w-16"
//               />
//               <div className="lg:ms-5">
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>

//       {/* New Learning Experience Section */}
//       <h1 className="heading mt-40">
//         My <span className="text-purple">learning journey</span>
//       </h1>

//       <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//         {learningExperience.map((card) => (
//           <Button
//             key={card.id}
//             duration={Math.floor(Math.random() * 1000) + 10000}
//             borderRadius="1.75rem"
//             style={{
//               background: "rgb(4,7,29)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <img
//                 src={card.thumbnail}
//                 alt={card.thumbnail}
//                 className="lg:w-32 md:w-20 w-16"
//               />
//               <div className="lg:ms-5">
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;


// "use client";
// import React from "react";
// import { workExperience, learningExperience } from "@/data";
// import Button from "./ui/moving-border";
// import Image from "next/image";
// import Link from "next/link";

// const Experience = () => {
//   return (
//     <div className="py-20 w-full">
//       <h1 className="heading">
//         My <span className="text-purple">work experience</span>
//       </h1>

//       {/* Work Experience Section */}
//       <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
//         {workExperience.map((card) => (
//           <Button
//             key={card.id}
//             duration={Math.floor(Math.random() * 1000) + 10000}
//             borderRadius="1.75rem"
//             style={{
//               background: "rgb(4,7,29)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
//               {/* Company Logo */}
//               <Image
//                 src={card.thumbnail}
//                 alt={card.title}
//                 width={80}
//                 height={80}
//                 className="lg:w-24 md:w-20 w-16"
//               />

//               {/* Text Info */}
//               <div className="lg:ms-5">
//                 {/* Title & Company */}
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <Link
//                   href={card.companyLink}
//                   target="_blank"
//                   className="text-sm text-purple hover:underline"
//                 >
//                   {card.company}
//                 </Link>

//                 {/* Date & Type */}
//                 <p className="text-sm mt-2 text-gray-300">
//                   {card.date} | <span className="italic">{card.type}</span>
//                 </p>

//                 {/* Short Desc */}
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>

//                 {/* Responsibilities */}
//                 <ul className="list-disc list-inside mt-3 text-sm text-gray-400 space-y-1">
//                   {card.responsibilities.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>

//       {/* Learning Journey Section */}
//       <h1 className="heading mt-40">
//         My <span className="text-purple">learning journey</span>
//       </h1>

//       <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//         {learningExperience.map((card) => (
//           <Button
//             key={card.id}
//             duration={Math.floor(Math.random() * 1000) + 10000}
//             borderRadius="1.75rem"
//             style={{
//               background: "rgb(4,7,29)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <img
//                 src={card.thumbnail}
//                 alt={card.thumbnail}
//                 className="lg:w-32 md:w-20 w-16"
//               />
//               <div className="lg:ms-5">
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;


"use client";
import React from "react";
import { workExperience, learningExperience } from "@/data";
import Button from "./ui/moving-border";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading mb-12">
        My <span className="text-purple">work experience</span>
      </h1>

      {/* Work Experience Section */}
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 1000) + 10000}
            borderRadius="1.25rem"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              borderRadius: `calc(1.25rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border border-neutral-200 dark:border-slate-700 shadow-lg"
          >
            <div className="flex flex-row items-start p-6 gap-6">
              {/* Company Logo - Fixed 20% */}
              <div className="w-1/5 flex justify-center">
                <Image
                  src={card.thumbnail}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain rounded-md"
                />
              </div>

              {/* Content - Fixed 80% */}
              <div className="w-4/5 flex flex-col pl-1">
                {/* Title & Company */}
                <h2 className="text-lg md:text-xl font-bold mb-1">
                  {card.title}
                </h2>
                <div className="flex flex-wrap items-center text-sm text-gray-400 mb-2">
                  <Link
                    href={card.companyLink}
                    target="_blank"
                    className="text-purple underline hover:underline font-medium mr-2"
                  >
                    {card.company}
                  </Link>
                  <span>• {card.date}</span>
                  <span className="ml-2 italic">({card.type})</span>
                </div>

                {/* Short Desc */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3 text-justify">
                  {card.desc}
                </p>
                
                {/* Responsibilities Section */}
                <div className="mt-3 text-left">
                  <h3 className="text-sm font-semibold text-purple mb-2">
                    Key Contributions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 text-left pl-1">
                    {card.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-left leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div> 
            </div>
          </Button>
        ))}
      </div>

      {/* Learning Journey Section */}
      <h1 className="heading mt-32 mb-12">
        My <span className="text-purple">learning journey</span>
      </h1>

      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
        {learningExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 1000) + 10000}
            borderRadius="1.25rem"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              borderRadius: `calc(1.25rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border border-neutral-200 dark:border-slate-700 shadow-lg"
          >
            <div className="flex flex-col items-center p-6 gap-4">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <h2 className="text-lg md:text-xl font-bold text-center">
                {card.title}
              </h2>
              <p className="text-gray-300 text-sm text-center">{card.desc}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
