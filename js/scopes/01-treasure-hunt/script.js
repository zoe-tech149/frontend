const treasure = "Global treasure"; 

function explore() { 
  const treasure = "Hidden treasure"; 

  function discover() {
    console.log(treasure); 
  }

  return discover();
}

const myDiscovery = explore();

myDiscovery();