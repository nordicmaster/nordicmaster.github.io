class Sorter extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { param: 'ID', data: [] };
	}
	
	componentDidMount() {
		const values = ['ID', 'name', 'created_date']
		this.setState({ data: values });	
	}
	
	setParam(event) {
		this.setState({ param: event.currentTarget.value });	
	}

        render() {
            return <div>
		Sort by:
            	<select class="button-like bgcol2 col1" onChange={this.setParam} value={this.state.param}>
		
		    {this.state.data.map(el => (
			<option value="{el}">
			{el}
			</option>
		    ))}
		</select>
		<p>{this.state.param}</p>
		</div>;
        }
    }

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
		<Sorter />
		<Hello />
	</div>,
        document.getElementById("gtpController")
    );
console.log("11");
