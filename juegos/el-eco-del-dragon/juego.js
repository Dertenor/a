
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;

const TILE = 30;
const COLS = canvas.width / TILE;
const ROWS = canvas.height / TILE;

// Nox: posición y movimiento
const nox = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 150,
    direction: "down"
};

const keys = {};
const obstacles = [];
const scenery = [];

// Colores del bosque
const colors = {
    ground: ["#18251b", "#1b291e", "#202d21"],
    grass: "#293a25",
    tree: "#101a13",
    treeLight: "#263c25",
    trunk: "#493a27",
    stone: "#42483c",
    stoneLight: "#59604d"
};

// Generador aleatorio sencillo
let seed = 12345;

function random() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
}

// Crear el terreno
function createWorld() {
    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
            const color = colors.ground[
                Math.floor(random() * colors.ground.length)
            ];

            ctx.fillStyle = color;
            ctx.fillRect(x * TILE, y * TILE, TILE, TILE);

            // Pequeñas manchas de hierba
            if (random() > 0.72) {
                ctx.fillStyle = colors.grass;
                ctx.fillRect(
                    x * TILE + 5,
                    y * TILE + 7,
                    4,
                    3
                );
            }
        }
    }

    // Árboles
    for (let i = 0; i < 95; i++) {
        const x = Math.floor(random() * COLS);
        const y = Math.floor(random() * ROWS);

        const px = x * TILE;
        const py = y * TILE;

        // Dejar espacio alrededor de Nox
        if (
            Math.abs(px - nox.x) < 70 &&
            Math.abs(py - nox.y) < 70
        ) {
            continue;
        }

        scenery.push({
            type: "tree",
            x: px,
            y: py
        });

        obstacles.push({
            x: px + 5,
            y: py + 12,
            width: 20,
            height: 16
        });
    }

    // Ruinas antiguas
    const ruins = [
        { x: 150, y: 120 },
        { x: 180, y: 120 },
        { x: 210, y: 120 },
        { x: 150, y: 150 },
        { x: 210, y: 150 },
        { x: 150, y: 180 },
        { x: 180, y: 180 },
        { x: 210, y: 180 }
    ];

    for (const ruin of ruins) {
        scenery.push({
            type: "stone",
            x: ruin.x,
            y: ruin.y
        });

        obstacles.push({
            x: ruin.x,
            y: ruin.y,
            width: TILE,
            height: TILE
        });
    }
}

// Dibujar árboles
function drawTree(x, y) {
    // Sombra
    ctx.fillStyle = "#0b110d";
    ctx.fillRect(x + 2, y + 20, 26, 8);

    // Tronco
    ctx.fillStyle = colors.trunk;
    ctx.fillRect(x + 12, y + 15, 7, 15);

    // Copa
    ctx.fillStyle = colors.tree;
    ctx.fillRect(x + 3, y + 5, 24, 20);
    ctx.fillRect(x + 7, y, 16, 28);
    ctx.fillRect(x, y + 10, 30, 12);

    // Luz de las hojas
    ctx.fillStyle = colors.treeLight;
    ctx.fillRect(x + 7, y + 6, 6, 5);
    ctx.fillRect(x + 17, y + 11, 5, 4);
}

// Dibujar ruinas
function drawStone(x, y) {
    ctx.fillStyle = colors.stone;
    ctx.fillRect(x + 2, y + 4, 26, 24);

    ctx.fillStyle = colors.stoneLight;
    ctx.fillRect(x + 5, y + 6, 8, 4);
    ctx.fillRect(x + 17, y + 15, 7, 3);

    ctx.fillStyle = "#252c24";
    ctx.fillRect(x + 13, y + 10, 4, 12);
}

