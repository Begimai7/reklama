import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Modal as MuiModal } from "@mui/material";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function Modal({ open, handleClose, children }) {
  return (
    <div>
      <MuiModal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}> {children}</Box>
        </Fade>
      </MuiModal>
    </div>
  );
}
