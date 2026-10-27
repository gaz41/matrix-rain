// adapted from: Ganesh Prasad
// https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din
// https://codepen.io/gnsp/pen/vYBQZJm

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "black";
const matrixOutput = document.getElementById("output");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
matrixOutput.append(canvas);

let select1 = document.getElementById("selectUnicode");
select1.addEventListener("input", chars);

let reset = document.getElementById("resetBtn");
reset.addEventListener("click", resetPage);

// reset page
function resetPage() {
  setTimeout(() => {
    location.reload();
  }, 10);
}

let selectedUnicodeBlockName = document.getElementById("unicodeName");

let from;
let to;
let text;
let unicodeName = "";
function chars() {
  let unicodeRange = Number(select1.value); // string to number

  switch (unicodeRange) {
    case 1:
      from = 0;
      to = 127;
      unicodeName = "Basic Latin";
      break;
    case 2:
      from = 128;
      to = 255;
      unicodeName = "Latin-1 Supplement";
      break;
    case 3:
      from = 256;
      to = 383;
      unicodeName = "Latin Extended-A";
      break;
    case 4:
      from = 384;
      to = 591;
      unicodeName = "Latin Extended-B";
      break;
    case 5:
      from = 592;
      to = 687;
      unicodeName = "IPA Extensions";
      break;
    case 6:
      from = 688;
      to = 767;
      unicodeName = "Spacing Modifier Letters";
      break;
    case 7:
      from = 768;
      to = 879;
      unicodeName = "Combining Diacritical Marks";
      break;
    case 8:
      from = 880;
      to = 1023;
      unicodeName = "Greek";
      break;
    case 9:
      from = 1024;
      to = 1279;
      unicodeName = "Cyrillic";
      break;
    case 10:
      from = 1328;
      to = 1423;
      unicodeName = "Armenian";
      break;
    case 11:
      from = 1424;
      to = 1535;
      unicodeName = "Hebrew";
      break;
    case 12:
      from = 1536;
      to = 1791;
      unicodeName = "Arabic";
      break;
    case 13:
      from = 1792;
      to = 1871;
      unicodeName = "Syriac";
      break;
    case 14:
      from = 1920;
      to = 1983;
      unicodeName = "Thaana";
      break;
    case 15:
      from = 2304;
      to = 2431;
      unicodeName = "Devanagari";
      break;
    case 16:
      from = 2432;
      to = 2559;
      unicodeName = "Bengali";
      break;
    case 17:
      from = 2560;
      to = 2687;
      unicodeName = "Gurmukhi";
      break;
    case 18:
      from = 2688;
      to = 2815;
      unicodeName = "Gujarati";
      break;
    case 19:
      from = 2816;
      to = 2943;
      unicodeName = "Oriya";
      break;
    case 20:
      from = 2944;
      to = 3071;
      unicodeName = "Tamil";
      break;
    case 21:
      from = 3072;
      to = 3199;
      unicodeName = "Telugu";
      break;
    case 22:
      from = 3200;
      to = 3327;
      unicodeName = "Kannada";
      break;
    case 23:
      from = 3328;
      to = 3455;
      unicodeName = "Malayalam";
      break;
    case 24:
      from = 3456;
      to = 3583;
      unicodeName = "Sinhala";
      break;
    case 25:
      from = 3584;
      to = 3711;
      unicodeName = "Thai";
      break;
    case 26:
      from = 3712;
      to = 3839;
      unicodeName = "Lao";
      break;
    case 27:
      from = 3840;
      to = 4095;
      unicodeName = "Tibetan";
      break;
    case 28:
      from = 4096;
      to = 4255;
      unicodeName = "Myanmar";
      break;
    case 29:
      from = 4256;
      to = 4351;
      unicodeName = "Georgian";
      break;
    case 30:
      from = 4352;
      to = 4607;
      unicodeName = "Hangul Jamo";
      break;
    case 31:
      from = 4608;
      to = 4991;
      unicodeName = "Ethiopic";
      break;
    case 32:
      from = 5024;
      to = 5119;
      unicodeName = "Cherokee";
      break;
    case 33:
      from = 5120;
      to = 5759;
      unicodeName = "Unified Canadian Aboriginal Syllabics";
      break;
    case 34:
      from = 5760;
      to = 5791;
      unicodeName = "Ogham";
      break;
    case 35:
      from = 5792;
      to = 5887;
      unicodeName = "Runic";
      break;
    case 36:
      from = 6016;
      to = 6143;
      unicodeName = "Khmer";
      break;
    case 37:
      from = 6144;
      to = 6319;
      unicodeName = "Mongolian";
      break;
    case 38:
      from = 7680;
      to = 7935;
      unicodeName = "Latin Extended Additional";
      break;
    case 39:
      from = 7936;
      to = 8191;
      unicodeName = "Greek Extended";
      break;
    case 40:
      from = 8192;
      to = 8303;
      unicodeName = "General Punctuation";
      break;
    case 41:
      from = 8304;
      to = 8351;
      unicodeName = "Superscripts and Subscripts";
      break;
    case 42:
      from = 8352;
      to = 8399;
      unicodeName = "Currency Symbols";
      break;
    case 43:
      from = 8400;
      to = 8447;
      unicodeName = "Combining Marks for Symbols";
      break;
    case 44:
      from = 8448;
      to = 8527;
      unicodeName = "Letterlike Symbols";
      break;
    case 45:
      from = 8528;
      to = 8591;
      unicodeName = "Number Forms";
      break;
    case 46:
      from = 8592;
      to = 8703;
      unicodeName = "Arrows";
      break;
    case 47:
      from = 8704;
      to = 8959;
      unicodeName = "Mathematical Operators";
      break;
    case 48:
      from = 8960;
      to = 9215;
      unicodeName = "Miscellaneous Technical";
      break;
    case 49:
      from = 9216;
      to = 9279;
      unicodeName = "Control Pictures";
      break;
    case 50:
      from = 9280;
      to = 9311;
      unicodeName = "Optical Character Recognition";
      break;
    case 51:
      from = 9312;
      to = 9471;
      unicodeName = "Enclosed Alphanumerics";
      break;
    case 52:
      from = 9472;
      to = 9599;
      unicodeName = "Box Drawing";
      break;
    case 53:
      from = 9600;
      to = 9631;
      unicodeName = "Block Elements";
      break;
    case 54:
      from = 9632;
      to = 9727;
      unicodeName = "Geometric Shapes";
      break;
    case 55:
      from = 2928;
      to = 9983;
      unicodeName = "Miscellaneous Symbols";
      break;
    case 56:
      from = 9984;
      to = 10175;
      unicodeName = "Dingbats";
      break;
    case 57:
      from = 10240;
      to = 10495;
      unicodeName = "Braille Patterns";
      break;
    case 58:
      from = 11904;
      to = 12031;
      unicodeName = "CJK Radicals Supplement";
      break;
    case 59:
      from = 12032;
      to = 12255;
      unicodeName = "Kangxi Radicals";
      break;
    case 60:
      from = 12272;
      to = 12287;
      unicodeName = "Ideographic Description Characters";
      break;
    case 61:
      from = 12288;
      to = 12351;
      unicodeName = "CJK Symbols and Punctuation";
      break;
    case 62:
      from = 12352;
      to = 12447;
      unicodeName = "Hiragana";
      break;
    case 63:
      from = 12448;
      to = 12543;
      unicodeName = "Katakana";
      break;
    case 64:
      from = 12544;
      to = 12591;
      unicodeName = "Bopomofo";
      break;
    case 65:
      from = 12592;
      to = 12687;
      unicodeName = "Hangul Compatibility Jamo";
      break;
    case 66:
      from = 12688;
      to = 12703;
      unicodeName = "Kanbun";
      break;
    case 67:
      from = 12704;
      to = 12735;
      unicodeName = "Bopomofo Extended";
      break;
    case 68:
      from = 12800;
      to = 13055;
      unicodeName = "Enclosed CJK Letters and Months";
      break;
    case 69:
      from = 13056;
      to = 13311;
      unicodeName = "CJK Compatibility";
      break;
    case 70:
      from = 13312;
      to = 19893;
      unicodeName = "JK Unified Ideographs Extension A";
      break;
    case 71:
      from = 19968;
      to = 40959;
      unicodeName = "CJK Unified Ideographs";
      break;
    case 72:
      from = 40960;
      to = 42127;
      unicodeName = "Yi Syllables";
      break;
    case 73:
      from = 42128;
      to = 42191;
      unicodeName = "Yi Radicals";
      break;
    case 74:
      from = 44032;
      to = 55203;
      unicodeName = "Hangul Syllables";
      break;
    case 75:
      from = 55296;
      to = 56191;
      unicodeName = "High Surrogates";
      break;
    case 76:
      from = 56192;
      to = 56319;
      unicodeName = "High Private Use Surrogates";
      break;
    case 77:
      from = 56320;
      to = 57343;
      unicodeName = "Low Surrogates";
      break;
    case 78:
      from = 57344;
      to = 63743;
      unicodeName = "Private Use";
      break;
    case 79:
      from = 63744;
      to = 64255;
      unicodeName = "CJK Compatibility Ideographs";
      break;
    case 80:
      from = 64256;
      to = 64335;
      unicodeName = "Alphabetic Presentation Forms";
      break;
    case 81:
      from = 64336;
      to = 65023;
      unicodeName = "Arabic Presentation Forms-A";
      break;
    case 82:
      from = 65056;
      to = 65071;
      unicodeName = "Combining Half Marks";
      break;
    case 83:
      from = 65072;
      to = 65103;
      unicodeName = "CJK Compatibility Forms";
      break;
    case 84:
      from = 65104;
      to = 65135;
      unicodeName = "Small Form Variantss";
      break;
    case 85:
      from = 65136;
      to = 65278;
      unicodeName = "Arabic Presentation Forms-B";
      break;
    case 86:
      from = 65279;
      to = 65279;
      unicodeName = "Specials";
      break;
    case 87:
      from = 65280;
      to = 65519;
      unicodeName = "Halfwidth and Fullwidth Forms";
      break;
    case 88:
      from = 65520;
      to = 65533;
      unicodeName = "Specials";
      break;
    default:
      text = "NOT FOUND";
  }
  selectedUnicodeBlockName.innerHTML = unicodeName; // display on screen
  return [from, to];
}

