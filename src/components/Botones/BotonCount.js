const style = {
  boton: {
    width: "50px",
    height: "50px",
    border: "none",
    color: " #3C91E6",
    fontSize: "30px",
  },
};
const BotonCount = ({ operacion, funcion }) => {
  return (
    <button style={style.boton} onClick={funcion}>
      {operacion}
    </button>
  );
};

export default BotonCount;
