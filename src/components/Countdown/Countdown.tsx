import { useEffect, useState } from 'react';
import type { CountdownType } from '../../types';

function Countdown(): JSX.Element {
  const eventStartTime: Date = new Date('2024-04-17 14:00:00');
  const eventEndTime: Date = new Date('2024-04-17 17:30:00');
  const [countdown, setCountdown] = useState<number>();
  const [countdownTitle, setCountdownTitle] = useState<string>();

  useEffect(() => {
    const leftTime = loadEventTime();
    if (leftTime !== undefined) {
      const interval = setInterval(() => {
        if (leftTime.getTime() - Date.now() > 0) {
          setCountdown(leftTime.getTime() - Date.now());
        }
        else {
          setCountdown(eventEndTime.getTime() - eventStartTime.getTime());
        }
        setCountdownTitle(getCountdownTitle());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [countdown]);

  const loadEventTime = (): Date | undefined => {
    if (Date.now() < eventStartTime.getTime()) {
      return eventStartTime;
    }
    else if (Date.now() < eventEndTime.getTime()) {
      return eventEndTime;
    }
    else {
      return undefined;
    }
  };

  const getCountdown = (countdown: number): CountdownType => {
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
    <div className="flex flex-col w-full gap-10 justify-center items-center mt-12">
      <h4 className="text-center">
        {
          countdownTitle
        }
      </h4>
      {
        (loadEventTime() && countdown) && (
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 text-[#465f2c] w-full">
            <h3 className="countdown-item">
              {getCountdown(countdown).days} jours
            </h3>
            <h3 className="countdown-item">
              {getCountdown(countdown).hours} heures
            </h3>
            <h3 className="countdown-item">
              {getCountdown(countdown).minutes} minutes
            </h3>
            <h3 className="countdown-item">
              {getCountdown(countdown).seconds} secondes
            </h3>
          </div>
        )
      }
    </div>
  );
}

export default Countdown;