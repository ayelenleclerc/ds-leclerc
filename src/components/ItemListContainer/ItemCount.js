import BotonCount from "../Botones/BotonCount";
import Display from "../Display/Display";
import { useState } from "react";

const style = {
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "130px",
    height: "50px",
    border: "1px solid grey",
    borderRadius: "5px",
  },
  noStock: {
    color: "red",
    fontSize: "10px",
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "5px",
    width: "50px",
    height: "30px",
  },
};
const ItemCount = () => {
  const stock = 10;
  const [contador, setContador] = useState(1);
  const agregar = () => {
    contador < stock ? setContador(contador + 1) : setContador(contador);
  };
  const restar = () => {
    contador > 0 ? setContador(contador - 1) : setContador(contador);
  };
  return (
    <div style={style.div}>
      <BotonCount operacion="+" funcion={agregar} />
      {contador < stock && contador > 0 ? (
        <Display style={style.display} value={contador} />
      ) : (
        <h6 style={style.noStock}>No hay más Stock</h6>
      )}
      <BotonCount operacion="-" funcion={restar} />
    </div>
  );
};

export default ItemCount;
