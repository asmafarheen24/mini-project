
function data()
{
    var height=document.getElementsByClassName("height")[0].value;
    var weight=document.getElementsByClassName("height")[1].value;
    
    console.log(height,weight)
    console.log(result[0].height)
    $.ajax({
        url: '/personal-details',
        method: 'POST',
        data: {
            height:height,
            weight:weight
        },
        
        success: function ( result )
        {
            console.log(result)
           console.log(result[0].height)
           //localStorage.userdetails=result
           localStorage.setItem("height", result[0].height);
           localStorage.setItem("weight", result[1].weight);
           //localStorage.setItem("userid", result[0]._id);
           window.location.href="/main"
        },
        error: function ( error )
        {
            
        }
    })
}
//     console.log(height);
//     console.log(weight);
//     height=height/100;
//     console.log(height);
//     var bm=weight/Math.pow(height,2);
//     console.log(bm);
//     var status;
//     if(document.getElementById("veg").checked==true)
//     {
//         status="veg";
//     }
//     else if(document.getElementById("nonveg").checked==true)
//     {
//         status="nonveg";
//     }
//     else if(document.getElementById("egg").checked==true)
//     {
//         status="egg";
//     }
//     console.log(status)
//     var food;
//     if(bm<18.5 )
//     {
//         food="Under-weight";

//     }
//     else if(bm>=18.5 && bm<=24.9)
//     {
//         food="Healthy";
//     }
//     else{
//         food="Over-weight";
//     }
//     console.log(food);
    
//     window.location.href="/login";

// }
//   function diet(var food, var status){

    
//     if(food=="Over-weight")
//     {
//         if(status=="veg")
//         {
          
//         }
//         else if(status=="nonveg")
//         {

//         }
//         else 
//         {

//         }
        
//     }
//     else  if(food=="Under-weight")
//     {
//         if(status=="veg")
//         {

//         }
//         else if(status=="nonveg")
//         {

//         }
//         else 
//         {

//         }
        
//     }
//     else if(food=="Healthy")
//     {
//         if(status=="veg")
//         {
//             console.log("successveg") 
            
//         }
//         else if(status=="nonveg")
//         {
//             console.log("success")  
//             window.location.href="/login";
           
//               }
        
//         else 
//         {
            
//         }
//     }
//}


