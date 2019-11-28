import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Progress from "../progress-line";
import { inputCompany } from '../../actions';

import "../step-one/step.scss";

class StepThree extends Component {
  
  onChange = e => {
    const {inputCompany} = this.props;
    const value = e.target.value;
    inputCompany(value);
  }

  render() {
    
    const {company} = this.props;
    let buttonName;
    company ? buttonName = 'Next Step' : buttonName = 'Skip this step';
    return (
      <div className="step">
        <h1 className="step__title">Tracking company vehicles? (optional)</h1>
        <Progress percent='fill_three'/>
        <form className='form' action="" method=''>
          <input className='form__input'
              type="text" 
              required
              name='company' 
              placeholder='Company Name (optional)' 
              value={company}
              onChange={this.onChange}/>
        </form>
        <div className='step__control step__control_place_sbtw'>
          <Link className='step__link' to="/step-two"><span className='step__span step__span_rotate_left'></span>Prev Step</Link>
          <Link className='step__btn step__btn_link' to="/step-four">{buttonName}<span className='step__span step__span_rotate_right'></span></Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ company }) => {
  return { company };
};

const mapDispatchToProps = {
  inputCompany
};

export default connect(mapStateToProps,mapDispatchToProps)(StepThree);