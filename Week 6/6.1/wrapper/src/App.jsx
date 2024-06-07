const App = () => {
  return (
    <div>
      <CardComponent>
        <TextComponent />
      </CardComponent>
      <CardComponent2 TextComponent={<TextComponent />}></CardComponent2>
    </div>
  );
};

export default App;

//Modern and correct way of dong it
function CardComponent(props) {
  // console.log(props.children);
  return <div style={{ border: "2px solid black" }}>{props.children}</div>;
}
//if you want you can do it like it
function CardComponent2(props) {
  // console.log(props.TextComponent);
  return <div style={{ border: "2px solid black" }}>{props.TextComponent}</div>;
}

function TextComponent() {
  return <h1>hello</h1>;
}
