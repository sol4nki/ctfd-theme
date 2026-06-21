const bg = document.getElementById("ascii-bg");

const chars =
" .,:;i1tfLCG08@#";

function generateAscii() {

    const cols = Math.floor(window.innerWidth / 10);
    const rows = Math.floor(window.innerHeight / 18);
document.addEventListener('DOMContentLoaded', () => {
    // footer year, same as the original `new Date().getFullYear()`
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // boot sequence: same loading -> fade-in app-container pattern as the original site
    const loading = document.getElementById('loading');
    const app = document.getElementById('appContainer');

    window.setTimeout(() => {
        loading.classList.add('hidden');
        app.classList.remove('hidden');
    }, 350);
});
    let out = "";

    for(let y=0;y<rows;y++){

        for(let x=0;x<cols;x++){

            const wave =
                Math.sin(x * 0.15) +
                Math.cos(y * 0.20);

            const index =
                Math.floor(
                    ((wave + 2) / 4)
                    * (chars.length - 1)
                );

            out += chars[index];
        }

        out += "\n";
    }

    bg.textContent = out;
}

generateAscii();
window.addEventListener("resize", generateAscii);

/* moving highlight streak */

let offset = 0;

setInterval(() => {

    offset += 2;

    const lines = bg.textContent.split("\n");

    for(let y=0;y<lines.length;y++){

        const x =
            (offset + y * 2)
            % lines[y].length;

        const arr = lines[y].split("");

        if(arr[x])
            arr[x] = "@";

        lines[y] = arr.join("");
    }

    bg.textContent = lines.join("\n");

}, 70);