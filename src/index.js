
let seas = ['Red', 'Mediterranean', 'Kineret', 'Dead']

const styles = {
    root: {
        margin: "5px",
        fontFamily: "Arial"
    },
    h1: {
        color: "#00c7ff"
    },
    card: {
        display: "flex",
        border: "1px solid lightgrey",
        alignContent: "center",
        justifyContent: "center"
    },
    button:{
        margin: "5px"
    }
}

class Sea extends React.Component {

    constructor(props){
        super (props);
    }

    render(){
        return (
            <div style={styles.root}>
                <div style={styles.card}>
                    <h1 style={styles.h1}>{this.props.name || "Sea"}</h1>
                </div>
            </div>
        )
    }

}

class App extends React.Component {

    state = {
        loggedIn: false
    }

    logIn = () => this.setState({loggedIn:true});
    logOut = () => this.setState({loggedIn:false});

    render() {
        return (
            <div style={styles.root}>
                <button style={styles.button} onClick={this.logIn}>Log In</button>
                <button style={styles.button} onClick={this.logOut}>Log Out</button>
                <p>The User is {this.state.loggedIn ? "logged in" : "logged out"}</p>
                {seas.map( (sea, i) => {
                    return (
                        <Sea
                            key={i}
                            name={sea}
                        />
                    )})
                }
            </div>
        )
    }
}


ReactDOM.render(

    <App seas={seas}/>,
    document.getElementById("root")
);