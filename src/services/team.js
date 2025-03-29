import polykovAndriy from 'images/team/polykovAndriy.jpg';
import polykovAndriyIsActive from 'images/team/polykovAndriyIsActive.jpg';
import polykovAndriyDesktop from 'images/team/polykovAndriyDesktop.jpg';
import hodirevSerhiy from 'images/team/hodirevSerhiy.jpg';
import hodirevSerhiyIsActive from 'images/team/hodirevSerhiyIsActive.jpg';
import hodirevSerhiyDesktop from 'images/team/hodirevSerhiyDesktop.jpg';
import hodirevaNatalia from 'images/team/hodirevaNatalia.jpg';
import hodirevaNataliaIsActive from 'images/team/hodirevaNataliaIsActive.jpg';
import hodirevaNataliaDesktop from 'images/team/hodirevaNataliaDesktop.jpg';
import soloshenkoAndrii from 'images/team/soloshenkoAndrii.jpg';
import soloshenkoAndriiIsActive from 'images/team/soloshenkoAndriiIsActive.jpg';
import soloshenkoAndriiDesktop from 'images/team/soloshenkoAndriiDesktop.jpg';
import komarVolodymyr from 'images/team/komarVolodymyr.jpg';
import komarVolodymyrIsActive from 'images/team/komarVolodymyrIsActive.jpg';
import komarVolodymyrDesktop from 'images/team/komarVolodymyrDesktop.jpg';
import yanenkoYana from 'images/team/yanenkoYana.jpg';
import yanenkoYanaIsActive from 'images/team/yanenkoYanaIsActive.jpg';
import yanenkoYanaDesktop from 'images/team/yanenkoYanaDesktop.jpg';

export const teamMembers = [
  {
    id: 1,
    name: 'Поляков Андрій Юрійович',
    role: 'Директор',
    photo: polykovAndriy,
    activePhoto: polykovAndriyIsActive,
    photoDesktop: polykovAndriyDesktop,
    email: 'info@ankona.com.ua',
    phone: '+38 (098) 973 03 91',
  },
  {
    id: 2,
    name: 'Ходирєв Сергій Вікторович',
    role: 'Керівник/технолог напрямку ВРХ',
    photo: hodirevSerhiy,
    activePhoto: hodirevSerhiyIsActive,
    photoDesktop: hodirevSerhiyDesktop,
    email: 'svhodyrev@ankona.com.ua',
    phone: '+38 (050) 481 53 20',
  },
  {
    id: 3,
    name: 'Ходирєва Наталія Вікторівна',
    role: 'Керівник відділу з продажів напрямку ВРХ',
    photo: hodirevaNatalia,
    activePhoto: hodirevaNataliaIsActive,
    photoDesktop: hodirevaNataliaDesktop,
    email: 'nvhodyreva@ankona.com.ua',
    phone: '+38 (050) 777 09 75',
  },
  {
    id: 4,
    name: 'Солошенко Андрій',
    role: 'Консультант з годівлі свиней',
    photo: soloshenkoAndrii,
    activePhoto: soloshenkoAndriiIsActive,
    photoDesktop: soloshenkoAndriiDesktop,
    email: 'andriy.soloshenko@ankona.com.ua',
    phone: '+38 (098) 604 53 38',
  },
  {
    id: 5,
    name: 'Комар Володимир',
    role: 'Консультант з годівлі свиней',
    photo: komarVolodymyr,
    activePhoto: komarVolodymyrIsActive,
    photoDesktop: komarVolodymyrDesktop,
    email: 'volodymyr.komar@ankona.com.ua',
    phone: '+38 (095) 408 95 25',
  },
  {
    id: 6,
    name: 'Яненко Яна',
    role: 'Керівник роздрібного відділу',
    photo: yanenkoYana,
    activePhoto: yanenkoYanaIsActive,
    photoDesktop: yanenkoYanaDesktop,
    email: 'retail@ankona.com.ua',
    phone: '+38 (077) 115 11 55',
  },
];

export function addNewEvent(newEvent) {
  teamMembers.push(newEvent);
}
