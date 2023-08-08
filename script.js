var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("btn");

        function register(){
            x.style.left = "-485px";
            y.style.left = "85px";
            z.style.left = "110px";
        }

        function login(){
            x.style.left = "85px";
            y.style.left = "485px";
            z.style.left = "0px";
        }

        function hrefFunction(){
                windows.location.href = "index.html";
            }
