// //Flex
// const App = () => {
//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div style={{ background: "red" }}>first</div>
//         <div style={{ background: "blue" }}>second</div>
//         <div style={{ background: "green" }}>third</div>
//       </div>
//       <div className="flex justify-between	">
//         <div className="bg-red-500">first</div>
//         <div className="bg-blue-500">second</div>
//         <div className="bg-green-500">third</div>
//       </div>
//     </>
//   );
// };
// export default App;

//Grid
const App = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="bg-red-500">first</div>
        <div className="bg-blue-500">second</div>
        <div className="bg-green-500">third</div>
      </div>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-4">first</div>
        <div className="bg-blue-500 col-span-4">second</div>
        <div className="bg-green-500 col-span-2">third</div>
      </div>

      <div className="flex">
        <div className="bg-red-500 w-[40%]">first</div>
        <div className="bg-blue-500 w-[40%]">second</div>
        <div className="bg-green-500 w-[20%]">third</div>
      </div>

      {/* <div className="bg-red-500 md:bg-blue-500"> hello</div> */}
      <div className="grid grid-cols-3">
        <div className="bg-red-500 col-span-3 md:col-span-1">hello 1</div>
        <div className="bg-blue-500 col-span-3 md:col-span-1">hello 2</div>
        <div className="bg-green-500 col-span-3 md:col-span-1">hello 3</div>
      </div>
      {/* both are same */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-500 ">hello 1</div>
        <div className="bg-blue-500">hello 2</div>
        <div className="bg-green-500 ">hello 3</div>
      </div>
    </>
  );
};
export default App;
