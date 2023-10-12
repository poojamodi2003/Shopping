let frt = document.querySelector("#fruit");
let veg1 = document.querySelector("#veg");
let dry1 = document.querySelector("#dry");
let snks1 = document.querySelector("#snks");
let btp1 = document.querySelector("#btypdt");
let crt = document.querySelector("#clh");

btn.addEventListener(
        "click",
        function () {
                var doc1 = document.createElement("h5");
                doc1.classList.add("cls")
                var com = document.createElement("span");
                var cross = document.createElement("span");
           
                if (add.value == "fruit") {
                       doc1.innerHTML=frt11.value;
                        frt.appendChild(doc1);
                      
                }
                if (add.value == "vegetable") {
                        doc1.innerHTML=veg22.value;
                        veg1.appendChild(doc1);
                }
                if (add.value == "dairy") {
                        doc1.innerHTML=dry123.value;
                        dry1.appendChild(doc1);
                }
                if (add.value == "snacks") {
                        doc1.innerHTML=snc11.value;
                        snks1.appendChild(doc1);
                }
                if (add.value == "beatyproduct") {
                        doc1.innerHTML=betyprl22.value;
                        btp1.appendChild(doc1);
                }
                if (add.value == "Cloth") {
                        doc1.innerHTML=clt.value;
                       crt.appendChild(doc1);
                }

                cross.innerHTML = "✖";
                com.innerHTML=quan.value;
                doc1.appendChild(com);
                doc1.appendChild(cross);

                cross.onclick = ()=> {
                        doc1.remove();
                        console.log("cross");
                }
        }
)
add.addEventListener(
        "click",
        function all(){
                if(add.value=="fruit"){
                        frt11.style.display="block";
                        dry123.style.display="none"  
                        veg22.style.display="none"  
                        snc11.style.display="none"  
                        betyprl22.style.display="none"
                        clt.style.display="none"  
                }
                if(add.value=="dairy"){
                        frt11.style.display="none";
                        dry123.style.display="block"  
                        veg22.style.display="none"  
                        snc11.style.display="none"  
                        betyprl22.style.display="none"
                        clt.style.display="none"  
                }
                if(add.value=="vegetable"){
                        frt11.style.display="none";
                        dry123.style.display="none"  
                        veg22.style.display="block"  
                        snc11.style.display="none"  
                        betyprl22.style.display="none"
                        clt.style.display="none"  
                }
                if(add.value=="snacks"){
                        frt11.style.display="none";
                        dry123.style.display="none"  
                        veg22.style.display="none"  
                        snc11.style.display="block"  
                        betyprl22.style.display="none"
                        clt.style.display="none"  
                }
                if(add.value=="beatyproduct"){
                        frt11.style.display="none";
                        dry123.style.display="none"  
                        veg22.style.display="none"  
                        snc11.style.display="none"  
                        betyprl22.style.display="block" 
                        clt.style.display="none"  
                }
                if(add.value=="Cloth"){
                        frt11.style.display="none";
                        dry123.style.display="none"  
                        veg22.style.display="none"  
                        snc11.style.display="none"  
                        betyprl22.style.display="none"  
                        clt.style.display="block"  
                }
        }
)