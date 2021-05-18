class Hello extends React.Component {
        render() {
            return <h1>Hello, React</h1>;
        }
    }

ReactDOM.render(
        <div>
		<h3>Hello React ea</h3>
		<p>Время генерации данных: {new Date().toLocaleTimeString()}</p>
		<Hello />
	</div>,
        document.getElementById("gtpController")
    );
console.log("11");
