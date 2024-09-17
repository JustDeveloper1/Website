var content = document.getElementById('content');
var inputSequence = '';
var targetSequence = 'github';
var div1; // Declare div1 in a broader scope

if (content) {
    document.addEventListener('keypress', function(event) {
        inputSequence += event.key;

        // Check if the input sequence matches the target sequence
        if (inputSequence === targetSequence) {
            // Create the div only if it doesn't already exist
            if (!div1) {
                div1 = document.createElement("div");
                var img1 = document.createElement("img");
                var img2 = document.createElement("img");
                div1.id = 'github-stats-img';
                img1.style['z-index'] = 3;
                img2.style['z-index'] = 3;
                img1.style.position = 'fixed';
                img2.style.position = 'fixed';
                img1.style.top = '0';
                img2.style.top = '0';
                img1.style.left = '0';
                img2.style.right = '0';
                img1.style.opacity = 0.5;
                img2.style.opacity = 0.5;
                img1.src = "https://github-readme-stats.vercel.app/api?username=JustDeveloper1&show_icons=true&theme=dark";
                img2.src = "https://github-readme-stats.vercel.app/api/top-langs/?username=JustDeveloper1&layout=compact&theme=dark";
                div1.appendChild(img1);
                div1.appendChild(img2);
                content.appendChild(div1);
            }
            inputSequence = ''; // Reset the input sequence after displaying images
        } else if (!targetSequence.startsWith(inputSequence)) {
            inputSequence = ''; // Reset if the sequence is broken
        }

        // Remove the div if any key is pressed after typing "github"
        if (div1 && inputSequence.length > 0) {
            content.removeChild(div1);
            div1 = null;
        }
    });
} else {
    console.error("Element with ID 'content' not found.");
}
