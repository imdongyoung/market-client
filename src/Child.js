function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      나는 {name}, 나이는 {age}
    </div>
  );
}

export default ChildComponent;
