//PascalCasing
function Message() {
  //Syntax used: JSX (JavaScript XML), this "tags" are converted to pure JS.
  const name = "John";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
