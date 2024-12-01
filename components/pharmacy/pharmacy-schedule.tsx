import React from 'react';

interface PharmacyScheduleProps {
  schedule: {
    [key: string]: string;
  };
}

export const PharmacySchedule: React.FC<PharmacyScheduleProps> = ({ schedule }) => {
  const today = new Date().getDay();
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const currentDay = days[today];

  return (
    <div className="space-y-2">
      {Object.entries(schedule).map(([day, hours]) => (
        <div
          key={day}
          className={`flex justify-between py-2 ${
            day === currentDay
              ? 'bg-emerald-50 p-2 rounded-lg font-medium text-emerald-900'
              : ''
          }`}
        >
          <span>{day}</span>
          <span>{hours}</span>
        </div>
      ))}
    </div>
  );
};