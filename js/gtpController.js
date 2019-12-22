//AngularJS
var myApp=angular.module('myApp');
myApp.controller('gtpController', function($scope) {
    $scope.sortparam='ID';
    $scope.gtp={
        text: 'tab1',
        author: 'NM',
        date: '20/10/2019'
    };
    $scope.totalgtp=0;
    $scope.totaltext=0;
    $scope.totalrec=0;
    $scope.totalplayed=0;
    $scope.totalrecorded=0;
    $scope.textJson=[];
    $scope.coversJson=[];
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
        $scope.textJson.forEach(totalcount);
        //$scope.textJson.forEach((item,index)=>{console.log("after "+item.ID+" "+item.text)}); //async shit 
    }
    function totalcount(item,index) {
        if (item.finished==true)
            $scope.totalgtp++;
        if (item.lyric_finished==true)
            $scope.totaltext++;
        if (item.recorded==true)
            $scope.totalrec++;
    }
    function totalcovercount(item,index) {
        $scope.totalplayed++;
        if (item.recorded==true)
            $scope.totalrecorded++;
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
            //console.log("1: "+item.text);
            item.text=item.text.trim();
            var str = item.text.replace(/\\n+/g,"\n");
            item.text=str;
            //console.log("2: "+item.text);
          })
          .catch(function() {
            console.log("rerror");
          });
    }
    function addtext2(item, index) {
        ajax("https://nordicmaster.github.io/src/txt"+ item.name+ ".txt")
          .then(function(result) {
            item.text=JSON.stringify(result);
            item.text=item.text.trim();
            var str = item.text.replace(/\\n+/g,"\n");
            item.text=str;
          })
          .catch(function() {
            console.log("rerro2r");
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
        //console.log("fetchJson");
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
    $scope.fetchcoversJson = function () {
        //$scope.textJson.text = JSON.parse("https://nordicmaster.github.io/table_items.json");
        //'<a href="https://nordicmaster.github.io/table_items.json">json</a>';
        //console.log("fetchJson");
        var xmlhttp = new XMLHttpRequest();
        var myObj;
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            myObj = JSON.parse(this.responseText);            
            $scope.coversJson=myObj;    
            $scope.coversJson.forEach(totalcovercount);
            $scope.coversJson.forEach(addtext2);
          }
        };
        xmlhttp.open("GET", "https://nordicmaster.github.io/covers.json", true);
        xmlhttp.send();
    }
    $scope.changeParam = function (param) {
        //console.log("change param = "+ param);
        $scope.sortparam=param;
    }
    
    $scope.renew=function(item) {}
    $scope.pdfeah=function(item) {
        //console.log("pdf item = "+item.ID);
        var textlen = item.text.length;
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
             text:item.name,
             fontSize:22,
             alignment:'center',
             margin:[10,10, 10,10]
             //pageBreak:'after'
          },
          {
             text:item.text.substring(1,textlen-1),
             fontSize:16,
             margin:[20,40, 20,40]
             //pageBreak:'after'
          }
         ]
        };
    pdfMake.createPdf(docInfo).download(item.name+'.pdf');
}

    
    
    init = function() {
        $scope.fetchJson();
        $scope.fetchcoversJson();
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
