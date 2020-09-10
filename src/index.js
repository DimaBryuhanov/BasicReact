
let name = "Mark";

const styles = {
    root: {
        margin: "15px",
        fontFamily:"Times"
    },
    title: {
        color: "red"
    }
}

const WelcomeComponent = (props) => {
    console.log(props);
    return (
        <div style={styles.root}>
            <h1 className="title" style={styles.title}>Welcome, {props.name}!</h1>
            <p>{props.message}</p>
        </div>

    )
}

ReactDOM.render(

    <WelcomeComponent
        name={name}
        message={"Enjoy the course!"}
    />,
    document.getElementById("root")
);