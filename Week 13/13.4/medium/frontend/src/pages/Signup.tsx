import Quote from "../components/Quote";
import Auth from "../components/Auth";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div>
        <Auth type={"Sign Up"} />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
