import { useEffect, useState } from "react";
import * as React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  box-sizing: border-box;
  width: 200px;
  height:40px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 9px;
  border-radius: 3px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};


  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});
const FilterNat = (props) => {
  let [country, setCountry] = useState();
  const natMap = {
    australia: "au",
    brazil: "br",
    canada: "ca",
    switzerland: "ch",
    germany: "de",
    denmark: "dk",
    spain: "es",
    finland: "fi",
    france: "fr",
    "united kingdom": "gb",
    ireland: "ie",
    india: "in",
    iran: "ir",
    mexico: "mx",
    netherlands: "nl",
    norway: "no",
    "new zealand": "nz",
    serbia: "rs",
    turkey: "tr",
    ukraine: "ua",
    "united states": "us",
  };
  useEffect(() => {
    if (country) {
      props.setNat(country);
    }
  }, [country]);

  const handleFilter = (e) => {
    for (var nat in natMap) {
      if (
        natMap.hasOwnProperty(nat) &&
        nat.toString().startsWith(e.target.value)
      ) {
        setCountry(natMap[nat]);
      }
    }

    // let newParams = new URLSearchParams(params);
    // if (e.target.value) {
    //   newParams.set("query", e.currentTarget.value);
    // } else {
    //   newParams.delete("query");
    // }
    // setParams(newParams);
  };
  return (
    <CustomInput
      aria-label="input"
      placeholder="Nationality"
      onChange={(e) => handleFilter(e)}
    />
  );
};

export default FilterNat;
