import BotonCount from "../Botones/BotonCount";
import Display from "../Display/Display";
import { useState } from "react";

const style = {
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "450px",
    height: "150px",
    border: "1px solid grey",
    borderRadius: "5px",
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
        <Display style={style.display} value={"No hay más Stock"} />
      )}
      <BotonCount operacion="-" funcion={restar} />
    </div>
  );
};

export default ItemCount;
