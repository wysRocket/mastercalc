import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { required } from '../../utils/validators';
import { Input, Select } from '../../utils/FormControl';
import Loading from '../../components/Loading';

const Estimate = (iniFieldName, reqFieldName, stringVar, iniSelect, reqSelect) => {

    return (
        <div className="form-row">
        <div className="form-group col-md-6">
        <label>Состояние {stringVar}</label>
            <div className="form-group">
                <Field name={iniFieldName} className="form-control" component={Select} validate={[required]}>
                {iniSelect.map(item => <option key={item.id} value={item.value}>{item.value}</option>)}
                </Field>
            </div>
        </div>

        <div className="form-group col-md-6">
            <label>Что нужно в результате:</label>
            <Field name={reqFieldName} className="form-control" component={Select} validate={[required]}>
            {reqSelect.map(item => <option key={item.id} value={item.value}>{item.value}</option>)}
            </Field>
        </div>
    </div>
    )
}

const EstimateWalls = (props) => {
    return (
        Estimate('walls_initial_state', 'walls_required_state', "стен:", props.wallsInitialData, props.wallsRequiredData)
    )
}

const EstimateCeiling = (props) => {
    return (
        Estimate('ceiling_initial_state', 'ceiling_required_state', "потолка:", props.ceilingInitialData, props.ceilingRequiredData)
    )
}

const EstimateFloor = (props) => {
    return (
        Estimate('floor_initial_state', 'floor_required_state', "пола:", props.floorInitialData, props.floorRequiredData)
    )
}

const CalcForm =(props) => {
    let [estWalls , setEditModeWalls] = useState(false);
    let [estCeiling , setEditModeCeiling] = useState(false);
    let [estFloor , setEditModeFloor] = useState(false);

    const toggleShowDropdownWalls = () => {
        if (!estWalls) {
            setEditModeWalls(true)}
            else setEditModeWalls(false)
    }
    const toggleShowDropdownCeiling = () => {
        if (!estCeiling) {
            setEditModeCeiling(true)}
            else setEditModeCeiling(false)
    }
    const toggleShowDropdownFloor = () => {
        if (!estFloor) {
            setEditModeFloor(true)}
            else setEditModeFloor(false)
    }
    return (
<div>
    <form onSubmit={props.handleSubmit}>
        <div className="form-row form-group">
            <div className="col-md-4">
                <label> Длина: </label>
                <div className="input-group flexrev">
                    <div className="input-group-append">
                        <span className="input-group-text"> м.</span>
                    </div>
                    <Field name="room_length" type="text" className="form-control" component={Input} 
                    validate={[required]} 
                    placeholder="Длина" />
                </div>
            </div>
            <div className="col-md-4">
                <label> Ширина: </label>
                <div className="input-group flexrev">
                <div className="input-group-append">
                        <span className="input-group-text"> м.</span>
                    </div>    
                <Field name="room_width" type="text" className="form-control" component={Input} 
                    validate={[required]} 
                    placeholder="Ширина" />
                </div>
            </div>
            <div className="col-md-4">
                <label> Высота: </label>
                <div className="input-group flexrev">
                <div className="input-group-append">
                        <span className="input-group-text"> м.</span>
                    </div>    
                <Field name="room_hight" type="text" className="form-control" component={Input} 
                    validate={[required]} 
                    placeholder="Высота" />
                </div>
            </div>
        </div>
        <div className="form-row form-group">
            <div className="col-md-6">
                <label> Количество дверей: </label>
                <div className="input-group">
                <Field name="doors_qty" type="text" className="form-control" component={Input} 
                    validate={[required]} 
                    initialvalues={props.doorsCount} />
                </div>
            </div>
            <div className="col-md-6">
                <label> Количество окон: </label>
                <div className="input-group">
                <Field name="windows_qty" type="text" className="form-control" component={Input} 
                    validate={[required]} 
                    value="1" />
                </div>
            </div>
        </div>
        <div className="page-header mt-4 mb-4">
            <h4> Что нужно отремонтировать: </h4>
        </div>
        <div className="btns">
        <button type="button" className={"btn btn-outline-info walls_btn"+' '+(estWalls ? "active" : "" )}
            onClick={ toggleShowDropdownWalls } >Стены</button>
        <button type="button" className={"btn btn-outline-info ceiling_btn"+' '+(estCeiling ? "active" : "" )}
            onClick={ toggleShowDropdownCeiling } >Потолок</button>
        <button type="button" className={"btn btn-outline-info floor_btn"+' '+(estFloor ? "active" : "" )}
            onClick={ toggleShowDropdownFloor } >Пол</button>
        </div>
        
        {estWalls && <EstimateWalls 
            wallsInitialData={props.wallsInitialData}
            wallsRequiredData={props.wallsRequiredData}/>}
        {estCeiling && <EstimateCeiling 
            ceilingInitialData={props.ceilingInitialData}
            ceilingRequiredData={props.ceilingRequiredData}/>}
        {estFloor && <EstimateFloor 
            floorInitialData={props.floorInitialData}
            floorRequiredData={props.floorRequiredData}/>}

        <button className="btn btn-primary btn-lg btn-block"> Расчитать стоимость</button>
    </form>
</div>
)
}

const CalcReduxForm = reduxForm({form: 'main_params'})(CalcForm);

const CalcBody =(props) => {

    const pushOnServ = (formData) => {
       props.setDataForCalc(formData)
       
       props.getEstimate(formData)
}

    if (props.calcDataRec) {return <Redirect to = {"/results"} />}

    return (
    <div className="container mt-4 mb-4">
        <div className="page-header mt-4 mb-4">
            <h4> Параметры комнаты: </h4>
        </div>
        <CalcReduxForm onSubmit={pushOnServ} 
            wallsInitialData={props.wallsInitialData}
            wallsRequiredData={props.wallsRequiredData}
            ceilingInitialData={props.ceilingInitialData}
            ceilingRequiredData={props.ceilingRequiredData}
            floorInitialData={props.floorInitialData}
            floorRequiredData={props.floorRequiredData}/>
        
    </div>
    )
}

export default CalcBody;