
const React = require('react');
class Show extends React.Component{
    render (){
        const Fruit= this.props.Fruit
        return(
            <div>
                <h1>Show Fruit Page</h1>
                The {this.props.Fruit.name} is {this.props.Fruit.color}<br/>
                {this.props.Fruit.readyToEat? 'It is good to eat':'Nope, not ready'}
            </div>
        )
    }
};
module.exports = Show;