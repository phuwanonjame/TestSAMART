import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="w-screen h-screen bg-slate-400">
      <div className="w-screen h-screen  flex justify-center items-center">
        <div className="w-2/5 max-md:w-full bg-white rounded-md">
          <div className="p-5">
            <div className="flex items-center max-md:flex-col">
              <p className="mr-5 w-72 max-md:w-full max-md:mr-0">First Name:</p>
              <input
                type="text"
                className="w-full outline-none p-2 bg-slate-100 border"
                placeholder="Your name.."
              />
            </div>
            <div className="flex items-center mt-2 max-md:flex-col">
              <p className="mr-5 w-72 max-md:w-full max-md:mr-0">Last Name:</p>
              <input
                type="text"
                className="w-full outline-none p-2 bg-slate-100 border"
                placeholder="Last name.."
              />
            </div>
            <div className="flex items-center mt-2  max-md:flex-col">
              <p className="mr-5 w-72 max-md:w-full max-md:mr-0">Country:</p>
              <select
                className="w-full outline-none p-2 bg-slate-100 border"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex mt-2 max-md:flex-col">
              <p className="mr-5 w-72">Subject:</p>
              <textarea placeholder="Write something..." className="w-full outline-none p-2 h-72 bg-slate-100 border"></textarea>
            </div>
          </div>
          <div className="p-1 flex justify-end items-center">
            <button className="p-2 text-white bg-emerald-500 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
