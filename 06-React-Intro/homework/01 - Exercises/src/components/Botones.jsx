import React from "react";

class Botones extends React.Component{
    constructor(){
        super ()
    }
    render (){
        return (
            <div>
                <button class="btn btn-success"  onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
                <button class="btn btn-warning" onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
            </div>
        )
    }
}

export default Botones;