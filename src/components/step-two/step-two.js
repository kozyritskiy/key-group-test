import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Progress from "../progress-line";
import {inputName } from '../../actions';

import "../step-one/step.scss";

class StepTwo extends Component {

  state = {
    valid: false
  }

  componentDidMount(){
    this.setState({
      valid: false
    });
  }

  onChange = e => {
    const {inputName} = this.props;
    const value = e.target.value;
    const name = e.target.name;
    inputName(name,value);
  }

  checkValid = () =>{
    const {firstName,lastName,gender} = this.props;
    if(firstName !== '' && lastName !== '' && gender !== 'Gender'){
      this.setState({
        valid: true
      });
    }
  }

  render() {
    const {firstName,lastName,gender} = this.props;
    const {valid} = this.state;
   
    const options = ['male','female'].map((item) => <option key={item} value={item}>{item}</option>);

    options.unshift(
      <option key="other" disabled>Gender</option>
    );
    
    if (valid) return <Redirect to="/step-three" />
    return (
      <div className="step">
        <h1 className="step__title">Let's introduce our selves! <br/>Your name will be displayed in all documents, etc.</h1>
        <Progress percent={'fill_two'}/>
        <form className='form' action="" method=''>
              <div className='form__group'>
                <input className='form__input'
                    type="text" 
                    required
                    name='firstName' 
                    placeholder='First Name' 
                    value={firstName}
                    onChange={this.onChange}/>
              </div>
              <div className='form__group'>
                <input className='form__input'
                    type="text" 
                    required
                    name='lastName' 
                    placeholder='Last Name' 
                    value={lastName}
                    onChange={this.onChange}/>
              </div>
              <div className='form__group'>
                  <select className='form__input' name="gender" value={gender} onChange={this.onChange}>{options}</select>
              </div>
        </form>
        <div className='step__control step__control_place_sbtw'>
          <Link className='step__link' to="/"><span className='step__span step__span_rotate_left'></span>Prev Step</Link>
          <button className='step__btn' onClick={this.checkValid}>Next Step<span className='step__span step__span_rotate_right'></span></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ firstName,lastName,gender }) => {
  return { firstName,lastName,gender };
};

const mapDispatchToProps = {
  inputName
};

export default connect(mapStateToProps,mapDispatchToProps)(StepTwo);