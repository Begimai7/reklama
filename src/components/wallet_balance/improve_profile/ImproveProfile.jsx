import important from "@assets/icons/wallet-balance/!.svg";
import done from "@assets/icons/wallet-balance/done.svg";
import arrowRight from "@assets/icons/arrow-right.svg";

const tarif = [
  {
    id: 1,
    color: "#56AEFF",
    title: "Обычный +30%",
    data: "12 мес.",
    price: "5900 KGS",
    moneyForCash: "2000 KGS",
    advanture: [
      {
        id: 1,
        name: "Бонусный счет: 4000 KGS",
      },
      {
        id: 2,
        name: "30% скидка на Рекламу (списывается с бонусного счета)",
      },
      {
        id: 3,
        name: "Расширенные контактные данные в   профиле и в объявлении",
      },
      {
        id: 4,
        name: "Фотогалерея",
      },
    ],
  },
  {
    id: 2,
    color: "#FFD057",
    title: "Обычный +40%",
    data: "12 мес.",
    price: "17 900 KGS",
    moneyForCash: "2000 KGS",
    advanture: [
      {
        id: 1,
        name: "Бонусный счет: 4000 KGS",
      },
      {
        id: 2,
        name: "30% скидка на Рекламу (списывается с бонусного счета)",
      },
      {
        id: 3,
        name: "Расширенные контактные данные в   профиле и в объявлении",
      },
      {
        id: 4,
        name: "Расширенные контактные данные в   профиле и в объявлении",
      },
      {
        id: 5,
        name: "Фотогалерея",
      },
    ],
  },
  {
    id: 3,
    color: "#C811AA",
    title: "Обычный +30%",
    data: "12 мес.",
    price: "5900 KGS",
    moneyForCash: "2000 KGS",
    advanture: [
      {
        id: 1,
        name: "Бонусный счет: 4000 KGS",
      },
      {
        id: 2,
        name: "30% скидка на Рекламу (списывается с бонусного счета)",
      },
      {
        id: 3,
        name: "Расширенные контактные данные в   профиле и в объявлении",
      },
      {
        id: 4,
        name: "Фотогалерея",
      },
      {
        id: 5,
        name: "Фотогалерея, баннер, значок PRO",
      },
    ],
  },
];

export const ImproveProfile = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center items-center gap-4 '>
        <h3 className='text-[#1E293B] text-[36px] font-medium font-inter'>
          Бизнес-профиль
        </h3>
        <p className='text-[#515A68] text-[16px] font-normal font-inter w-[55%] text-center'>
          Бизнес-профиль увеличивает лимит бесплатных активных объявлений.
          Выберите подходящий для себя лимит{" "}
        </p>
        <div className='flex items-center gap-2'>
          <p className='text-primary text-[16px] font-normal font-inter'>
            Экономьте с преимуществами Бизнес-профиля
          </p>
          <img src={important} alt='important' />
        </div>
      </div>

      <div className='flex items-start justify-between my-20'>
        {tarif.map((el) => (
          <div
            style={{ border: `1px solid ${el.color}` }}
            className='flex flex-col gap-3 w-[360px] rounded-md p-3'
            key={el.id}
          >
            <div className='flex items-end gap-1'>
              <h3 className='text-[#1E293B] text-[20px] font-semibold'>
                {el.title}
              </h3>
              <span className='text-[#8D95A1] text-[12px]'>{el.data}</span>
            </div>
            <hr className='h-[1px] bg-[#E3E3E3] text-[#E3E3E3] w-full' />
            <div>
              <h4
                style={{ color: el.color }}
                className='text-center font-medium text-[20px] my-2'
              >
                {el.price}
              </h4>
            </div>
            <div
              style={{ background: el.color }}
              className='rounded-md py-2 px-5 text-[14px] font-bold text-[#fff] w-full text-center'
            >
              <button>Купить</button>
            </div>
            <div className='flex justify-between items-center w-full p-2 rounded-md border border-[#E3E3E3]'>
              <div className='flex flex-col gap-1'>
                <p className='text-[#1E293B] text-[12px] font-semibold'>
                  Лимит объявлений
                </p>
                <p className='text-[#515A68] text-[12px]'>
                  {" "}
                  Малый бизнес{" "}
                  <span className='text-[#8D95A1] text-[12px]'>
                    (5-50 объявлений)
                  </span>
                </p>
              </div>
              <img src={arrowRight} alt='' />
            </div>
            <div className='flex flex-col gap-3'>
              <div>
                <h6 className='text-[#1E293B] text-[12px] font-semibold'>
                  Деньги на кошелек
                </h6>
                <p className='text-[#8D95A1] text-[10px] font-semibold'>
                  {el.moneyForCash}
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <h6 className='text-[#1E293B] text-[12px] font-semibold'>
                  Преимущества
                </h6>
                <div className='flex flex-col gap-2'>
                  {el.advanture.map((i) => (
                    <div className='flex items-center gap-[10px]' key={i.id}>
                      <img src={done} alt='' />
                      <p className='text-[10px]'>{i.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
