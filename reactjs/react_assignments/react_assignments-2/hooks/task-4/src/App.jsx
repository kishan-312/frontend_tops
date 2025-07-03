import { useEffect, useRef, useState } from "react";

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  const incrementState = () => setStateCount((prev) => prev + 1);
  const incrementRef = () => (refCount.current += 1);

  return (
    <>
      <div className="container mt-4">
        <h1>
          Task-4 : Create react app to avoid re-renders in react application by
          useRef?
        </h1>
        <div className=" mt-4 d-grid gap-4">
          <div className=" d-flex gap-3">
            <p> State Count : {stateCount} </p>
            <button onClick={incrementState}>Increment (re renders) </button>
          </div>
          <div className=" d-flex gap-3">
            <p> Ref Count : {refCount.current} </p>
            <button onClick={incrementRef}>
              Increment (without re renders){" "}
            </button>
          </div>
          <p className="mt-3">
            🔁 <strong>Component Rendered:</strong> {renderCount.current} times
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