// Dibujar a Nox
function drawNox() {
    const x = Math.round(nox.x);
    const y = Math.round(nox.y);

    // Sombra
    ctx.fillStyle = "#0b100c";
    ctx.fillRect(x - 16, y + 9, 34, 8);

    // Cola
    ctx.fillStyle = "#080d12";
    ctx.fillRect(x - 19, y - 2, 8, 7);
    ctx.fillRect(x - 24, y - 6, 7, 7);

    // Cuerpo
    ctx.fillStyle = "#080d12";
    ctx.fillRect(x - 12, y - 8, 25, 18);

    // Patas
    ctx.fillRect(x - 10, y + 5, 6, 9);
    ctx.fillRect(x + 6, y + 5, 6, 9);
    ctx.fillRect(x - 10, y - 12, 6, 7);
    ctx.fillRect(x + 6, y - 12, 6, 7);

    // Alas plegadas
    ctx.fillStyle = "#111b25";
    ctx.fillRect(x - 7, y - 7, 10, 11);
    ctx.fillRect(x - 3, y - 11, 8, 8);

    // Cabeza
    ctx.fillStyle = "#080d12";
    ctx.fillRect(x + 7, y - 11, 15, 14);
    ctx.fillRect(x + 15, y - 6, 10, 8);

    // Cuernos
    ctx.fillStyle = "#424b4b";
    ctx.fillRect(x + 9, y - 17, 4, 8);
    ctx.fillRect(x + 18, y - 16, 4, 7);

    // Ojo verde
    ctx.fillStyle = "#8bff55";
    ctx.fillRect(x + 18, y - 8, 4, 4);

    // Brillo del ojo
    ctx.fillStyle = "#d9ffb0";
    ctx.fillRect(x + 19, y - 8, 2, 2);
}

// Comprobar colisiones
function collides(x, y) {
    const size = 12;

    for (const obstacle of obstacles) {
        if (
            x + size > obstacle.x &&
            x - size < obstacle.x + obstacle.width &&
            y + size > obstacle.y &&
            y - size < obstacle.y + obstacle.height
        ) {
            return true;
        }
    }

    return false;
}

// Dibujar el mundo
function drawWorld() {
    createWorld();

    for (const object of scenery) {
        if (object.type === "tree") {
            drawTree(object.x, object.y);
        } else {
            drawStone(object.x, object.y);
        }
    }
}

// Movimiento de Nox
function update(deltaTime) {
    let dx = 0;
    let dy = 0;

    if (keys["ArrowUp"] || keys["w"]) dy -= 1;
    if (keys["ArrowDown"] || keys["s"]) dy += 1;
    if (keys["ArrowLeft"] || keys["a"]) dx -= 1;
    if (keys["ArrowRight"] || keys["d"]) dx += 1;

    // Normalizar movimiento diagonal
    if (dx !== 0 && dy !== 0) {
        dx *= 0.7071;
        dy *= 0.7071;
    }

    const nextX = nox.x + dx * nox.speed * deltaTime;
    const nextY = nox.y + dy * nox.speed * deltaTime;

    if (dx < 0) nox.direction = "left";
    if (dx > 0) nox.direction = "right";
    if (dy < 0) nox.direction = "up";
    if (dy > 0) nox.direction = "down";

    if (!collides(nextX, nox.y)) {
        nox.x = nextX;
    }

    if (!collides(nox.x, nextY)) {
        nox.y = nextY;
    }

    // Límites del escenario
    nox.x = Math.max(15, Math.min(canvas.width - 15, nox.x));
    nox.y = Math.max(15, Math.min(canvas.height - 15, nox.y));
}

// Controles de teclado
window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (
        key.startsWith("arrow") ||
        key === "w" ||
        key === "a" ||
        key === "s" ||
        key === "d"
    ) {
        event.preventDefault();
    }

    keys[key] = true;
});

window.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
});

// Bucle principal
let lastTime = 0;

function gameLoop(time) {
    const deltaTime = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;

    update(deltaTime);

    // Dibujar el escenario
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const object of scenery) {
        if (object.type === "tree") {
            drawTree(object.x, object.y);
        } else {
            drawStone(object.x, object.y);
        }
    }

    drawNox();

    requestAnimationFrame(gameLoop);
}

// Iniciar
drawWorld();
requestAnimationFrame(gameLoop);