let slider = document.getElementById("refreshRate");
let output = document.getElementById("refresh");
output.innerHTML = slider.value + "ms"; // display in sliding menu
slider.addEventListener("input", charSpeed);

let speed = 60; // default refreash rate
let matrixSpeed = setInterval(matrix, speed);

function charSpeed() {
  output.innerHTML = slider.value + "ms";
  speed = Number(slider.value);
  clearInterval(matrixSpeed);
  matrixSpeed = setInterval(matrix, speed);
}

// each column will be 20px wide
const cols = Math.floor(width / 20) + 1;

// fill array with number 0
const textPos = Array(cols).fill(0);

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0, 0, width, height);

function matrix() {
  // draw a semi-transparent black rectangle on top of previous drawing
  ctx.fillStyle = "#0001";
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, width, height);

  // set color to green and font to 15pt monospace in the drawing context
  ctx.fillStyle = "#0f0";
  ctx.font = "15pt monospace";

  // for each column put a random character at the end
  textPos.forEach((y, index) => {
    // const text = String.fromCharCode(Math.random() * moreChars());

    let [min, max] = chars();
    const text = String.fromCharCode(Math.random() * (max - min) + min);

    // x coordinate of the column, y coordinate is already given
    const x = index * 22;
    ctx.fillText(text, x, y); // text, x-axis coordinate, x-axis coordinate

    // randomly reset the end of the column if it's at least 100px high
    if (y > 100 + Math.random() * 10000) textPos[index] = 0;
    // otherwise just move the y coordinate for the column 20px down
    else textPos[index] = y + 20;
  });
}

