class TextGTPItem extends React.Component {  
	constructor(props) {
	  super(props);
	  this.state = { data: "data" };
	  this.pdfeah = this.pdfeah.bind(this);//react magic
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/src/' + this.props.id + '.txt')
			.then(res => res.text())		
			.then(json => this.setState({ data: json }))
			.catch(console.log);	
	}
	
	pdfeah(name, text) {
		console.log('name is:', name);
		console.log('text is:', text);
		var textlen = text.length;
		var docInfo = { 
			info: {
				title:name+' Text',
				author:'Master',
				subject:'Theme',
				keywords:'Ключевые слова'
			},

			pageSize:'A4',
			pageOrientation:'portrait',//'landscape'
			pageMargins:[50,50,30,60],

			header:function(currentPage,pageCount) {
				return {
					text: currentPage.toString() + ' of ' + pageCount,
					alignment:'right',
					margin:[10,20,20,30]
				}
			},

			footer:[
				{
					text:'NM production',
					alignment:'center',//left  right
				}
			],

			content: [
				{
					text:name,
					fontSize:22,
					alignment:'center',
					margin:[10,10, 10,10]
					//pageBreak:'after'
				},
				{
					text:text.substring(0, textlen-1),
					fontSize:16,
					margin:[20,40, 20,40]
					//pageBreak:'after'
				}
			]
		};
		pdfMake.createPdf(docInfo).download(name+'.pdf');
	}
		
	render(){
		return <div class="inlineblock marginleft" style={{width:'45%'}}>
                     <span style={{verticalAlign: 'top'}}>
                         <button class="button-like bgcol1" onClick={this.pdfeah.bind(this, this.props.name, this.state.data)}>Download text</button>
                     </span>
                     <span>
                        <details class="inlineblock">
                         <summary class="button-like align-center bgcol3">Show text</summary>                     
                          <p class="smalltext">{this.state.data}</p>
                        </details>
			 <div class="inlineblock">
                           <div class="button-like bgcol1 align-center">
                            <a class="fullwidth align-center" href={"src/structure/" + this.props.id +".txt"} download={this.props.id+" "+this.props.name}>Structure</a>
                           </div>
                         </div>
                     </span>     

                 </div>;		
	}
}
