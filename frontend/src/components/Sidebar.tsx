import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const animations = [
    "idle", "crouch", "run", "jumpAndSlide", 
    "cornerGrab", "idle2", "attack", "attack2", "attack3"
  ];

  return (
    <div style={{ width: "200px", padding: "10px", borderRight: "1px solid #ccc" }}>
      <h3>Animations</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {animations.map(anim => (
          <li key={anim} style={{ marginBottom: "5px" }}>
            <button onClick={() => navigate(`/animation/${anim}`)}>
              {anim.charAt(0).toUpperCase() + anim.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
