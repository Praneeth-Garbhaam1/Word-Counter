const input = document.querySelector("textarea");
const words = document.querySelector('#words span');
const characters = document.querySelector("#characters span");
const sentence = document.querySelector("#sentences span");
const paragraphs = document.querySelector("#paragraphs span");

input.addEventListener('input', function() {
    if(input.value){
        //Count Words
        const wordsarr = input.value.split(" ").filter((word) => word !== '')
        words.innerText = wordsarr.length;
        //Count Characters
        characters.innerText = input.value.length;
        //Count sentence
        const sentarr = input.value.split(/[.!]/);
        sentence.innerText = sentarr.length - 1;
        //Count Paragraph
        const paragraphArray = input.value.split("\n").filter((p) => p.trim() !== '');
        paragraphs.innerText = paragraphArray.length
    }else{
        words.innerText =
        characters.innerText =
        sentence.innerText =
        paragraphs.innerText = 0;
    }
})

