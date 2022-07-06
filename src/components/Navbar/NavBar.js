import CartWidget from "./CartWidget";

const styleNav = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "50px",
  backgroundColor: "#333",
  styleH1: {
    fontSize: "18px",
    color: "white",
    width: "20%",
  },
  styleUl: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    height: "50px",
  },
  styleLi: {
    listStyle: "none",
    padding: "10px",
  },
  styleA: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  styleSpan: {
    color: "white",
    fontSize: "18px",
  },
};
const NavBar = () => {
  return (
    <div style={styleNav}>
      <h1 style={styleNav.styleH1}>Distribuidora Suárez</h1>
      <ul style={styleNav.styleUl}>
        <li style={styleNav.styleLi}>
          <a style={styleNav.styleA} href="/">
            Inicio
          </a>
        </li>
        <li style={styleNav.styleLi}>
          <a style={styleNav.styleA} href="/">
            Catálogo
          </a>
        </li>
        <li style={styleNav.styleLi}>
          <a style={styleNav.styleA} href="/">
            Marcas
          </a>
        </li>
        <li style={styleNav.styleLi}>
          <a style={styleNav.styleA} href="/">
            Contacto
          </a>
        </li>
        <li style={styleNav.styleLi}>
          <a style={styleNav.styleA} href="/">
            Nosotros
          </a>
        </li>
      </ul>
      <CartWidget /> <span style={styleNav.styleSpan}> 4 </span>
    </div>
  );
};

export default NavBar;
