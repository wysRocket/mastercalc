import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CalcResults from './CalcResults';
import { setRecFlag } from '../../redux/app-reducer';


class ResultsContainer extends PureComponent {

    render () {

        return (
            <CalcResults calcData={this.props.calcData}
            setRecFlag={this.props.setRecFlag}
            response={this.props.response}/>
)
}}

const mapStateToProps = (state) => ({
    calcData: state.app.calcData,
    response: state.app.response
  });

  export default compose (
        connect (mapStateToProps, {setRecFlag}))
        (ResultsContainer);