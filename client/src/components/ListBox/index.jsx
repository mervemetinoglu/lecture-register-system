import '@reach/listbox/styles.css';
import './listbox.scss';
import {
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxPopover,
} from '@reach/listbox';
import React, { useState } from 'react';

const ListBox = (props) => {
  const { setSelect, name, list } = props;
  let defaultVal;

  switch (name) {
    case 'facultyMemberId':
      defaultVal = 'Öğretim görevlisi seçiniz';
      break;
    case 'classroomId':
      defaultVal = 'Sınıf seçiniz';
      break;
    case 'type':
      defaultVal = 'Tür Seçiniz';
      break;
    case 'day':
      defaultVal = 'Gün seçiniz';
      break;
    case 'isMandatory':
      defaultVal = 'Ders türünü seçiniz';
      break;
    default:
      break;
  }

  const [selectedVal, setSelectedVal] = useState(defaultVal);

  const handleChange = (val) => {
    setSelectedVal(val);
    setSelect({ target: { name, value: val } });
  };

  return (
    <ListboxInput
      className="listbox__wrapper"
      onChange={handleChange}
      value={selectedVal}
      name={name}
    >
      <ListboxButton arrow className="listbox__btn" />
      <ListboxPopover portal={false}>
        <ListboxList className="listbox__list">
          <ListboxOption disabled value={defaultVal}>
            {defaultVal}
          </ListboxOption>
          {list.map((item) => (
            <ListboxOption value={item.id.toString()} key={item.id}>
              {item.surname ? `${item.name} ${item.surname}` : item.name}
            </ListboxOption>
          ))}
        </ListboxList>
      </ListboxPopover>
    </ListboxInput>
  );
};
export default ListBox;
