let coll = document.querySelectorAll(".coll");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.visibility === "hidden" || content.style.visibility === "" )
         {
            content.style.visibility = "visible"; 
            coll.style.zIndex = "999";
            // coll.style.position = "absolute";
        }  else {
            content.style.visibility = "hidden";
            
        }

    });
};