function showDescription(descript){
    $("#description").html("Description: "+ descript)
}

function hideDescription(){
    $("#description").html("")
}

function validate(){
    var birthday=$("#birthday").val();
    var d =new Date(birthday);
    if (d>= new Date()) {
        alert("Date of birth is not valid. Date has to be before today.");
        return false;
    }
}



