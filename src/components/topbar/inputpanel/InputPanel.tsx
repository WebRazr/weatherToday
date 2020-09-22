import React, { FC } from "react";
import './inputPanel.scss'

const InputPanel: FC = () => {
  return (
    <div className={'find-div'}>
      <input className={'find-style'} type="text" placeholder={'введите название города'}/>
      <button className={'find-btn'}>искать</button>
    </div>
  );
};

export default InputPanel;
