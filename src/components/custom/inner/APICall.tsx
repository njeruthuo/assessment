import { useEffect, useState } from "react";

interface Advice {
  id: number;
  advice: string;
}

interface AdviceResponse {
  slip: Advice;
}

const APICall: React.FC = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [fetchToggle, setFetchToggle] = useState(false);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data: AdviceResponse = await response.json();
        setAdvice(data.slip);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdvice();
  }, [fetchToggle]);

  const handleDiceClick = () => {
    setFetchToggle((prev) => !prev);
  };

  return (
      <div className="bg-DarkGrayishBlue border border-custom-blue rounded-lg text-center p-4 sm:p-8">

        <h2 className="text-NeonGreen text-xs font-bold">
          Advice #{advice?.id}
        </h2>
        <p className="quote font-extrabold text-LightCyan my-6">
          {advice?.advice}
        </p>

        <div className="my-4 flex justify-center">
          <img
            className="hidden sm:block"
            src="/img/divider-desktop.svg"
            alt=""
          />
          <img
            className="block sm:hidden"
            src="/img/divider-mobile.svg"
            alt=""
          />
        </div>

        <div id="dice" className="flex justify-center -mb-10 sm:-mb-14 mt-12">
          <button
            onClick={handleDiceClick}
            className="bg-NeonGreen border-none p-4 rounded-full hover:cursor-pointer hover:shadow-neon-green"
          >
            <img src="/img/icon-dice.svg" alt="" />
          </button>
        </div>
      </div>
  );
};

export default APICall;
