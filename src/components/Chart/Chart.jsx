import React, {  Component, useEffect, useState } from "react";
import s from "./Chart.module.css";
import Axios from "axios";
import {  useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)



function Chart1( props){
  
  let {id} = useParams();
  id =props.id;
  let stat=props.stat;
  const uplevel=[];
  const upsnr=[];
  const upwidth=[];
  const upfreq=[];
  const upid=[];
  const time=[];
  const downid=[];
  const downmod=[];
  const downwidth=[];
  const downfreq=[];
  const downsnr=[];
  const downlevel=[];

      stat.map(data=>{
        uplevel.push(data.uplevel);
        upsnr.push(data.upsnr);
        upwidth.push(data.upwidth);
        upfreq.push(data.upfreq);
        upid.push(data.upid);
        time.push(data.time);
        downlevel.push(data.downlevel);
        downsnr.push(data.downsnr);
        downwidth.push(data.downwidth);
        downfreq.push(data.downfreq);
        downid.push(data.downid);
        downmod.push(data.downmod);
      });   



  let data={
    labels:time,
    datasets:[
      {
        label:"uplevle",
        data:uplevel,
        borderColor:'red',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',
        showLine:true
      },
      {
        label:"upsnr",
        data:upsnr,
        borderColor:'green',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',
        showLine:true
      },
      {
        label:"upwidth",
        data:upwidth,
        borderColor:'blue',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',
        showLine:true
      },
      {
        label:"upid",
        data:upid,
        borderColor:'black',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',
        showLine:true
      },
      {
        label:"downid",
        data:downid,
        borderColor:'#345612  ',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',   
        showLine:true
      },
      {
        label:"downmod",
        data:downmod,
        borderColor:'#777  ',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',   
        showLine:true
      },
      {
        label:"downlevel",
        data:downlevel,
        borderColor:'#888 ',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',   
        showLine:true
      },
      {
        label:"downwidth",
        data:downwidth,
        borderColor:'#999 ',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',   
        showLine:true
      },
      {
        label:"downsnr",
        data:downsnr,
        borderColor:'# 555 ',
        tension:0.4,
        pointStyle:'rect',
        pointBorderColor:'blue',   
        showLine:true
      }
    ]
  }
  
    return (
      <div>
        <Line data={data}></Line>
      </div>
      
    );
  
    }

export default Chart1;
