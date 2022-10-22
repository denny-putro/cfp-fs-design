import React from 'react';

import ImageNext from './ImageNext';

type Props = {
  id: string;
  label: string;
  defaultValue: string;
  disabled: boolean;
  flag: boolean;
  footer: boolean;
  onChange: () => void;
  onClick: () => void;
};

const Input = (props: Props) => {
  const { id, label, defaultValue, disabled, flag, onChange, onClick, footer } =
    props;

  return (
    <div className="input" onClick={onClick}>
      <input
        id={id}
        type="text"
        placeholder=" "
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        className={disabled && !onClick ? 'input__disabled' : ''}
      />
      <label>{label}</label>
      {flag && (
        <ImageNext src="/images/icons/idFlag.svg" className="input__flag" />
      )}
      {footer && <p className="text-uiSmall">{footer}</p>}
    </div>
  );
};

export default Input;
