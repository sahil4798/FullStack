const Wrapper = (props) => {
  return (
    <div>
      <h1>Welcome to Routing</h1>
      {props.children}
    </div>
  );
};

export default Wrapper;
