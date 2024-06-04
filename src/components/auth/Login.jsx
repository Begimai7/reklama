import { Link, useLocation } from "react-router-dom";
import Modal from "../UI/Modal";
import { useOpenModal } from "../hooks/useOpenModal";

export const Login = ({ open }) => {
  const { closeModalHandler } = useOpenModal();
  const { pathname } = useLocation();

  const openLoginModal = pathname === "/login" ? true : open;

  return (
    <div>
      <Modal open={openLoginModal} closeModalHandler={closeModalHandler}>
        <h3 className='text-[30px] font-semibold text-center mb-5 text-[#1E293B]'>
          Войти
        </h3>

        <form className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <label className='font-semibold font-inter' htmlFor='name'>
              Email
            </label>
            <input
              className='py-3 px-5 rounded-lg w-full outline-none bg-bgGray'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-semibold font-inter' htmlFor='name'>
              Пароль
            </label>
            <input
              className='py-3 px-5 rounded-lg w-full outline-none bg-bgGray'
              type='password'
              placeholder='Пароль'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-semibold font-inter' htmlFor='name'>
              Номер телефона
            </label>
            <input
              className='py-3 px-5 rounded-lg w-full outline-none bg-bgGray'
              type='text'
              placeholder='+996*********'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <button className='bg-primary py-2 px-5 rounded-lg text-white font-medium uppercase'>
              Отправить
            </button>
            <div className='flex items-center justify-center gap-1'>
              <p>У вас есть нет аккаунта? </p>
              <Link to='/register' className='text-blue underline'>
                Регистрация
              </Link>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
