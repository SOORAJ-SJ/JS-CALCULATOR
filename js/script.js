function get(id){
            if(id=="equalto"){
                document.getElementById('res').value=eval(document.getElementById('res').value);
            }
            else if(id=="clear"){
                document.getElementById('res').value="";
            }
            else{
                document.getElementById('res').value=document.getElementById('res').value+document.getElementById(id).innerHTML;
            }
                
        }