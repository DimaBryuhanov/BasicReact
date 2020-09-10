
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
    render() {
        return (
            <div style={styles.root}>
                {seas.map(sea => {
                    return (
                        <Sea
                            key={sea}
                            name={sea}
                        />
                    )})
                }
            </div>
        )
    }
}


ReactDOM.render(

    <App />,
    document.getElementById("root")
);