import React, { Component } from 'react';


class Payment extends Component{
    constructor(props){
        super(props);
    }
    onCalculateSum()
    {
        const {sum, months, monthpaymentsum, monthpaymentpercent }=this.refs;

        let sum1 = parseFloat(sum.value);
        let months1 = parseInt(months.value);
        monthpaymentsum.value=(sum1/months1)+((sum1*0.25)/months1);
        monthpaymentpercent.value=(sum1*0.25)/months1;
    }
    render(){
        return (
                <div>
                    <script> alert ("ok")</script>
                    Загальна сума кредиту:
                    <input type="text" ref="sum" />
                    Кількість місяців кредиту:
                    <input type="text" ref="months" />
                    <button onClick={this.onCalculateSum.bind(this)}> Розрахувати: </button>



                    <br/>
                    Сума щомісячного платежу:
                    <input type="text" ref="monthpaymentsum"/>



                    Сума відсотків:
                    <input type="text" ref="monthpaymentpercent"/>
</div>


        )
    }
}
export default Payment;
