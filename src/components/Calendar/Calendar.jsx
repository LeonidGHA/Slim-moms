import s from './calendar.module.scss';

const Calendar = () => {
  return (
    <div>
      <input
        type="date"
        name="Date"
        id="davaToday"
        className={s.calendar}
      ></input>
    </div>
  );
};

export default Calendar;
