import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export const Efficiency = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='w-[18%]'>
      {" "}
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Показы в ленте</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Показы в ленте'
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
