const treasure = "Global treasure"; 

function explore() { 
  const treasure = "Hidden treasure"; 

  function discover() {
    const gold = "Secret gold"; 

    console.log(treasure); // Hidden treasure
  }
  discover();
}

explore();