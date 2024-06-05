function CustumButton(props) {
  let innerHtml = "mark as done";
  if (props.completed) innerHtml = "done";

  function clickHandler(e) {
    // console.log(e.target.id);
    // if (innerHtml === "mark as done") {
    props.f2(e.target.id);
    // }
  }
  return (
    <button id={props.id} onClick={clickHandler}>
      {innerHtml}
    </button>
  );
}

export default CustumButton;
