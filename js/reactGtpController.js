class Hello extends React.Component {
	constructor(props) {
	  super(props);
		const response = await fetch('https://nordicmaster.github.io/table_items.json');
        	const myJson = await response.json();
		const valuesArray = JSON.parse(myJson);
	  this.state = { valuesArray: valuesArray };			
	}

        render() {
            return <h1>{{valuesArray}}</h1>;
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
