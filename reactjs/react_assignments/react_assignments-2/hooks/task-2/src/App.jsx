import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((reponse) => {
        if (!reponse.ok) throw new Error("network error");
        return reponse.json();
      })
      .then((response) => {
        setUsers(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className=" container mt-5">
        <h1>
          Task-2 : Use the useEffect() hook to fetch and display data from an
          API when the component mounts.
        </h1>
        {loading && (
          <div className=" d-flex justify-content-center align-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className=" visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && <p className=" text-danger mt-5"> Error : {error} </p>}

        {!loading && !error && (
          <div className=" mt-5">
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {" "}
                  {user.name} : {user.email}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
