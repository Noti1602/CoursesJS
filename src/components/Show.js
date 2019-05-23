import React, {Component} from 'react';

class Show extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const {name, price, date, rate}=this.props
        return ( <div>
            <h1 style={{ textAlign: "left"}}> Інформація про товар </h1>
            <ul>
                <li style={{ textAlign: "left"}}>Назва товару: {this.props.name}</li>
                <li style={{ textAlign: "left"}}>Вартість товару: {this.props.price}</li>
                <li style={{ textAlign: "left"}}>Термін придатності: {this.props.date}</li>
                <li style={{ textAlign: "left"}}>Рейтинг: {this.props.rate}</li>
            </ul>
           </div>);
    }
}



    export default Show;