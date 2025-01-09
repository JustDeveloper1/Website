/*

MIT License

Copyright (c) 2024-2025 JustDeveloper <https://justdeveloper.is-a.dev/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;

function tick() {
    var time = Date.now();
    var removed = 0;
    frame++;
    if (time - startTime > 1000) {
        fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1) + ' FPS';
        if ((frame / ((time - startTime) / 1000)).toFixed(0) < 20) {
            if (removed > 2) {
                document.getElementById("bg-effect").style.display = "none";
            }
            document.getElementById("content").style["pointer-events"] = "none"
            document.getElementById("fps").style.color = "rgb(255, 0, 0)";
            document.getElementById("fps").style.opacity = "100%";
            document.getElementById("fps").style["font-weight"] = "bold";
            removed++;
            setTimeout(() => {
                document.getElementById("content").style["pointer-events"] = "all";
                document.getElementById("fps").style.color = "rgb(255, 255, 255)";
                document.getElementById("fps").style.opacity = "75%";
                document.getElementById("fps").style["font-weight"] = "regular"
            }, 3000);
        }
        startTime = time;
        frame = 0;
    }
    window.requestAnimationFrame(tick);
}
tick();




var something;

function activate() {
    something = setTimeout(showPage, 2500);
};

function showPage() {
    document.getElementById("content").style.display = "block";
    document.getElementById("fps").style.display = "block";
    document.getElementById("loader").style.opacity = 0;
    otherthng = setTimeout(showPage02, 500);
};

function showPage02() {
    document.getElementById("loaderbg").style.opacity = 0;
    otherthng = setTimeout(activatePage, 500);
};

function activatePage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderbg").style.display = "none";
    document.getElementById("loader").style["z-index"] = -5;
    document.getElementById("loaderbg").style["z-index"] = -5;
    document.getElementById("loader").remove()
    document.getElementById("loaderbg").remove()
};

activate();

function clickHandler() {
    window.handler = self;
    window.close();
};

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function launchConfetti() {
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: {
            y: 1
        },
    });
}
const buttonIDs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
buttonIDs.forEach(buttonId => {document.getElementById(`cbtn${buttonId}`).addEventListener('click', launchConfetti);});

const tips = [
    "Tip: Click on any language!",
    "Pssst! Try to click on any language!",
    "Click on any language!",
    'Type "github"!',
    'Tip: Try to type "github"!',
    "Hey there! Reload the page to see here another random message!",
    `Please <a href="https://github.com/JustDeveloper1/Website" style="text-decoration: underline;">star</a> this website's github repo!`,
    `Hands up! Please <a href="https://github.com/JustDeveloper1/Website" style="text-decoration: underline;">star</a> this website's github repo!`,
    "console.log('Hello, JavaScript!')",
    'print("Hello, Lua!")',
    "Please visit https://juststudio.is-a.dev/",
    //"Please visit https://codeshare.js.org/",
    "Did you know? This is a random message! Reload the page to see another one!"
];
const tipid = Math.floor(Math.random() * tips.length);
document.getElementById('tip').innerHTML = tips[tipid];

if (!window.chrome) {
    document.getElementById("skills").style.display = "none";
    document.getElementById("langs").style.width = "100%";
    document.getElementById("langs").style["border-width"] = "0px";
}

const currentYear = new Date().getFullYear();
const copyrightText = document.querySelector('.home-text41');
copyrightText.innerHTML = `<span>© 2024-${currentYear} JustDeveloper</span><br>`;

fetch('https://api.lanyard.rest/1117482901353812088.png')
    .then(response => {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('Network response was not ok.');
    })
    .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        document.querySelector('.home-avatar').src = imageObjectURL;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
