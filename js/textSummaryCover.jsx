class TextSummaryCover extends React.Component {  
	constructor(props) {
	  super(props);
	  this.state = { data: "data" };
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/src/txt/' + this.props.name + '.txt')
			.then(res => res.text())		
			.then(json => this.setState({ data: json }))
			.catch(console.log);	
	}
	
	function pdfeah(name, text) {
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
					text:text.substring(1,textlen-1),
					fontSize:16,
					margin:[20,40, 20,40]
					//pageBreak:'after'
				}
			]
		};
		pdfMake.createPdf(docInfo).download(name+'.pdf');
	}
		
	render(){
		return <div class="inlineblock marginleft" style={{width:'35%'}}>
                     <span style={{verticalAlign: 'top'}}>
                         <button class="button-like bgcol1" onClick={pdfeah(this.props.name, this.state.data)}>Download text</button>
                     </span>
                     <span>
                        <details class="inlineblock">
                         <summary class="button-like align-center bgcol3">Show text</summary>                     
                          <p class="smalltext">{this.state.data}</p>
                        </details>
                     </span>                     
                 </div>;		
	}
}
