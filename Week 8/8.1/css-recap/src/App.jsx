import RevenueCard from "./compenents/RevenueCard";

const App = () => {
  return (
    <div className="grid grid-cols-3">
      <RevenueCard title={"Amount Pending"} amount={"92312.30"} order={"13"} />
      {/* <div className="p-6">
        <div className=" grid grid-cols-3">
          <Box1 />
          <Box2 />
          <Box3 />
        </div>
      </div> */}
    </div>
  );
};

function Box1() {
  return (
    <div className="bg-blue-700 text-white ">
      <div className="p-4">
        <p>Next Payout ?</p>
        <div className="flex justify-between">
          <p>Rs2, 312.23</p>
          <p>23 Orders</p>
        </div>
        <div className="flex justify-between  bg-sky-800">
          <p>Next Payment Date: </p>
          <p>Today, 4:00PM</p>
        </div>
      </div>
    </div>
  );
}
function Box2() {
  return (
    <div className=" bg-sky-200">
      <div className="p-4 bg-sky-800">
        <p>Amount Pending ?</p>
        <div className="flex justify-between">
          <p>Rs92,312.20</p>
          <p>13 Orders</p>
        </div>
      </div>
    </div>
  );
}
function Box3() {
  return (
    <div>
      <div className="p-4 bg-red-400">
        <p>Amount Processsed</p>
        <p>Rs223,92,312.19</p>
      </div>
    </div>
  );
}

export default App;
