import searchIcon from "@assets/icons/nav/search-icon.svg";

export const SearchInput = () => {
  return (
    <div className='container relative'>
      <input
        className=' pl-5 py-3 rounded-md bg-bgGray  w-full outline-none'
        type='text'
        placeholder='Я ищу...'
      />
      <img className='absolute top-3 right-3' src={searchIcon} />
    </div>
  );
};
