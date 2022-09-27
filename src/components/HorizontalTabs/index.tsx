/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import cn from 'classnames';
import { Dispatch } from 'react';
import style from './styles.module.css';

export const HorizontalTabs: React.FC<{
  tabs: string[];
  state: string;
  setter: Dispatch<string>;
}> = ({ tabs, state, setter }) => {
  return (
    <div className={style.TabContainer}>
      {tabs.map((tab) => (
        <button
          onClick={() => setter(tab)}
          className={cn(style.TabContainer_tab, {
            [style.TabContainer_tab__selected]: state === tab,
          })}
          key={tab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
