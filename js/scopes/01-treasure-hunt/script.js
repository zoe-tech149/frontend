const treasure = "Global treasure"; // SHADOWED

function explore() { 
  const treasure = "Hidden treasure"; // SHADOWED

  function discover() {
    const treasure = "Secret treasure"; // FOUND FIRST

    console.log(treasure); // Secrete treasure
  }
  discover();
}

explore();