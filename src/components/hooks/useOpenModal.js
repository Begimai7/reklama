import { useState } from "react";

export const useOpenModal = () => {
  const [open, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(true);
  };
  const closeModalHandler = () => {
    setOpen(false);
  };
  return {
    open,
    openModalHandler,
    closeModalHandler,
  };
};
