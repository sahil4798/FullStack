import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Auth type={"Sign In"}></Auth>
      <Quote></Quote>
    </div>
  );
};

export default Signin;
