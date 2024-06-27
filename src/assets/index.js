
//======================================Password Hide show===============================================
function passwordSH() {
    var x = document.getElementById("passwordIn");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  // ==========================================Message from User component======================================
  // Get the modal
  var modal = document.getElementById('id01');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  // =======================================================Product search============================================
  