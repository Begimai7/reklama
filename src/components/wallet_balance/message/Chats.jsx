import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import avatar from "@assets/icons/wallet-balance/avatar.svg";
import bag from "@assets/images/bag.png";

const chats = [
  {
    id: 1,
    avatar: avatar,
    title: "Сумка с кожанными ремнями в ор..",
    desc: "Через сколько доставите?",
    img: bag,
  },
  {
    id: 2,
    avatar: avatar,
    title: "Сумка с кожанными ремнями в ор..",
    desc: "Через сколько доставите?",
    img: bag,
  },
  {
    id: 3,
    avatar: avatar,
    title: "Сумка с кожанными ремнями в ор..",
    desc: "Через сколько доставите?",
    img: bag,
  },
  {
    id: 4,
    avatar: avatar,
    title: "Сумка с кожанными ремнями в ор..",
    desc: "Через сколько доставите?",
    img: bag,
  },
];

export const Chats = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className=''>
      <div className='flex items-center gap-7 w-[60%] my-10'>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Все</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            label='Все'
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>По дате</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            label='По дате'
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='flex flex-col gap-7'>
        {chats.map((el) => (
          <div className='flex  items-center gap-6 w-full' key={el.id}>
            <img
              className='h-[70px] w-[70px] rounded-full'
              src={el.avatar}
              alt=''
            />
            <div className='p-5 rounded-md shadow-md w-full'>
              <p className='text-[#1E293B] text-[20px] font-medium'>
                {el.title}
              </p>
              <p className='text-[#515A68] text-[16px]'>{el.desc}</p>
            </div>
            <img
              className='w-[116px] h-[103px] rounded-md'
              src={el.img}
              alt=''
            />
          </div>
        ))}
      </div>
    </div>
  );
};
