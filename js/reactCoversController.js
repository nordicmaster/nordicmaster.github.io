
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
		this.state.data.sort((a, b) => a.author.localeCompare(b.author));
            return <div>
		        {this.state.data.map(el => (
			     <div>
				<div class="inlineblock marginleft" style={{width:'44%'}}>
					<b>{el.author}</b>: {el.name}
				</div>
				<div class="inlineblock marginleft" style={{width:'18%'}}>
                     			<span style={{fontSize:'80%'}}>Recorded: {el.recorded == true && "true"}</span>
                 		</div>
			    </div>	
			))}
			<p>
				<div class="inlineblock fourthwidth marginleft">Total covers played: {this.state.data.length} </div>
				<div class="inlineblock fourthwidth marginleft">Total covers recorded: {this.state.data.filter(x => x.recorded).length} </div>
			</p>
		</div>;
        }
    }

ReactDOM.render(<Hello />,document.getElementById("CoversController"));
