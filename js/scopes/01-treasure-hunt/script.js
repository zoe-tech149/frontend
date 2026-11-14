const treasure = "Global treasure";

function explore() {
  const treasure = "Hidden treasure";

  function discover() {
    console.log(treasure); // Hidden treasure
  }
  discover();
}

explore();