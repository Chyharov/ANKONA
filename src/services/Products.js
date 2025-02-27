import imgProductDetailsId1 from 'images/productDetails/imgProductDetailsId1.jpg';
import imgProductDetailsId2 from 'images/productDetails/imgProductDetailsId2.jpg';
import imgProductDetailsId3 from 'images/productDetails/imgProductDetailsId3.jpg';
import imgProductDetailsId4 from 'images/productDetails/imgProductDetailsId4.jpg';
import imgProductDetailsId5 from 'images/productDetails/imgProductDetailsId5.jpg';
import imgProductDetailsId6 from 'images/productDetails/imgProductDetailsId6.jpg';
import imgProductDetailsId7 from 'images/productDetails/imgProductDetailsId7.jpg';
import imgProductDetailsId8 from 'images/productDetails/imgProductDetailsId8.jpg';
import imgProductDetailsId9 from 'images/productDetails/imgProductDetailsId9.jpg';
import imgProductDetailsId10 from 'images/productDetails/imgProductDetailsId10.jpg';
import imgProductDetailsId11 from 'images/productDetails/imgProductDetailsId11.jpg';
import imgProductDetailsId12 from 'images/productDetails/imgProductDetailsId12.jpg';

export const products = [
  {
    id: 1,
    name: 'Mineralfutter',
    manufacturer: 'VILOFOSS',
    description: 'Премікси для ВРХ, ДРХ та Коней',
    category: ['ВРХ дорослі', 'ВРХ молодняк', 'ДРХ', 'Коні'],
    image: imgProductDetailsId1,
    sections: [
      {
        title: 'Можуть бути представлені:',
        items: ['стандартна лінійка', 'індивідуальні рецептури'],
      },
      {
        title: 'Дозування:',
        items: ['50-250 г/гол/добу (залежить від рецептури)'],
      },
      {
        title: 'Фасування:',
        items: ['мішок 25 кг'],
      },
    ],
  },
  {
    id: 2,
    name: 'LM Rinder ADE',
    manufacturer: 'VILOFOSS',
    description: 'Смачний та гомогенний лизунець',
    category: ['ВРХ дорослі', 'ВРХ молодняк', 'ДРХ', 'Коні'],
    image: imgProductDetailsId2,
    sections: [
      {
        title: 'Складові:',
        items: [
          'Са 15,0%, Р 4,0%, Na 2,9%, Mg 5,0% - віт.А 800 000 МЕ, віт.D 130 000 МЕ, віт. Е 2000 мг, залізо 1000 мг, мідь 800мг, марганец 4000мг, цинк 6000мг, йод 50мг, селен 50мг, кобальт 30мг.',
        ],
      },
      {
        title: 'Середня норма вживання:',
        items: ['100-200 г/гол/добу'],
      },
      {
        title: 'Рекомендовано:',
        items: [
          'молодняку ВРХ - при відлученні від молока й за 1-2 міс до початку парувальної кампанії',
          'сухостійним коровам - на весь термін сухостою',
          'лактуючим коровам - від отелу до 100 днів лактації',
        ],
      },
      {
        title: 'Фасування:',
        items: ['таз 25 та 65 кг'],
      },
    ],
  },
  {
    id: 3,
    name: 'LM Rinder TR-Vit',
    manufacturer: 'VILOFOSS',
    description: 'Лизунець для сухостійних корів',
    category: ['ВРХ дорослі', 'ВРХ молодняк'],
    image: imgProductDetailsId3,
    sections: [
      {
        title: 'Використання лизунців для сухостійних корів сприяє:',
        items: ['скорішому відновленню корови після отелу', 'підтримує роботу імунної систему корови', 'правильний розвиток майбутнього теляти', 'знижує ризик порушень обміну речовин', 'покращує якість молозива - захист телят', 'підтримує високий рівень надою після отелу'],
      },
      {
        title: 'Починати використання продукту:',
        items: ['за 8 - 12 тижнів до отелу, або на весь термін сухостою!']
      },
      {
        title: 'Складові:',
        items: ['Са 5,0%, Р 5,0%, Na 16,0%, Mg 8,0%, віт. А 500 000 МЕ, віт.D 50 000 МЕ, віт.Е 2000 мг, мідь 800 мг, марганець 4000 мг, цинк 6000 мг, йод 50 мг, селен 50 мг, кобальт 30 мг']
      },
      {
        title: 'Середня норма вживання:',
        items: ['100-200 г/гол/добу']
      },
      {
        title: 'Фасування:',
        items: ['таз 65 кг']
      },
    ]
  },
  {
    id: 4,
    name: 'Камінь для клювання',
    manufacturer: 'VILOFOSS',
    description: 'Професійний матеріал для птахівників',
    category: ['Птиця'],
    image: imgProductDetailsId4,
    sections: [
      {
        title: 'Складові:',
        items: ['індивідуальне введення життєво важливих мінералів, таких як: магній, кальцій та натрій'],
      },
      {
        title: 'Мета використання:',
        items: ['щоб уникнути поведінкових розладів, таких як, клювання пір’я та канібалізм, що призводять до серйозних наслідків та втрат, покращення перетравності кормів'],
      },
      {
        title: 'Дозування:',
        items: ['рекомендуємо використовувати один камінь Peckstone для кожних 500 - 800 несучок та індичок, або на кожні 1000 бройлерів'],
      },
      {
        title: 'Фасування:',
        items: ['камінь для клювання по 10 кг'],
      },
    ]
  },
  {
    id: 5,
    name: 'ProtiSpar Top 75',
    manufacturer: 'VILOFOSS',
    description: 'Оптимізація протеїнової годівлі',
    descriptionText: 'Запатентована комбинація деяких ефірних олій: знижує швидке виділення амміаку з амінокислот, без погіршення синтезу оцтової й пропіонової кислот, тому не має негативного впливу на виробництво молока та молочного жиру.',
    category: ['ВРХ дорослі', 'ВРХ молодняк', 'ДРХ', 'Коні'],
    image: imgProductDetailsId5,
    sections: [
      {
        title: 'Переваги:',
        items: ['оптимізує витрати на протеїнову годівлю', 'знижує нагрузку від аміаку на печінку', 'більше протеину потрапляє до тонкого кишківника', 'розвантажує систему енергетичного обміну', 'підтримка здоров’я й відтворної здатності', 'оптимізує економічну ефективність виробництва молока'],
      },
      {
        title: 'Дозування:',
        items: ['75 г/гол/добу']
      },
      {
        title: 'Фасування:',
        items: ['мішок 25 кг']
      },
    ]
  },
  {
    id: 6,
    name: 'Футтергут Румі-Ферм',
    manufacturer: 'VILOFOSS',
    description: 'Оптимізація крохмальної годівлі',
    descriptionText: 'Кормова добавка на основі фермента амілази —  спеціально призначена для годівлі корів.',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId6,
    sections: [
      {
        title: 'Використання:',
        items: ['для оптимізації засвоювання крохмалю в раціонах високопродуктивних корів'],
      },
      {
        title: 'Переваги:',
        items: ['посилює перетравлення крохмалю в рубці та кишковнику', 'покращує перетравлення клітковини в рубці', 'підвищує засвоюваність раціон', 'не змінює pH рубця', 'бореться з негативним впливом додаткового крохмалю на функцію рубця', 'збільшує забезпечення корови ацетатом, глюкозою та енергією для молока, молочного жиру та фертильності'],
      },
      {
        title: 'Дозування:',
        items: ['100-150 г/гол/добу'],
      },
      {
        title: 'Фасування:',
        items: ['мішок 25 кг'],
      },
    ]
  },
  {
    id: 7,
    name: 'Lactoval liquid',
    manufacturer: 'VILOFOSS',
    description: 'Перша випойка після отелу',
    descriptionText: ['ЕНЕРГЕТИЧНИЙ напій для тільки що отелених і виздоровлюючих корів, що містить харчові речовини, мінерали, живі дріжджі й добавки.', 'Також, рекомендовано випоювати Лактоваль тваринам які хворіють, або знаходяться на стадії одужання - як симптоматичний та підтримуючий засіб.'],
    category: ['ВРХ дорослі', 'ВРХ молодняк'],
    image: imgProductDetailsId7,
    sections: [
      {
        title: `Корови охоче п'ють смачне пійло, що містить:`,
        items: [`вітаміни (A, D3, E та вітамін B)`, `електроліти`, `дріжджові клітини`, `речовини, що стабілізують рН рубця`],
      },
      {
        title: `Сприяє:`,
        items: [`зменшенню втрати рідини та електролітів`, `поліпшення рухливості після отелення`, `підвищення вмісту глюкози в крові`, `розвиток мікроорганізмів у рубці`, `оптимізація кислотного рівня в рубці`, `запобігання кетозу`, `зменшення ризику переміщених сичугів`],
      },
      {
        title: `Складові:`,
        items: [`швидкі вуглеводи, бікарбонат натрію, ацетат магнію, насіння ріпаку`],
      },
      {
        title: `Дозування:`,
        items: [`500 г порошку Лактовал, розчинити в 12,5 –15,0 л теплої води й відразу напувати, поки корова не вип'є 20 - 25 літрів рідини`],
      },
      {
        title: `Фасування:`,
        items: [`відро 5 кг / 15 кг`],
      },
    ]
  },
  {
    id: 8,
    name: 'X-Zelit Calcium-Mobilisation',
    manufacturer: 'VILOFOSS',
    description: 'Профілактика гіпокальціємії',
    descriptionText: [`Кормова добавка, на основі синтетичного абсорбенту кальцію`, `Має інертні смакові якості, одже, не знижує поїдання сухої речовини перед отелом.`, `Дає можливість використовувати в раціонах сухостійних корів будь-які корми, не звертаючи увагу на їх поживність по кальцію.`],
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId8,
    sections: [
      {
        title: `Корови охоче п'ють смачне пійло, що містить:`,
        items: [`вітаміни (A, D3, E та вітамін B)`, `електроліти`, `дріжджові клітини`, `речовини, що стабілізують рН рубця`],
      },
      {
        title: `Дозування:`,
        items: [`500 г/гол/добу, за 2-3 тижні до отелу`],
      },
      {
        title: `Фасування:`,
        items: [`мішок 25 кг`],
      },
    ]
  },
  {
    id: 9,
    name: 'Br. Close Up 30 Pro',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Добавка для профілактики гіпокальціємії',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId9,
    sections: [
      {
        title: `Складові:`,
        items: [`екструдовані мелені зернові пластівці, смачні захищені аніонні солі, буферні пробіотичні дріжджі Landhause Pro, високодоступний кальцій та магній, комплекс з вітамінів та мікроелементів`],
      },
      {
        title: `Практичний досвід з Browser® XXL Close Up 30:`,
        items: [`запобігання субклінічній та клінічній молочній лихоманці`, `поліпшене споживання кормів перет отелом`, `метаболічно стабільні та продуктивні тварини`, `високий рівень продуктивності на початку лактації`, `найкращі інгредієнти молока`],
      },
      {
        title: `Дозування:`,
        items: [`30 - 40кг/т к/корму = 0,8-1,2 кг/гол на добу`],
      },
      {
        title: `Фасування:`,
        items: [`мішок 25 кг`],
      },
    ]
  },
  {
    id: 10,
    name: 'Clex® blue drink',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: `Рідкий мінерально–вітамінний підкислювач`,
    category: ['Підходе для всіх'],
    image: imgProductDetailsId10,
    sections: [
      {
        title: `Складові:`,
        items: [`кальцію пропіонат, аммонію фосфат, кальцію ацетат, 750 мг, мідь, 3.000 мг цинк. Консерванти: ортофосфорна кислота (E 338), муравїна кислота (E 236), лимонна кислота (E 330)`],
      },
      {
        title: `Дозування, г/гол на добу:`,
        items: [`підсосні свиноматки: 50 - 80`, `супоросні свиноматки: 20 - 30`, `поросята: 5 - 15`, `свині на відгодівлі: 20 - 25`, `молочні корови (сух. / лакт.*): 200 - 250`, `бички на відгодівлі*: 100 - 120`, `бройлери (з питною водою на 1.000 л): 1.500 - 2.500`, `кури несучки й батьки 1.000 - 3.000 (з питною водою на 1.000 л)`],
      },
      {
        title: `Переваги:`,
        items: [`оптимальна гігієна води й кормів`, `дуже смачний`, `легко дозується`, `покращує конверсію кормів`, `захист ворсинок ШКТ`, `зміцнення іммунної системи`, `покращує засвоєння протеїнів`, `гарна постність м'яса`, `недорогий й висококонцентрований`],
      },
      {
        title: `Фасування:`,
        items: [`каністра 25 кг`, `бочка 250 кг`, `контейнер 1000 кг`],
      },
    ]
  },
  {
    id: 11,
    name: 'Clex® Beta-Inulin met BLUE',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: `Імуностимулююча кормова добавка`,
    category: ['Підходе для всіх'],
    image: imgProductDetailsId11,
    sections: [
      {
        title: `Складові:`,
        items: [`пульпа цикорію (суха), моногліціриди з харчових жирных кислот й гліцерин, цикорій-інулін, карбонат кальцію, ізомальтулоза меласса, ароматизатори`],
      },
      {
        title: `Дозування:`,
        items: [`супоросні свиноматки 0,8 - 1,0 %`, `підсосні свиноматки 1,0 - 1,5 %`, `поросята 1,5 - 2,5 %`, `свині на відгодівлі 0,5 - 2,0 %`, `кури несучки й кури батьківське стадо 1,0 - 1,5 %`, `бройлери 1,5 - 2,0 %`, `телята 1,5 - 2,0 %`],
      },
      {
        title: `Переваги:`,
        items: [`має приємні смакові якості`, `профілактує діареї після відлучення й в боксах для опоросу, завдяки покращенню функції шлунку и ШКТ`, `підсилює самовідновлення кишковика, сприяє зміцненню імуної системи`, ` ідеальне доповнення раціонів на основі сої й оптимальне співвідношення по амінокислотам`],
      },
      {
        title: `Фасування:`,
        items: [`мішок 25 кг`],
      },
    ]
  },
  {
    id: 12,
    name: 'Quattro drink',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Рідкий підкислювач для всіх видів тварин',
    category: ['ВРХ молодняк', 'ДРХ', 'Свині', 'Птиця'],
    image: imgProductDetailsId12,
    sections: [
      {
        title: `Складові:`,
        items: [`метіонін гідрокси-аналог (3c307), суміш органічних кислот: мурашина кислота (Е 236), оцтова кислота (Е 260), пропіонова кислота (Е 280). Ароматичні добавки: бензойна кислота (2b08021) 1350 мг/кг`],
      },
      {
        title: `Мета використання:`,
        items: [`сприяє кращій гігієні кормів завдяки використанню органічних кислот`, `середньоланцюгові жирні кислоти запобігають розмноженню небажаних мікроорганізмів, таких як стрептококи, стафілококи, кишкова паличка, сальмонела, ілеїт (PIA), а також, клостридій та вірусів в шлунку, рубці та кишечнику`, `велика кількість бетаїну та інуліну сприяє перетравленню клітковини, засвоєнню вітамінів і амінокислот, забезпечує покращення метаболізму, має позитивний вплив на захист клітин печінки`, `метіонін, часник і орегано запобігають запаленням`],
      },
      {
        title: `Дозування (вводити у кормову суміш в наступних кількостях, г/гол/добу):`,
        items: [`поросні свиноматки 25-30 г`, `лактуючі свиноматки 45-100 г`, `поросята 15-20 г`, `свині гровер 20-30 г`, `свині фініш 25-35 г`, `свині (рідка годівля) 0,4-0,6 % до TMR`, `свині (суха годівля) 1-1,5 %`, `телята, молодняк ВРХ, корови 0,4-0,6 %`, `птиця (суха годівля) 1 %`, `вівці, ягнята 0,8 - 1,0 % до TMR`, `вівці, ягнята 1,5 %`],
      },
      {
        title: `Фасування:`,
        items: [`каністра 25 л`],
      },
    ]
  },
  {
    id: 13,
    name: 'Clex Vit Hefe 4',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Премікс+сорбент токсинів',
    category: ['Підходе для всіх'],
    image: imgProductDetailsId1,
  },
  {
    id: 14,
    name: 'Anta®Ferm MT80',
    manufacturer: 'VILOFOSS',
    description: 'Сорбент токсинів комплексний',
    category: ['Підходе для всіх'],
    image: imgProductDetailsId1,
  },
  {
    id: 15,
    name: 'SuperSorber Mykotoxinbinder',
    manufacturer: 'VILOFOSS',
    description: 'Сорбент токсинів',
    category: ['Підходе для всіх'],
    image: imgProductDetailsId1,
  },
  {
    id: 16,
    name: 'Pansen-Neutral',
    manufacturer: 'VILOFOSS',
    description: 'Буферна кормова добавка',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 17,
    name: 'Acid-Control',
    manufacturer: 'VILOFOSS',
    description: 'Буферна кормова добавка',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 18,
    name: 'Biotin 750',
    manufacturer: 'VILOFOSS',
    description: 'Концентрат Біотину',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 19,
    name: 'Beta-Carotin',
    manufacturer: 'VILOFOSS',
    description: 'Концентрат каротину',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 20,
    name: 'Kuhpower',
    manufacturer: 'VILOFOSS',
    description: 'Спеціальна дріжджова добавка',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 21,
    name: 'Elbe Trockenfett DF',
    manufacturer: 'VILOFOSS',
    description: 'Фракціонований захищений жир',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 22,
    name: 'Профат',
    manufacturer: 'Schils',
    description: 'Кальцінований захищений жир',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 23,
    name: 'Propylenglycol',
    manufacturer: 'VILOFOSS',
    description: 'Енергетична рідка добавка',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 24,
    name: 'Glycerine 80%',
    manufacturer: 'VILOFOSS',
    description: 'Енергетична рідка добавка',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 25,
    name: 'VitaloMix',
    manufacturer: 'VILOFOSS',
    description: 'Престартер у вигляді мюсли',
    category: ['ВРХ молодняк'],
    image: imgProductDetailsId1,
  },
  {
    id: 26,
    name: 'Ruminito TMR',
    manufacturer: 'VILOFOSS',
    description: '10% ядро для кормів телятам',
    category: ['ВРХ молодняк'],
    image: imgProductDetailsId1,
  },
  {
    id: 27,
    name: 'Vollmilch plus',
    manufacturer: 'VILOFOSS',
    description: 'Збагачувач незбираного молока',
    category: ['ВРХ молодняк'],
    image: imgProductDetailsId1,
  },
  {
    id: 28,
    name: 'Євролак (зелений)',
    manufacturer: 'Schils',
    description: 'ЗНМ для телят з 3-ї доби життя',
    category: ['ВРХ молодняк'],
    image: imgProductDetailsId1,
  },
  {
    id: 29,
    name: 'RoCoSal E',
    manufacturer: 'VILOFOSS',
    description: 'Профілактика діареї у телят',
    category: ['ВРХ молодняк'],
    image: imgProductDetailsId1,
  },
  {
    id: 30,
    name: 'Dialyt Express',
    manufacturer: 'VILOFOSS',
    description: 'Швидке лікування діареї у телят',
    category: ['ВРХ молодняк', 'ДРХ', 'Коні'],
    image: imgProductDetailsId1,
  },
  {
    id: 31,
    name: 'RespoSan',
    manufacturer: 'VILOFOSS',
    description: 'Профілактика респіраторних хвороб у телят',
    category: ['ВРХ молодняк'],
    image: imgProductDetailsId1,
  },
  {
    id: 32,
    name: 'ProbioBona',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Рідкий пероральний пробіотик в шприці',
    category: ['Підходе для всіх'],
    image: imgProductDetailsId1,
  },
  {
    id: 33,
    name: 'Marathon Top',
    manufacturer: 'VILOFOSS',
    description: 'Спеціальний Премікс',
    category: ['ВРХ дорослі', 'ВРХ молодняк'],
    image: imgProductDetailsId1,
  },
  {
    id: 34,
    name: 'Stalosan F',
    manufacturer: 'VILOFOSS',
    description: 'Дезинфектант в присутності тварин',
    category: ['Підходе для всіх'],
    image: imgProductDetailsId1,
  },
  {
    id: 35,
    name: 'БІО-СИЛ',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Інокулянт для силосування',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 36,
    name: 'Sweet-Min Schafe',
    manufacturer: 'VILOFOSS',
    description: 'Лизунець меласований для овець',
    category: ['ДРХ'],
    image: imgProductDetailsId1,
  },
  {
    id: 37,
    name: 'FUTTERGUT™',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Кормові концентрати та премікси для свиней, птиці, ВРХ',
    category: ['Підходе для всіх'],
    image: imgProductDetailsId1,
  },
  {
    id: 38,
    name: 'Престартер для телят',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Престартер для телят. Гранула.',
    category: ['ВРХ молодняк'],
    image: imgProductDetailsId1,
  },
  {
    id: 39,
    name: 'БМВД (універсальний)',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'БМВД. Гранула.',
    category: ['ВРХ дорослі', 'ВРХ молодняк', 'ДРХ', 'Коні'],
    image: imgProductDetailsId1,
  },
  {
    id: 40,
    name: 'БМВД для корів',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Для лактуючих корів.',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 41,
    name: 'Гранула для корів',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Годівля на роботах',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 42,
    name: 'Премікс для дійних корів 1%',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Премікс з/без живими дріжджами',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 43,
    name: 'Футтергут-Лєвуселл для ВРХ',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Добавка з живими дріжджами',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 44,
    name: 'Премікс для дійних корів 3%',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Вітаміно-мінеральний Премікс',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 45,
    name: 'Премікс для сухостійних корів',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Премікс для сухостійних корів',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 46,
    name: 'AnkonaF/buffer/150',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Буферна добавка',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 47,
    name: 'Futtergut Hy-М',
    manufacturer: 'FUTTERGUT - надійна годівля',
    description: 'Регулює кальцій-фосфорний метаболізм + іммунітет',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 48,
    name: 'NutriBos N 85 і NutriBos N 65',
    manufacturer: 'NUTRIBOS',
    description: 'Захищена сечовина (Хорватія)',
    category: ['ВРХ дорослі', 'ДРХ'],
    image: imgProductDetailsId1,
  },
  {
    id: 49,
    name: 'NutriBos VN 75 і COMPLETE',
    manufacturer: 'NUTRIBOS',
    description:
      'Комплексні продукти с захищеною сечовиною у складі (Хорватія)',
    category: ['ВРХ дорослі'],
    image: imgProductDetailsId1,
  },
  {
    id: 50,
    name: 'SEGAWEAN® Boost',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Премікс для свиней на відгодівлі 30-60 кг, 4,5%',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 51,
    name: 'SEGAWEAN® F49 A3',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Премікс для свиней на відгодівлі від 60 кг, 3,3%',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 52,
    name: 'SOW Day 7® Farrow Feed',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Премікс для свиноматок у транзитний період',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 53,
    name: 'SEGAWEAN® SL Wean',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Премікс для лактуючих свиноматок, 5%',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 54,
    name: 'SEGAWEAN® SFT',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Премікс для супоросних свиноматок, 3%',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 55,
    name: 'SEGAWEAN® P5 +2 3 6',
    manufacturer: 'Ahrhoff FUTTERGUT',
    description: 'Премікс для поросят до 30 кг 6,5%',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 56,
    name: 'Maxi-Cox Dry для птиці',
    manufacturer: 'ETOS',
    description:
      'Модулятор мікробіому; Кокцидіостатик; Суміш органічних кислот',
    category: ['Птиця'],
    image: imgProductDetailsId1,
  },
  {
    id: 57,
    name: 'Maxi-Pi-Blok Dry - для свиней',
    manufacturer: 'ETOS',
    description:
      'Модулятор мікробіому; Альтернатива антибіотику; Суміш органічних кислот',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 58,
    name: 'Hy-M для свиней',
    manufacturer: ['ANKONA', 'FUTTERGUT - надійна годівля'],
    description:
      'Модулятор мікробіому; Альтернатива антибіотику; Суміш органічних кислот',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
  {
    id: 59,
    name: 'Hy-M для батьківського стада птиці',
    manufacturer: ['ANKONA', 'FUTTERGUT - надійна годівля'],
    description: 'Підвищення рівня вітаміну D3 у сироватці крові',
    category: ['Птиця'],
    image: imgProductDetailsId1,
  },
  {
    id: 60,
    name: 'Hy-M для бройлерів',
    manufacturer: ['ANKONA', 'FUTTERGUT - надійна годівля'],
    description: 'Підвищення рівня вітаміну D3 у сироватці крові',
    category: ['Птиця'],
    image: imgProductDetailsId1,
  },
  {
    id: 61,
    name: 'Hy-M для несучки',
    manufacturer: ['ANKONA', 'FUTTERGUT - надійна годівля'],
    description: 'Підвищення рівня вітаміну D3 у сироватці крові',
    category: ['Птиця'],
    image: imgProductDetailsId1,
  },
  {
    id: 62,
    name: 'Мультіцид Форте',
    manufacturer: ['ETOS'],
    description: 'Додаткова кормова суміш',
    category: ['Підходе для всіх'],
    image: imgProductDetailsId1,
  },
  {
    id: 63,
    name: 'Цітро',
    manufacturer: ['Agro-Bizek'],
    description: 'Ультрабіотик',
    category: ['Підходе для всіх'],
    image: imgProductDetailsId1,
  },
  {
    id: 64,
    name: 'Арбоцель',
    manufacturer: ['JRS'],
    description: 'Концентрат сирої клітковини для свиней',
    category: ['Свині'],
    image: imgProductDetailsId1,
  },
];

export function addNewEvent(newEvent) {
  products.push(newEvent);
}
