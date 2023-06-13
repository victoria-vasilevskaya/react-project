import React, {useState,useEffect} from 'react';
import Abonents from './components/Abonents/Abonents';
import DeviceStatus from './components/DeviceStatus/DeviceStatus';
import {  Route,Routes,useParams } from 'react-router-dom';
import st from './App.module.css';
import Header from './components/header/Header';
import AdminPanel from './components/Adminpanel/AdminPanel';
import Axios from "axios";
import LoginPage from './components/login/loginPage';






function App (){
  const [data,setData]=useState([]);
  const [stat,setStat]=useState([]);
  let {id} = useParams(); 
  const [date,setDate]= useState("");
  const[idabonent,setIdAbonent] = useState(0);

  useEffect(()=>{
    Axios.get("http://localhost:9000/abonent-device")
    .then((response) => {
      if(response)
      setData(response.data)    
  });
},[])
 
  const uplevel=[];
  const upsnr=[];
  const time=[];
  

  useEffect(()=>{
    Axios.get("http://localhost:9000/abonent-device/abonent-stats/"+id)
    .then((response) => {
      if(response)
      setStat(response.data);
      console.log(stat);
      console.log(id);
      stat.map(data=>{
        uplevel.push(data.uplevel);
        upsnr.push(data.uplsnr);
        time.push(data.time);
      });     
  });
  },[])

  const idAbonentChange=(idabonent)=>{
    setIdAbonent(idabonent);
    id=idabonent;
  }
  const dataSet=(data)=>{
    setDate(date);
  }
  
  return (
    <div className={st.app}>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/abonent-device' element={[<Header/>,<Abonents rows = {data} idabonent={idAbonentChange} data={dataSet} />]} />
            <Route path={'/abonent-device/device-stats/'+idabonent} element={[<Header/>,<DeviceStatus data={date} idabonent={idabonent}/> ]} />
            <Route path='/admin-panel/*' element={<AdminPanel/>}/>
           
          </Routes>
          
      </div>
      
  );

}

export default App;
