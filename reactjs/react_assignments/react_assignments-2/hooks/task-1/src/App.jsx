import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className=" container mt-5">
        <h1>
          Create a functional component with a counter using the useState()
          hook. Include buttons to increment and decrement the counter
        </h1>
        <div className=" d-flex gap-3 m-auto w-25 mt-4 align-items-center">
          <button
            className=" btn btn-success "
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </button>
          <span> count : {counter} </span>
          <button
            className=" btn btn-success "
            onClick={() => {
              if (counter > 0) {
                setCounter(counter - 1);
              } else {
                alert("u can't count less than zero");
              }
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
