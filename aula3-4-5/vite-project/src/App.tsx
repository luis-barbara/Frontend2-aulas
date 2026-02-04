import './App.css'
import ProfileCard from "./components/profilecard"
import Card from "./components/card"
import Clock from './components/clock';
import Contador from "./components/ex-contador"


const styles = {
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center" 
      };


function App() {
  return (
    <div style={styles}>
      <ProfileCard 
        name="John Doe"
        email="john.doe@example.com"
        profilePic="./club.jpg"
      />
      <Card 
        title="Sample Card"
        description="This is a description for the sample card."
        button="Click Me"
      />
      <Clock 
        timezone="Europe/Lisbon"
      />
      <Contador />

    </div>
  );
}

export default App;