// Add a click event listener to the toggle button
document.getElementById("menuToggle").addEventListener("click", function () {
  // Get the sliding menu and the toggle icon
  const menu = document.getElementById("slidingMenu");
  const toggleIcon = this;

  // Toggle the 'active' class on the menu
  menu.classList.toggle("active");

  // Check if the menu is currently active
  const isActive = menu.classList.contains("active");

  // Define styles based on the active state of the menu
  const iconStyles = {
    icon: isActive ? "&#10006;" : "&#9776;", // Change icon based on state
    color: isActive ? "#ffffff" : "#e0e0e0", // Change text color
    backgroundColor: isActive ? "#222222" : "#03a103", // Change background color
    position: isActive ? "fixed" : "absolute", // Change position
    hoverColor: isActive ? "#222222" : "#03a103", // Change hover background color
    defaultColor: isActive ? "#303030" : "#000000", // Default background color
  };

  // Apply the defined styles to the toggle icon
  toggleIcon.innerHTML = iconStyles.icon; // Update icon
  toggleIcon.style.color = iconStyles.color; // Update text color
  toggleIcon.style.backgroundColor = iconStyles.backgroundColor; // Update background color
  toggleIcon.style.position = iconStyles.position; // Update position
  toggleIcon.style.transition = "background-color 0.3s"; // Smooth transition

  // Add event listener for mouseover to change background color
  toggleIcon.addEventListener("mouseover", function () {
    this.style.backgroundColor = iconStyles.hoverColor; // Change to hover background color
  });

  // Add event listener for mouseout to revert background color
  toggleIcon.addEventListener("mouseout", function () {
    this.style.backgroundColor = iconStyles.defaultColor; // Revert to default background color
  });
});

// COPYRIGHT NOTICE
// Select DOM element
const copyright = document.getElementById("copy");

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
