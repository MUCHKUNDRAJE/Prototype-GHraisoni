import React from "react";
import LineChart from "../chart/precipated";
import CityData from "../../utils/cityData";

function Panel({ selectedCity, setSelectedCity }) {
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const cityKey = selectedCity === "Sadar" ? "Telephone Exchange" : selectedCity;
  const currentCityData = CityData[cityKey] || { label: [], temp: [] };

  return (
    <div style={{ padding: "10px" }}
      className="absolute left-0 top-0 h-screen  w-[30%] border-r-2 border-white p-4 z-10 backdrop-blur-md rounded-xl  bg-white shadow-lg "
    >
      <div className="mb-4">
        <h1 className="text-xl font-bold ">Coolpulse</h1>
      </div>

      <button className="bg-white rounded-3xl absolute top-2 right-2 px-2">
        <i className="ri-arrow-left-fill"></i>
      </button>

      <div style={{ marginTop: "10px", padding: "10px" }} className="mt-8">
        <label htmlFor="city-select" className="block text-sm font-semibold mb-1">
          Select City
        </label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={handleCityChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 "
        >
          <option value="" disabled>Select a city</option>
          <option value="Mahal">Mahal</option>
          <option value="Itwari">Itwari</option>
          <option value="Sadar">Telephone Exchange</option>
          <option value="Dharampeth">Dharampeth</option>
        </select>
      </div>

      <div>
        <h1 style={{ marginTop: "10px" }}>Heat Level</h1>
        <div className="w-full">
          <LineChart labels={currentCityData.label} temps={currentCityData.temp} />
        </div>

        <h1 className="font-bold" style={{ marginTop: "20px" }}>
          Measures
        </h1>
   
        <p
  className="text-md mt-2"
  dangerouslySetInnerHTML={{ __html: currentCityData.text }}
></p>
        
      </div>

      <div
  className="h-10 w-full rounded-lg"
  style={{
    background: "linear-gradient(90deg, #A09EEF, #61F8F6, #67F940, #FF0300)",
    marginTop:'12px'
  }}
></div>
<div className="w-full  flex items-center justify-between" style={{padding:"0px 10px",}}>
    <h1>Cool</h1>
    <h2>Hot</h2>
</div>

    </div>
  );
}

export default Panel;
