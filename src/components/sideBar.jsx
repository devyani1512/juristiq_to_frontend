import { useNavigate } from "react-router-dom"

function SideBar() {

  const navigate = useNavigate();

  const handleHome=()=>{
    console.log("Home clicked");
    navigate('/home');
  }
  const handleMyCases=()=>{
    console.log("My Cases clicked");
    navigate('/myCases');
  }
  const handleClients=()=>{
    console.log("Clients clicked");
    navigate('/clients');
  }
  const handleFees=()=>{
    console.log("Fees clicked");
    navigate('/fees');
  }
  const handleProfile=()=>{
    console.log("Profile clicked");
    navigate('/profile');
  }
  const handleLogout = async () => {
    try {
      await fetch("https://juristiqbackend.onrender.com/logout", {
        method: "POST",
        credentials: "include",
      });
      console.log("Logged out");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  
  
  return (
    
    <div className="sideBar">
        <div className="logo">JuristiQ</div>
        
        <div className="options">
                <button onClick={handleHome }>Home</button>
                <button onClick={handleMyCases }>My Cases</button>
                <button onClick={handleClients}>Clients</button>
                <button onClick={handleFees}>Fees</button>
                <button onClick={handleProfile}>Profile</button>
            
        </div>
        <hr/>
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default SideBar