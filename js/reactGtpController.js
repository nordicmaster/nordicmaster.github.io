class Hello extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { data: [] };
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/table_items.json')
      		.then(res => res.json())
      		.then(json => this.setState({ data: json }));	
	}

        render() {
            return <ul>
		    {this.state.data.map(el => (
            		<li>
              		{el.ID}: {el.name}
            		</li>
          	    ))}
	  </ul>;
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
