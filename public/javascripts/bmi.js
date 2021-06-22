function data()
{
    var height=document.getElementById("height").value;
    var weight=document.getElementById("weight").value;
    console.log(height);
    console.log(weight);
    height=height/100;
    console.log(height);
    var bm=weight/Math.pow(height,2);
    console.log(bm);
    var status;
    if(document.getElementById("veg").checked==true)
    {
        status="veg";
    }
    else if(document.getElementById("nonveg").checked==true)
    {
        status="nonveg";
    }
    else if(document.getElementById("egg").checked==true)
    {
        status="egg";
    }
    console.log(status);
    if(bm<18.5 )
    {
        console.log("Under-weight")

    }
    else if(bm>=18.5 && bm<=24.9)
    {
        console.log("Healthy");
    }
    else{
        console.log("Over-weight")
    }
}
