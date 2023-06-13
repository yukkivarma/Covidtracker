import React from 'react';
import './App.css';


class Login extends React.Component {
	constructor() {
		super(); //used to call parent class
		this.state = {
			isLoggedIn: localStorage.getItem('token') !== null ? true : false,
			fields: {},
			errors: {},
			user: JSON.parse(localStorage.getItem('user'))
		}
	};

	handleChange = (e) => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	}

	submitUserRegistrationForm = (e) => {
		e.preventDefault();
		if (this.validateForm()) {
			// Set Token
			let token = 'DF!@E!DSEDAD!adsasd';

			localStorage.setItem('token', token);

			let fields = {};
			fields["username"] = "";
			fields["password"] = "";
			this.setState({ fields: fields, isLoggedIn: true });
			alert("Form submitted");
		}

	}

	validateForm() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		console.log(this.state.username);

		if (!fields["username"]) {
			formIsValid = false;
			errors["username"] = "*Please enter your username.";
		} else if (fields["username"] !== this.state.user.username) {
			formIsValid = false;
			errors["username"] = "User Does not Exists";
		}

		if (!fields["password"]) {
			formIsValid = false;
			errors["password"] = "*Please enter your password.";
		} else if (fields["password"] !== this.state.user.password) {
			formIsValid = false;
			errors["password"] = "Password Does not match";
		}

		this.setState({
			errors: errors
		});
		return formIsValid;

	}



	render() {
		return (
			<>
				{
					this.state.isLoggedIn ?
						<div className="logged-in-container">
							Already Logged In
							<button >SOMETHING</button>
						</div>
						:
						<div id="main-registration-container">
							<div id="register">
								<h3>Login</h3>
								<form method="post" name="userRegistrationForm" onSubmit={this.submitUserRegistrationForm} >
									<label>Name</label>
									<input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
									<div className="errorMsg">{this.state.errors.username}</div>

									<label>Password</label>
									<input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
									<div className="errorMsg">{this.state.errors.password}</div>
									<input type="submit" className="button" value="Login" />
								</form>
							</div>
						</div>
				}
			</>


		);
	}


}


export default Login;
