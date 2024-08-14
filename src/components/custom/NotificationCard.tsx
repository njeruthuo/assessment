// const NotificationCard = ({
//   img,
//   vehicle,
//   time,
//   location,
// }: {
//   img: string;
//   vehicle: string;
//   time: string;
//   location: string;
// }) => {
//   return (
//     <div className="w-full flex justify-between mt-4 gap-2 text-gray-600">
//       <div id="icon">
//         <p>{img}</p>
//       </div>
//       <div id="info" className="flex flex-col">
//         <p className="text-lg">{vehicle}</p>
//         <p className="text-sm">{time}</p>
//         <p className="text-tiffany-blue text-lg">{location}</p>
//       </div>
//       <div id="icon" className="cursor-text">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="size-6"
//         >
//           <path
//             fillRule="evenodd"
//             d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };
// export default NotificationCard;

const NotificationCard = ({ notification }) => {
  const iconSquareStyle = {
    width: "30px",
    height: "30px",
    backgroundColor: notification.iconColor,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
  };
  const cardStyle = {
    backgroundColor: notification.backgroundColor,
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div className="notification-card" style={cardStyle}>
      <div className="flex items-center justify-between py-2 ml-2  ">
        <div
          className="icon-square flex items-center justify-center"
          style={iconSquareStyle}
        >
          {notification.id === 1 && (
            <i
              className={`fa ${notification.icon}  text-white`}
              aria-hidden="true"
            ></i>
          )}
          {notification.id === 2 && (
            <i
              className={`fa ${notification.icon}  text-white`}
              aria-hidden="true"
            ></i>
          )}
          {notification.id === 3 && (
            <i
              className={`fa ${notification.icon}  text-white`}
              aria-hidden="true"
            ></i>
          )}
          {notification.id === 4 && (
            <i
              className={`fa ${notification.icon}  text-white`}
              aria-hidden="true"
            ></i>
          )}
        </div>

        <div className="ml-4  mr-2">
          <p className="text-sm  text-gray-600">{notification.line1}</p>
          <p className="text-sm text-gray-600">{notification.line2}</p>
          <p className="text-sm  font-bold" style={{ color: "#76e5e0" }}>
            {notification.line3}
          </p>
        </div>

        <div className="flex-grow text-end mr-3">
          <i
            className="fa fa-exclamation-circle text-gray-600"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      icon: "fa-battery-half",
      line1: "KBL 175 G",
      line2: "10/2/2020 -14:00",
      line3: "Kapenguria Deport",
      iconColor: "#c40000",
      backgroundColor: "#f8faff",
    },
    {
      id: 2,
      icon: "fa-car",
      line1: "KBS 195 H",
      line2: "12/2/2020 -16:00",
      line3: "Nyeri Deport",
      iconColor: "#ff6262",
      backgroundColor: "#f8faff",
    },
    {
      id: 3,
      icon: "fa-train",
      line1: "KBS 178 V",
      line2: "14/2/2020 -16:00",
      line3: "Nairobi Deport",
      iconColor: "#1a928c",
      backgroundColor: "#f8faff",
    },
    {
      id: 4,
      icon: "fa-clock",
      line1: "KBV 17F V",
      line2: "14/2/2020 -16:00",
      line3: "Taita Deport",
      iconColor: "#E36000 ",
      backgroundColor: "#eff6ff",
    },
  ];

  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>

      {notifications.map((notification, index) => {
        console.log(notification);

        return <NotificationCard key={index} notification={notification} />;
      })}
    </div>
  );
};

export default Notifications;
