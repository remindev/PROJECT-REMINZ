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
    init:function(){
        this.search.disp();
    }
}