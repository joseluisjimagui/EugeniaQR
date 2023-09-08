import React, { Component } from 'react'
import axios from 'axios'
import QRCode from "react-qr-code";

export default class ShowQR extends Component {
    state = {        
        qrs : [],
        text: ''
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/qrs')
        this.setState({
            qrs: res.data
        })   
        console.log(this.state.qrs)    
        
        const qrInfo = this.state.qrs[0]
        
        this.state.text = 'Name: '+qrInfo.fullname+', entry day: '+qrInfo.entryday+', entry date: '+qrInfo.entrydate+', checkout: '+qrInfo.checkout
        
    }

    render() {
        return (
            <div class="container-sm">
                <QRCode value={this.state.text} />, 
            </div>
        )
    }
}
