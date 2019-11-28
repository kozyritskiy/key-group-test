import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Progress from "../progress-line";
import { inputEmail } from '../../actions';

import "./step.scss";

class StepOne extends Component {

  state = {
    validEmail: false,
  }

  componentDidMount(){
    this.setState({
      validEmail: false
    });
  }

  onChange = e => {
    const {inputEmail} = this.props;
    const value = e.target.value;
    inputEmail(value);
  }

  checkEmail = async () => {
    const {email} = this.props;
    const user = {email};
    const url = 'https://frontapi.vinchain.io/auth/api/check-email/';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    response.ok ? 
      this.setState({ validEmail: true }) : 
        this.setState({ validEmail: false });
  }


  render() {
    const { email } = this.props;
    const { validEmail } = this.state;
    const emailCreate = `We'll email a link to create a password for your new account`;
    if (validEmail) return <Redirect to="/step-two" />
    return (
      <div className="step">
        <h1 className="step__title">Create your VINchain account<br /> Easy to use anytime, anywhere for everyone</h1>
        <Progress percent={'fill_one'}/>
        <form className='form' action="" method=''>
          <input className='form__input'
              type="email" 
              required
              name='email' 
              placeholder='E-mail' 
              value={email}
              onChange={this.onChange}/>
        </form>
        <div className="step__message">{emailCreate}</div>
        <div className="step__control step__control_place_fe">
          <button className='step__btn' onClick={this.checkEmail}>Next Step<span className='step__span step__span_rotate_right'></span></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ email }) => {
  return { email };
};

const mapDispatchToProps = {
  inputEmail
};

export default connect(mapStateToProps,mapDispatchToProps)(StepOne);
