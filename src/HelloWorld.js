import React from 'react'
import './App.css'


class HelloWorld extends React.Component {

    constructor() {
        super() 
        this.state = {
            homestays: []
        }
    }

    componentDidMount() {
        this.listAllHomestays()
    }

    handleChnge = (event) => {
        this.setState({
            data: event.target.value
        })
    }

    listAllHomestays = () => {
        const url = 'https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json'

        fetch(url)
            .then(respone => respone.json())
            .then((data) => {
                this.setState({ homestays: data })
            })
    }

    render() {
        return (
            <div className='warna'>
                <input type='text' className='form-control' placeholder='Type here' onChange={this.handleChnge} />
                <h3>{this.state.data}</h3>
                {
                    this.state.homestays.map((homestay, i) =>
                        <div>
                            <h3>{homestay.nama} - Rp. {homestay.harga}</h3>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default HelloWorld