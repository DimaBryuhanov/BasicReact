
let name = "Mark";

const styles = {
    title: {
        color: "red"
    }
}

const WelcomeComponent = (props) => {
    return (
        <h1 className="title" style={styles.title}>Welcome {props.name}!</h1>
    )
}

ReactDOM.render(
    
    <WelcomeComponent 
        name={name}
    />,
    document.getElementById("root")
);