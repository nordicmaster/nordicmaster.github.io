
class Hello extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { data: [] };
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/covers.json')
      		.then(res => res.json())
		.then(async function adtext(json1) {
			console.log(json1);
			console.log(typeof json1);
			for (let jcover of json1)
			{
			    console.log(jcover);
			    console.log(jcover.name);
			    await fetch('https://nordicmaster.github.io/src/txt/'+ jcover.name+ '.txt')
				.then(txt => jcover.text = JSON.stringify(txt).trim().replace(/\\n+/g,"\n"));
			}
			console.log("2");
			console.log(json1);
			console.log(typeof json1);
			this.setState({ data: json1 });
		});	
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
