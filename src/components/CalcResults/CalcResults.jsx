import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import WorkSmeta from './WorkSmeta';
import Materials from './Materials';
import SummaryQuotationTable from './Summary';

const CalcResults = (props) => {

return (
<div className="container mt-4 mb-4">
    <div className="mr-6 ml-6">
        <div className="container mb-3">
            <h3>Смета ремонта </h3>
    <p>Помещение (ДxШxВ): {props.calcData.room_length} x {props.calcData.room_width} x {props.calcData.room_hight}. 
    Окон: {props.calcData.windows_qty}. Дверей: {props.calcData.doors_qty}</p>
            <p>Результат ремонта: &nbsp;
                {[props.calcData.walls_required_state, 
                props.calcData.ceiling_required_state, 
                props.calcData.floor_required_state]
                .filter( (elem) => {return elem !=="" } ).join(', ')} 
            </p>
            <ul role="tablist" className="nav nav-pills mb-3">
                <li className="nav-item">
                    <NavLink to="/results/" className="nav-link">
                        Итоговая смета
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/results/summary" role="tab" className="nav-link">
                        Работы
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/results/materials" role="tab" className="nav-link">
                        Материалы
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
    <Switch>
  
        <Route path='/results/summary' render={ ()=> <WorkSmeta response={props.response}/>} />
        <Route path='/results/materials' render={ ()=> <Materials response={props.response}/>} />
        <Route path='/results/' render={ ()=> <SummaryQuotationTable response={props.response}/>} />
    </Switch>
    
    <h4>Общая стоимость ремонта: 14245.74 грн </h4>
    <p>Будем рады вышим предложениям и замечаниям: info@mastercalc.com.ua</p>
    <div className="form-row align-items-center">
        <div className="col">
            <button  onClick={props.setRecFlag(false)} className="btn btn-primary btn-lg btn-block mb-2">
                Новый расчет
            </button>
        </div> 
        <div className="col">
            <button onClick={()=>{}} className="btn btn-primary btn-lg btn-block ask-email mb-2">
                Скачать смету
            </button>
        </div> 
        <div className="col">
            <button data-toggle="modal" data-action="invoice" 
            className="btn btn-primary btn-lg btn-block ask-email mb-2">
                Подобрать материалы
            </button>
        </div>
    </div>
</div>
)
}

export default CalcResults;