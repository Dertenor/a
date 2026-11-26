
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;

const WORLD = { width: 1800, height: 1200 };
const player = {
    x: 900,
    y: 600,
    speed: 190,
    size: 18
};

const camera = { x: 0, y: 0 };
const keys = {};
let lastTime = 0;
let collected = 0;
let gameWon = false;
let gameStarted = false;

const trees = [];
const stones = [];
const flames = [];
const obstacles = [];

const shrine = { x: 1550, y: 950, size: 55 };

// Generador aleatorio
let seed = 92831;

function random() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
}

// Crear el mundo
function createWorld() {
    // Árboles
    for (let i = 0; i < 100; i++) {
        const x = 40 + random() * (WORLD.width - 80);
        const y = 40 + random() * (WORLD.height - 80);

        if (Math.hypot(x - player.x, y - player.y) < 130) continue;
        if (Math.hypot(x - shrine.x, y - shrine.y) < 100) continue;

        trees.push({ x, y, size: 30 + random() * 12 });
        obstacles.push({
            x: x - 12,
            y: y - 5,
            width: 24,
            height: 22
        });
    }

    // Ruinas
    const ruins = [
        [350, 300], [390, 300], [430, 300],
        [350, 340], [430, 340],
        [350, 380], [390, 380], [430, 380],
        [1200, 250], [1240, 250],
        [1200, 290], [1240, 290]
    ];

    for (const [x, y] of ruins) {
        stones.push({ x, y });
        obstacles.push({ x, y, width: 30, height: 30 });
    }

    // Cinco llamas
    const flamePositions = [
        [300, 180],
        [700, 250],
        [1400, 400],
        [500, 850],
        [1250, 850]
    ];

    for (const [x, y] of flamePositions) {
        flames.push({ x, y, collected: false });
    }
}

function drawGround() {
    ctx.fillStyle = "#19261b";
    ctx.fillRect(0, 0, WORLD.width, WORLD.height);

    // Textura del terreno
    for (let y = 0; y < WORLD.height; y += 30) {
        for (let x = 0; x < WORLD.width; x += 30) {
            if ((x * 7 + y * 13) % 5 === 0) {
                ctx.fillStyle = "#203022";
                ctx.fillRect(x + 8, y + 10, 4, 3);
            }
        }
    }

    // Caminos
    ctx.fillStyle = "#303329";
    ctx.fillRect(850, 0, 90, WORLD.height);
    ctx.fillRect(850, 900, 750, 70);
}

function drawTree(tree) {
    const { x, y, size } = tree;

    ctx.fillStyle = "#10160f";
    ctx.fillRect(x - 16, y + 5, 32, 18);

    ctx.fillStyle = "#493b27";
    ctx.fillRect(x - 5, y - 2, 10, 24);

    ctx.fillStyle = "#101c13";
    ctx.fillRect(x - size / 2, y - size, size, size);
    ctx.fillRect(x - size / 2 - 5, y - size / 2, size + 10, 12);

    ctx.fillStyle = "#2a4028";
    ctx.fillRect(x - 10, y - size + 8, 9, 8);
    ctx.fillRect(x + 5, y - size / 2, 7, 5);
}

function drawStone(stone) {
    ctx.fillStyle = "#41483b";
    ctx.fillRect(stone.x, stone.y, 30, 30);

    ctx.fillStyle = "#69705b";
    ctx.fillRect(stone.x + 4, stone.y + 4, 10, 5);

    ctx.fillStyle = "#292f28";
    ctx.fillRect(stone.x + 15, stone.y + 15, 8, 4);
}

function drawFlame(flame) {
    if (flame.collected) return;

    const pulse = Math.sin(performance.now() / 180) * 3;

    ctx.fillStyle = "#59421d";
    ctx.fillRect(flame.x - 7, flame.y + 8, 14, 5);

    ctx.fillStyle = "#e6a832";
    ctx.fillRect(flame.x - 5, flame.y - 5 - pulse, 10, 15);

    ctx.fillStyle = "#fff0a0";
    ctx.fillRect(flame.x - 2, flame.y - 3 - pulse, 4, 9);

    ctx.fillStyle = "#9aff69";
    ctx.fillRect(flame.x - 2, flame.y + 12, 4, 3);
}

function drawShrine() {
    const active = collected === flames.length;

    ctx.fillStyle = "#30392e";
    ctx.fillRect(shrine.x - 40, shrine.y - 35, 80, 70);

    ctx.fillStyle = "#68745b";
    ctx.fillRect(shrine.x - 35, shrine.y - 35, 70, 8);

    ctx.fillStyle = active ? "#9aff69" : "#252c25";
    ctx.fillRect(shrine.x - 15, shrine.y - 20, 30, 40);

    ctx.fillStyle = active ? "#d9ffad" : "#454b40";
    ctx.fillRect(shrine.x - 7, shrine.y - 12, 14, 24);
}

