
let name = "John"

const styles = {
    title: {
        color: "red"
    }
}

ReactDOM.render(
    
<h1 className="title" style={styles.title}>Hello {name}!</h1>,
    document.getElementById("root")
);