import React, { Component } from 'react'

export default class ShowQR extends Component {
    render() {
        return (
            <div class="container-sm">
                <div class="card" style={{width: "18rem;"}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" class="card-img-top" />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
        )
    }
}
