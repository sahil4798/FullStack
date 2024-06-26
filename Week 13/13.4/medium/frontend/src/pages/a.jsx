// const Blogs = () => {
//   return (
//     <div className="p-20">
//       <div className="flex justify py-5 bg-rose-100 text-slate-400	">
//         <div className="ml-5 ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15"
//             />
//           </svg>
//         </div>
//         <div className="mx-8">For you</div>
//         <div>Following</div>
//       </div>

//       <div className="mt-8 ">
//         <div className="grid grid-cols-5">
//           <div className="col-span-4">
//             <div className="bg-red-200 flex h-14 ">
//               <div className="flex flex-col justify-center  w-12 h-12 mt-1 ml-1 bg-green-300 rounded-full">
//                 <div className="flex justify-center text-xl font-semibold">
//                   H
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center ml-2 text-sm">
//                 Peter V.
//               </div>
//               <div className="flex flex-col justify-center ml-2 text-sm text-slate-400	">
//                 · Dec 3,2023
//               </div>
//               <div className="flex flex-col justify-center ml-2 ">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="gold"
//                   className="size-6"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
//                     clip-rule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div className="flex flex-col justify-center ml-2 text-sm text-slate-400	">
//                 Member-only
//               </div>
//             </div>

//             <div className="mt-6">
//               <div className="text-xl font-semibold">
//                 How an Ugly Single-Page Website Makes $5,000 a Month with
//                 Affiliate Marketing
//               </div>
//               <div className="mt-2">
//                 No need to create a fancy and modern website with hundreds of
//                 pages to make money online. - Making money online is the dream
//                 for man...
//               </div>
//             </div>

//             <div className="flex bg-red-200 mt-10 justify-between ">
//               <div className="flex">
//                 <div className="bg-slate-300 rounded-full text-sm">
//                   Side Hustle
//                 </div>
//                 <div className="ml-3 text-sm text-colo text-gray-400	">
//                   3 min read
//                 </div>
//               </div>
//               <div className="flex">
//                 <div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     className="size-6 text-slate-400"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     className="size-6 text-slate-400"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     className="size-6"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-1 bg-red-500 ">
//             <div className="flex justify-center  h-full">
//               <div className="flex flex-col justify-center">heloooo</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;
