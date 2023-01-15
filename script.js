var num;
var click = 0;
var highscore = 0;
var score = 0;
var arr2 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var gen = Math.floor(Math.random() * 20);
console.log(gen);
//main function
function check() {
    click +=1;
    num = document.getElementById("number").value;
    console.log(num);
    if (num == gen) {
        score = arr2[click];
        document.getElementById("score-value").innerHTML = score;
        
    }
    else if (gen - num > 3 || num - gen > 3) {
        console.log("here");
        document.getElementById("display-too-low").style.backgroundColor = "blue";
    }
     if (highscore < score) {
        highscore = score;
        document.getElementById("highscore-value").innerHTML = score;
    }

}
function reset(){
    var gen = Math.floor(Math.random() * 20);
    console.log(gen);
    click = 0;
    document.getElementById("display-too-low").style.backgroundColor = "white";
    document.getElementById("score-value").innerHTML = 0;
    document.getElementById("highscore-value").innerHTML = 0;
}
