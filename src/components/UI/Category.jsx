import { categoryList } from "@utils/constants";

export const Category = () => {
  return (
    <ul className='flex items-start gap-10'>
      {categoryList.map((el) => (
        <li className='flex flex-col items-center gap-1 w-[60px]' key={el.id}>
          <img
            className={`p-3 rounded-md  ${
              el.id === 1 ? "bg-[#C811AA]" : "bg-bgGray"
            } `}
            src={el.icon}
            alt=''
          />
          <span className='text-[11px] text-[#1E293B] text-center font-medium p-0 m-0'>
            {el.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
