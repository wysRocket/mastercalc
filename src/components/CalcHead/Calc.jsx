import React from 'react';
import logo from '../img/homeico.svg';
import style from './Calc.module.css';
import {NavLink} from "react-router-dom";

const CalcHead = (props) => {

    return (
        <div className={style.head}>
            <NavLink to='/' >
            <img className={style.head_img} src={logo} alt="" />
            <span className={style.head_txt}> Калькулятор стоимости ремонта </span>
            </NavLink>
        </div>
    )
}

export default CalcHead;