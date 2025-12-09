  
        // --- 1. Select DOM Elements ---
        const cssOutput = document.getElementById("output-text");
        const color1 = document.getElementById("color1");
        const color2 = document.getElementById("color2");
        const direction = document.getElementById("direction");
        const body = document.getElementById("gradient-bg");
        const randomBtn = document.getElementById("random-btn");
        const copyBtn = document.getElementById("copy-btn");
        const message = document.getElementById("message");

        // --- 2. Main Function to Set Gradient ---
        function setGradient() {
            // Build the gradient string
            const gradientString = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
            
            // Apply to body
            body.style.background = gradientString;
            
            // Display text
            cssOutput.textContent = gradientString + ";";
        }

        // --- 3. Helper: Generate Random Hex Color ---
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // --- 4. Randomize Function ---
        function randomizeColors() {
            const randomColor1 = getRandomColor();
            const randomColor2 = getRandomColor();

            // Update inputs
            color1.value = randomColor1;
            color2.value = randomColor2;

            // Update background
            setGradient();
        }

        // --- 5. Copy to Clipboard Function ---
        function copyToClipboard() {
            const textToCopy = cssOutput.textContent;
            
            // Use Clipboard API
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show success message
                message.classList.add('show');
                setTimeout(() => {
                    message.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert("Could not copy to clipboard automatically.");
            });
        }

        // --- 6. Event Listeners ---
        // Update on input (drag) or change (release)
        color1.addEventListener("input", setGradient);
        color2.addEventListener("input", setGradient);
        
        // Update when direction changes
        direction.addEventListener("change", setGradient);

        // Buttons
        randomBtn.addEventListener("click", randomizeColors);
        copyBtn.addEventListener("click", copyToClipboard);

        // Initialize on load
        setGradient();

    