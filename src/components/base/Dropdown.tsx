import React, { useState } from 'react';

import { useScrollBlock } from '../../hooks/useScrollBlock';
import Button from './Button';
import ImageNext from './ImageNext';

type Props = {
  id: string;
  options: string[];
  label: string;
  defaultValue: string;
  onDropdownSelected: (id: string, selectedRadio: string) => void;
};

const Dropdown = (props: Props) => {
  const { id, options, label, defaultValue, onDropdownSelected } = props;

  const [selectedRadio, setSelectedRadio] = useState<string>('');
  const [selectedInput, setSelectedInput] = useState<string>('');
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const [blockScroll, allowScroll] = useScrollBlock();

  const showPopup = () => {
    setShowPopUp(true);
    blockScroll();
  };

  const closePopup = () => {
    setShowPopUp(false);
    allowScroll();
  };

  const onDoneSelectingRadio = () => {
    if (selectedRadio) {
      setSelectedInput(selectedRadio);
      if (onDropdownSelected) {
        onDropdownSelected(id, selectedRadio);
      }
      closePopup();
    }
  };

  return (
    <>
      {/* Input */}
      <div className="dropdown" onClick={() => showPopup()}>
        <input
          id={id}
          type="text"
          placeholder=" "
          value={selectedInput === '' ? defaultValue : selectedInput}
          readOnly={true}
        />
        <label>{label}</label>
        <div className="dropdown__icon">
          <ImageNext
            src="/images/icons/chevronDown.svg"
            width="16px"
            height="16px"
          />
        </div>
      </div>

      {/* Pop Up */}
      <div className={`dropdownPopup ${showPopUp && 'active'}`}>
        <div className="dropdownPopup__content">
          {/* Title */}
          <div className="dropdownPopup__title">
            <p className="text-title2">{label}</p>
            <a onClick={closePopup}>
              <ImageNext
                src="/images/icons/closeDark.svg"
                width="16px"
                height="16px"
              />
            </a>
          </div>

          {/* Radio */}
          {options.map(option => (
            <div
              className="dropdownPopup__radio"
              onClick={() => setSelectedRadio(option)}
              key={option}
            >
              <input
                type="radio"
                name="radio"
                id={option}
                value={option}
                checked={selectedRadio === option}
                readOnly={true}
              />
              <label>{option}</label>
            </div>
          ))}

          {/* Button */}
          <div className="dropdownPopup__button">
            <Button
              title="Cancel"
              type="secondary"
              onClick={() => closePopup()}
            />
            <Button
              type={selectedRadio ? 'primary' : 'disabled'}
              onClick={() => onDoneSelectingRadio()}
              title="Done"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
