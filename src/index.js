
let seas = ['Red', 'Mediterranean', 'Kineret', 'Dead']

const styles = {
    root: {
        margin: "5px",
        fontFamily: "Arial"
    },
    h1:{
        color: "#00c7ff"
    },
    card: {
        display: "flex",
        border: "1px solid lightgrey",
        alignContent: "center",
        justifyContent: "center"
    }
}

const Sea = (props) => {
    return (
        <div style={styles.root}>
            <div style={styles.card}>
                <h1 style={styles.h1}>{props.name}</h1>
            </div>
        </div>
    )
}


const App = () => {
    return (
        <div style={styles.root}>
            {seas.map(sea => {
                return (
                    <Sea
                        name={sea}
                    />
                )

            })}
        </div>
    )
}

ReactDOM.render(

    <App />,
    document.getElementById("root")
);