import { Separator } from "../ui/separator";
import NotificationCard from "./NotificationCard";

interface NotificationData {
  img: string;
  vehicle: string;
  time: string;
  location: string;
}

const Profile = () => {
  const data: NotificationData[] = [
    {
      img: "fa-battery-half",
      vehicle: "KBL 175G",
      time: "10/2/2023 14:12",
      location: "Kapenguria depot",
    },
    {
      img: "fa-clock",
      vehicle: "KBL 155G",
      time: "10/2/2023 14:12",
      location: "KCC Molo",
    },
    {
      img: "fa-car",
      vehicle: "KBL 175G",
      time: "10/2/2023 14:19",
      location: "Mbaraki depot",
    },
    {
      img: "fa-train",
      vehicle: "KBL 165G",
      time: "10/2/2023 14:17",
      location: "Mbaraki depot",
    },
  ];
  return (
    <div className="w-full m-4 items-center flex flex-col">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gray"
          className="size-20"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <h2 className="text-custom-blue text-xl font-bold">Hi David, Welcome.</h2>

      <Separator />

      <div>
        <h2 className="text-gray-500 text-xl my-4">READ NOTIFICATIONS</h2>

        <div>
          {/* {data.map((item, index) => {
            return <NotificationCard key={index} {...item} />;
          })} */}

          <NotificationCard/>
        </div>
      </div>
    </div>
  );
};
export default Profile;
