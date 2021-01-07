
export const booksCategories : Record<any,any> = [
    {name: 'all'},
    {name: 'translated'},
    {name: 'italian'},
    {name: 'spanish'},
    {name: 'dialecto'}
]


export var books : Record<any,any> =[
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
            {text: 'El bautizo del libro estuvo a cargo del ilustre fonólogo venezolano Godsuno Chela Flores y de la profesora Rosario Alonso de León, en ese momento Directora de la Escuela de Idiomas Modernos. A mi derecha en la foto el lingüista y antropólogo Esteban E. Mosonyi, coautor del libro.'}
        ]
    },
    {
        id: 15,
        filter: 'published',
        name: 'Antologia Poetica Dialectale, di Raffaele Caprigliore',
        categories: ['dialecto'],
        gallery: [
            {text: 'Raffaele Capriglione medico e poeta dialettale santacrocese'}
        ],
        top: true,
        show: {
            position: 0
        },
        description:[
            {text: 'books.id15.description[0].text'}
        ],
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
            {text: `Presentazione della Seconda Edizione nella Sala Consiliare del Comune di Santa Croce di Magliano. Nel presidium, alla mia destra, Giovanni Mascia, autore della Presentazione, Enzo Nocera l'Editore. Alla mia sinistra Salvatore Mascia Sindaco e Norberto Lombardi presentatore dell'opera`},
            {text: "Con el Sr. Daniel Morais, Agregado Cultural de la Embajada de Portugal en Venezuela, en ocasión de la presentación en Caracas de la Primera Edición de Il lessico santacrocese"},
            {text: 'Con Gianni Mucci, disegnatore e caricaturista, autore della copertina del Lessico Santacrocese (terza edizione)'}
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
            {text: `El día de la presentación de la obra, con el prologuista Dr. Fabrizio Colaceci, Cónsul General de la República de Italia en Venezuela. Fabrizio Colaceci, autore del Prologo`},
            {text:`Con mis cuatro nietos (de izquierda a derecha) José Manuel, Valentina, Manuel Andrés y Stephanie quienes bautizaron con pétalos de rosas el libro`},
            {text: ``}
        ]
    },
    {
        id: 16,
        filter: 'published',
        top: true,
        name: `"Italiani mata burros" e altre storie di migranti in Venezuela`,
        categories: ['italian'],
        gallery:[
            {text: `Salvatore Orlando. Il curatore di questa versione italiana di Cuentos de Inmigrantes`},
            {text: `Con FABRIZIO COLACECI. Console Generale d'Italia in Venezuela 2004. Autore della prefazione dell'edizione in spagnolo, il cui testo è stato riprodotto nella versione italiana`},
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
            {text: `Nicola Iacobacci, nació en Toro (CB) y es considerado la máxima expresión poética contemporánea del Molise. Además de novelas como La tela dei giorni, L'albero dei briganti, L'unghia incarnita  y Hámichel, las cuales son definidas más bien por algunos críticos como "grandes poemas líricos", es autor de un sinnúmero de libros de poemas entre los cuales destacan Sotto il barbacane, Il passo dello scorpione, La pietra turchina, il Diavolo senza corne, La baia delle tortore, etc. Famosos son también su drama Il lupo tra le lamiere, la obra teatral La giacca a doppio petto y el volumen de monólogos Le radici del silenzio. Ha sido traducido al francés, al español y al griego.`},
            {text: `La versión italiana de la obra estuvo a cargo del ensayista y crítico literario, quien al igual que Iacobacci, también nació en Toro, ciudadela de la provincia de Campobasso (Molise). Cultiva esencialmente el ensayo histórico, antropológico, lingüístico y literario. Ha publicado varios libros sobre estos géneros entre los cuales destacan A tavele de Ture (La tavola di Toro), La Chiesa del Santissimo Salvatore a Toro y sobre todo Le tenebre nel Molise, obra que recibió elogios públicos del gran  lingüista italiano Gian Luigi Beccaria. Tuvo a su cargo, además de Hámichel de Iacobaccl, la versión italiana de mi novela-ensayo Érase una vez... Giuseppe,  tradujo los Cuentos de mi vida y tuvo a su cargo  la Introducción de Il Lessico santacrocese.`},
            {text: `Presentación de la obra en el Centro Italiano de Caracas, con la actuación de la Orquesta Sinfónica Juvenil dirigida por el joven Director Domenico Lombardi, de origen molisano [AQUI DEBE HABER UN LINK QUE ME LLEVE A LA PUBLICACIÓN, PENDIENTE]`},
            {text: "Con Giovanni Mascia (Campobasso), escritor, ensayista y traductor de algunas de mis obras."},
        ]
    },
    {
        id: 1,
        filter: 'published',
        categories: ['italian'],
        name: 'La presenza dei molisani in venezuela',
        top: false,
        gallery:[
            {text: `L'opera è stata presentata nella Sala Conferenze della Biblioteca Provinciale  di Campobasso da Giovanni Mascia (primo a sinistra), con parole introduttive di Vincenzo Lombardi, Direttore della Biblioteca `}
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
            {text: 'Con el Maestro CORRADO GALZIO el día de la presentación de la obra en el Centro Italiano Venezolano de Caracas'},
            {text: `De izquierda a derecha con el Dr. Giovanni Di Stefano, docente universitario y Presidente fundador de la Casa d'Italia; el Maestro Corrado Galzio y el legendario periodista Gaetano Bafile, Director fundador de La Voce d'Italia`},
            {text: "De izquierda a derecha el Autor con el Dr. Salvatore Pluchino, Docente universitario y ex Presidente por más períodos del Centro Italiano Venezolano de Caracas; el Presidente de la Orquesta Sinfónica Municipal de Caracas; el Maestro Rodolfo Saglimbeni, Director de la Orquesta Sinfónica Municipal de Caracas, el Maestro Corrado Galzio y un invitado al Concierto "},
        ],
        show: {
            position: 0
        },
        description:[
            {text: `books.id2.description[0].text`}
        ]

    },
    {
        id: 3,
        name: 'In nome del padre',
        filter: 'published',
        noDigitized: true,
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
            {text: 'PIETRO MASTRANGELO PITTORE E POETA DIALETTALE SANTACROCESE'}
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
            {text: `Giuseppe y Maria, mis padres, protagonistas de esta historia`}
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
            {text: `Con mi amigo Héctor Mujica en una foto del 1980 tomada por el Prof. Carlos Abreu, uno de mis alumnos predilectos en los cursos de italiano de aquella época`}
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
            {text: `Unica foto conocida del gran poeta molisano Nicola Iacobacci`}
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
            {text:`Foto autografiada del Maestro Rómulo Gallegos`}
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
            {text: `Il curatore dell'opera con Francesco Cocco, poeta dialettale e animatore culturale santacrocese`},
            {text: `Prof. Paolo Mastrangelo, collaboratore di quest'opera, il cui intervento è risultato determinante non solo per la revisione dei testi ma soprattutto per la stesura di alcune note`}
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
            {text: `2015. Con Giovanni Mascia, curatore della versione italiana dell'opera`}
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
        filter: 'inedit',
        categories: ['dialecto'],
        show: {
            position: 0
        },
        description:[
            {text: 'books.id23.description[0].text'},

        ]
    },
    {
        id: 24,
        name: 'GRAMMATICA COMPARATA ITALIANO-SANTACROCESE',
        filter: 'inedit',
        categories: ['dialecto'],
        show:{
            position: 0
        },
        description:[
            {text: 'books.id24.description[0].text'}
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
        filter: 'inedit',
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
        filter: 'inedit',
        categories: ['dialecto'],
        show:{
            position: 0
        },
        description:[
            {text: `books.id27.description[0].text`},
        ]
    }
]

