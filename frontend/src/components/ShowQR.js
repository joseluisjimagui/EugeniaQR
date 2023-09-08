import React, { Component } from 'react'
import axios from 'axios'

export default class ShowQR extends Component {
    state = {        
        qrs : [],
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/qrs')
        this.setState({
            qrs: res.data
        })   
        console.log(this.state.qrs)        
    }

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
