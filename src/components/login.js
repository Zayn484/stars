import React, { Component } from "react";
import { connect } from 'react-redux';
import { loginAuth } from '../actions/loginActions';

class Login extends Component {
  state = {
              userName: '',
              password: '',
              errors: {},
              isLoading:false
          }

    componentDidUpdate(prevProps){
      const { isLoading, loginStatus} = prevProps;

       if(this.props.loginStatus && this.props.loginStatus !== loginStatus) {
         if(this.props.loginStatus === 'success') {
          this.props.history.push('/planets');
         }
         this.setState({ isLoading: false});
       }
    }

    handleValidation = () => { 
     const { username, password } = this.state;

     console.log('user name', username, password);

    let errors = {};
    let isValid = true;

    if(!username) {
      errors.username = 'Please enter username';
      isValid = false;
    }

    if(!password) {
      errors.password = "Please enter password";
      isValid = false;
    }

     this.setState({ errors });

     return isValid;
   }

    handleLogin = (e) => {
         e.preventDefault();

         const { username, password } = this.state;

          const isValid = this.handleValidation();

          if(isValid) {
            this.props.loginAuth(username);
            this.setState({ isLoading: true });
        }
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
      const { username, password } = this.state.errors;

     const { loginStatus } = this.props;

        return (
          <div className="container">
          <div className="row align-items-center justify-content-center" style={{height: '100vh'}}>
              <div className="col-6">
                  <div className={'login-form jumbotron'}>
                      <h3 className={'mb-4'}>Login with Star wars credential</h3>
                      <form onSubmit={this.handleLogin}>
                          <div className="form-group">
                              <label htmlFor="userName">Name</label>
                              <input defaultValue={this.state.userName} type="text"
                                     onChange={(e) => this.handleChange(e)} name={'username'}
                                     className={'form-control'} placeholder={'User name'}/>
                              {username && 
                                <div className="alert alert-danger" role="alert">
                                  {username}
                              </div>
                            }
                          </div>
                          <div className="form-group">
                              <label htmlFor="password">Date of Birth</label>
                              <input type="password" name="password" placeholder={'Birth year is password'}
                                     defaultValue={this.state.DOB} onChange={(e) => this.handleChange(e)}
                                     className={'form-control'}/>
                              {password && 
                                <div className="alert alert-danger" role="alert">
                                  {password}
                              </div>
                            }
                          </div>
                          {loginStatus && loginStatus === 'failure' && 
                                <div className="alert alert-danger" role="alert">
                                  {'Please enter valid credentails'}
                              </div>
                            }
                          <button className={'btn btn-primary'} type={'submit'}>{this.state.isLoading? 'loading...': 'Login'}</button>
                      </form>
                  </div>
              </div>
          </div>

      </div>
        );
    }
}

const mapStateToProps = ({ login: { isLoading, loginStatus}}) => ({ isLoading, loginStatus });

export default connect(mapStateToProps, {  loginAuth })(Login);                

