import carrito from "../../assets/img/carrito.png";
const style = {
  img: {
    width: "40px",
    height: "40px",
    padding: "10px",
  },
};
function CartWidget() {
  return (
    <div>
      <img style={style.img} src={carrito} alt="carrito" />
    </div>
  );
}

export default CartWidget;
