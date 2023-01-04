import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

export const RadioButtons = ({ options }) => {
  return (
    <FormControl>
      <h2 className="radio-header">VEHICLE TYPE</h2>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          onClick={options.vehicleSelector}
          value="car"
          control={<Radio color="default" />}
          label="car"
        />

        <FormControlLabel
          onClick={options.vehicleSelector}
          value="suv"
          control={<Radio color="default" />}
          label="suv"
        />
        <FormControlLabel
          onClick={options.vehicleSelector}
          value="truck"
          control={<Radio color="default" />}
          label="truck"
        />
      </RadioGroup>
    </FormControl>
  );
};
