import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div class="mb-3">
                <div class="mb-3 container-sm">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type your email here"/>
                </div>
                <div class="mb-3 container-sm">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type your password here"/>
                </div>

                <div class="mb-6 container-sm">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                </div>

            </div>

            
        )
    }
}
