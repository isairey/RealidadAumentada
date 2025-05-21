const container = document.getElementById('container');
const quoteElement = document.getElementById('motivational-quote');

// Lista de frases motivacionales
const quotes = [
    "¡Puedes lograr todo lo que te propongas!",
    "Nunca te rindas, los grandes logros llevan tiempo.",
    "La perseverancia es la clave del éxito.",
    "Confía en ti mismo, eres capaz de grandes cosas.",
    "Cada día es una nueva oportunidad para mejorar."
];

// Selecciona una frase aleatoria
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteElement.innerText = randomQuote;

// Configuración Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Añadir luces
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5).normalize();
scene.add(directionalLight);

const loader = new THREE.GLTFLoader();
loader.load('./scene.gltf', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    model.position.set(0, -1, -5);
    model.scale.set(2, 2, 2);

    function animate() {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01; // Rotación continua del modelo
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function (error) {
    console.error(error);
});

camera.position.z = 5;

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
