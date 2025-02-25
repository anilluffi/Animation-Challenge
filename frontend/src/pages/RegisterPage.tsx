import { useState, useEffect } from "react";


const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password || (isRegister && !username)) {
      setError("All fields are required.");
      return;
    }

    try {
      const url = isRegister
        ? "http://localhost:3000/api/auth/register"
        : "http://localhost:3000/api/auth/login";

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        if (!isRegister) {
          localStorage.setItem("token", data.access_token);
          setIsAuthenticated(true);
        }
        setSuccess(isRegister ? "Registration successful! You can now log in." : "Login successful!");
      } else {
        setError(data.message || "An error occurred.");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div className="container mt-5 text-center">
      {isAuthenticated ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
          <div className="btn-group mb-3">
            <button className={`btn ${isRegister ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setIsRegister(true)}>
              Register
            </button>
            <button className={`btn ${!isRegister ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setIsRegister(false)}>
              Login
            </button>
          </div>

          <h2>{isRegister ? "Register" : "Login"}</h2>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}

          <form onSubmit={handleSubmit} className="text-start">
            {isRegister && (
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-success w-100">
              {isRegister ? "Register" : "Login"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
