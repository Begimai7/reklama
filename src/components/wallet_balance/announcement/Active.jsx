import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { newUpdateData } from "@utils/constants";
import searchIcon from "@assets/icons/nav/search-icon.svg";

export const Active = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className='flex justify-between mb-10'>
        <div className='flex items-center gap-7 w-[60%]'>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Категория</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Категория'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Сортировать</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Сортировать'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>
              Тип объявления
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Тип объявления'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='relative'>
          <input
            className='pl-5 py-3 rounded-md border border-borderColor  outline-none'
            type='text'
            placeholder='Я ищу...'
          />
          <img className='absolute top-3 right-3' src={searchIcon} />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {newUpdateData.slice(0, 4).map((el) => (
          <div key={el.id}>
            <img className='w-[324px]' src={el.img} alt='' />
            <div>
              <h5 className='text-[#1E293B] font-semibold text-[32px]'>
                {el.price}
              </h5>
              <h6 className='text-[#8691A4] font-medium text-[22px]'>
                {el.title}
              </h6>
              <p className='w-[230px] text-[#515A68] text-[14px] line-clamp-2'>
                {el.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
