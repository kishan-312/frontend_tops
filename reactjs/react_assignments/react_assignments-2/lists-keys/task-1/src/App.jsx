function App() {
  const fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

  return (
    <>
      <div className=" container w-100 mt-5">
        <h1>
          {" "}
          Task 1 : Create a React component that renders a list of items (e.g.,
          a list of fruit names). Use the map() function to render each item in
          the list.{" "}
        </h1>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}> {fruit} </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
