var feet = document.getElementById("feet");
var inches = document.getElementById("inches");

feet.addEventListener("input", function(){
    var f = this.value;
    var i = f * 12;
    inches.value = i;
});

inches.addEventListener("input", function(){
    var i = this.value;
    var f = i / 12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
});