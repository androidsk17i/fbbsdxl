const cameras = [
    "Canon EOS R5, 85mm f/1.8",
    "Nikon Z9, 50mm f/2.8",
    "Sony A7R IV, 70mm f/2.0",
    "Fujifilm GFX 100S, 110mm f/2"
];

const textureDetails = [
    ["sweat droplets on skin", "muscle striations", "natural skin texture"],
    ["visible muscle definition", "subtle skin imperfections", "natural highlights"],
    ["detailed muscle tone", "fine skin pores", "natural body shadows"]
];

const bodyTypes = [
    "thick muscular",
    "voluptuous thick muscular",
    "plus-size muscular",
    "thick curvy muscular",
    "substantial thick muscular",
    "full-figured thick muscular",
    "generously thick muscular",
    "amply thick muscular",
    "robustly thick muscular",
    "heavily thick muscular",
    "powerfully thick muscular",
    "massively thick muscular",
    "abundantly thick muscular",
    "considerably thick muscular",
    "extensively thick muscular",
    "prominently thick muscular",
    "notably thick muscular",
    "remarkably thick muscular",
    "impressively thick muscular",
    "substantially thick muscular",
    "magnificently thick muscular",
    "grandly thick muscular",
    "majestically thick muscular",
    "gloriously thick muscular",
    "sumptuously thick muscular",
    "richly thick muscular",
    "luxuriantly thick muscular",
    "opulently thick muscular",
    "bountifully thick muscular",
    "generously thick muscular"
];

const breastSizes = [
    "full large",
    "ample",
    "voluminous",
    "substantial",
    "generous",
    "prominent",
    "well-endowed",
    "bountiful",
    "considerable",
    "abundant",
    "extensive",
    "significant",
    "pronounced",
    "notable",
    "remarkable",
    "impressive",
    "substantial",
    "considerable",
    "capacious",
    "commodious",
    "expansive",
    "sizeable",
    "voluptuous",
    "curvaceous",
    "full-bosomed",
    "well-proportioned",
    "statuesque",
    "magnificent",
    "grand",
    "majestic"
];

const modestOutfits = [
    "elegant evening gown",
    "professional business suit",
    "traditional kimono",
    "summer yukata",
    "designer jeans with fitted top",
    "leather jacket and pants",
    "modern qipao",
    "silk blouse with pencil skirt",
    "summer romper",
    "flowing beach dress",
    "formal ball gown",
    "casual sweater dress",
    "denim jumpsuit",
    "wrap dress",
    "off-shoulder top with shorts",
    "bodycon dress",
    "tulle skirt with corset",
    "satin slip dress",
    "halter neck dress",
    "sequined evening wear",
    "lace cocktail dress",
    "chiffon maxi dress",
    "velvet evening suit",
    "silk palazzo pants with top",
    "fitness wear",
    "athletic training outfit",
    "competition suit",
    "professional sports wear",
    "yoga outfit",
    "track suit"
];

const revealingOutfits = [
    "revealing micro bikini",
    "transparent silk negligee",
    "sheer mesh bodysuit",
    "strappy lingerie set",
    "barely-there string bikini",
    "revealing sling bikini",
    "micro mesh dress",
    "see-through lace bodysuit",
    "exotic dancer outfit",
    "revealing cut-out dress",
    "sheer babydoll dress",
    "string thong bikini",
    "transparent beach cover-up",
    "revealing crop top with micro shorts",
    "skimpy two-piece set",
    "sheer evening gown",
    "revealing cocktail dress",
    "micro mini dress",
    "transparent lace teddy",
    "strappy monokini",
    "revealing halter top with mini skirt",
    "sheer bodycon dress",
    "exotic dance wear",
    "revealing swimsuit",
    "transparent evening wear",
    "lace lingerie dress",
    "micro dress with cutouts",
    "revealing party dress",
    "sheer beach outfit",
    "minimal coverage bikini"
];

