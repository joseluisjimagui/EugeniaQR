import React, { Component } from 'react'
import axios from 'axios'

export default class CreateQR extends Component {

    state = {
        fullname: '',
        entryday: Date.now(),
        entrytime: 0,
        checkoutdate: Date.now()
    }  

    onChangefullname = (e) => {
        this.setState({
            fullname: e.target.value
        })        
    }

    onChangeentryday = (e) => {
        this.setState({
            entryday: e.target.value
        })        
    }

    onChangeentrytime = (e) => {
        this.setState({
            entrytime: e.target.value
        })        
    }

    onChangecheckoutdate = (e) => {
        this.setState({
            checkoutdate: e.target.value
        })        
    }

    onSubmit = async e => {
        await axios.post('http://localhost:5000/qrs', {
            fullname: this.state.fullname,
            entryday: this.state.entryday,
            entrytime: this.state.entrytime,
            checkoutdate: this.state.checkoutdate           
        })
        e.preventDefault();
    }

    render() {
        return (
            <div class="mb-3 container-sm">
                <form class="row g-3 needs-validation" onSubmit={this.onSubmit} noValidate>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="validationCustom01" onChange={this.onChangefullname} required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Fecha de Entrada</label>
                        <input type="text" class="form-control" id="validationCustom02" onChange={this.onChangeentryday} required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                    </div>                                      
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Hora de Entrada</label>
                        <select class="form-select" id="validationCustom04"onChange={this.onChangeentrytime} required>
                            <option selected disabled value="">Choose...</option>
                            <option>00</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>                            
                
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Fecha de Salida</label>
                        <div class="input-group has-validation">                            
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange={this.onChangecheckoutdate} required/>
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                        </div>
                    </div>                                          
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>


            </div>

        )
    }
}
