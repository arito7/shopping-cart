import uniqid from 'uniqid';
import ImgBass from './imgs/bass.png';
import ImgCake from './imgs/cake.png';
import ImgAdmiralPie from './imgs/admiral-pie.png';
import ImgChocoCake from './imgs/chococake.png';
import ImgHalberd from './imgs/halberd.png';
import ImgBones from './imgs/bones.png';
import ImgBalloons from './imgs/balloons.png';
import ImgBirdNest from './imgs/bird-nest.png';
import ImgKey from './imgs/key.png';
import ImgLamp from './imgs/lamp.png';
import ImgBunnyMask from './imgs/bunnymask.png';
import ImgBook from './imgs/book.png';

const items = [
  {
    id: uniqid(),
    name: 'Cake',
    description: 'For birthdays',
    price: 10,
    img: ImgCake,
    category: 'food',
  },
  {
    id: uniqid(),
    name: 'Chocolate Cake',
    description:
      '3/4 of a chocolate cake. So good someone already helped themselves.',
    price: 50,
    img: ImgChocoCake,
    category: 'food',
  },
  {
    id: uniqid(),
    name: 'Bass (Cooked)',
    description: 'Its cooked.',
    price: 100,
    img: ImgBass,
    category: 'food',
  },
  {
    id: uniqid(),
    name: 'Admiral Pie',
    description: 'A pie for admirals.',
    price: 500,
    img: ImgAdmiralPie,
    category: 'food',
  },
  {
    id: uniqid(),
    name: 'Halberd',
    description: 'Perfect for long range self-defense',
    price: 699,
    img: ImgHalberd,
    category: 'weapon',
  },
  {
    id: uniqid(),
    name: 'Bones...',
    description:
      "For those with a calcium deficiency, just don't ask where they came from.",
    price: 1,
    img: ImgBones,
    category: 'food',
  },
  {
    id: uniqid(),
    name: 'Party Balloons',
    description: 'Balloons for a wild party.',
    price: 24,
    img: ImgBalloons,
    category: 'miscellaneous',
  },
  {
    id: uniqid(),
    name: 'Bird Nest',
    description: 'A bird nest, might contain something valuable (to a bird).',
    price: 1,
    img: ImgBirdNest,
    category: 'miscellaneous',
  },
  {
    id: uniqid(),
    name: 'A Book',
    description: 'A random book for someone looking for anything to read.',
    price: 55,
    img: ImgBook,
    category: 'miscellaneous',
  },
  {
    id: uniqid(),
    name: 'A Key',
    description: 'A key that may open something somewhere someplace',
    price: 99,
    img: ImgKey,
    category: 'miscellaneous',
  },
  {
    id: uniqid(),
    name: 'A *Magical Lamp',
    description: '* not a guarantee',
    price: 999,
    img: ImgLamp,
    category: 'miscellaneous',
  },
  {
    id: uniqid(),
    name: 'Bunny Mask',
    description: 'For those who like to dress up.',
    price: 30,
    img: ImgBunnyMask,
    category: 'clothes',
  },
];

const order = [];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find((item) => item.id === id);
}
