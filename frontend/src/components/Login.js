import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {

    state = {        
        users : [],
        email: '',
        password: ''      
    }   

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })        
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })        
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/users')
        this.setState({
            users: res.data
        })   
        console.log(this.state.users)        
    }

    onSubmit = async e => {        
        var userResult = this.state.users.find(item => item.email === this.state.email);
        

        if(typeof(userResult) != undefined ){
            if(userResult.password == this.state.password){
            console.log("Ingresaste");
            }
            else{
                console.log('Intenta de nuevo')
            }            
        }
        else{
            console.log('Intenta de nuevo')
        }

        

        
        e.preventDefault();
    }

    render() {
        return (
            <div class="mb-3">
                <form className="row g-3 needs-validation" onSubmit={this.onSubmit} noValidate>
                    <div class="mb-3 container-sm">
                        <label for="formGroupExampleInput" class="form-label">Email</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" onChange={this.onChangeEmail} placeholder="Type your email here"/>
                    </div>
                    <div class="mb-3 container-sm">
                        <label for="formGroupExampleInput2" class="form-label">Password</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" onChange={this.onChangePassword} placeholder="Type your password here"/>
                    </div>

                    <div class="mb-6 container-sm">
                            <button class="btn btn-primary" type="submit">Ingresar</button>
                    </div>
                </form>

            </div>

            
        )
    }
}
