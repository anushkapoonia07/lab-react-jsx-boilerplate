import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const ImgData=imageData();
  return(
    <div>
      <div><h1>Kalvium gallary</h1></div>
      <div>{ImgData.map((item) => {
      return <img key={item.id} src={item.img} alt="" />
      })}
      </div>
   </div>
  )
}

export default App;
