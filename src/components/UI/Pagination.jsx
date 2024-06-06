import { Pagination as MuiPagination } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Pagination() {
  return (
    <Stack spacing={2} sx={{ margin: "70px" }}>
      <div className='md:flex hidden justify-center items-center gap-10 '>
        <span>Предыдущая страница</span>

        <div className='flex i gap-10'>
          <MuiPagination count={10} color='secondary' />
        </div>
        <div className=''>
          <button className='py-2 px-5  rounded-md bg-primary text-white'>
            Следующая страница
          </button>
        </div>
      </div>
    </Stack>
  );
}
