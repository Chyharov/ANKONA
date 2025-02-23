export const products = [
  {
    id: 1,
    name: 'Mineralfutter',
    manufacturer: 'VILOFOSS',
    description: 'Премікси для ВРХ, ДРХ та Коней',
    category: ['ВРХ дорослі', 'ВРХ молодняк', 'ДРХ', 'Коні'],
  },
  {
    id: 2,
    name: 'LM Rinder ADE',
    manufacturer: 'VILOFOSS',
    description: 'Премікс - лизунець Стандарт',
    category: ['ВРХ дорослі', 'ВРХ молодняк', 'ДРХ', 'Коні'],
  },
  {
    id: 3,
    name: 'LM Rinder TR-Vit',
    manufacturer: 'VILOFOSS',
    description: 'Лизунець для сухостійних корів',
    category: ['ВРХ дорослі', 'ВРХ молодняк'],
  },
  {
    id: 4,
    name: 'Камінь для клювання',
    manufacturer: 'VILOFOSS',
    description: 'Матеріал для птахівників',
    category: 'Птиця'
  },
  {
    id: 5,
    name: 'ProtiSpar Top 75',
    manufacturer: 'VILOFOSS',
    description: 'Оптимізація протеїнової годівлі',
    category: ['ВРХ дорослі', 'ВРХ молодняк', 'ДРХ', 'Коні'],
  },
  {
    id: 6,
    name: 'Футтергут Румі-Ферм',
    manufacturer: 'VILOFOSS',
    description: 'Оптимізація крохмальної годівлі',
    category: ['ВРХ дорослі'],
  },
  {
    id: 7,
    name: 'Lactoval liquid',
    manufacturer: 'VILOFOSS',
    description: 'Перша випойка після отелу',
    category: ['ВРХ дорослі', 'ВРХ молодняк'],
  },
  {
    id: 8,
    name: 'X-Zelit Calcium-Mobilisation',
    manufacturer: 'VILOFOSS',
    description: 'Профілактика гіпокальціємії',
    category: ['ВРХ дорослі'],
  },
  {
    id: 9,
    name: 'Br. Close Up 30 Pro',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Транзитна добавка для корів',
    category: ['ВРХ дорослі'],
  },
  {
    id: 10,
    name: 'Clex® blue drink',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: `Рідкий мінерально–вітамінний
    підкислювач (підходе для всіх)`,
    category: ['Підходе для всіх'],
  },
  {
    id: 11,
    name: 'Clex® Beta-Inulin met BLUE',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: `Імуностимулююча кормова
    добавка  (підходе для всіх)`,
    category: ['Підходе для всіх'],
  },
  {
    id: 12,
    name: 'Quattro drink',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Рідкий підкислювач для всіх видів тварин',
    category: ['ВРХ молодняк', 'ДРХ', 'Свині', 'Птиця'],
  },
];

export function addNewEvent(newEvent) {
  products.push(newEvent);
}