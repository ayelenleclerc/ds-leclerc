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
export const ItemCount = () => {
  const [contador, setContador] = useState(0);
  return (
    <div style={style.div}>
      <BotonCount operacion="+" funcion={() => setContador(contador + 1)} />
      <Display style={style.display} value={contador}>
        {" "}
      </Display>
      <BotonCount operacion="-" funcion={() => setContador(contador - 1)} />
    </div>
  );
};

export default ItemCount;
