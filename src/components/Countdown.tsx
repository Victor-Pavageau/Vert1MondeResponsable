import { useEffect, useState } from 'react';

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function Countdown(): JSX.Element {
  const eventStartTime: Date = new Date('2024-04-17 14:00:00');
  const eventEndTime: Date = new Date('2024-04-17 18:00:00');
  const [countdown, setCountdown] = useState<number>();
  const [countdownTitle, setCountdownTitle] = useState<string>();

  useEffect(() => {
    const leftTime = loadEventTime();
    if (leftTime !== undefined) {
      const interval = setInterval(() => {
        setCountdown(leftTime.getTime() - Date.now());
        setCountdownTitle(getCountdownTitle());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadEventTime = (): Date | undefined => {
    if (Date.now() < eventStartTime.getTime()) {
      // return eventStartTime;
      return eventStartTime;
    }
    else if (Date.now() < eventEndTime.getTime()) {
      return eventEndTime;
    }
    else {
      return undefined;
    }
  };

  const getCountdown = (countdown: number): Countdown => {
    const seconds = Math.floor((countdown / 1000) % 60);
    const minutes = Math.floor((countdown / 1000 / 60) % 60);
    const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));

    return {
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const getCountdownTitle = (): string => {
    if (loadEventTime() === eventStartTime) {
      return 'L\'évenement commence dans :';
    }
    else if (loadEventTime() === eventEndTime) {
      return 'L\'évenement termine dans :';
    }
    else {
      return `L'évenement s'est terminé le ${eventEndTime.toLocaleDateString('fr-FR')}`;
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <span className="text-xl">
        {
          countdownTitle
        }
      </span>
      {
        (loadEventTime() && countdown) && (
          <div className="flex gap-20 text-[#465f2c]">
            <h2>
              {getCountdown(countdown).days} jours
            </h2>
            <h2>
              {getCountdown(countdown).hours} heures
            </h2>
            <h2>
              {getCountdown(countdown).minutes} minutes
            </h2>
            <h2>
              {getCountdown(countdown).seconds} secondes
            </h2>
          </div>
        )
      }
    </div>
  );
}

export default Countdown;