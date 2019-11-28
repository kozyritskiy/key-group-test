import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import moment from 'moment-timezone';

import Progress from "../progress-line";
import { inputTimezone } from '../../actions';

import "../step-one/step.scss";

class StepFour extends Component {
 
  componentDidMount(){
    const {inputTimezone} = this.props;
    inputTimezone(moment.tz.guess());
  }
  
  render() {

    const {currentZone} = this.props;
    const option = <option value={currentZone}>{currentZone}</option>;
    return (
      <div className="step">
        <h1 className='step__title'>Set your time zone</h1>
        <Progress percent='fill_four'/>
        <form className='form' action="" method=''>
          <div className='form__group'>
            <select className='form__input' name="gender" defaultValue={currentZone} >{option}</select>
          </div>
        </form>
        <div className='step__control step__control_place_sbtw'>
          <Link className='step__link' to="/step-three"><span className='step__span step__span_rotate_left'></span>Prev Step</Link>
          <Link className='step__btn step__btn_link' to="/step-five">Next Step<span className='step__span step__span_rotate_right'></span></Link>
        </div>
      </div>
    );
  }
}



const mapStateToProps = ({ currentZone }) => {
  return { currentZone };
};

const mapDispatchToProps = {
  inputTimezone
};

export default connect(mapStateToProps,mapDispatchToProps)(StepFour);