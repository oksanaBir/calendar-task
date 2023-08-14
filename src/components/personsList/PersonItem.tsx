

import { useToggle } from '../../utils/useToogle';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import generalStyles from '../../styles.module.scss';
import { CalendarFilled, CloseOutlined } from '@ant-design/icons';

interface IPersonItemProps {
  person: {id: string; name: string};
  dateValue: string | Date;
  handleAddDate: (e: any) => void;
  handleRemove: (e: any) => void;
}

function PersonItem(
  {
    person,
    dateValue,
    handleAddDate,
    handleRemove
  }: IPersonItemProps){

  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div>
      <button className={generalStyles.button} onClick={toggleOpen}>
        <CalendarFilled />
      </button>
      <div className={generalStyles.text}>
        {person.name}
      </div>
      <button className={generalStyles.button} onClick={handleRemove}>
        <CloseOutlined />
      </button>
      {isOpen && (
        <Calendar value={dateValue} onChange={handleAddDate}/>
      )}
    </div>
  );

}

export default PersonItem;
