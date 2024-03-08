import { Link } from "react-router-dom";
import { HeaderTag } from "./style";

function Header() {

  const logout  = () => {
    sessionStorage.clear();
    window.location.reload();
  }
  

  return (
    <HeaderTag>
      <nav>
        <h1 id="title">SGC</h1>

        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          {sessionStorage.getItem("user-name") && (
            <li>
              <a href="/alimentacao">Inscrição</a>
            </li>
          )}
          <li>
            <a href="#contacto">Alimentação</a>
          </li>
          <li>
            <a href="#contacto">Contactos</a>
          </li>
        </ul>
        {!sessionStorage.getItem("user-token") ? (
          <ol id="button">
            <Link to="/login" className="btn">
              Login
            </Link>
          </ol>
        ) : (
          <div>
            <span>
              Olá, {sessionStorage.getItem("user-name").split(" ")[0]}{" "}
              {
                sessionStorage.getItem("user-name").split(" ")[
                  sessionStorage.getItem("user-name")?.split(" ").length - 1
                ]
              }
            </span>{" "}
            | <button onClick={logout}>Logout</button>
          </div>
        )}
      </nav>
    </HeaderTag>
  );
}
export default Header;


