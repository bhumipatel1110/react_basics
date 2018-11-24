import React from 'react';
import { PropTypes } from 'prop-types';
class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000)
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component Will Mount!");
    }

    componentDidMount() {
        console.log("Component Did Mount!");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component Will Recieve Props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update", nextProps, nextState);    
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component Will Update", nextProps, nextState);    
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update", prevProps, prevState);    
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink); 
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        // var text = "Something!";
        return (
            <div>
                <p>In a new component!</p>
                {/* <p>{text}</p> */}
                <p>Your name is {this.props.name}, Your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                {/* <p>User object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr />
                {this.props.children} */}
                <hr />
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr />
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr />
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} /><br /><br />
                <button onClick={() => this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    // user: PropTypes.object,
    // children: PropTypes.element.isRequired
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};

export default Home;