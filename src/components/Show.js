import React, {Component} from 'react';

class Show extends Component{ Це презентаційни компонент. Краще було використати функцію замість класу
    constructor(props){
        super(props);
    }
    render() {
        const {name, price, date, rate}=this.props
        return ( <div>
            <h1 style={{ textAlign: "left"}}> Інформація про товар </h1>
            <ul>
                <li style={{ textAlign: "left"}}>Назва товару: {name}</li> Ви виконали деструктуризацію, то навіщо вказувати this.props.
                <li style={{ textAlign: "left"}}>Вартість товару: {price}</li>
                <li style={{ textAlign: "left"}}>Термін придатності: {date}</li>
                <li style={{ textAlign: "left"}}>Рейтинг: {rate}</li>
            </ul>
           </div>);
    }
}



    export default Show;
