import CustumButton from "./CustomButton";

function Todo(props) {
  function handlerFunction(data) {
    props.f1(data);
  }
  return (
    <>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <CustumButton
        completed={props.completed}
        id={props.id}
        f2={handlerFunction}
      />
    </>
  );
}

export default Todo;
