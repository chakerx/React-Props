import Profession from './conpoments/profession';
import Navbar from './conpoments/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const HandleName = (props)=>{
    alert('The user is '+ props);
  }
  return (
    <div className="App">
        <Navbar></Navbar>
        <Profession fullname='Marzougui Chaker' 
                    profession='full stack js developer' handle={HandleName}>
                    <img src="shape2.jpg"  alt="userphoto"  />
        </Profession>
        </div>   
  );
}

export default App;
