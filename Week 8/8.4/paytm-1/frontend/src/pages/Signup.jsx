import Heading from "../components/Heading";
import InputField from "../components/InputBox";
import Subheading from "../components/SubHeading";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signup = () => {
  return (
    <div className="flex justify-center  bg-slate-300 h-screen">
      <div className="flex flex-col justify-center ">
        <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <Subheading label={"Enter your information to create an account"} />
          <InputField label="Firstname" placeholder={"jack"} />
          <InputField label="Lastname" placeholder={"sher"} />
          <InputField label="Email" placeholder={"jack@gmail.com"} />
          <InputField label="Password" placeholder={"duniyakapapa"} />
          <div className="mt-4">
            <Button label={"Sign up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
