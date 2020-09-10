
// let seas = ['Red', 'Mediterranean', 'Kineret', 'Dead']

//https://en.wikipedia.org/wiki/Geography_of_Israel
let mountains = [
    { id: 1, name: "Mount Hermon", height: 2.236, area: "Golan Heights", src: "../img/1920px-Hermonsnow.jpg" },
    { id: 2, name: "Mount Meron", height: 1.208, area: "Upper Galilee", src: "../img/Northern_slope_of_Mount_Meron.jpg" },
    { id: 3, name: "Mount Ramon", height: 1.035, area: "Negev", src: "../img/Ramon2004b.jpg" },
    { id: 4, name: "Mount of Olives", height: .835, area: "East Jerusalem", src: "../img/2013-Aerial-Mount_of_Olives.jpg" },
    { id: 5, name: "Mount Tabor", height: 588, area: "Lower Galilee", src: "../img/1920px-Tabor.jpg" },
    { id: 6, name: "Mount Carmel", height: 546, area: "Haifa", src: "../img/Caiobadner_-_mount_carmel.jpeg" }
]

const styles = {
    root: {
        margin: "5px",
        fontFamily: "Arial",
        display: "flex",
        flexWrap: "wrap"
    },
    h1: {
        color: "#a87532"
    },
    card: {
        display: "flex-inline",
        border: "1px solid #a87532",
        borderRadius: "10px",
        alignContent: "center",
        justifyContent: "left",
        marginBottom: "15px",
        width:"300px"
    },
    button: {
        margin: "5px"
    },
    image: {
        borderTopRightRadius:"10px ",
        borderTopLeftRadius:"10px ",
        width: "100%",
        height: "200px",
        marginRight: "20px"
    },
    info:{
        margin: "10px"
    }
}

class Mountain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.root}>
                <div style={styles.card}>
                    <img style={styles.image} src={this.props.img}></img>
                    <div style={styles.info}>
                        <h1 style={styles.h1}>{this.props.name || "Mount"}</h1>
                        <p>height: {this.props.height || 0}</p>
                        <p>Region: {this.props.region || "Israel"}</p>
                    </div>
                </div>
            </div>
        )
    }

}

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        loggedIn: false
    }

    logIn = () => this.setState({ loggedIn: true });
    logOut = () => this.setState({ loggedIn: false });

    render() {
        return (
            <>
                <button style={styles.button} onClick={this.logIn}>Log In</button>
                <button style={styles.button} onClick={this.logOut}>Log Out</button>
                <p>The User is {this.state.loggedIn ? "logged in" : "logged out"}</p>
                <div style={styles.root}>
                    {this.props.data.map(item => {
                        return (
                            <Mountain
                                key={item.id}
                                name={item.name}
                                height={item.height}
                                img={item.src}
                                region={item.area}
                            />
                        )
                    })
                    }
                </div>
            </>

        )
    }
}


ReactDOM.render(

    <App data={mountains} />,
    document.getElementById("root")
);