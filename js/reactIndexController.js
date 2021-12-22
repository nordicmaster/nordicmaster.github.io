class Indexx extends React.Component {
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
		this.state.data.sort((a, b) => a.ID.localeCompare(b.ID));
            return <div>
		        {this.state.data.map(el => (
			     <div>
				<div class="inlineblock marginleft" style={{width:'60%'}}>
					<b>{el.ID}</b>: {el.name} 
					{el.finished == true && <img src='../src/gtp.png' />}
					{el.lyric_finished == true && <img src='../src/txt.png' />}
					{el.recorded == true && <img src='../src/rec.png' />}
				</div>
				<TextGTPItem name={el.ID} />
				<hr/>
			    </div>	
			))}
			<p>
				<div class="inlineblock fourthwidth marginleft">Total GTP finished: {this.state.data.filter(x => x.finished).length} </div>
				<div class="inlineblock fourthwidth marginleft">Total Text finished: {this.state.data.filter(x => x.lyric_finished).length} </div>
				<div class="inlineblock fourthwidth marginleft">Total Recorded: {this.state.data.filter(x => x.recorded).length} </div>
			</p>
			<a href="https://soundcloud.com/user-912533495-638345693"><img src='../src/soundcloud.png' /></a>
            		<a href="https://nordicmaster.bandcamp.com/"><img src='../src/bandcamp.png' /></a><br>
		</div>;
        }
    }

ReactDOM.render(<Indexx />,document.getElementById("IndexController"));