const environmentalElements = {
    "luxury hotel lobby": ["crystal chandeliers", "marble columns", "elegant furniture"],
    "high-end restaurant": ["fine dining setup", "mood lighting", "wine cellar background"],
    "art gallery": ["modern art pieces", "track lighting", "white walls"],
    "urban rooftop": ["city skyline", "modern furniture", "ambient lighting"],
    "beach sunset": ["golden sand", "ocean waves", "palm trees"],
    "cherry blossom garden": ["pink petals", "traditional architecture", "stone pathways"],
    "modern office": ["glass walls", "city view", "minimalist furniture"],
    "vintage theater": ["ornate decorations", "velvet curtains", "stage lighting"],
    "botanical garden": ["exotic flowers", "greenhouse glass", "natural paths"],
    "luxury yacht": ["teak deck", "ocean backdrop", "nautical elements"],
    "mountain resort": ["snow-capped peaks", "lodge architecture", "stone fireplace"],
    "desert oasis": ["sand dunes", "palm trees", "water features"],
    "historic castle": ["stone walls", "tapestries", "period furniture"],
    "zen garden": ["raked sand", "stone arrangements", "bamboo elements"],
    "autumn forest": ["colorful leaves", "misty atmosphere", "natural lighting"],
    "metropolitan penthouse": ["floor-to-ceiling windows", "modern art", "designer furniture"],
    "vintage train": ["luxury compartment", "wood paneling", "brass fixtures"],
    "private library": ["book-lined walls", "leather chairs", "reading lamps"],
    "fashion runway": ["professional lighting", "audience silhouettes", "sleek backdrop"],
    "grand ballroom": ["crystal chandeliers", "marble floor", "ornate ceiling"],
    "tropical villa": ["infinity pool", "ocean view", "tropical vegetation"],
    "winter cabin": ["snow scene", "wooden interior", "warm lighting"],
    "paris cafe": ["street view", "vintage furniture", "artistic atmosphere"],
    "venetian canal": ["historic buildings", "water reflections", "bridge views"],
    "english garden": ["manicured hedges", "stone fountains", "flower beds"],
    "modern art museum": ["abstract installations", "white space", "gallery lighting"],
    "historic temple": ["ancient architecture", "stone lanterns", "sacred grounds"],
    "mediterranean terrace": ["sea view", "terracotta tiles", "climbing vines"],
    "industrial loft": ["exposed brick", "large windows", "modern furnishings"],
    "secret garden": ["hidden pathways", "flowering arbors", "vintage gates"]
};

const lightingStyles = {
    "luxury hotel lobby": "warm ambient lighting with crystal chandelier highlights",
    "high-end restaurant": "intimate mood lighting with candlelight accents",
    "art gallery": "professional gallery lighting with focused spots",
    // ... add corresponding lighting styles for each new environment
};

// Add a toggle button state variable
let isRevealingMode = false;

function toggleOutfitMode() {
    isRevealingMode = !isRevealingMode;
    updateOutfitSelect();
    
    // Update the label text
    const labelElement = document.getElementById('outfitModeLabel');
    labelElement.textContent = `Current: ${isRevealingMode ? 'Revealing Style' : 'Modest Style'}`;
    
    // Optionally change button color to indicate current mode
    const toggleButton = document.getElementById('outfitToggle');
    toggleButton.style.backgroundColor = isRevealingMode ? '#ff4444' : '#4CAF50';
}

function updateOutfitSelect() {
    const outfitSelect = document.getElementById('outfit');
    outfitSelect.innerHTML = '';
    
    const currentOutfits = isRevealingMode ? revealingOutfits : modestOutfits;
    currentOutfits.forEach(outfit => {
        outfitSelect.add(new Option(outfit, outfit));
    });
}

// Add after the existing arrays
const poses = [
    "standing casually",
    "sitting relaxed",
    "leaning against wall",
    "walking naturally",
    "stretching arms",
    "hands on hips",
    "arms crossed",
    "looking over shoulder",
    "sitting cross-legged",
    "lounging on couch",
    "lying on side",
    "reclining casually",
    "kneeling comfortably",
    "sitting on chair",
    "standing with hand in hair",
    "casual stride",
    "relaxed stance",
    "natural smile",
    "candid laugh",
    "gentle pose",
    "casual lean",
    "relaxed sitting",
    "natural standing",
    "comfortable pose",
    "easy stance",
    "relaxed position",
    "natural posture",
    "casual sitting",
    "informal stance",
    "relaxed lean"
];

