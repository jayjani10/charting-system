import React, { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  // THIS IS MY DUMMY DATA OF DATES AND POINTS.
  const initialDates = [
    "2022-01-20",
    "2022-01-21",
    "2022-01-22",
    "2022-01-23",
    "2022-01-24",
    "2022-01-25",
    "2022-01-26",
  ];
  const initialDataPoints = [1, 2, 4, 9, 12, 15, 16];

  const [dates, setDates] = useState(initialDates);
  const [dataPoints, setDataPoints] = useState(initialDataPoints);

  console.log(dates, dataPoints);

  const inputRef1 = useRef();
  const inputRef2 = useRef();

  function filterData() {
    const dates2 = [...dates];
    const dataPoints2 = [...dataPoints];

    let value1 = inputRef1.current.value;
    let value2 = inputRef2.current.value;
    const indexstartdate = dates2.indexOf(value1);
    const indexenddate = dates2.indexOf(value2);
    console.log(indexstartdate);
    console.log(indexenddate);

    const filterDate = dates2.slice(indexstartdate, indexenddate + 1);
    const filterDataPoints = dataPoints2.slice(
      indexstartdate,
      indexenddate + 1
    );

    console.log(filterDate, filterDataPoints);

    setDates(filterDate);
    setDataPoints(filterDataPoints);
    console.log(dates, dataPoints);
  }

  return (
    <div>
      <div>
        <Bar
          id="myChart"
          data={{
            labels: dates,

            datasets: [
              {
                label: "Sales",
                data: dataPoints,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <input type="date" ref={inputRef1} />
      <input type="date" ref={inputRef2} />
      <button onClick={filterData}>Filter</button>
    </div>
  );
}

export default BarChart;