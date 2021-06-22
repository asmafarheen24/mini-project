function login()
{
    var email=document.getElementsByClassName("form-control") [0].value
    var password=document.getElementsByClassName("form-control") [1].value
    console.log(email,password)
    $.ajax({
        url: '/api/login',
        method: 'POST',
        data: {
            email:email,
            password:password
        },
        
        success: function ( result )
        {
            console.log(result)
           console.log(result[0].username)
           //localStorage.userdetails=result
           localStorage.setItem("username", result[0].username);
           localStorage.setItem("userid", result[0]._id);
           window.location.href="/main"
        },
        error: function ( error )
        {
            
        }
    } );

}