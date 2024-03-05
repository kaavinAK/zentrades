import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 4
    }
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false
  },
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  },
  plugins: {
    legend: {
      position: "right"
    },
    title: {
      display: true,
      text: "Revenue for December 2023"
    }
  }
};

const dataProductA = {
  labels: ["Social Circle", "Malibu", "Snohomish", "New York", "Everett", "Seattle","London"],
  datasets: [
    {
      label: "Product A",
      data: [2000, 4000, 6000, 8000, 10000, 12000,14000],
      backgroundColor: "green"
    }
  ]
};

const dataProductB = {
  labels: ["Alarm system", "Backflow Testing", "DIagonosis", "Fire Extinguisher", "Pump"],
  datasets: [
    {
      label: "Product B",
      data: [2000, 4000, 6000, 8000, 10000, 12000,14000,16000,18000,20000,22000,24000,26000],
      backgroundColor: "blue"
    }
  ]
};



export default function BarComp() {
  const chartRefProductA = useRef(null);
  const chartRefProductB = useRef(null);

  useEffect(() => {
    if (chartRefProductA.current !== null) {
      chartRefProductA.current.destroy();
    }
    chartRefProductA.current = new Chart(document.getElementById("myChartProductA"), {
      type: "bar",
      data: dataProductA,
      options: options
    });

    if (chartRefProductB.current !== null) {
      chartRefProductB.current.destroy();
    }
    chartRefProductB.current = new Chart(document.getElementById("myChartProductB"), {
      type: "bar",
      data: dataProductB,
      options: options
    });

    

    // Cleanup functions
    return () => {
      if (chartRefProductA.current !== null) {
        chartRefProductA.current.destroy();
      }
      if (chartRefProductB.current !== null) {
        chartRefProductB.current.destroy();
      }
    };
  }, []);

  return (
    <div className="App" style={{ display: 'grid',backgroundColor:"#d4d4d4", gridTemplateColumns: '1fr 1fr', gap: '10px',margin:"20px 20px 20px 20px"}}>
      <div className="chart-container" style={{margin:"10px 10px 10px 10px",backgroundColor:"white"}}>
        <canvas id="myChartProductA" ></canvas>
      </div>
      <div className="chart-container"  style={{margin:"10px 10px 10px 10px",backgroundColor:"white"}}>
        <canvas id="myChartProductB"></canvas>
      </div>
      
    </div>
  );
}

