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

        if(a=="a"){ // home
            this.on(1);
        }
        if(a=="b"){ // explore
            this.on(2);
        }
        if(a=="c"){ // saved
            this.on(3);
        }
        if(a=="d"){ // settings
            this.on(4);
        }
        },
        on:function(a){// [1 to 5]
            var obj = ["home","explore","saved","settings"];
            for(let i=0; i<4; i++){
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
    disp:function(a){// work stopped here !-----------------------------------------------------------------!
        var obj = ["home","explore","saved","settings"];
        for(let i=0; i<4; i++){
            if(i==(a-1)){
                document.getElementById("bodySub-"+obj[i])
                .setAttribute("class","on");
            }else{
                document.getElementById("bodySub-"+obj[i])
                .setAttribute("class","off");
            }
        }
    },
    init:function(){
        this.search.disp();
        stop();
    }
}