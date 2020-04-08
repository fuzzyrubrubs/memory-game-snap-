import React, {Component} from 'react';
import Card from '../Components/Card';


class MemoryGame extends Component {

    state = {
        colors: [],
        pairs: []
    }

    colors = [                     
            {color: "#00ffff", id: 1},
            {color: "#f0ffff", id: 2},
            {color: "#a52a2a", id: 3},
            {color: "#4b0082", id: 4},
            {color: "#00ff00", id: 5},
            {color: "#000080", id: 6},
            {color: "#ffa500", id: 7},
            {color: "#800080", id: 8},          
            {color: "#00ffff", id: 9},
            {color: "#f0ffff", id: 10},
            {color: "#a52a2a", id: 11},
            {color: "#4b0082", id: 12},
            {color: "#00ff00", id: 13},
            {color: "#000080", id: 14},
            {color: "#ffa500", id: 15},
            {color: "#800080", id: 16}          
        ]

    componentDidMount(){

        var finArr = this.colors.map((c) => {
            c.showStatus = "hiding";
            return c
        }).sort(() => .5 - Math.random());

        this.setState({colors: finArr});
    }

    pairsHandler = (found) => {

        console.log('clicked')

        var ari = this.state.pairs.slice();
        var f = ari.find((e) => {
            return e.color === found.color;
        });
        if(f){
            f.showStatus = "paired";
            found.showStatus = "paired";
        }

        if(this.state.pairs.length >= 2){
            this.setState({pairs: []});
            this.hideHandler();
        }
    }

    appearHandler = (id) => {    
        var ari = this.state.colors.slice();
        var found = ari.find((e) => {
            return e.id === id

        });
        found.showStatus = found.showStatus === "showing" ? "hiding" : "showing";        
        this.setState({colors: ari});

        var pairsArr = this.state.pairs.slice();
        pairsArr.push(found);
        this.setState({pairs: pairsArr});

        this.pairsHandler(found);

    }

    hideHandler = () => {
        var arr = this.state.colors.slice();
        var newArr = arr.map((c) => {
            if(c.showStatus === "showing"){
                c.showStatus = "hiding"
            }

            return c
        })
        this.setState({colors: newArr})
    }

    render(){

        const card = this.state.colors.map((c) => {
            return <Card color={c} show={c.showStatus} change={this.appearHandler} />
        })



        return (
            <div>
                {card}
            </div>
                   
        )
    }

}



export default MemoryGame