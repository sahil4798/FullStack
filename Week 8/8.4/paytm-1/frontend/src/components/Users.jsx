import Button from "../components/Button";

const Users = () => {
  return (
    <div className="mt-6">
      <div>
        <div className="pb-2 font-bold text-xl">Users</div>
        <input
          placeholder="Search users..."
          type="text"
          className="shadow-sm border w-full rounded-md px-2 py-1"
        />
      </div>
      <div className="mt-4">
        <User />
      </div>
    </div>
  );
};

function User() {
  return (
    <div className="flex justify-between h-14  ">
      <div className="flex">
        <div className="h-12 w-12 bg-slate-200 mt-1 ml-2 flex justify-center rounded-full">
          <div className=" h-full flex flex-col justify-center text-xl">J</div>
        </div>
        <div className="flex flex-col justify-center h-full  ml-2">
          <div> Jack sher</div>
        </div>
      </div>
      <div className="h-full bg  flex flex-col justify-end">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}

export default Users;
