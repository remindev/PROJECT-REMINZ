const appMain = {
    search:{
        disp:function(){ // init needed "disp()"

        var searchInput = document.getElementById("top-body-cont-445-input");
        var docContainer = document.getElementById("top-body-cont-445");
        var docResultContainer = document.getElementById("top-body-44-search-results-ul");
       
        searchInput.addEventListener("focus",e=>{ // to display search result's box
            docResultContainer.style.display = "initial";
        });

        document.addEventListener("click",e=>{// click outside so hide search output
            var clickInsideElement = docContainer.contains(e.target);
            if(!clickInsideElement){
                docResultContainer.style.display = "none";
            };
        });

        searchInput.addEventListener("keyup",e=>{ // get search results
            this.results(e.target.value);
        });

        },
        results:function(a){
            console.log("target : "+a);
        }
    },
    action:{
        C:function(a){ //[a,b,c,d,e]
        var body = document.querySelector("body");

        if(a=="a"){ // explore
            this.on(1);
        }
        if(a=="b"){ // tools
            this.on(2);
        }
        if(a=="c"){ // games
            this.on(3);
        }
        if(a=="d"){ // projects
            this.on(4);
        }
        if(a=="e"){ // settings
            this.on(5);
        }
        },
        on:function(a){// [1 to 5]
            var obj = ["explore","tools","games","projects","settings"];
            for(let i=0; i<5; i++){
                if(i==(a-1)){
                    document.getElementById("top-body-456-selector-"+obj[i])
                    .setAttribute("class","on");
                }else{
                    document.getElementById("top-body-456-selector-"+obj[i])
                    .setAttribute("class","off");
                }
            }
        }
    },
    init:function(){
        this.search.disp();
    }
}