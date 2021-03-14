import fn from './utils/a';
import './assets/style.css';

import img1 from './assets/aoteman.jpg';
import img2 from './assets/nengliang.png';

console.log('hello webpack!!!!');
fn();

const Img1 = new Image();
const Img2 = new Image();
Img1.src = img1;
Img2.src = img2;
document.body.appendChild(Img1);
document.body.appendChild(Img2);