function drawNox() {
    const x = Math.round(player.x);
    const y = Math.round(player.y);

    // Sombra
    ctx.fillStyle = "#080d0b";
    ctx.fillRect(x - 15, y + 9, 30, 7);

    // Cola
    ctx.fillStyle = "#080d12";
    ctx.fillRect(x - 19, y - 3, 9, 7);
    ctx.fillRect(x - 25, y - 7, 8, 7);

    // Cuerpo
    ctx.fillStyle = "#080d12";
    ctx.fillRect(x - 12, y - 9, 25, 19);

    // Patas
    ctx.fillRect(x - 10, y + 5, 6, 10);
    ctx.fillRect(x + 6, y + 5, 6, 10);
    ctx.fillRect(x - 10, y - 13, 6, 8);
    ctx.fillRect(x + 6, y - 13, 6, 8);

    // Alas
    ctx.fillStyle = "#18232a";
    ctx.fillRect(x - 7, y - 7, 11, 12);

    // Cabeza
    ctx.fillStyle = "#080d12";
    ctx.fillRect(x + 7, y - 12, 16, 14);
    ctx.fillRect(x + 17, y - 7, 9, 8);

    // Cuernos
    ctx.fillStyle = "#56605b";
    ctx.fillRect(x + 9, y - 18, 4, 8);
    ctx.fillRect(x + 18, y - 17, 4, 8);

    // Ojo
    ctx.fillStyle = "#8bff55";
    ctx.fillRect(x + 19, y - 9, 4, 4);
}

function collides(x, y) {
    const r = player.size / 2;

    if (
        x - r < 0 || y - r < 0 ||
        x + r > WORLD.width ||
        y + r > WORLD.height
    ) return true;

    for (const o of obstacles) {
        if (
            x + r > o.x &&
            x - r < o.x + o.width &&
            y + r > o.y &&
            y - r < o.y + o.height
        ) return true;
    }

    return false;
}

function update(dt) {
    if (gameWon) return;

    let dx = 0;
    let dy = 0;

    if (keys["w"] || keys["arrowup"]) dy--;
    if (keys["s"] || keys["arrowdown"]) dy++;
    if (keys["a"] || keys["arrowleft"]) dx--;
    if (keys["d"] || keys["arrowright"]) dx++;

    if (dx && dy) {
        dx *= Math.SQRT1_2;
        dy *= Math.SQRT1_2;
    }

    const nextX = player.x + dx * player.speed * dt;
    const nextY = player.y + dy * player.speed * dt;

    if (!collides(nextX, player.y)) player.x = nextX;
    if (!collides(player.x, nextY)) player.y = nextY;

    // Recoger llamas
    for (const flame of flames) {
        if (
            !flame.collected &&
            Math.hypot(player.x - flame.x, player.y - flame.y) < 27
        ) {
            flame.collected = true;
            collected++;
        }
    }

    // Activar santuario
    if (
        collected === flames.length &&
        Math.hypot(player.x - shrine.x, player.y - shrine.y) < 48
    ) {
        gameWon = true;
    }

    // Cámara
    camera.x = Math.max(0, Math.min(
        WORLD.width - canvas.width,
        player.x - canvas.width / 2
    ));

    camera.y = Math.max(0, Math.min(
        WORLD.height - canvas.height,
        player.y - canvas.height / 2
    ));
}

function drawHUD() {
    ctx.fillStyle = "rgba(5, 10, 7, 0.85)";
    ctx.fillRect(15, 15, 260, 62);

    ctx.fillStyle = "#b8d69a";
    ctx.font = "bold 17px monospace";
    ctx.fillText("EL BOSQUE DE LOS OLVIDADOS", 25, 38);

    ctx.fillStyle = "#f1d78b";
    ctx.font = "15px monospace";
    ctx.fillText(`Llamas antiguas: ${collected}/5`, 25, 62);

    ctx.fillStyle = "#d5d9c8";
    ctx.font = "13px monospace";

    ctx.fillText(
        collected === 5
            ? "¡Ve al santuario!"
            : "Encuentra las cinco llamas",
        20,
        canvas.height - 20
    );
}

function drawVictory() {
    ctx.fillStyle = "rgba(4, 9, 6, 0.88)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.textAlign = "center";

    ctx.fillStyle = "#b9ed8b";
    ctx.font = "bold 36px monospace";
    ctx.fillText("¡EL SANTUARIO HA DESPERTADO!", canvas.width / 2, 210);

    ctx.fillStyle = "#e4e4d1";
    ctx.font = "19px monospace";
    ctx.fillText("Nox ha recuperado las cinco llamas antiguas.", canvas.width / 2, 270);

    ctx.fillStyle = "#eacb78";
    ctx.fillText("El eco del dragón vuelve a escucharse...", canvas.width / 2, 315);

    ctx.fillStyle = "#b9ed8b";
    ctx.font = "17px monospace";
    ctx.fillText("Pulsa ENTER para volver a jugar", canvas.width / 2, 390);

    ctx.textAlign = "left";
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(-Math.floor(camera.x), -Math.floor(camera.y));

    drawGround();

    for (const stone of stones) drawStone(stone);
    for (const tree of trees) drawTree(tree);
    for (const flame of flames) drawFlame(flame);

    drawShrine();
    drawNox();

    ctx.restore();

    drawHUD();

    if (gameWon) drawVictory();
}

function restart() {
    player.x = 900;
    player.y = 600;

    collected = 0;
    gameWon = false;

    for (const flame of flames) {
        flame.collected = false;
    }

    camera.x = 0;
    camera.y = 0;
}

window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (
        ["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(key)
    ) event.preventDefault();

    keys[key] = true;

    if (gameWon && key === "enter") restart();
});

window.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
});

function gameLoop(time) {
    const dt = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;

    update(dt);
    draw();

    requestAnimationFrame(gameLoop);
}

createWorld();
requestAnimationFrame(gameLoop);
