import React from "react";
import CountryTable from "../components/CountryTable";
import Header from "../components/Header";
import useCountry from "../customHooks/useCountry";

const MainPage = () => {
  const countryData = useCountry();

  const [filteredCountryData, setFilteredCountryData] =
    React.useState(countryData);

  React.useEffect(() => {
    console.log("how many times", countryData);
    setFilteredCountryData(countryData);
  }, [countryData]);

  const handleSearch = (keyword) => {
    //filter
    const _tempdata = countryData.filter((country) =>
      country.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredCountryData(_tempdata);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <CountryTable countryData={filteredCountryData} />
    </>
  );
};
export default MainPage;
