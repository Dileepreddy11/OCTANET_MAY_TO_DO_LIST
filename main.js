function change() {
    var checkboxes = document.querySelectorAll('.com');
    var allChecked = true;
    checkboxes.forEach(function(checkbox) {
        if (!checkbox.checked) {
            allChecked = false;
        }
    });
    if (allChecked) {
        document.getElementById("done").style.display = "block";
    }
   }