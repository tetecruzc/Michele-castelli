
export const booksCategories : Record<any,any> = [
    {name: 'all'},
    {name: 'translated'},
    {name: 'italian'},
    {name: 'spanish'},
    {name: 'dialecto'}
]


export var books : Record<any,any> =[
    {
        id: 29,
        name: 'Dieci fiabe per i miei nipotini',
        filter: 'inedit',
        categories: ['italian'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id29.description[0].text`},
        ],
        top: true
    },
    {
        id: 30,
        name: 'IL TESORO SFUMATO',
        filter: 'inedit',
        categories: ['italian'],
        show:{
            position: 0
        },
        ignoreDownload: false,
        description:[
            {text: `books.id30.description[0].text`},
        ],
        top: true
    },
    {
        id: 28,
        name: 'DIÁSPORA. Cuentos de emigración. Versión en español',
        filter: 'published',
        categories: ['spanish'],
        show:{
            position: 0
        },
        ignoreDownload: true,
        buyLink: 'https://a.co/d/i1w8PYA',
        description:[
            {text: `books.id28.description[0].text`},
        ],
        top: true
    },
    {
        id: 33,
        name: 'DIÁSPORA. Cuentos de emigración. Versión en italiano',
        filter: 'published',
        categories: ['italian'],
        show:{
            position: 0
        },
        ignoreDownload: false,
        description:[
            {text: `books.id28.description[0].text`},
        ],
        top: true
    },
    {
        id: 34,
        name: 'DIÁSPORA. Cuentos de emigración. Versión en Portugués.',
        filter: 'published',
        categories: ['translated'],
        show:{
            position: 0
        },
        ignoreDownload: true,
        buyLink: 'https://a.co/d/0nZ6GGu',
        description:[
            {text: `books.id28.description[0].text`},
        ],
        top: true
    },
    {
        id: 31,
        name: 'Con los ojos de Agnese',
        filter: 'published',
        categories: ['spanish','translated'],
        show:{
            position: 0
        },
        ignoreDownload: true,
        buyLink: 'Amazon.com/author/rita-frattolillo',
        description:[
            {text: `books.id31.description[0].text`},
        ],
        top: true
    },
    {
        id: 32,
        name: 'C’era una volta... Giuseppe',
        filter: 'inedit',
        categories: ['italian'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id32.description[0].text`},
        ],
        top: true
    },
    {
        id:10,
        filter: 'published',
        name: 'Curso de fonética del español de Venezuela',
        categories: ['spanish'],
        image: 'https://static.wixstatic.com/media/413b22_e02067f5aef34dccb00a4bae2c0c0b3c.jpg/v1/fill/w_240,h_379,al_c,q_80,usm_0.66_1.00_0.01/413b22_e02067f5aef34dccb00a4bae2c0c0b3c.webp',
        top: true,
        show:{
            position: 1
        },
        description:[
            {text: 'books.id10.description[0].text'},
            {text: 'books.id10.description[1].text',
             position: 'end'
            }
        ],
        gallery:[
            {text: 'books.id10.gallery[0].text'}
        ]
    },
    {
        id: 15,
        filter: 'published',
        name: 'Antologia Poetica Dialectale, di Raffaele Caprigliore',
        categories: ['dialecto'],
        gallery: [
            {text: 'books.id15.gallery[0].text'}
        ],
        top: true,
        show: {
            position: 0
        },
        description:[
            {text: 'books.id15.description[0].text'}
        ],
        videos:[
            {title: 'U LUTǝMǝ SABBǝTǝ D’ABBRILǝ', text:'A cura della compagnia teatrale  SCÉMǝ SÈMBǝ NUJǝ', source:'https://www.youtube.com/embed/fHgrxVxCvyA', date: 'dates.april2020'},
            {title: 'U MALǝ DǝLL’ARCHǝ', text:'A cura della compagnia teatrale  SCÉMǝ SÈMBǝ NUJǝ', source:'https://www.youtube.com/embed/DQNpqGfN9yc', date: 'dates.february2021'}
        ]
    },
    {
        id: 6,
        name: 'Il lessico Santacrocese',
        filter: 'published',
        top: true,
        categories: ['dialecto'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id6.description[0].text`},
            
        ],
        gallery:[
            {text: 'books.id6.gallery[0].text'},
            {text: 'books.id6.gallery[1].text'},
            {text: 'books.id6.gallery[2].text'}
        ]
    },
    {
        id: 9,
        name: 'Cuentos de inmigrantes',
        filter: 'published',
        categories: ['spanish'],
        top: true,
        show:{
            position: 0
        },
        description:[
            {text: `books.id9.description[0].text`}
        ],
        gallery:[
            {text: 'books.id9.gallery[0].text'},
            {text: 'books.id9.gallery[1].text'},
            {text: 'books.id9.gallery[2].text', links:[{text: 'seeArticle', id: 'cuentos-de-inmigrantes-articulo'}]}
        ]
    },
    {
        id: 16,
        filter: 'published',
        top: true,
        name: `"Italiani mata burros" e altre storie di migranti in Venezuela`,
        categories: ['italian'],
        gallery:[
            {text: `books.id16.gallery[0].text`},
            {text: `books.id16.gallery[1].text`},
            {text: `books.id16.gallery[2].text`},
        ],
        show: {
            position: 1
        },
        description:[
            {text: 'books.id16.description[0].text'},
            {text: 'books.id16.description[1].text', position: 'end'}
        ],
    },
    {
        id: 5,
        filter: 'published',
        name: 'Hámichel. Nicola Iacobacci',
        categories: ['translated'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id5.description[0].text`}
        ],
        top: true,
        gallery:[
            {text: `books.id5.gallery[0].text`},
            {text: `books.id5.gallery[1].text`},
            {text: `books.id5.gallery[2].text`, links:[{text: `seeArticle`,id:'hamichel-articulo'}]},
            {text: `books.id5.gallery[3].text`},
        ]
    },
    {
        id: 24,
        name: 'Grammatica comparata italiano-santacrocese',
        filter: 'published',
        categories: ['dialecto'],
        show:{
            position: 0
        },
        description:[
            {text: 'books.id24.description[0].text'}
        ]
    },
    {
        id: 1,
        filter: 'published',
        categories: ['italian'],
        name: 'La presenza dei molisani in venezuela',
        top: false,
        gallery:[
            {text: `books.id1.gallery[0].text`}
        ],
        show: {
            position: 0
        },
        description:[
            {text: 'books.id1.description[0].text'}
        ],
    },
    {
        id:2,
        filter: 'published',
        name: 'La vida fantástica de Corrado Galzio',
        categories: ['spanish'],
        top: false,
        gallery:[
            {text: 'books.id2.gallery[0].text'},
            {text: 'books.id2.gallery[1].text'},
            {text: 'books.id2.gallery[2].text'},
        ],
        show: {
            position: 0
        },
        description:[
            {text: 'books.id2.description[0].text'}
        ]

    },
    {
        id: 3,
        name: 'In nome del padre (C’era una vola... Giuseppe)',
        filter: 'published',
        categories: ['italian'],
        show:{
            position: 0
        },
        top: false,
        description: [
            {text: 'books.id3.description[0].text'},
           
        ]
    },
    {
        id: 4,
        name: 'Le poesie dialettali di Pietro Mastrangelo',
        top: false,
        filter: 'published',
        categories: ['dialecto'],
        description:[
            {text: 'books.id4.description[0].text'}
        ],
        show: {
            position: 0
        },
        gallery:[
            {text: 'books.id4.gallery[0].text'}
        ]
    },
    {
        id: 7,
        name: 'Cuentos de mi vida',
        filter: 'published',
        categories: ['spanish'],
        show:{
            position: 0
        },
        top: false,
        description:[
            {text: `books.id7.description[0].text`}
        ]
    },
    {
        id: 8,
        name: 'Erase una vez Giuseppe',
        filter: 'published',
        categories: ['spanish'],
        noDigitized: true,
        top: false,
        show:{
            position:0
        },
        description:[
            {text: `books.id8.description[0].text`}
        ],
        gallery: [
            {text: `books.id8.gallery[0].text`}
        ]
    },
    {
        id: 11,
        name: 'Novelle Scelte di Hector Mujica',
        filter: 'published',
        noDigitized: true,
        categories: ['translated'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id11.description[0].text`}
        ],
        gallery:[
            {text: `books.id11.gallery[0].text`}
        ]
    },
    {
        id: 12,
        name: `Poesías. Nicola Iacobacci`,
        noDigitized: true,
        categories: ['translated'],
        filter: 'published',
        show:{
            position: 0
        },
        description: [
            {text: `books.id12.description[0].text`}
        ],
        gallery:[
            {text: `books.id12.gallery[0].text`}
        ]
    },
    {
        id: 13,
        name: `La rampicante. Romulo Gallegos`,
        noDigitized: true,
        filter: 'published',
        categories: ['translated'],
        show:{
            position: 0
        },
        description:[
            {text:`books.id13.description[0].text`}
        ],
        gallery:[
            {text:`books.id13.gallery[0].text`}
        ]
    },
    {
        id: 17,
        filter: 'published',
        name: `Poesie e canzoni inedite di Pietro Mastrangelo`,
        categories: ['dialecto'],
        show:{
            position: 1
        },
        description: [
            {text: `books.id17.description[0].text`},
            {text: `books.id17.description[1].text`}
        ]
    },
    {
        id: 18,
        filter: 'inedit',
        name: `Poesie dialetali scelte di Francesco Cocco`,
        categories: ['dialecto'],
        show:{
            position: 0
        },
        description: [
            {text: `books.id18.description[0].text`},
         ],
        gallery:[
            {text: `books.id18.gallery[0].text`},
            {text: `books.id18.gallery[1].text`}
        ]
    },
    {
        id: 19,
        filter: 'inedit',
        name: `Cómo leer y escribir el italiano`,
        categories :['spanish'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id19.description[0].text`},         
        ]
    },
    {
        id: 20,
        filter: 'inedit',
        name: `Racconti di vita. Prima parte`,
        categories: ['italian'],
        show: {
            position: 0
        },
        description:[
            {text:`books.id20.description[0].text`}
        ],
        gallery:[
            {text: `books.id20.gallery[0].text`}
        ]
    },
    {
        id: 21,
        filter: 'inedit',
        name: `Modi di dire, espressioni, indovinelli, giochi, filastrocche, metafore ed altro del dialetto di Santa Croce di Magliano`,
        categories: ['dialecto'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id21.description[0].text`},
        ]
    },
    {
        id: 22,
        filter: 'inedit',
        name: 'Cuentos de mi vida. Parte II',
        categories: ['spanish'],
        show:{
            position: 0
        },
        description:[
            {text: 'books.id22.description[0].text'},]
    },
    {
        id: 23,
        name: 'Ce stéve na vòte',
        filter: 'published',
        categories: ['dialecto'],
        show: {
            position: 0
        },
        description:[
            {text: 'books.id23.description[0].text'},

        ]
    },
    {
        id: 25,
        name: `Nove poesie dialettali di Italo D'onofrio`,
        filter: 'inedit',
        categories: ['dialecto'],
        show:{
            position: 0
        },
        description: [
            {text: `books.id25.description[0].text`},
             ]
    },
    {
        id: 26,
        name: 'Il poeta del molise: Nicola Iacobacci vita e opere',
        filter: 'published',
        noDigitized: true,
        categories: ['italian'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id26.description[0].text`},
        ]
    },
    {
        id: 27,
        name: 'Dizionario essenziale Italiano-Santacrocese',
        filter: 'published',
        categories: ['dialecto'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id27.description[0].text`},
            {text: `books.id27.description[1].text`},
            {text: `books.id27.description[2].text`},
            {text: `books.id27.description[3].text`},
        ]
    }
]

