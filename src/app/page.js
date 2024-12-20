"use client"
import ChartComponent from './components/SensorChart';
import GpsChart from './components/GpsChart';
import SystemStatusChart from './components/SystemStatusChart';
import SensorChart from './components/SensorChart';
import VehicleInfo from './components/VehicleInfo';
import SpeedChart from './components/SpeedChart';
import AccelerationChart from './components/Acceleration';
import EventBarChart from './components/EventChart';

export default function Home() {


  return (

    <>
   <VehicleInfo />
   <SpeedChart />
   <AccelerationChart />
   <EventBarChart />

   <GpsChart />
   <SensorChart />
   <SystemStatusChart />
   
 

    </>
  );
}
