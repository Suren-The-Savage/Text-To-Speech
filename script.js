let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");
let textarea = document.querySelector("textarea");
let button = document.querySelector("button");

function loadVoices(){
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";

    voices.forEach((voice, i)=>{
        voiceSelect.options[i] = new Option(voice.name, i);
    });

    speech.voice = voices[0];
}

speechSynthesis.onvoiceschanged = loadVoices;

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", ()=>{

    let text = textarea.value.trim();

    if(text === "") return;

    speech.text = text;

    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
});