let styleNav = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "50px",
  backgroundColor: "#333",
};
let styleH1 = {
  fontSize: "18px",
  color: "white",
  width: "20%",
};
let styleUl = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "80%",
  height: "50px",
};
let styleLi = {
  listStyle: "none",
};
let styleA = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};

const NavBar = () => {
  return (
    <div style={styleNav}>
      <h1 style={styleH1}>Distribuidora Suárez</h1>
      <ul style={styleUl}>
        <li style={styleLi}>
          <a style={styleA} href="/">
            Inicio
          </a>
        </li>
        <li style={styleLi}>
          <a style={styleA} href="/">
            Catálogo
          </a>
        </li>
        <li style={styleLi}>
          <a style={styleA} href="/">
            Marcas
          </a>
        </li>
        <li style={styleLi}>
          <a style={styleA} href="/">
            Contacto
          </a>
        </li>
        <li style={styleLi}>
          <a style={styleA} href="/">
            Nosotros
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
