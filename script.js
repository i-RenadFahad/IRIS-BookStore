
function openForm()
   	{
   		document.getElementById("logform").style.display = "block";
   	}

   	function closeForm()
   	{
      //form.reset();
   		document.getElementById("logform").style.display = "none";
   	}
    

    var username = document.getElementById("un");
    var username_err = document.getElementById("unerr");
    var password = document.getElementById("pw");
    var password_err = document.getElementById("pwerr");
    var form = document.getElementById("Form");

    form.addEventListener('submit',(e) =>
    {
      if (username.value <= 0)
      {
        e.preventDefault()
        username_err.style.display = "block";
        username.style.border = "0.7px solid red";
      }

      if (password.value <= 0)
      {
        e.preventDefault()
        password_err.style.display = "block";
        password.style.border = "0.7px solid red";
      }

      if (username.value.length > 0)
      {
        
        username_err.style.display = "none";
        username.style.border = "none";
      }

      if (password.value.length > 0)
      {
        
        password_err.style.display = "none";
        password.style.border = "none";  
      } 
      
    });

    function re()
    {
      if(username.value.length > 0 && password.value.length > 0)
      {
        window.location.replace("redirect.html");
        return false;
      }
    }

    function input_OnFocus(txt)
    {
      txt.style.backgroundColor = "#ffffcc";
    }

    function input_OnBlur(txt)
    {
      txt.style.backgroundColor = "";
    }


    function clk(id){
      document.getElementById(id).style.display = "block";
    }

    function ex(id){
      document.getElementById(id).style.display = "none";
    }

    function show(){
      document.getElementById("brief").style.display = "block";
    }

    function hide()
    {
      document.getElementById("brief").style.display = "none";
    }

    



     



 




    
