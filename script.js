function init(){
    list=[""]
    console.log(list);

}
function AddItm(){
    itm=document.getElementById("itm").value;
    console.log(itm);
    if(itm==""){
        alert("form is blank")
    }else{
        dupItm=false
        itm=itm.replace(/\s+/g,' ').trim();
        for(x in list){
            console.log(x);
            if(list[x].toLowerCase()==itm.toLowerCase()||(list[x].toLowerCase()+"s"==itm)){
                dupItm=true;
                break;
            }
        }
        dupItm==false ? list.push(itm) : alert("Item already in list"); 
    }   
    console.log(list);
    display();
}
function DeleteItm(){
    deletedItm=document.getElementById("alter").value;
    if(deletedItm==""){
        alert("form is blank");
    }else{
        if(deletedItm>=list.length){
            alert("input out of range")
        }else{
            list.splice(deletedItm,1);
        }
    }
    display();
}
function MoveItmUP(){
    itemA=document.getElementById("alter").value;
    console.log("item A: "+itemA);
    if(itemA==""){
        alert("form is blank");
    }else{
        if(itemA==1){
            alert("item is already first on the list")
        }else{
            temp=list[itemA];
            temp2=list[itemA-1];
            list[itemA-1]=temp;
            list[itemA]=temp2;
            console.log(list);
            document.getElementById("alter").value=itemA-1;        
        }
    }
    display();
}
function MoveItmDOWN(){
    itemB=parseInt(document.getElementById("alter").value);
    console.log("initial itemB value: "+itemB);
    if(itemB==list.length-1){
        alert("item is already last on the list")
    }else{
        tempp=list[itemB];
        tempp2=list[itemB+1];
        list[itemB+1]=tempp;
        list[itemB]=tempp2;
        document.getElementById("alter").value=itemB+1;
    }
    display();
}
function display(){
    var display="";
    for(var i=1;i<list.length;i++){
        display+= "<ol>"+i+". "+list[i]+"</ol>";
    }
    document.getElementById("items").innerHTML=display;
}

