import pero from "@assets/icons/mobile/pero.svg";
import setting from "@assets/icons/mobile/settings.svg";

export const Profile = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          <img src='' alt='' />
          <h6>{name}</h6>
        </div>
        <div>
          <img src={pero} alt='' />
          <img src={setting} alt='' />
        </div>
      </div>
    </div>
  );
};
