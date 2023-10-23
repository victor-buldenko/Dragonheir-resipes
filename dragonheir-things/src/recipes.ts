export enum EType {
  fire = 'el-fire.png',
  ice = 'el-ice.png',
  lightning = 'el-lightning.png',
  necro = 'el-necro.png',
  poison = 'el-poison.png',
  radiance = 'el-radiance.png',
  health = 'hearth.png',
  resist = 'resist.png',
  defence = 'shield.png',
  attack = 'sword.png',
  accuracy = 'target.png',
  talk = 'talk.png',
  speed = 'speed.png',
  sweets = 'drugs.png',
}

export const buffList = [
  'all',
  'attack',
  'defence',
  'health',
  'resist',
  'accuracy',
  'fire',
  'ice',
  'lightning',
  'necro',
  'poison',
  'radiance',
  'talk to animal',
  'movespeed',
  'sweets',
];

export interface Recipes {
  id: number;
  name: string;
  icons: EType[];
  result: string[];
  ingr?: string[] | null;
  altIngr?: string[] | null;
}

export const recipes: Recipes[] = [
  {
    id: 0,
    name: 'горшок рагу бездны',
    icons: [EType.necro, EType.attack],
    result: ['+5% урон смерти', '+10% к атаке'],
    ingr: ['2х мясо зверя/кабана', '2х панцирь краба зомби'],
    altIngr: null,
  },
  {
    id: 1,
    name: 'арктический успокаивающий суп',
    icons: [EType.ice, EType.attack],
    result: ['+5% урон холодом', '+10% к атаке'],
    ingr: ['2х мясо зверя/кабана', '2х полярная треска'],
    altIngr: null,
  },
  {
    id: 2,
    name: 'громовое пиршество',
    icons: [EType.lightning, EType.attack],
    result: ['5% к урону молнией', '+10% к атаке'],
    ingr: ['2х мясо зверя/кабана', '2х зарядившийся угорь'],
    altIngr: null,
  },
  {
    id: 3,
    name: 'котлета с очень острым чили',
    icons: [EType.fire, EType.attack],
    result: ['+5% к урону огнём', '+10% к атаке'],
    ingr: ['2х мясо зверя/кабана', '2х очень острый чили'],
    altIngr: ['2х обгоревшее мясо', '1х редкое мясо', '1х редкие овощи'],
  },
  {
    id: 4,
    name: 'осквернённый мясной пирог',
    icons: [EType.poison, EType.attack],
    result: ['+5% урону ядом', '+10% к атаке'],
    ingr: ['2х мясо зверя/кабана', '2х ядовитый мухомор'],
    altIngr: ['2х мясо ядовитого кабана', '1х редкое мясо', '1х редкие овощи'],
  },
  {
    id: 5,
    name: 'трапеза света',
    icons: [EType.radiance, EType.attack],
    result: ['+5% урон сиянием', '+10% к атаке'],
    ingr: ['2х мясо зверя/кабана', '2х плод священного света'],
    altIngr: null,
  },
  {
    id: 6,
    name: 'печень сома в зеленом соусе',
    icons: [EType.poison, EType.defence],
    result: ['+5% урону ядом', '"+10% к защите"'],
    ingr: ['2х паутинный сом', '2х редкая рыба'],
    altIngr: null,
  },
  {
    id: 7,
    name: 'молитвенная икра',
    icons: [EType.radiance, EType.defence],
    result: ['+5% урон сиянием', '+10% к защите'],
    ingr: ['2х пиранья/лосось', '2х плод священного зверя'],
    altIngr: ['2х светящиеся рыбные икринки', 'х редкая рыба'],
  },
  {
    id: 8,
    name: 'нортландское желе ассорти',
    icons: [EType.ice, EType.defence],
    result: ['+5% урон холодом', '+10% к защите'],
    ingr: ['2х арбортейский томат', '2х полярная треска'],
    altIngr: ['2х арбортейский томат', '2х лёд с высокой гряды'],
  },
  {
    id: 9,
    name: 'поминальная трапеза',
    icons: [EType.necro, EType.defence],
    result: ['+5% урон смерти', '+10% к защите'],
    ingr: ['2х пиранья/лосось', '2х панцирь краба зомби'],
    altIngr: ['2х пиранья/лосось', '2х внутрености призрака'],
  },
  {
    id: 10,
    name: 'электрический ром света',
    icons: [EType.lightning, EType.defence],
    result: ['+5% урон молнией', '+10% к защит'],
    ingr: ['2х обгоревшие мясо', '2х мясо зверя'],
    altIngr: null,
  },
  {
    id: 11,
    name: 'мясо инферниона',
    icons: [EType.fire, EType.defence],
    result: ['+5% к урону огнём', '+10% к защите'],
    ingr: ['2х обгоревшие мясо', '2х мясо зверя'],
    altIngr: null,
  },
  {
    id: 12,
    name: 'пюре из мышиного картофеля',
    icons: [EType.necro, EType.resist],
    result: ['+5% урон смерти', '+15 сопротивление'],
    ingr: ['2х гнилевой ямс', '2х арбортейский томат'],
    altIngr: ['4х гнилевой ямс'],
  },
  {
    id: 13,
    name: 'суп из ядовитых грибов',
    icons: [EType.poison, EType.resist],
    result: ['+5% урону ядом', '+15 сопротивление'],
    ingr: ['2х арбортейский томат', '2х мясо кабана с ядовитого болота'],
    altIngr: ['2х арбортейский томат', '2х ядовитый мухомор'],
  },
  {
    id: 14,
    name: 'искристое грибное шампанское',
    icons: [EType.radiance, EType.resist],
    result: ['+5% урон сиянием', '+15 сопротивление'],
    ingr: ['2х световик', '1х сорстонская дыня'],
    altIngr: null,
  },
  {
    id: 15,
    name: 'разговорный порошок',
    icons: [EType.talk],
    result: ['Возможность общаться с животными'],
    ingr: ['2х пиранья', '2х крылья черно-крапчатого мотылька'],
    altIngr: null,
  },
  {
    id: 16,
    name: 'настойка Уэруса',
    icons: [EType.speed],
    result: ['увеличение скорости движения'],
    ingr: ['1х аквитанское яблоко', '1х ягоды быстронога'],
    altIngr: ['4х ягоды быстронога'],
  },
  {
    id: 17,
    name: 'red sweets',
    icons: [EType.sweets],
    result: ['...а ты попробуй...'],
    ingr: ['1х алый ирис', '1х редкий компонент'],
    altIngr: null,
  },
  {
    id: 18,
    name: 'аквитанский йогурт',
    icons: [EType.accuracy, EType.resist],
    result: ['+20 к точности', '+20 к сопротивлению'],
    ingr: ['2х аквитанское яблоко', '2х молоко яка'],
    altIngr: null,
  },
  {
    id: 19,
    name: 'сушеная фруктовая ящереца',
    icons: [EType.accuracy, EType.resist],
    result: ['+20 к точности', '+20 к сопротивлению'],
    ingr: ['невідомо'],
    altIngr: null,
  },
  {
    id: 20,
    name: 'Арботейская тушёная говядина',
    icons: [EType.attack, EType.accuracy],
    result: ['+10% к атаке', '+15 к точности'],
    ingr: ['2х мясо зверя', '1х арбортейский томат'],
    altIngr: null,
  },
  {
    id: 21,
    name: 'барбекю из сорстона',
    icons: [EType.attack, EType.accuracy],
    result: ['+8% к атаке', '+15 к точности'],
    ingr: ['2х мясо зверя/кабана', '1х сорстонская дыня'],
    altIngr: null,
  },
  {
    id: 22,
    name: 'пресное рагу',
    icons: [EType.attack, EType.accuracy],
    result: ['+4% к атаке', '+10 к точности'],
    ingr: ['2х эстрагон из люмины', '1х редкое мясо'],
    altIngr: null,
  },
  {
    id: 23,
    name: 'аквитанский мясной пирог',
    icons: [EType.attack, EType.health],
    result: ['+10% к макс ОЗ', '+5% к атаке'],
    ingr: ['2х эльфийская пшеница', '1х мясо кабана'],
    altIngr: null,
  },
  {
    id: 24,
    name: 'благословение драконьего божества',
    icons: [EType.health, EType.attack],
    result: ['+10% к макс ОЗ', '+5% к атаке'],
    ingr: [
      '2х эльфийская пшеница',
      '1х эстрагон из люмины',
      '1х мясо зверя/мясо кабана',
    ],
    altIngr: null,
  },
  {
    id: 25,
    name: 'рыбный пирожок рудоискателя',
    icons: [EType.defence, EType.accuracy],
    result: ['+10% к защите', '+15 к точности'],
    ingr: ['2х пиранья/лосось', '1х сорстонская дыня'],
    altIngr: null,
  },
  {
    id: 26,
    name: 'виноградное вино из залива',
    icons: [EType.accuracy, EType.health],
    result: ['+20 к точности', '+4% к макс. ОЗ'],
    ingr: ['2х виноград из залива', '2х пшеницы'],
    altIngr: ['2х виноград из залива', '1х эльфийская пшеница'],
  },
  {
    id: 27,
    name: 'пирог с оленьими рогами',
    icons: [EType.health, EType.accuracy],
    result: ['+10% к макс ОЗ', '+15 к точности'],
    ingr: ['2х эльфийская пшеница', '1х арбортейский томат'],
    altIngr: null,
  },
  {
    id: 28,
    name: 'королевский рыбный суп',
    icons: [EType.defence, EType.accuracy],
    result: ['+10% к защите', '+15 к точности'],
    ingr: ['2х большеротый лосоcь', '1х арбортейский томат'],
    altIngr: null,
  },
  {
    id: 29,
    name: 'арктический желатин',
    icons: [EType.ice],
    result: ['+3% к урону холодом'],
    ingr: ['2х полярная треска', '(или 2х лёд с высокой гряды)'],
    altIngr: ['1х полярная треска', '1х любой метериал'],
  },
  {
    id: 30,
    name: 'громовая помадка',
    icons: [EType.lightning],
    result: ['+3% к урону молнией'],
    ingr: ['2х зарядившийся угорь', '(или 2х трескающийся фрукт)'],
    altIngr: ['1х зарядившийся угорь/ трескающиеся фрукт', '1х любой метериал'],
  },
  {
    id: 31,
    name: 'крепкое спиртное из эктоплазмы',
    icons: [EType.necro],
    result: ['+3% к урону смерти'],
    ingr: ['2х внутрености призрака', '(или 2х панцирь краба зомби)'],
    altIngr: [
      '1х внутрености призрака/ панцирь краба-зомби',
      '1х любой метериал',
    ],
  },
  {
    id: 32,
    name: 'кристалл благословения',
    icons: [EType.radiance],
    result: ['+3% к урону сиянием'],
    ingr: ['2х плод священного света', '(или 2х светящиейся рыбьи икринки)'],
    altIngr: [
      '1х плод священного света/ светящиейся рыбьи икринки',
      '1х любой метериал',
    ],
  },
  {
    id: 33,
    name: 'очень острый соус чили',
    icons: [EType.fire],
    result: ['+3% к урону огнем'],
    ingr: ['2х очень острый чили', '(или 2х обгоревшее мясо зверя)'],
    altIngr: ['1х очень острый чили', '1х любой метериал'],
  },
  {
    id: 34,
    name: 'тоник из миазмов',
    icons: [EType.poison],
    result: ['+3% к урону ядом'],
    ingr: ['2х мясо кабана с ядовитого болота', '(или 2х ядовитый мухомор)'],
    altIngr: [
      '1х мясо кабана с ядовитого болота/ мухомор',
      '1х любой метериал',
    ],
  },
  {
    id: 35,
    name: 'элитный тоник',
    icons: [EType.health],
    result: ['Полностью восстанавливает ОЗ всех героев'],
    ingr: ['2х золотистая восстанавливающая трава', '1х любой материал'],
    altIngr: null,
  },
  {
    id: 36,
    name: 'изысканый тоник',
    icons: [EType.health],
    result: ['Полностью восстанавливает ОЗ всех членов комманды'],
    ingr: ['2х крастнолистная восстанавливающая трава'],
    altIngr: null,
  },
  {
    id: 37,
    name: 'простой тоник',
    icons: [EType.health],
    result: ['Полностью восстанавливает ОЗ одного героя'],
    ingr: ['2х призрачная восстанавливающая трав'],
    altIngr: ['2х восст трава или 1х призачная 1х восст'],
  },
  {
    id: 38,
    name: 'тушеный хвост ящерецы',
    icons: [EType.attack],
    result: ['+10% к атаке'],
    ingr: ['2х хвосты шипоспинов', '1х мясо зверя/кабана'],
    altIngr: null,
  },
  {
    id: 39,
    name: 'копченая ветчина',
    icons: [EType.attack],
    result: ['+10% к атаке'],
    ingr: ['3х мясо зверя/кабана'],
    altIngr: null,
  },
  {
    id: 40,
    name: 'мясной пирог',
    icons: [EType.health, EType.attack],
    result: ['+8% к макс ОЗ', '+4% к атаке'],
    ingr: ['2х эльфийская пршеница', '1х мясо зверя'],
    altIngr: null,
  },
  {
    id: 41,
    name: 'Похлебка из морепродуктов',
    icons: [EType.defence],
    result: ['+10% к защите'],
    ingr: ['3х большеротый лосось'],
    altIngr: null,
  },
  {
    id: 42,
    name: 'рыбный суп с зелёными листьями',
    icons: [EType.defence, EType.accuracy],
    result: ['+8% к защите', '+10 к точности'],
    ingr: ['2х пиранья', '1х арбортейский томат'],
    altIngr: null,
  },
  {
    id: 43,
    name: 'сладкая булочка',
    icons: [EType.health],
    result: ['+10% к макс ОЗ'],
    ingr: ['3х эльфийская пшеница'],
    altIngr: null,
  },
  {
    id: 44,
    name: 'жареная пшеничная мука',
    icons: [EType.health],
    result: ['+8% к макс ОЗ'],
    ingr: ['3х редкая пшеница'],
    altIngr: null,
  },
  {
    id: 45,
    name: 'сладкое фруктовое вино',
    icons: [EType.accuracy],
    result: ['25+ к точности'],
    ingr: ['3х аквитанское яблоко'],
    altIngr: null,
  },
  {
    id: 46,
    name: 'творожник',
    icons: [EType.resist],
    result: ['+25 к сопротивлению'],
    ingr: ['3х молоко яка/козье'],
    altIngr: null,
  },
  {
    id: 47,
    name: 'тушеная говядина',
    icons: [EType.attack, EType.accuracy],
    result: ['+8% к атаке', '+10 к точности'],
    ingr: ['2х мясо зверя', '2х соцветие капусты'],
    altIngr: ['2х мясо кабана', '1х сорстонская дыня'],
  },
  {
    id: 48,
    name: 'фруктовый йогурт',
    icons: [EType.accuracy, EType.resist],
    result: ['+15 к точности', '+15 к сопротивлению'],
    ingr: ['2х аквитанское яблоко', '2х козье молоко'],
    altIngr: null,
  },
  {
    id: 49,
    name: 'фруктовый пирог',
    icons: [],
    result: ['+8% к макс ОЗ', '+10 к сопротивлению'],
    ingr: ['2х эльфийская пшеница', '1х аквитанское яблоко'],
    altIngr: null,
  },
  {
    id: 50,
    name: 'кубики сливочного бисквита',
    icons: [EType.health, EType.resist],
    result: ['+4% к макс ОЗ', '+10 к сопротивлению'],
    ingr: ['2х эльфийская пшеница', '1х козье молоко/яка'],
    altIngr: null,
  },
  {
    id: 51,
    name: 'молочно-фруктовый коктейль',
    icons: [EType.accuracy, EType.resist],
    result: ['+10 к точности', '+5 к сопротивлению'],
    ingr: ['1х аквитанское яблоко', '1х молоко(или 1х молоко козье/яка)'],
    altIngr: null,
  },
  {
    id: 52,
    name: 'пирог с рыбой',
    icons: [EType.health, EType.defence],
    result: ['+4% к макс ОЗ', '+2% к защите'],
    ingr: ['1х эльфийская пшеница', '1х пиранья/лосось'],
    altIngr: null,
  },
  {
    id: 53,
    name: 'рыба с картошкой',
    icons: [EType.attack, EType.defence],
    result: ['+4% к атаке', '+4% к защите'],
    ingr: ['1х мясо зверя/кабана', '1х пиранья/лосось'],
    altIngr: null,
  },
  {
    id: 54,
    name: 'салат со звериным мясом',
    icons: [EType.attack, EType.accuracy],
    result: ['+4% к атаке', '+10 к точности'],
    ingr: ['1х мясо зверя', '2х соцветие капусты'],
    altIngr: null,
  },
  {
    id: 55,
    name: 'спагетти болоньзе',
    icons: [EType.health, EType.attack],
    result: ['+4% к макс ОЗ', '+2% к атаке'],
    ingr: ['1х эльфийская пшеница', '1х мясо зверя/кабана'],
    altIngr: null,
  },
  {
    id: 56,
    name: 'котлета',
    icons: [EType.attack],
    result: ['+4% к атаке'],
    ingr: ['1х мясо зверя', '1х соцветие капусты (или 2х мясо зверя)'],
    altIngr: null,
  },
  {
    id: 57,
    name: 'высушенные панцири пустотных червей',
    icons: [EType.attack],
    result: ['+3% к атаке'],
    ingr: ['2х внешний скелет личинки пустотного червя'],
    altIngr: null,
  },
  {
    id: 58,
    name: 'кусочек вяленого мяса',
    icons: [EType.attack],
    result: ['+2% к атаке'],
    ingr: [
      '1х призрачная восстанавливающая трава',
      '1х внешний скелет личинки пустотного червя',
    ],
    altIngr: null,
  },
  {
    id: 59,
    name: 'рыбный суп со вкусом умами',
    icons: [EType.defence],
    result: ['+4% к защите'],
    ingr: ['2х красный карп'],
    altIngr: null,
  },
  {
    id: 60,
    name: 'жареные креветки',
    icons: [EType.defence],
    result: ['+4% к защите'],
    ingr: ['2х усатые креветки'],
    altIngr: null,
  },
  {
    id: 61,
    name: 'запечённые с солью морепродукты',
    icons: [EType.defence],
    result: ['+2% к защите'],
    ingr: ['1х молоко', '1х красный карп(молюск)'],
    altIngr: null,
  },
  {
    id: 62,
    name: 'бисквит',
    icons: [EType.health],
    result: ['+4% к макс ОЗ'],
    ingr: ['2х пшеницы'],
    altIngr: null,
  },
  {
    id: 63,
    name: 'простая лапша',
    icons: [EType.health],
    result: ['+2% к макс ОЗ'],
    ingr: ['1х пшеницы', '1х соцветие капусты/молоко'],
    altIngr: null,
  },
  {
    id: 64,
    name: 'сыр из снежной земли',
    icons: [EType.defence],
    result: ['10+ к сопротивлению'],
    ingr: ['2х молоко'],
    altIngr: null,
  },
  {
    id: 65,
    name: 'ферментированный йогурт',
    icons: [EType.resist],
    result: ['+5 к сопротивлению'],
    ingr: ['1х молоко', '1х восстанавливающая трава(призрачная)'],
    altIngr: null,
  },
  {
    id: 66,
    name: 'овощной салат',
    icons: [EType.accuracy],
    result: ['+10 к точности'],
    ingr: ['2х соцветие капусты'],
    altIngr: null,
  },
  {
    id: 67,
    name: 'тарелка фруктов',
    icons: [EType.accuracy],
    result: ['+10 к точности'],
    ingr: ['2х дикая малина'],
    altIngr: null,
  },
  {
    id: 68,
    name: 'маринованые капустные кочерыжки',
    icons: [EType.accuracy],
    result: ['+10 к точности'],
    ingr: ['2х стебель чернокорня'],
    altIngr: null,
  },
  {
    id: 69,
    name: 'овощной сок',
    icons: [EType.accuracy],
    result: ['+5 к точности'],
    ingr: ['1х соцветие капусты', '1х молоко'],
    altIngr: null,
  },
  {
    id: 70,
    name: 'фруктовый сок',
    icons: [EType.accuracy],
    result: ['+5 к точности'],
    ingr: ['	1х дикая малина', '1х молоко'],
    altIngr: null,
  },
];
