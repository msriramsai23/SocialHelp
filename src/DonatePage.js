import React from 'react';
import './Donation.scss';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const formValid = ({formErrors, ...rest }) => {
  let valid =true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });

  Object.values(rest).forEach(val => {
    val === null && (valid=false)
  });

  return valid; 
}

class DonationPage extends React.Component{
    constructor () {
      super()
      this.state = {
        amount: null,
        formErrors: {
          amount: "",
      }
    }
  }

    handleSubmit = e => {
      e.preventDefault();
      if(formValid(this.state)){
        console.log(`
        -- SUBMITTING --
        ${this.state.amount}
        `);
        document.getElementById("payment").style.display="block";
        document.getElementById("thanks-msg").style.display="none";
          
      } else{
        console.error('form invalid');
        document.getElementById("invalid-msg").style.display="block";
      }
    }

    handleChange = e => {
      e.preventDefault();
      const {name , value }= e.target;
      let formErrors = this.state.formErrors;
  
      switch(name) {
        case "amount":
          formErrors.firstName = 
          value.length < 3
          ? "amount too low" 
          : "";
          break;
        default:
          break;
      }
  
      this.setState({formErrors, [name]: value}, () => console.log(this.state))
  
    }

    hideCards(){

      document.getElementById("cards").style.display="none";
      document.getElementById("payment").style.display="block";

    }
  
    clickedBtn = () => {
      console.log('swag')
    }
  
    render () {

      const { formErrors } = this.state;

      return (
        <div>
        <section className="section-donation">
        <div className="container-fluid">
          <div id="cards">
          <div>
            <h1 className="section-headings"><strong>Make a Donation</strong><br /></h1><h1>
              <p className="under-heading-paras">Choose a foundation you would like to support.</p>
            </h1>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 ">
            <div className="donation-box js--wp-4">
                <div>
                  <img src="https://cfstatic.give.do/83884df2-e694-422b-98f0-470a03f3e6bb.jpg" />
                    <p className="plan-price">Sambhav Foundation</p>
                    <p className="plan-price-meal">To Enable Dignity and Livelihood Of The Disadvantaged And The Differently Abled</p>
                </div>
                <div>
                    <p className="about-text">Sambhav Foundation Focuses On Synergizing Efforts And Resources To Provide A Strong Platform To Address Issues In Education, Women Empowerment, Skill Development And The Differently Abled. It Aims To Bring In Socio-Economic Change And Enable Them To Obtain A Sustainable Livelihood.</p>
                    
                </div>
                <div>
                    <button onClick={this.hideCards}>Donate Now</button>
                </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 ">
            <div className="donation-box js--wp-4">
                <div>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/6a93c6127351609.Y3JvcCwzMjU4LDI1NDgsMTEyLDY0.jpg" />
                    <p className="plan-price">Accept Society</p>
                    <p className="plan-price-meal">A  non profit care home registered under Karnataka Societies Act No 776/99-2000.</p>
                </div>
                <div>
                    <p className="about-text">
                    HelpAge India is a secular, not-for-profit organization in India, registered under the Societies’ Registration Act of 1860. Set up in 1978, the organization works for ‘the cause and care of disadvantaged older persons to improve their quality of life’ HelpAge envisions a society where elderly have the right to an active, healthy and dignified life
                    
                    </p>
                </div>
                <div>
                    <button onClick={this.hideCards}>Donate Now</button>
                </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 ">
            <div className="donation-box js--wp-4">
                <div>
                    <img src="https://wheelchairnetwork.org/wp-content/uploads/2018/10/milogo-colour.jpg" />
                    <p className="plan-price">Mobility India</p>
                    <p className="plan-price-meal">Progressive force in the disability, development and rehabilitation sector.</p>
                    
                </div>
                <div>
                    <p className="about-text">
                    MI’s vision of an inclusive community, points to a future in which there is greater equity and neglected sections specifically people with disabilities, elderly population and other disadvantaged groups. MI’s reach over the last twenty four years has been in South, East, North-Eastern States of India.
                    
                    </p>
                </div>
                <div>
                    <button onClick={this.hideCards}>Donate Now</button>
                </div>
            </div>
          </div>
          </div>
          <div hidden id="payment" className="payment-page">
          <form onSubmit={this.handleSubmit} noValidate id="main-form">
          <span hidden id="invalid-msg" className="errorMessage">Please enter valid credentials.</span>
              <div className="email">
              <label htmlFor="amount">Enter Amount</label>
                <input 
                type="text" 
                className={formErrors.amount.length > 0 ? "error" : null}
                placeholder="Enter Amount" 
                name="amount" 
                noValidate
                onChange={this.handleChange}>
                </input>
                {formErrors.amount.length > 0 && (
                  <span className="errorMessage">{formErrors.amount}</span>
                )}
              </div>
              <div className="createAccount">
                <Link to="/">
                <button >Submit</button>
                </Link>
              </div>
            </form>
          </div>
          <p hidden id="thanks-msg">Thank you for your contribution!</p>
        </div>
      </section>
      <Footer/>
      </div>
      )
    }
  }
  
  export default DonationPage;