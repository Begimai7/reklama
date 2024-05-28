import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import arrowRight from "@assets/icons/arrow-right.svg";
import { categoryList } from "@utils/constants";
import cencel from "@assets/icons/nav/cencel.svg";

const drawerBleeding = 0;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  borderRadius: "40px",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
  paddingTop: "20px",
  height: "100%",
}));

function DropdownSlider(props) {
  const { window, open, toggleDrawer } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: "visible",
            borderRadius: "16px",
            background: "#f5f4de",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor='bottom'
        open={open}
        onClose={toggleDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div className='flex w-full'>
            <img
              onClick={toggleDrawer}
              className=' w-[22px] h-[22px]'
              src={cencel}
              alt=''
            />{" "}
            <p className='ml-[138px] text-[#1E293B] text-[18px] font-semibold'>
              Категории
            </p>
          </div>
          {categoryList.map(
            (el) =>
              el.id !== 1 && (
                <div
                  style={{ backgroundColor: el.color }}
                  className='flex justify-between items-center px-2 py-1 rounded-md'
                  key={el.id}
                >
                  <div className='flex items-center gap-3 '>
                    <img
                      className='bg-bgGray  p-2 rounded-md'
                      src={el.icon}
                      alt=''
                    />
                    {/* <p>{el.id !== 1 ? el.name : ""}</p> */}
                    <p>{el.name}</p>
                  </div>
                  <img src={arrowRight} alt='' />
                </div>
              )
          )}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

DropdownSlider.propTypes = {
  window: PropTypes.func,
};

export default DropdownSlider;
