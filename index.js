const inputArea = document.querySelector("#inputText");
const btnTransalte = document.querySelector("#btn");
const outputArea = document.querySelector("#outputText");

var url = "https://api.funtranslations.com/translate/klingon.json";

function getTranslationURL(text) {
  return url + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something else in database");
}
function submitHandler() {
  //   console.log("hi");
  //   outputArea.innerHTML = `welcome   ${inputArea.value}`;

  var textInput = inputArea.value;
  console.log(textInput);

  fetch(getTranslationURL(textInput))
    .then((Response) => Response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputArea.innerHTML = translatedText;
    })
    .catch(errorHandler);
}

btnTransalte.addEventListener("click", submitHandler);
