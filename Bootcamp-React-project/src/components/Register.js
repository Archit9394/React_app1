import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import axios from "axios";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			name:'',
			email:'',
			password:'',
			//promoCode:''
		}
		console.log("props value",this.props)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}
    signUp = () => {
        //e.preventDefault();
        axios.post("http://localhost:8000/api/register/", this.state).then(() => {
        });
      };

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
	                           <h3 className="login-heading mb-4">New Buddy!</h3>
	                           <Form onSubmit={this.signUp}>
	                              <div className="form-label-group">
	                                 <Form.Control name="email" onChange={this.handleChange} type="email" id="inputEmail" placeholder="Email address" value={this.state.email} />
	                                 <Form.Label htmlFor="inputEmail">Email address / Mobile</Form.Label>
	                              </div>
	                              <div className="form-label-group">
	                                 <Form.Control name="password" onChange={this.handleChange}  type="password" id="inputPassword" placeholder="Password" value={this.state.password} />
	                                 <Form.Label htmlFor="inputPassword">Password</Form.Label>
	                              </div>
	                              <div className="form-label-group mb-4">
	                                 <Form.Control name="name" onChange={this.handleChange} type="text" id="inputPromo" placeholder="Promocode" value={this.state.name}/>
	                                 <Form.Label htmlFor="inputPromo">Promocode</Form.Label>
								  </div>
	                              <Link to="/listing" onClick={this.signUp} className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</Link>
	                              <div className="text-center pt-3">
	                                 Already have an account? <Link className="font-weight-bold" to="/login">Sign In</Link>
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


export default Register;
