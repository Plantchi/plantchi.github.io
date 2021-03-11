/* 
note that the rate of decrements is different for each plant, causing different challenges. They each also have at least one need inversely related to the other.
For example, when "sun" is incrememented for the tree, the drink decrements in tandom. 
*/ 



function getProgress(needs_bar) {
    return document.getElementById(needs_bar).getAttribute("aria-valuenow");
    return document.getElementById(needs_bar).getAttribute("style", "width");
  }
  function setProgress(needs_bar, value) {
    document.getElementById(needs_bar).setAttribute("aria-valuenow", value);
    document.getElementById(needs_bar).setAttribute("style", "width: " + value + "%");
  }
 
  function increment(needs_bar) {
    let i = getProgress(needs_bar);
    if (i >= 100 || i <= 5) return;
    else {
      i++;  //its treating this like a string, but when ++i it works?? 
      i++;
      i++;
      i++;
      i++;
      setProgress(needs_bar, i);
    }
  }
  
  function decrement(needs_bar) {
    let i = getProgress(needs_bar);
    if (i >= 100 || i <= 5) return;
    else {
      i--;  //its treating this like a string, but when ++i it works?? 
      i--;
      i--;
      i--;
      i--;
      setProgress(needs_bar, i);
    }
  }
  
  function checkLoss(needs_bar) {
    let current_loss = getProgress(needs_bar);
    console.log("loss at: " + current_loss);

     if(current_loss <= 5)
     {
      var currentLocation = window.location.hostname;
      console.log("current location: " + currentLocation );
      if(currentLocation == "localhost"){
       window.location.assign("http://localhost:3000/gameover") ;
      }
      else {
       window.location.assign("https://plantchi.herokuapp.com/gameover");
      }
     }
       
  }
  
  