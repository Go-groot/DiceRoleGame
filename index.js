function headingChange(){
    var Player1 = imageChange1();
    var Player2 = imageChange2();

    if(Player1 > Player2){
        document.querySelector("h2").innerHTML = "Player 1 is the Winner!!";
    }else if(Player1 < Player2){
        document.querySelector("h2").innerHTML = "Player 2 is the Winner!!";
    }else {
        document.querySelector("h2").innerHTML = "You both Tied, Spin Again";
    }

    function imageChange1(){
        var dice1count = Math.floor(Math.random() * 6) + 1;
        var imgSource = "images/dice"+ dice1count +".png";
        var player1 = document.querySelector(".player1");
        player1.setAttribute("src", imgSource);

        return dice1count;
    }

    function imageChange2(){
        var dice2count = Math.floor(Math.random() * 6) + 1;
        var imgSource = "images/dice"+ dice2count +".png";
        var player2 = document.querySelector(".player2");
        player2.setAttribute("src", imgSource);

        return dice2count;
    }
}