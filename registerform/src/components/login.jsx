import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="container-fluid">
      <form className="gy-3  w-25 border border-secondary rounded p-3 mx-auto mt-5 rounded">
        
        
            <div className="col-12">
                <label for="emailId" className="form-label ">Email:</label>
                <input type="email" className="form-control mb-3" id="emailId" placeholder='jamesbond@angel.com' required/>
            </div>
        
        
            <div className="col-12">
                <label for="password" className="form-label ">Password:</label>
                <input type="password" className="form-control mb-3" id="password" placeholder='Contact number' required/>
            </div>
        
        
            <div className="col-12">
                <button type="submit" className='form-control btn-primary ' required>Login</button>
            </div>
        
      </form>
      </div>
    )
  }
}

export default Login;
