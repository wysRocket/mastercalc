import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CalcBody from './CalcBody';
import { getInitialParams, setDataForCalc, getEstimate } from '../../redux/app-reducer';


class CalcContainer extends PureComponent {

    componentDidMount() {
     
        this.props.getInitialParams('floor')
    }

    render () {

        return (
            <CalcBody 
            wallsInitialData={this.props.wallsInitialData}
            wallsRequiredData={this.props.wallsRequiredData}
            ceilingInitialData={this.props.ceilingInitialData}
            ceilingRequiredData={this.props.ceilingRequiredData}
            floorInitialData={this.props.floorInitialData}
            floorRequiredData={this.props.floorRequiredData}
            setDataForCalc={this.props.setDataForCalc}
            calcDataRec={this.props.calcDataRec}
            getEstimate={this.props.getEstimate}/>
)
}}

const mapStateToProps = (state) => ({
    wallsInitialData: state.app.wallsInitialData,
    wallsRequiredData: state.app.wallsRequiredData,
    ceilingInitialData: state.app.ceilingInitialData,
    ceilingRequiredData: state.app.ceilingRequiredData,
    floorInitialData: state.app.floorInitialData,
    floorRequiredData: state.app.floorRequiredData,
    calcDataRec: state.app.calcDataRec,
  });

  export default compose (
        connect (mapStateToProps, {getInitialParams, setDataForCalc, getEstimate}))
        (CalcContainer);