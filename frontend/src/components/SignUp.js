import React, { Component } from 'react'
import axios from 'axios'

export default class SignUp extends Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        noApartment: 0,
        date: '',
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/users')
        console.log(res)
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value)
    }

    onChangeLastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
        console.log(e.target.value)
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(e.target.value)
    }

    onChangeNoDepartment = (e) => {
        this.setState({
            noApartment: e.target.value
        })
        console.log(e.target.value)
    }

    onSubmit = async e => {
        await axios.post('http://localhost:5000/users', {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            noApartment: this.state.noApartment,            
        })
        e.preventDefault();
    }

  render() {
    return (
        <div className="mb-3 container-sm">
            <form className="row g-3 needs-validation" onSubmit={this.onSubmit} noValidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationCustom01"  onChange={this.onChangeName} required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="validationCustom01" onChange={this.onChangeLastname} required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>                  
                <div className="col-md-6">
                    <label for="validationCustomUsername" className="form-label">Correo</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" onChange={this.onChangeEmail} aria-describedby="inputGroupPrepend" required/>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom02" className="form-label">Contraseña</label>
                    <input type="text" className="form-control" id="validationCustom02" onChange={this.onChangePassword} required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>                                      
                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">No Departamento</label>
                    <select className="form-select" id="validationCustom04" onChange={this.onChangeNoDepartment} required>
                        <option selected disabled >Choose...</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                                                        
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Registar</button>
                </div>
            </form>


        </div>
    )
  }
}
