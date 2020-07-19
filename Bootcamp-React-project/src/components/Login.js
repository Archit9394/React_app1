import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import FontAwesome from './common/FontAwesome';
import axios from "axios";

//let email=""
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			email:'',
			password:'',
		};
		//this.mount= false
		//console.log(this.props);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit=(e)=>{
			console.warn("state",this.state) 
			axios.post("http://127.0.0.1:8000/api/login/", this.state).then((response) => { 
				console.log("res from login",response)
				if (response.data =='You are successfully logged in '){
					this.props.history.push("/listing")
				}
				console.log("res",response.data)
			});
		e.preventDefault();

		}

	 goToSignUp=()=>{
	 	this.props.history.push("/register")
	 }

	render() {
    	return (
    	  <Container fluid className='bg-white'>
	         <Row>
	            <Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
	            <Col md={8} lg={6}>
	               <div className="login d-flex align-items-center py-5">
	                  <Container>
	                     <Row>
	                        <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
	                           <h3 className="login-heading mb-4">Welcome back!</h3>
							   <Form onSubmit={this.handleSubmit}>
							      <div className="form-label-group">
	                                 <Form.Control name="email" onChange={this.handleChange} type="email" id="inputEmail" placeholder="Email address" value={this.state.email} />
	                                 <Form.Label htmlFor="inputEmail">Email address / Mobile</Form.Label>
	                              </div>
								   <br/>
	                              <div className="form-label-group">
	                                 <Form.Control value={this.state.password} name="password" onChange={this.handleChange} type="password" id="inputPassword" placeholder="Password" />
	                                 <Form.Label htmlFor="inputPassword">Password</Form.Label>
	                              </div>
	                              <Form.Check  
	                              	className='mb-3'
							        custom
							        type="checkbox"
							        id="custom-checkbox"
							        label="Remember password"
							      />
	                              <Button onClick={this.handleSubmit}  className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign in</Button>
	                              <div className="text-center pt-3">
	                                 Don’t have an account? <Button onClick={this.goToSignUp} className="font-weight-bold" to="/register">Sign Up</Button>
	                              </div>
		                           <hr className="my-4" />
		                           <p className="text-center">LOGIN WITH</p>
		                           <div className="row">
		                              <div className="col pr-2">
		                                 <Button className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="google" className="mr-2" /> Google</Button>
		                              </div>
		                              <div className="col pl-2">
		                                 <Button className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="facebook" className="mr-2" /> Facebook</Button>
		                              </div>
		                           </div>
	                           </Form>
	                        </Col>
	                     </Row>
	                  </Container>
	               </div>
	            </Col>
	         </Row>
	      </Container>
    	);
    }
}


export default Login;