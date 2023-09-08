import React, { Component } from 'react'

export default class CreateQR extends Component {
    render() {
        return (
            <div class="mb-3 container-sm">
                <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Fecha de Entrada</label>
                        <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                    </div>                                      
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">Hora de Entrada</label>
                        <select class="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Fecha de Salida</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
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
