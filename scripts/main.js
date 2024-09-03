const playButton = document.getElementById('play-button')
const paragraphs = document.querySelectorAll('p');
        let currentParagraph = 0;

        function typeWriter(element, speed = 50) {
            let text = element.textContent;
            element.textContent = ''; // Clear the text
            element.style.width = 'auto'; // Auto width for text to appear
            element.style.opacity = '1'; // Make the text visible

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
                    }
                    else{
                        displayButton();
                    }
                }
            }, speed);
        }

        function displayButton(){
            playButton.style.display='inline';
        }
        // Start the typewriter effect on the first paragraph
        typeWriter(paragraphs[currentParagraph]);
        