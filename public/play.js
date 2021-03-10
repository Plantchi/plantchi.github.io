function getProgress(needs_bar) {
    return document.getElementById(needs_bar).getAttribute("aria-valuenow");
    return document.getElementById(needs_bar).getAttribute("style", "width");
    return document.getElementById(needs_bar).innerHTML;
  }
  function setProgress(needs_bar, value) {
    document.getElementById(needs_bar).setAttribute("aria-valuenow", value);
    document.getElementById(needs_bar).setAttribute("style", "width: " + value + "%");
    // document.getElementById(needs_bar).innerHTML = (value+ "%"); 
  }
  //how we incremement will need to be different for every plant
  function increment(needs_bar) {
    let i = getProgress(needs_bar);
    if (i >= 100) return;
    else {
      i++;  //its treating this like a string, but when ++i it works?? 
      i++;
      i++;
      i++;
      i++;
      setProgress(needs_bar, i);
    }
    //decrementThirst();
  }
  function decrement(needs_bar) {
    let i = getProgress(needs_bar);
    if (i >= 100) return;
    else {
      i--;  //its treating this like a string, but when ++i it works?? 
      i--;
      i--;
      i--;
      i--;
      setProgress(needs_bar, i);
    }
  }