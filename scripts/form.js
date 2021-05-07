// A $( document ).ready() block.
$( document ).ready(function() {
  
  $("#custom").hide();
  $(document).on("change", "#t-shirt", chkTshirt);
  
  function chkTshirt() {
    
    var tshirt = $("#t-shirt").val();
      //alert(tshirt); 
    
        if (tshirt == "CUSTOM") {
          //alert(tshirt);
          $("#custom").removeAttr("disabled");
          $("#custom").attr("required", true);
          $("#custom").show();
      
    }//end of this tshirt
    
    else {
        $("#custom").hide();
        $("#custom").attr("disabled", true);
        $("#custom").val("");
        $("#custom").removeAttr("required");
        
      
    } //end of else is this tshirt
    
  } //end chkTshirt function
  
  
  
  
});









// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
