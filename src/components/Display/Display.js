const style = {
  display: {
    border: "1px solid white",
    borderRadius: "5px",
    width: "250px",
    height: "50px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "black",
  },
};
const Display = ({ value }) => {
  return (
    <div style={style.display}>
      {" "}
      <p>{value}</p>
    </div>
  );
};

export default Display;
