import { useState, useEffect } from "react";

interface ClockProps {
  timezone?: string;
}

const Clock = ({ timezone }: ClockProps) => {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const timeString = now.toLocaleTimeString("pt-PT", {
        timeZone: timezone || "Europe/Lisbon",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setClock(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <p>Hora Atual: {clock}</p>
    </div>
  );
};

export default Clock;
