import { useEffect } from "react";
import { getCountries } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useCountry = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countryReducer.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return countryData;
};

export default useCountry;
