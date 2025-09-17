import type { Product } from './types';
import { placeholderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = placeholderImages.find(img => img.id === id);
  return {
    url: image?.imageUrl ?? `https://picsum.photos/seed/default/600/400`,
    hint: image?.imageHint ?? 'placeholder'
  }
}

export const allProducts: Product[] = [
  {
    id: 'prod_001',
    name: 'Quantum Drone',
    description: 'Autonomous surveillance drone with quantum encryption.',
    longDescription: 'The Amtech Quantum Drone is a state-of-the-art autonomous aerial vehicle. Featuring silent propulsion, 4K HDR video, and unbreakable quantum-based communication encryption, it is the ultimate tool for secure surveillance and reconnaissance missions. Its lightweight frame and extended battery life allow for up to 90 minutes of flight time.',
    price: 2499.99,
    image: getImage('1').url,
    imageHint: getImage('1').hint,
  },
  {
    id: 'prod_002',
    name: 'NeuroLink VR',
    description: 'Immersive virtual reality with neural interface.',
    longDescription: 'Step into new worlds with the NeuroLink VR headset. This device uses a non-invasive neural interface to read your brainwaves, creating a deeply immersive and responsive virtual reality experience. With a 8K per-eye resolution and a 180-degree field of view, reality will blend with the virtual.',
    price: 1800.0,
    image: getImage('2').url,
    imageHint: getImage('2').hint,
  },
  {
    id: 'prod_003',
    name: 'Automata Arm',
    description: 'Precision robotic arm for industrial and lab use.',
    longDescription: 'The Automata Arm brings next-generation precision to your manufacturing line or laboratory. With sub-millimeter accuracy and a payload capacity of 15kg, this robotic arm can handle delicate tasks with ease. Its intuitive programming interface allows for quick deployment and task customization.',
    price: 15000.0,
    image: getImage('3').url,
    imageHint: getImage('3').hint,
  },
  {
    id: 'prod_004',
    name: 'Chrono-Watch',
    description: 'Smartwatch with biometric and temporal tracking.',
    longDescription: 'The Chrono-Watch is more than a timepiece. It\'s a complete personal wellness and productivity companion. It monitors all your vital signs, sleep patterns, and provides AI-powered insights. The revolutionary temporal tracking feature helps you manage your time with predictive analytics.',
    price: 799.5,
    image: getImage('4').url,
    imageHint: getImage('4').hint,
  },
  {
    id: 'prod_005',
    name: 'Cyber-Optic v2',
    description: 'Augmented reality cybernetic eye implant.',
    longDescription: 'Upgrade your vision with the Cyber-Optic v2. This cybernetic eye implant provides a persistent augmented reality overlay on your vision, displaying information, notifications, and real-time data translation. It includes telescopic and thermal vision modes, all controlled via a neural link.',
    price: 75000.0,
    image: getImage('5').url,
    imageHint: getImage('5').hint,
  },
  {
    id: 'prod_006',
    name: 'Oracle AI Sphere',
    description: 'Holographic personal AI assistant for your home.',
    longDescription: 'The Oracle AI Sphere is the heart of your smart home. This elegant device projects a fully interactive holographic AI assistant that can manage your schedule, control your smart devices, answer any question, and even provide companionship. Its learning capabilities mean it grows with you.',
    price: 1250.0,
    image: getImage('6').url,
    imageHint: getImage('6').hint,
  },
  {
    id: 'prod_007',
    name: 'Q-Bit Processor',
    description: 'Desktop quantum computing enhancement unit.',
    longDescription: 'Unlock the power of quantum computing on your desktop. The Q-Bit Processor is an external unit that integrates with your existing high-performance computer to solve complex problems in seconds that would take classical computers millennia. Perfect for researchers, developers, and data scientists.',
    price: 35000.0,
    image: getImage('7').url,
    imageHint: getImage('7').hint,
  },
  {
    id: 'prod_008',
    name: 'Amtech Icarus',
    description: 'Luxury self-driving electric vehicle.',
    longDescription: 'Experience the future of travel with the Amtech Icarus. This fully electric luxury sedan features Level 5 autonomous driving, a panoramic augmented reality windshield, and a range of over 600 miles on a single charge. The interior is a bespoke lounge, adapting to your needs for work or relaxation.',
    price: 120000.0,
    image: getImage('8').url,
    imageHint: getImage('8').hint,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(p => p.id === id);
}
