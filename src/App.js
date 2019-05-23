import React from 'react';
import logo from './logo.svg';
import './App.css';
import Show from './components/Show'


    function App() {
        return (
            <div className="App">
                <Show  name="Кефір" price={25}  date={10} rate={1}/>
                <hr/>
                <Show  name="Молоко" price={23}  date={10} rate={2}/>
                <hr/>
                <Show  name="Хліб" price={15}  date={5} rate={3}/>
                <hr/>
                <Show  name="Творог" price={32}  date={15} rate={4}/>
            </div>

        );
    }

export default App;
