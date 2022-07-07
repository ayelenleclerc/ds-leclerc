const style = {
  display: {
    border: "1px solid white",
    borderRadius: "5px",
    width: "60px",
    height: "40px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "bold",
    color: "green",
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
