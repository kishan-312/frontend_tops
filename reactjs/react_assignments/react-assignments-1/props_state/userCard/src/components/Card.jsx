function Card({ name, age, location }) {
  return (
    <div style={styles.card}>
      <h2> {name} </h2>
      <p> Age : {age} </p>
      <p> Location : {location} </p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid black",
    borderRadius: "8px",
    maxWidth: "400px",
    padding: "10px",
    margin: "10px",
  },
};

export default Card;
