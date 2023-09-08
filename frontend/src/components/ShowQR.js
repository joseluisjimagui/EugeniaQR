import React, { Component } from 'react'
import axios from 'axios'
const QRCode = require('qrcode')

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
        
        const qrInfo = this.state.qrs[0]
        const textToQR = 'Name: '+qrInfo.fullname+', entry day: '+qrInfo.entryday+', entry date: '+qrInfo.entrydate+', checkout: '+qrInfo.checkout
        QRCode.toFile('../../public/qr.png', textToQR,  {
            errorCorrectionLevel: 'H'            
          }, function(err, data) {
            if (err) throw err;
            console.log(data);
          });
    }

    render() {
        return (
            <div class="container-sm">
                <div class="card" style={{width: "18rem;"}}>
                    <img src='../../public/qr.png' class="card-img-top" />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
        )
    }
}
