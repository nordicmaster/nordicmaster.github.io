
class Hello extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { data: [] };
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/covers.json')
      		.then(res => res.json())
      		.then(json => this.setState({ data: json }));	
	}

        render() {
            return <ul>
		    {this.state.data.map(el => (
            		<li>
              		<b>{el.author}</b>: {el.name} - 
            		</li>
          	    ))}
	  </ul>;
        }
    }

ReactDOM.render(
    <div>
		  <Hello />
	  </div>,
    document.getElementById("CoversController")
);
