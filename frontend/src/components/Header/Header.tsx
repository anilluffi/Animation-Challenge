import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-black text-white p-3">
      <div className="container">

        <nav>
          <a href="/" style={{ color: "white", marginRight: "15px" }}>Home</a>
          <a href="/register" style={{ color: "white" }}>Register</a>

        </nav>

      </div>
    </header>
  );
};
