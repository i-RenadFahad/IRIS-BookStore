

    var form = document.getElementById("Form");

    var subject=document.getElementById("subject");
    var subject_err=document.getElementById("serr");
    var comment=document.getElementById("comment");
    var comment_err=document.getElementById("cmerr");
    var commentA=document.getElementById("commentA");
    var commentA_err=document.getElementById("caerr");
    var fname=document.getElementById("fname");
    var fname_err=document.getElementById("fnerr");
    var lname=document.getElementById("lname");
    var lname_err=document.getElementById("lnerr");
    var eml=document.getElementById("eml");
    var eml_err=document.getElementById("eerr");
    var phone=document.getElementById("phone");
    var phone_err=document.getElementById("pnerr");

    form.addEventListener('submit',(e) =>
    {
      if (subject.value <= 0)
      {
        e.preventDefault()
        subject_err.style.display = "block";
         subject.style.border = "0.7px solid red";
      }
      else
      {
        subject_err.style.display = "none";
        subject.style.border = "none";
      }
      

      if (comment.value <= 0)
      {
        e.preventDefault()
        comment_err.style.display = "block";
        comment.style.border = "0.7px solid red";
      }
      else
      {
        comment_err.style.display = "none";
        comment.style.border = "none";
      }

      if (commentA.value <= 0)
      {
        e.preventDefault()
        commentA_err.style.display = "block";
        commentA.style.border = "0.7px solid red";
      }
      else
      {
        commentA_err.style.display = "none";
        commentA.style.border = "none";
      }

      //
      if (fname.value <= 0)
      {
        e.preventDefault()
        fname_err.style.display = "block";
        fname.style.border = "0.7px solid red";
      }
      else
      {
        fname_err.style.display = "none";
        fname.style.border = "none";
      }

      if (lname.value <= 0)
      {
        e.preventDefault()
        lname_err.style.display = "block";
        lname.style.border = "0.7px solid red";
      }
      else
      {
        lname_err.style.display = "none";
        lname.style.border = "none";
      }

      if (eml.value <= 0)
      {
        e.preventDefault()
        eml_err.style.display = "block";
        eml.style.border = "0.7px solid red";
      }
      else
      {
       
          eml_err.style.display = "none";
          eml.style.border = "none";
               
      }

      if (phone.value.length != 10)
      {
        e.preventDefault()
        phone_err.style.display = "block";
        phone.style.border = "0.7px solid red";
      }
      else
      {
        
        phone_err.style.display = "none";
        phone.style.border = "none";
      }


     
      
    });

  

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