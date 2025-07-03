function App() {
  const users = [
    {
      id: 1,
      name: "kishan mistry",
    },
    {
      id: 2,
      name: "chintan patel",
    },
    {
      id: 3,
      name: "harsh chauhan",
    },
  ];

  return (
    <>
      <div className=" container w-100 mt-5">
        <h1>
          {" "}
          Task 2 : Create a list of users where each user has a unique id.
          Render the user list using React and assign a unique key to each user.
        </h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
