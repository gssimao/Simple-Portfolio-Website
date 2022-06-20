
$(document).ready(function() {
    $("#sendIdea").click(function() {
        var emailAddress = $("#emailAddress").val();
        var firstName = $("#firstName").val();
        var isValid = true;

        // validate the first email address
        if (emailAddress === "") {
            $("#emailAddress").next().text("This field is required.");
            isValid = false;
        }else if(CheckEmail(emailAddress)==false)
        {
            $("#emailAddress").next().text("Input a real email address.");
            isValid = false;
        }else {
            $("#emailAddress").next().text("");
        }

        if (firstName === "") {
            $("#firstName").next().text("This field is required.");
            isValid = false;
        } else {
            $("#firstName").next().text("");
        }

        if ($("#GameIdea").val() === "") {
            $("#GameIdea").next().text("Write your game idea here.");
            isValid = false;
        }
        else {
            $("#GameIdea").next().text("");
        }

        // submit the form if all entries are valid
        if (isValid) {
            $("#gameForm").submit();
        }
    }); // end click

}); // end ready

function CheckEmail(emailAddress) {
    var check = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!check.test(emailAddress)) {
        return false;
    } else {
        return true;
    }
}