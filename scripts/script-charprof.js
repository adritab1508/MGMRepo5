const paragraphs = document.querySelectorAll('.typewriter p');
const intbtn = document.getElementsByClassName('intButton');
let currentParagraph = 0;

    function displayButton() {
        for(let i = 0; i<intbtn.length; i++){
            intbtn[i].style.display = 'inline';
        }
    }


        function typeWriter(element, speed = 50) {
            let text = element.textContent;
            element.textContent = '';
            element.style.opacity = '1';

            let i = 0;
            let interval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    element.classList.add('done');
                    currentParagraph++;
                    if (currentParagraph < paragraphs.length) {
                        setTimeout(() => typeWriter(paragraphs[currentParagraph]), 500);
                    } else {
                        displayButton();
                    }
                }
            }, speed);
        }
        typeWriter(paragraphs[currentParagraph]);