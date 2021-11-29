
class Hello extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { data: [] };
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/covers.json')
      		.then(res => res.json())
		.then(json => addtextforcovers(json))
      		.then(json => this.setState({ data: json }));	
	}
	
	addtextforcovers(jsoncovers) {
		for (let jcover in jsoncovers)
		{
		    fetch('https://nordicmaster.github.io/src/txt/'+ jcover.name+ '.txt')
			.then(txt => jcover.text = JSON.stringify(txt).trim().replace(/\\n+/g,"\n"));
		}
		return jsoncovers;
	}

        render() {
		this.state.data.sort((a, b) => a.author.localeCompare(b.author));
            return <div>
		        {this.state.data.map(el => (
			     <div>
				<div class="inlineblock marginleft" style={{width:'60%'}}>
					<b>{el.author}</b>: {el.name} {el.recorded == true && <img src='../src/rec.png' />}
				</div>
				<div class="inlineblock marginleft" style={{width:'40%'}}>
					<i>{el.text}</i>
				</div>
				<hr/>
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
