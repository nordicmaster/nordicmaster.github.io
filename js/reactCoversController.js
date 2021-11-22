
class Hello extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { data: [], totalplayed: 0, totalrecorded: 0};
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/covers.json')
      		.then(res => res.json())
      		.then(json => this.setState({ data: json, totalplayed: 22, totalrecorded: 4}));	
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
			<p>
			<div class="inlineblock fourthwidth marginleft">Total covers played: {totalplayed} </div>
			<div class="inlineblock fourthwidth marginleft">Total covers recorded: {totalrecorded} </div>
			</p>
		</div>;
        }
    }

ReactDOM.render(
    <div>
		  <Hello />
	  </div>,
    document.getElementById("CoversController")
);
