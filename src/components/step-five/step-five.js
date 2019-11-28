import React, { Component } from "react";
import { connect } from 'react-redux';

import Progress from "../progress-line";

import "../step-one/step.scss";

class StepFive extends Component {
 
  state = {
    createStatus: false
  }

  componentDidMount(){
    this.setState({
      createStatus: false
    });
  }

  createAcc = () =>{
    this.setState({
      createStatus: true
    });
  }

  render() {
    const { createStatus } = this.state;
    const {email,firstName,lastName,gender,company,currentZone} = this.props;
    const options = ['male','female'].map((item) => <option key={item} value={item}>{item}</option>);
    const option = <option value={currentZone}>{currentZone}</option>;

    options.unshift(
      <option key="other" disabled>Gender</option>
    );
    
    if (createStatus) return <CreateMessage/>;

    return (
      <div className="step">
        <h1 className="step__title">Check your data</h1>
        <Progress percent='fill_five'/>
        <form className='form' action="" method=''>
          <div className='form__group'>
            <input className='form__input'
                  type="email" 
                  required
                  name='email' 
                  placeholder='E-mail' 
                  defaultValue={email}
                  disabled
            />
          </div>
          <div className='form__group'>
            <input className='form__input'
                type="text" 
                required
                name='firstName' 
                placeholder='First Name' 
                defaultValue={firstName}
                disabled
                />
          </div>
          <div className='form__group'>
            <input className='form__input'
                type="text" 
                required
                name='lastName' 
                placeholder='Last Name' 
                defaultValue={lastName}
                disabled
              />
          </div>
          <div className='form__group'>
            <select className='form__input'
              name="gender" 
              disabled defaultValue={gender}>{options}</select>
          </div>
          <div className='form__group'>
            <input className='form__input'
                type="text" 
                required
                name='company' 
                placeholder='Company Name (optional)' 
                defaultValue={company}
                disabled
              />
          </div>
          <div className='form__group'>
            <select className='form__input'
              disabled name="gender"
              defaultValue={currentZone} >{option}</select>
          </div>
        </form>
        <button onClick={this.createAcc} className='step__create-btn'>Create Account</button>
      </div>
    );
  }
}

const mapStateToProps = ({ email,firstName,lastName,gender,company,currentZone }) => {
  return { email,firstName,lastName,gender,company,currentZone };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps,mapDispatchToProps)(StepFive);


const CreateMessage = () => {
  return (
    <div className='step'>
      <h3 className='step_title'>“Congratulations! Your account has been created”</h3>
    </div>
  );
};