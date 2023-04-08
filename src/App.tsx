import { useState } from "react";
import Alert from "./components/Alert";
import ButtonComponent from "./components/ButtonComponent";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: String, index: number) => {
    console.log(item, index);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="text-center">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)} color="danger">
          This is an
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="alert-link"
          >
            {" "}
            Alert
          </a>
        </Alert>
      )}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <div className="btn-group-vertical">
        <ButtonComponent
          color="secondary"
          onClick={() => console.log("Clicked Button 1")}
        >
          Click here
        </ButtonComponent>
        <ButtonComponent onClick={() => console.log("Clicked Button 2")}>
          Another button
        </ButtonComponent>
        <ButtonComponent
          onClick={() => setAlertVisibility(true)}
          color="danger"
        >
          Open Alert
        </ButtonComponent>
      </div>
    </div>
  );
}

export default App;