// Add ethnicity array
const ethnicities = [
    "Japanese",
    "Korean",
    "Chinese",
    "Malaysian"
];

// Update generatePrompt function
function generatePrompt() {
    const bodyType = document.getElementById('bodyType').value;
    const breastSize = document.getElementById('breastSize').value;
    const outfit = document.getElementById('outfit').value;
    const environment = document.getElementById('environment').value;
    const ethnicity = document.getElementById('ethnicity').value;

    const camera = cameras[Math.floor(Math.random() * cameras.length)];
    const textures = textureDetails[Math.floor(Math.random() * textureDetails.length)];
    const envElements = environmentalElements[environment];
    const lighting = lightingStyles[environment];
    const pose = poses[Math.floor(Math.random() * poses.length)];

    const mainPrompt = `raw photograph, photorealistic portrait of a ${ethnicity} female bodybuilder, ${bodyType} physique, ${breastSize} proportions, ${pose}, wearing ${outfit}, in ${environment}, ${camera}, natural skin pores and texture, subsurface scattering, detailed facial features, shot on Kodak Portra 400, high-end fashion photography, natural lighting, 8k uhd, highly detailed skin`;

    const negativePrompt = "painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured, poorly drawn, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, ((out of frame)), mutated hands and fingers, poorly drawn face, poorly drawn feet, poorly drawn hands, missing fingers, extra fingers, fused fingers, bad anatomy, bad proportions, gross proportions, double vision, multiple views, blurry, watermark, text, grainy, signature, cut off, draft, amateur drawing, cartoon, 3d render, anime, manga, digital art";

    document.getElementById('mainPrompt').textContent = mainPrompt;
    document.getElementById('negativePrompt').textContent = negativePrompt;

    // Silently copy the main prompt
    navigator.clipboard.writeText(mainPrompt).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function copyPrompt() {
    const mainPrompt = document.getElementById('mainPrompt').textContent;
    const negativePrompt = document.getElementById('negativePrompt').textContent;
    const fullText = `Prompt: ${mainPrompt}\n\nNegative Prompt: ${negativePrompt}`;
    
    navigator.clipboard.writeText(fullText).then(() => {
        alert('Full prompt (including negative) copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Update initializeSelects function
function initializeSelects() {
    const bodyTypeSelect = document.getElementById('bodyType');
    const breastSizeSelect = document.getElementById('breastSize');
    const environmentSelect = document.getElementById('environment');
    const ethnicitySelect = document.getElementById('ethnicity');

    // Clear existing options
    bodyTypeSelect.innerHTML = '';
    breastSizeSelect.innerHTML = '';
    environmentSelect.innerHTML = '';
    ethnicitySelect.innerHTML = '';

    // Add new options
    bodyTypes.forEach(type => {
        bodyTypeSelect.add(new Option(type, type));
    });

    breastSizes.forEach(size => {
        breastSizeSelect.add(new Option(size, size));
    });

    ethnicities.forEach(ethnicity => {
        ethnicitySelect.add(new Option(ethnicity, ethnicity));
    });

    Object.keys(environmentalElements).forEach(env => {
        environmentSelect.add(new Option(env, env));
    });

    // Initialize outfit select with modest outfits by default
    updateOutfitSelect();
}

// Update generateRandomPrompt function
function generateRandomPrompt() {
    const randomBodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
    const randomBreastSize = breastSizes[Math.floor(Math.random() * breastSizes.length)];
    const currentOutfits = isRevealingMode ? revealingOutfits : modestOutfits;
    const randomOutfit = currentOutfits[Math.floor(Math.random() * currentOutfits.length)];
    const randomEnvironment = Object.keys(environmentalElements)[Math.floor(Math.random() * Object.keys(environmentalElements).length)];
    const randomEthnicity = ethnicities[Math.floor(Math.random() * ethnicities.length)];

    document.getElementById('bodyType').value = randomBodyType;
    document.getElementById('breastSize').value = randomBreastSize;
    document.getElementById('outfit').value = randomOutfit;
    document.getElementById('environment').value = randomEnvironment;
    document.getElementById('ethnicity').value = randomEthnicity;

    generatePrompt();
}

window.onload = initializeSelects; 