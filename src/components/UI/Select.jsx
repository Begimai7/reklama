import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";

export const Select = ({
  value,
  handleChange,
  inputLabel,
  options,
  width,
  marginBottom,
  padding,
  borderColor,
  placeholder,
  textColor,
  iconColor,
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className='flex items-center' style={{ marginBottom }}>
      <label
        htmlFor='select'
        className='text-primary'
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          display: "block",
          color: textColor,
        }}
      >
        {inputLabel}
      </label>
      <FormControl
        style={{ width }}
        sx={{
          " .css-1d3z3hw-MuiOutlinedInput-notchedOutline ": {
            border: borderColor,
          },

          "& .MuiInput-root, & .MuiInputLabel-root, & .MuiSelect-root, & .MuiOutlinedInput-root":
            {
              minWidth: width,
              marginBottom: marginBottom,
              // border: borderColor,
            },
          ".css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: borderColor,
            },
          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            ".css-14lo706>span": {
              display: "none",
            },
          },
          ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon, .css-bpeome-MuiSvgIcon-root-MuiSelect-icon":
            {
              color: iconColor,
            },
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            {
              padding,
            },
          ".css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            color: "gray",
          },
        }}
      >
        <InputLabel sx={{}} id='demo-simple-select-label'>
          {placeholder}
        </InputLabel>
        <MuiSelect
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          {options.map((el) => (
            <MenuItem key={el.id} value={el.id}>
              {el.title}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </div>
  );
};

//  sx={{
//           " .css-1d3z3hw-MuiOutlinedInput-notchedOutline ": {
//             border: borderColor,
//           },

//           "& .MuiInput-root, & .MuiInputLabel-root, & .MuiSelect-root, & .MuiOutlinedInput-root":
//             {
//               minWidth: width,
//               marginBottom: marginBottom,
//               border: borderColor,
//             },
//           ".css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline":
//             {
//               border: borderColor,
//             },
//           ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
//             ".css-14lo706>span": {
//               display: "none",
//             },
//           },
//           ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon, .css-bpeome-MuiSvgIcon-root-MuiSelect-icon":
//             {
//               color: "#C811AA",
//             },
//           ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
//             {
//               padding,
//             },
//         }}
