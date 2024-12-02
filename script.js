// Function to fetch word definition from Dictionary API
function fetchWordDefinition(word) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching word definition:", error);
      throw error;
    });
}

// Function to display word definition
function displayWordDefinition(wordData) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (wordData && wordData.length > 0) {
    const word = wordData[0].word;
    const definition = wordData[0].meanings[0].definitions[0].definition;

    const wordElement = document.createElement("h2");
    wordElement.textContent = word;

    const definitionElement = document.createElement("p");
    definitionElement.textContent = definition;

    resultDiv.appendChild(wordElement);
    resultDiv.appendChild(definitionElement);
  } else {
    resultDiv.textContent = "No definition found.";
  }
}

// Function to handle search button click
function handleSearchButtonClick() {
  const wordInput = document.getElementById("wordInput");
  const word = wordInput.value.trim();

  if (word) {
    fetchWordDefinition(word)
      .then((wordData) => displayWordDefinition(wordData))
      .catch((error) => {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = "Error fetching word definition.";
      });
  } else {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Please enter a word.";
  }
}

// Add event listener to search button
document
  .getElementById("searchButton")
  .addEventListener("click", handleSearchButtonClick);
