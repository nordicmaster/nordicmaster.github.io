//<script src="https://nordicmaster.github.io/js/pdfmake.js"></script>
//<script src="https://nordicmaster.github.io/js/pdffonts.js"></script>
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
            var str = item.text.replace(/\n/g," ");
            var i = 0;
            var newstr = "";
            var len = str.length;
            while (i < len)
            {
                var c = str[i];
                if (c == '\\'){
                    //console.log("zahodit")
                    c = ' ';
                    i=i+1;
                }
                newstr = newstr.concat(c); 
                i=i+1;
            }
            item.text=newstr;
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
        console.log("pdf item = "+item.ID);
        var docInfo = { 
         info: {
          title:item.name+' Text',
          author:'Master',
          subject:'Theme',
          keywords:'Ключевые слова'
         },

         pageSize:'A4',
         pageOrientation:'landscape',//'portrait'
         pageMargins:[50,50,30,60],

         header:function(currentPage,pageCount) {
          return {
         text: currentPage.toString() + 'of' + pageCount,
         alignment:'right',
         margin:[0,30,10,50]
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
         text:item.text,
         fontSize:20,
         margin:[150,80, 30,0]
         //pageBreak:'after'
          },

          {
         text:'text2',
         style:'header'
         //pageBreak:'before'
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
