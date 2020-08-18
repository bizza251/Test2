import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function Grafico() {
  const [dataChart, setDataChart] = useState({});
  const [dataOptions, setDataOptions] = useState({});

  const chart = () => {
    setDataChart({
      labels: ["rosso", "verde", "blu"],
      datasets: [
        {
          label: "colori",
          data: [255, 10, 80],
          backgroundColor: [
            "rgba(10,255,160,0.2)",
            "rgba(10,20,160,0.2)",
            "rgba(100,2,160,0.2)",
          ],
          borderWidth: 2,
        },
      ],
    });
    setDataOptions({
      options: {
        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={{ height: "50%", width: "100%" }}>
      <Bar data={dataChart} options={dataOptions} />
    </div>
  );
}

export default Grafico;
