
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
            return <div>
			<ul>
			    {this.state.data.map(el => (
				<li>
				<b>{el.author}</b>: {el.name} - 
				</li>
			    ))}
			</ul>

		</div>;
        }
    }

ReactDOM.render(
    <div>
		<Hello />
		<p>
			<div class="inlineblock fourthwidth marginleft">Total covers played: {totalplayed} </div>
			<div class="inlineblock fourthwidth marginleft">Total covers recorded: {totalrecorded} </div>
		</p>
	  </div>,
    document.getElementById("CoversController")
);
