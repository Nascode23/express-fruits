const React = require('react');

class ShowVeggies extends React.Component{
    render (){
        const Veggie= this.props.Veggie
        return(
            <div>
                <h1>Show Veggie Page</h1>
                The {this.props.Veggie.name} is {this.props.Veggie.color}<br/>
                {this.props.Veggie.readyToEat? 'It is good to eat':'Nope, not ready'}
            </div>
        )
    }
};
module.exports = ShowVeggies;