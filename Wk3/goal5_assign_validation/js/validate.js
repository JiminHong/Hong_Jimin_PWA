/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){



    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        //variables I need
    var dom = {
        username:document.querySelector("#f_username"),
        email:document.querySelector("#f_email"),
        phone:document.querySelector("#f_phone"),
        password:document.querySelector("#f_password"),
        ssn:document.querySelector("#f_ssn")
        };

        //call the validation AFTER you create the variables.
        validateField(dom.username);  //id = is the form input field ID
        validateField(dom.email);
        validateField(dom.phone);
        validateField(dom.password);
        validateField(dom.ssn);

        //don't touch this two lines
        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){


        //username
        if (inputName.name === 'f_username'){
            var pattern =/^[a-zA-Z]+((\s|\-)[a-zA-Z]+)?$/;
        }

        //email
        else if (inputName.name === 'f_email'){
            var pattern = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
        }

        //phone
        else if (inputName.name === 'f_phone'){
            var pattern = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
        }

        //password
        else if (inputName.name === 'f_password'){
            var pattern = /^[a-zA-Z]\w{3,14}$/;
        }

        //ssn
        else if (inputName.name === 'f_ssn'){
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
        }



        var pass = pattern.test(inputName.value);//true and false . Boolean

        //don't touch from here
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



