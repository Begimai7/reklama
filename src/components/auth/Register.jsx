import { Link, useLocation } from "react-router-dom";
import Modal from "../UI/Modal";
import { useOpenModal } from "../hooks/useOpenModal";
import { useForm } from "react-hook-form";
import { registerReq } from "@service/auth/auth_service";

export const Register = ({ open }) => {
  const { closeModalHandler } = useOpenModal();
  const { register, handleSubmit } = useForm();
  const { pathname } = useLocation();

  const openLoginModal = pathname === "/register" ? true : open;

  const handleSubmitRegister = async (data, e) => {
    e.preventDefault();

    try {
      const res = await registerReq(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal open={openLoginModal} closeModalHandler={closeModalHandler}>
        <h3 className='text-[30px] font-semibold text-center mb-5 text-[#1E293B]'>
          Регистрация
        </h3>

        <form
          className='flex flex-col gap-5'
          onSubmit={handleSubmit(handleSubmitRegister)}
        >
          <div className='flex flex-col gap-1'>
            <label className='font-semibold font-inter' htmlFor='name'>
              Имя
            </label>
            <input
              className='py-3 px-5 rounded-lg w-full outline-none bg-bgGray'
              type='text'
              placeholder='Имя'
              {...register("name")}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-semibold font-inter' htmlFor='name'>
              Email
            </label>
            <input
              className='py-3 px-5 rounded-lg w-full outline-none bg-bgGray'
              type='email'
              placeholder='Email'
              {...register("email")}
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
              {...register("password")}
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
              {...register("phone")}
              autoComplete='true'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <button className='bg-primary py-2 px-5 rounded-lg text-white font-medium uppercase'>
              Отправить
            </button>
            <div className='flex items-center justify-center gap-1'>
              <p>У вас есть аккаунт? </p>
              <Link to='/login' className='text-blue underline'>
                {" "}
                Войти
              </Link>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
