

//@ts-ignore
import { useToggle } from '../utils/useToogle.ts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//@ts-ignore
import styles from '../styled.module.scss';

//@ts-ignore
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
//@ts-ignore
import { ReactComponent as CalendarIcon } from '../icons/calendar.svg';

interface IPersonItemProps {
  person: {id: string; name: string};
  calendarValue: any;
  handleAddDate: any;
  handleRemove: any;
}

function PersonItem(
  {
    person,
    calendarValue,
    handleAddDate,
    handleRemove
  }: IPersonItemProps){

  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <li key={person.id}>
      <div className={styles.iconWrapper}>
        <CalendarIcon onClick={toggleOpen} />
      </div>
      {person.name}
      <div className={styles.iconWrapper}>
        <DeleteIcon onClick={handleRemove} />
      </div>
      {isOpen && (
      <Calendar value={calendarValue} onChange={handleAddDate}/>
    )}
    </li>
  );

}

export default PersonItem;
