import React from 'react';

class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            saludo: 'Holis, bienvenidos al contador'
        }
    }

    clickState = () => {
        this.setState({ counter: this.state.counter + 1, saludo: 'me actualicé' })
    }

    componentDidMount(){
        console.log('me acabo de mostrar =)');
    }

    componentDidUpdate(){
        console.log(`me actualicé, el estado ahora es: ${this.state.counter}`);
    }

    componentWillUnmount(){
        console.log('me desmonté');
    }

    render(){
        return(
            <div>
                <h1>CLASS COMPONENT</h1>
                <h3>{this.state.saludo}</h3>
                <p>{this.state.counter}</p>
                <button onClick={this.clickState} >Aumentar state</button>
            </div>
        )
    }
}


export default Contador;