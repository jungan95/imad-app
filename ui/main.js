console.log('Loaded!');
//Counter code
var button= document.getElementById('counter');
var counter=0;
button.onclick = function(){
    
    //Make a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in the correct span
    counter=counter+1;
    var span= document.getElementById('count');
    span.innerHTML= counter.toString();
}

//Submit name
var nameInput= document.getElementById('name');
var name= nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //Make a requst to the server and send the name
    
    //Capture the names of list and render it as a list
    var names=[name1, name2, name3, name4];
    var list='';
    for (var i=0; i<names.length; i++)
    {
        list += '<li>' + names[i] + '</li>';
        
    }
    var ul= document.getElementById('namelist');
    ul.innerHTML=list;
};
