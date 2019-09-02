//AngularJS
var myApp=angular.module('myApp');
myApp.controller('gtpController', function($scope) {
    $scope.sortparam='ID';
    $scope.gtp={
        text: 'tab1',
        author: 'NM',
        date: '20/10/2019'
    };
    $scope.textJson=[];
        /*text: '',
        author: 'NM',
        date: '20/10/2019'        
    };*/
    $scope.changeClass = function (e) {         
        $scope.gtp.text = 'newtab';
    }
    function assignJson(obj) {
        //console.log("assign " + obj[1]);
        $scope.textJson = obj;
        //$scope.textJson.forEach((item,index)=>{console.log("before "+item.ID+" "+item.text)});
        $scope.textJson.forEach(addtext);
        //$scope.textJson.forEach((item,index)=>{console.log("after "+item.ID+" "+item.text)}); //async shit 
    }
    function addtext(item, index) {
        //console.log("add Text");
        /*var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                item.text =this.responseText; 
                console.log(item.text);
            }
        }
        xmlhttp2.open("GET", "https://nordicmaster.github.io/src/"+ item.ID+ ".txt", true);
        xmlhttp2.send();*/
        ajax("https://nordicmaster.github.io/src/"+ item.ID+ ".txt")
          .then(function(result) {
            //console.log(JSON.stringify(result));
            item.text=JSON.stringify(result);
            console.log("1: "+item.text);
            item.text=item.text.trim();
            var str = item.text.replace(/\\n+/g,"\n");
            item.text=str;
            console.log("2: "+item.text);
          })
          .catch(function() {
            console.log("rerror");
          });
    }
    function ajax(url) {
        //console.log("aja X");
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            }
        };
        xhr.onerror = reject;
        xhr.open('GET', url);
        xhr.send();
      });
    }

    $scope.fetchJson = function () {
        //$scope.textJson.text = JSON.parse("https://nordicmaster.github.io/table_items.json");
        //'<a href="https://nordicmaster.github.io/table_items.json">json</a>';
        console.log("fetchJson");
        var xmlhttp = new XMLHttpRequest();
        var myObj;
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            myObj = JSON.parse(this.responseText);            
            assignJson(myObj);            
          }
        };
        xmlhttp.open("GET", "https://nordicmaster.github.io/table_items.json", true);
        xmlhttp.send();
    }
    $scope.changeParam = function (param) {
        console.log("change param = "+ param);
        $scope.sortparam=param;
    }
    

    $scope.pdfeah=function(item) {
        //console.log("pdf item = "+item.ID);
        var docInfo = { 
         info: {
          title:item.name+' Text',
          author:'Master',
          subject:'Theme',
          keywords:'Ключевые слова'
         },

         pageSize:'A4',
         pageOrientation:'portrait',//'landscape',//'portrait'
         pageMargins:[50,50,30,60],

         header:function(currentPage,pageCount) {
          return {
         text: currentPage.toString() + 'of' + pageCount,
         alignment:'right',
         margin:[10,30,20,50]
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
             text:item.name,
             fontSize:24,
             alignment:'center',
             margin:[10,10, 10,10]
             //pageBreak:'after'
          },
          {
             text:item.text,
             fontSize:18,
             margin:[50,80, 30,50]
             //pageBreak:'after'
          }
         ]
        };
    pdfMake.createPdf(docInfo).download(item.name+'.pdf');
}

    
    
    init = function() {
        $scope.fetchJson();
    }
    init();
});
myApp.controller('linkController', function($scope) {
    $scope.linkJson={
        text: 'link',
        author: 'NM',
        date: '20/10/2019'
    };
});
