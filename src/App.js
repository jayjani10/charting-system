import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";

export default function App() {
  useEffect(() => {
  // FACING TROUBLE ACCESSING URL SHARED OVER A MAIL. SO, I HAVE CREATED DUMMY DATA IN BARCHART.JS FILE AND PLOTTED IT HERE.
    const fetchPrices = async () => {
      const res = await fetch(
        "https://drive.google.com/file/d/1CamtovBukMf7CZL2JOcBJk2tG1hVKOUe/view?usp=sharing",
        { crossDomain: true }
      );
      const data = await res.json();
      console.log(data);
    };
    fetchPrices();
  }, []);

  return (
    <div className="App">
      <BarChart />
    </div>
  );
}
