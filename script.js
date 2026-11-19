let username= prompt("type username");
let password= prompt("type your password");
if (username == "wahab" && password ==="22"){
    alert("correct pin");
}else{
    alert("incorrect pin");
};

let choice = +prompt(
  "Welcome to JS ATM 💳\n\n" +
  "1️⃣ Check Balance\n" +
  "2️⃣ Withdraw\n" +
  "3️⃣ Deposit\n" +
  "4️⃣ Exit\n\n" +
  "Enter your choice (1-4):"
);
switch (choice) {
    case 1:
        alert("you have 1000 rupees")
        break; 
        case 2:
            let withdraw= +prompt("how much")
            if(withdraw>1000){
                alert ("unsufficient fund")
            }else{
                alert(1000-=wthdraw)
            }  
    default:
        alert ("thanks")
        break;
}