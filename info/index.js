const info = [
 {
  animals: [
    {
      id: 1,
      ask: " In what mountain range would you find the snow leopard?",
      optionA: {
        text: "Mount Fuji",
        replay: false
      },
      optionB: {
        text: "The Himalayas",
        replay: true
      },
      optionC: {
        text: "Kilimanjaro",
        replay: false
      },
      optionD: {
        text: "Mont Blanc",
        replay: false
      }
    },
    {
      id: 2,
      ask: "What is the largest lizard in the world?",
      optionA: {
        text: "Komodo Dragon",
        replay: true
      },
      optionB: {
        text: "Galapagos Land Iguana",
        replay: false
      },
      optionC: {
        text: "Nile Monitor",
        replay: false
      },
      optionD: {
        text: "Crocodrile",
        replay: false
      }
    },
    {
      id: 3,
      ask: "Name the largest land mammal that currently inhabits the planet.",
      optionA: {
        text: "Giraffe",
        replay: false
      },
      optionB: {
        text: "African Elephant",
        replay: true
      },
      optionC: {
        text: "Sperm whale",
        replay: false
      },
      optionD: {
        text: "Lion's Mane Jellyfish",
        replay: false
      }
    },
    {
      id: 4,
      ask: "Lionel Messi and Cristiano Ronaldo are often called the greatest of all time, but what farm animal connects them?",
      optionA: {
        text: "The Goat",
        replay: true
      },
      optionB: {
        text: "The Shark",
        replay: false
      },
      optionC: {
        text: "The Tiger",
        replay: false
      },
      optionD: {
        text: "The Dog",
        replay: false
      }
    },
    {
      id: 5,
      ask: "Which farm animal was originally domesticated in Southern China around 6,000 BC?",
      optionA: {
        text: "Chickens",
        replay: true
      },
      optionB: {
        text: "Horses",
        replay: false
      },
      optionC: {
        text: "Dogs",
        replay: false
      },
      optionD: {
        text: "Fishes",
        replay: false
      }
    },
    {
      id: 6,
      ask: "It is estimated that 3% of the glaciers in Antarctica are made up of the urine of which animal?",
      optionA: {
        text: "Polar Bears",
        replay: false
      },
      optionB: {
        text: "Whales",
        replay: false
      },
      optionC: {
        text: "Mermaids",
        replay: false
      },
      optionD: {
        text: "Pinguin",
        replay: true
      }
    },
    {
      id: 7,
      ask: " What animal is the closest living relative to the T-Rex?",
      optionA: {
        text: "Giraffe",
        replay: false
      },
      optionB: {
        text: "Cocrodile",
        replay: false
      },
      optionC: {
        text: "Chicken",
        replay: true
      },
      optionD: {
        text: "Komodo Dragon",
        replay: false
      }
    },
    {
      id: 8,
      ask: " What is the collective name for a group of owls?",
      optionA: {
        text: "Parliament",
        replay: true
      },
      optionB: {
        text: "Herd",
        replay: false
      },
      optionC: {
        text: "Group of Birds",
        replay: false
      },
      optionD: {
        text: "Buhal Hive",
        replay: false
      }
    },
    {
      id: 9,
      ask: "In which country do macaques use coins in vending machines to buy snacks?",
      optionA: {
        text: "Indian",
        replay: false
      },
      optionB: {
        text: "Brazil",
        replay: false
      },
      optionC: {
        text: "Australia",
        replay: false
      },
      optionD: {
        text: "Japan",
        replay: true
      }
    },
    {
      id: 10,
      ask: "Which country do French Poodles come from?",
      optionA: {
        text: "France",
        replay: false
      },
      optionB: {
        text: "Colombia",
        replay: false
      },
      optionC: {
        text: "Germany",
        replay: true
      },
      optionD: {
        text: "South Korea",
        replay: false
      }
    },
    {
      id: 11,
      ask: "What was the name of Mickey Mouse's dog?",
      optionA: {
        text: "Daisy",
        replay: false
      },
      optionB: {
        text: "Donald",
        replay: false
      },
      optionC: {
        text: "Pluto",
        replay: true
      },
      optionD: {
        text: "Goofy",
        replay: false
      }
    },
    {
      id: 12,
      ask: "What is the only mammal that can fly?",
      optionA: {
        text: "Flamingos",
        replay: false
      },
      optionB: {
        text: "Flying squirrel",
        replay: false
      },
      optionC: {
        text: "Pinguin",
        replay: false
      },
      optionD: {
        text: "Bat",
        replay: true
      }
    },
    {
      id: 13,
      ask: "In which island nation would you come across the Lemur?",
      optionA: {
        text: "Philippines",
        replay: false
      },
      optionB: {
        text: "Madagascar",
        replay: true
      },
      optionC: {
        text: "Indonesia",
        replay: false
      },
      optionD: {
        text: "Iceland",
        replay: false
      }
    },
    {
      id: 14,
      ask: " What is a rhino’s horn made out of?",
      optionA: {
        text: "Hair",
        replay: false
      },
      optionB: {
        text: "Keratin",
        replay: true
      },
      optionC: {
        text: "Bone",
        replay: false
      },
      optionD: {
        text: "Meat",
        replay: false
      }
    },
    {
      id: 15,
      ask: 'Which animal is protected by law in Rome?',
      optionA: {
        text: "Cat",
        replay: true
      },
      optionB: {
        text: "Dog",
        replay: false
      },
      optionC: {
        text: "Cow",
        replay: false
      },
      optionD: {
        text: "Pigs",
        replay: false
      }
    },
  ],
  cities: [
    {
      id: 1,
      ask: 'What is the capital of Colombia?',
      optionA:{
        text: "Cartagena",
        replay: false
      },
      optionB:{
        text: "Bogotá",
        replay: true
      },
      optionC:{
        text: "Medellin",
        replay: false
      },
      optionD:{
        text: "Manizales",
        replay: false
      }
    },
    {
      id: 2,
      ask: 'What is the capital of Australia?',
      optionA:{
        text: "Camberra",
        replay: true
      },
      optionB:{
        text: "Tasmania",
        replay: false
      },
      optionC:{
        text: "Sidney",
        replay: false
      },
      optionD:{
        text: "Melbourne",
        replay: false
      }
    },
    {
      id: 3,
      ask: 'What is the capital of Azerbaiyán?',
      optionA:{
        text: "Shaki",
        replay: false
      },
      optionB:{
        text: "Bakú",
        replay: true
      },
      optionC:{
        text: "Kalbayar",
        replay: false
      },
      optionD:{
        text: "Agsu",
        replay: false
      }
    },
    {
      id: 4,
      ask: 'What is the capital of Bolivia?',
      optionA:{
        text: "Sucre",
        replay: true
      },
      optionB:{
        text: "La paz",
        replay: false
      },
      optionC:{
        text: "Copacabana",
        replay: false
      },
      optionD:{
        text: "Cochabamba",
        replay: false
      }
    },
    {
      id: 5,
      ask: 'What is the capital of Qatar?',
      optionA:{
        text: "Doha",
        replay: true
      },
      optionB:{
        text: "Al Rayyan",
        replay: false
      },
      optionC:{
        text: "Al Khor",
        replay: false
      },
      optionD:{
        text: "Al Wakrah",
        replay: false
      }
    },
    {
      id: 6,
      ask: 'What is the capital of South Korea?',
      optionA:{
        text: "Gangneung",
        replay: false
      },
      optionB:{
        text: "Jeju",
        replay: false
      },
      optionC:{
        text: "Busan",
        replay: false
      },
      optionD:{
        text: "Seul",
        replay: true
      }
    },
    {
      id: 7,
      ask: 'What is the capital of Cuba?',
      optionA:{
        text: "Santiago de Cuba",
        replay: false
      },
      optionB:{
        text: "Cuba",
        replay: false
      },
      optionC:{
        text: "La Habana",
        replay: true
      },
      optionD:{
        text: "Varadero",
        replay: false
      }
    },
    {
      id: 8,
      ask: 'What is the capital of Egypt?',
      optionA:{
        text: "Cairo",
        replay: true
      },
      optionB:{
        text: "Alexandria",
        replay: false
      },
      optionC:{
        text: "Hurghada",
        replay: false
      },
      optionD:{
        text: "Luxor",
        replay: false
      }
    },
    {
      id: 9,
      ask: 'What is the capital of Greece?',
      optionA:{
        text: "The Guajira",
        replay: false
      },
      optionB:{
        text: "Chania",
        replay: false
      },
      optionC:{
        text: "Athens",
        replay: true
      },
      optionD:{
        text: "Thessaloniki",
        replay: false
      }
    },
    {
      id: 10,
      ask: 'What is the capital of Italy?',
      optionA:{
        text: "Palermo",
        replay: false
      },
      optionB:{
        text: "Naples",
        replay: false
      },
      optionC:{
        text: "Rome",
        replay: true
      },
      optionD:{
        text: "Milan",
        replay: false
      }
    },
    {
      id: 11,
      ask: 'What is the capital of Norway?',
      optionA:{
        text: "Reine",
        replay: false
      },
      optionB:{
        text: "Oslo",
        replay: true
      },
      optionC:{
        text: "Bergen",
        replay: false
      },
      optionD:{
        text: "Trondeheim",
        replay: false
      }
    },
    {
      id: 12,
      ask: 'What is the capital of Portugal?',
      optionA:{
        text: "Oporto",
        replay: false
      },
      optionB:{
        text: "Ponta Delgada",
        replay: false
      },
      optionC:{
        text: "Madeira",
        replay: false
      },
      optionD:{
        text: "Lisboa",
        replay: true
      }
    },
    {
      id: 13,
      ask: 'What is the capital of Russia?',
      optionA:{
        text: "Novosibirsk",
        replay: false
      },
      optionB:{
        text: "Moscow",
        replay: true
      },
      optionC:{
        text: "Saint Petersburg",
        replay: false
      },
      optionD:{
        text: "Yekaterinburg",
        replay: false
      }
    },
    {
      id: 14,
      ask: 'What is the capital of Ukraine?',
      optionA:{
        text: "Dnipro",
        replay: false
      },
      optionB:{
        text: "Kyiv",
        replay: true
      },
      optionC:{
        text: "Odesa",
        replay: false
      },
      optionD:{
        text: "Kharkiv",
        replay: false
      }
    },
    {
      id: 15,
      ask: 'What is the capital of Uruguay?',
      optionA:{
        text: "Montevideo",
        replay: true
      },
      optionB:{
        text: "Paysandú",
        replay: false
      },
      optionC:{
        text: "Las Piedras",
        replay: false
      },
      optionD:{
        text: "Rivera",
        replay: false
      }
    },
  ],
  css:[
    {
      id: 1,
      ask: 'Which of the following has introduced text, list, box, margin, border, color, and background properties?',
      optionA:{
        text: "HTML",
        replay: false
      },
      optionB:{
        text: "CSS",
        replay: true
      },
      optionC:{
        text: "PHP",
        replay: false
      },
      optionD:{
        text: "Ajax",
        replay: false
      }
    },
    {
      id: 2,
      ask: 'Which of the following CSS3 property can be used to allow line breaks within words?',
      optionA:{
        text: "word-break",
        replay: true
      },
      optionB:{
        text: "line-break",
        replay: false
      },
      optionC:{
        text: "line-wrap",
        replay: false
      },
      optionD:{
        text: "word-wrap",
        replay: false
      }
    },
    {
      id: 3,
      ask: 'Which of the following CSS property defines the space between cells in a table?',
      optionA:{
        text: "border-style",
        replay: false
      },
      optionB:{
        text: "border-spacing",
        replay: true
      },
      optionC:{
        text: "border",
        replay: false
      },
      optionD:{
        text: "None of the mentioned",
        replay: false
      }
    },
    {
      id: 4,
      ask: "Which of the following CSS Property sets the stacking order of positioned elements?",
      optionA:{
        text: "z-index",
        replay: true
      },
      optionB:{
        text: "x-index",
        replay: false
      },
      optionC:{
        text: "y-index",
        replay: false
      },
      optionD:{
        text: "All of the mentioned",
        replay: false
      }
    },
    {
      id: 5,
      ask: " Which of the following is an appropriate value for the overflow element?",
      optionA:{
        text: "Scroll",
        replay: false
      },
      optionB:{
        text: "Hidden",
        replay: false
      },
      optionC:{
        text: "Auto",
        replay: false
      },
      optionD:{
        text: "All of the mentioned",
        replay: true
      }
    },
    {
      id: 6,
      ask: 'Which of the following CSS Property controls how an element is positioned?',
      optionA:{
        text: "Static",
        replay: false
      },
      optionB:{
        text: "Position",
        replay: true
      },
      optionC:{
        text: "Fix",
        replay: false
      },
      optionD:{
        text: "Flex",
        replay: false
      }
    },
    {
      id: 7,
      ask: 'Which of the following is not the property of the CSS box model?',
      optionA:{
        text: "Margin",
        replay: false
      },
      optionB:{
        text: "Width",
        replay: false
      },
      optionC:{
        text: "background",
        replay: true
      },
      optionD:{
        text: "Height",
        replay: false
      }
    },
    {
      id: 8,
      ask: 'Which of the following is the correct way to apply CSS Styles?',
      optionA:{
        text: "In an external CSS file",
        replay: false
      },
      optionB:{
        text: "Inside an HTML element",
        replay: false
      },
      optionC:{
        text: "Inside the <head> section of an HTML page",
        replay: false
      },
      optionD:{
        text: "All of the mentioned",
        replay: true
      }
    },
    {
      id: 9,
      ask: ' Which of the following is the correct syntax to link an external style sheet in the HTML file?',
      optionA:{
        text: "<style rel=”stylesheet” src=”style.css” />",
        replay: false
      },
      optionB:{
        text: " <link rel=”stylesheet” src=”style.css” />",
        replay: false
      },
      optionC:{
        text: "<link rel=”stylesheet” href=”style.css” />",
        replay: true
      },
      optionD:{
        text: " <style rel=”stylesheet” link=”style.css” />",
        replay: false
      }
    },
    {
      id: 10,
      ask: 'Which of the following CSS style property is used to specify an italic text?',
      optionA:{
        text: "style",
        replay: false
      },
      optionB:{
        text: "font-size",
        replay: false
      },
      optionC:{
        text: "font-style",
        replay: true
      },
      optionD:{
        text: "font-face",
        replay: false
      }
    },
    {
      id: 11,
      ask: "Which of the following CSS property is used to make the text bold?",
      optionA:{
        text: "text-decoration: bold",
        replay: false
      },
      optionB:{
        text: "text-align: bold",
        replay: false
      },
      optionC:{
        text: "font-style: bold",
        replay: false
      },
      optionD:{
        text: "font-weight: bold",
        replay: true
      }
    },
    {
      id: 12,
      ask: ' Which of the following CSS framework is used to create a responsive design?',
      optionA:{
        text: "Django",
        replay: false
      },
      optionB:{
        text: "React Native",
        replay: false
      },
      optionC:{
        text: "SASS",
        replay: false
      },
      optionD:{
        text: "Bootstrap",
        replay: true
      }
    },
    {
      id: 13,
      ask: "Which of the following CSS selectors are used to specify a group of elements?",
      optionA:{
        text: "Id",
        replay: false
      },
      optionB:{
        text: "Class'",
        replay: true
      },
      optionC:{
        text: "tag",
        replay: false
      },
      optionD:{
        text: "Both class and tag'",
        replay: false
      }
    },
    {
      id: 14,
      ask: ' Which of the following tag is used to embed css in HTML page?',
      optionA:{
        text: "<styles>",
        replay: false
      },
      optionB:{
        text: "<style>",
        replay: true
      },
      optionC:{
        text: "<script>",
        replay: false
      },
      optionD:{
        text: "<css>",
        replay: false
      }
    },
    {
      id: 15,
      ask: 'What is CSS?',
      optionA:{
        text: "CSS is the language used to style the HTML documents",
        replay: false
      },
      optionB:{
        text: "CSS is a style sheet language",
        replay: false
      },
      optionC:{
        text: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        replay: false
      },
      optionD:{
        text: " All of the mentioned",
        replay: true
      }
    },
  ],
  generalCulture: [
    {
      id: 1,
      ask: "What is the second closest star to Earth?",
      optionA:{
        text: "The Sun",
        replay: false
      },
      optionB:{
        text: "Alfa centauri",
        replay: true
      },
      optionC:{
        text: "Sirius",
        replay: false
      },
      optionD:{
        text: "Wolf",
        replay: false
      }
    },
    {
      id: 2,
      ask: "What year did John F. Kennedy die?",
      optionA:{
        text: "1963",
        replay: true
      },
      optionB:{
        text: "1961",
        replay: false
      },
      optionC:{
        text: "1910",
        replay: false
      },
      optionD:{
        text: "1973",
        replay: false
      }
    },
    {
      id: 3,
      ask: "What is the national flower of Japan?",
      optionA:{
        text: "Sakurasou",
        replay: false
      },
      optionB:{
        text: "Kiku",
        replay: false
      },
      optionC:{
        text: "Sakura",
        replay: true
      },
      optionD:{
        text: "Momo",
        replay: false
      }
    },
    {
      id: 4,
      ask: "Which organ in the human body consumes the most energy?",
      optionA:{
        text: "The Brain",
        replay: true
      },
      optionB:{
        text: "The Heart",
        replay: false
      },
      optionC:{
        text: "The Eyes",
        replay: false
      },
      optionD:{
        text: "The Lungs",
        replay: false
      }
    },
    {
      id: 5,
      ask: "Which country has the most islands in the world?",
      optionA:{
        text: "Colombia",
        replay: false
      },
      optionB:{
        text: "Sweden",
        replay: true
      },
      optionC:{
        text: "Norwey",
        replay: false
      },
      optionD:{
        text: "United States",
        replay: false
      }
    },
    {
      id: 6,
      ask: "What is the name of the official language in Chinese?",
      optionA:{
        text: "Chino",
        replay: false
      },
      optionB:{
        text: "Shangai",
        replay: false
      },
      optionC:{
        text: "Kawasaki",
        replay: false
      },
      optionD:{
        text: "Mandarin",
        replay: true
      }
    },
    {
      id: 7,
      ask: "In what year was the Chernobyl disaster happened?",
      optionA:{
        text: "1965",
        replay: false
      },
      optionB:{
        text: "1753",
        replay: false
      },
      optionC:{
        text: "1986",
        replay: true
      },
      optionD:{
        text: "1976",
        replay: false
      }
    },
    {
      id: 8,
      ask: "In Greek mythology, who was the herald of the gods?",
      optionA:{
        text: "Hermes",
        replay: true
      },
      optionB:{
        text: "Zeus",
        replay: false
      },
      optionC:{
        text: "Apolo",
        replay: false
      },
      optionD:{
        text: "Ares",
        replay: false
      }
    },
    {
      id: 9,
      ask: "Who wrote The Odyssey?",
      optionA:{
        text: "Publius Vergilius Maro",
        replay: false
      },
      optionB:{
        text: "Miguel de Cervantes",
        replay: false
      },
      optionC:{
        text: "Dante Alighieri",
        replay: false
      },
      optionD:{
        text: "Homer",
        replay: true
      }
    },
    {
      id: 10,
      ask: "Where did the Olympic games originate?",
      optionA:{
        text: "Brazil",
        replay: false
      },
      optionB:{
        text: "Rome",
        replay: false
      },
      optionC:{
        text: "Ancient Greece",
        replay: true
      },
      optionD:{
        text: "South Korea",
        replay: false
      }
    },
    {
      id: 11,
      ask: "What is the largest ocean?",
      optionA:{
        text: "Atlantic Ocean",
        replay: false
      },
      optionB:{
        text: "Indian Ocean",
        replay: false
      },
      optionC:{
        text: "Pacific Ocean",
        replay: true
      },
      optionD:{
        text: "Antarctic Ocean ",
        replay: false
      }
    },
    {
      id: 12,
      ask: "What is the color that represents hope?",
      optionA:{
        text: "Yellow",
        replay: false
      },
      optionB:{
        text: "Light Blue",
        replay: false
      },
      optionC:{
        text: "White",
        replay: false
      },
      optionD:{
        text: "Green",
        replay: true
      }
    },
    {
      id: 13,
      ask: "What branch of Biology studies animals?",
      optionA:{
        text: "Biochemistry",
        replay: false
      },
      optionB:{
        text: "Zoology",
        replay: true
      },
      optionC:{
        text: "Paleontology",
        replay: false
      },
      optionD:{
        text: "Veterinary Medicine",
        replay: false
      }
    },
    {
      id: 14,
      ask: "What is the name of the Russian space station?",
      optionA:{
        text: "General Space Station",
        replay: false
      },
      optionB:{
        text: "Russian Orbital Segment",
        replay: true
      },
      optionC:{
        text: "Russian Space Station",
        replay: false
      },
      optionD:{
        text: "There are no space stations",
        replay: false
      }
    },
    {
      id: 15,
      ask: 'What veteran musician is the song "Tears in Heaven"?',
      optionA:{
        text: "Eric Clapton",
        replay: true
      },
      optionB:{
        text: "Elvis Presley",
        replay: false
      },
      optionC:{
        text: "Steven Tyler",
        replay: false
      },
      optionD:{
        text: "Patti LaBelle",
        replay: false
      }
    },
  ],
  html:[
    {
      id: 1,
      ask: 'What year was html created?',
      optionA:{
        text: "1990",
        replay: false
      },
      optionB:{
        text: "1980",
        replay: true
      },
      optionC:{
        text: "1985",
        replay: false
      },
      optionD:{
        text: "1988",
        replay: false
      }
    },
    {
      id: 2,
      ask: 'With what label can we make a line break?',
      optionA:{
        text: "<br />",
        replay: true
      },
      optionB:{
        text: "<hr />",
        replay: false
      },
      optionC:{
        text: "<strong></strong>",
        replay: false
      },
      optionD:{
        text: "<li />",
        replay: false
      }
    },
    {
      id: 3,
      ask: 'What does the acronym HTML stand for?',
      optionA:{
        text: "Hyper Text Mask Language",
        replay: false
      },
      optionB:{
        text: "Hyper Text Markup Language",
        replay: true
      },
      optionC:{
        text: "Hard Text Markup Language",
        replay: false
      },
      optionD:{
        text: "Hard Text Mask Language",
        replay: false
      }
    },
    {
      id: 4,
      ask: "",
      optionA:{
        text: "Lacrosse",
        replay: true
      },
      optionB:{
        text: "American Football",
        replay: false
      },
      optionC:{
        text: "Golf",
        replay: false
      },
      optionD:{
        text: "Tennis",
        replay: false
      }
    },
    {
      id: 5,
      ask: "What is the correct way to write a comment in HTML?",
      optionA:{
        text: "/* */",
        replay: true
      },
      optionB:{
        text: "<!–…–>",
        replay: false
      },
      optionC:{
        text: "<¡–…–>",
        replay: false
      },
      optionD:{
        text: "//",
        replay: false
      }
    },
    {
      id: 6,
      ask: 'What is the correct way to write a link in HTML?',
      optionA:{
        text: "<a title=''></a>",
        replay: false
      },
      optionB:{
        text: "<a link=''></a>",
        replay: false
      },
      optionC:{
        text: "<a src=''></a>",
        replay: false
      },
      optionD:{
        text: "<a href=''></a>",
        replay: true
      }
    },
    {
      id: 7,
      ask: 'What tag is used to write an unordered list?',
      optionA:{
        text: "<li>",
        replay: false
      },
      optionB:{
        text: "<ol>",
        replay: false
      },
      optionC:{
        text: "<ul>",
        replay: true
      },
      optionD:{
        text: "<al>",
        replay: false
      }
    },
    {
      id: 8,
      ask: 'Which option is correct?',
      optionA:{
        text: "<input type='text' placeholder='Write here...'/>",
        replay: true
      },
      optionB:{
        text: "<input type='check' text='Write here...'/>",
        replay: false
      },
      optionC:{
        text: "<input type='number' placeholder='Write here...'></input>",
        replay: false
      },
      optionD:{
        text: "<input form='text' placeholder='Write here...'/>",
        replay: false
      }
    },
    {
      id: 9,
      ask: 'What is the attribute to open a link in another browser tab?',
      optionA:{
        text: "__back",
        replay: false
      },
      optionB:{
        text: "__get_out",
        replay: false
      },
      optionC:{
        text: "__blank",
        replay: true
      },
      optionD:{
        text: "__open",
        replay: false
      }
    },
    {
      id: 10,
      ask: 'What version of html supports the <video> tag?',
      optionA:{
        text: "HTML4",
        replay: false
      },
      optionB:{
        text: "HTML6",
        replay: false
      },
      optionC:{
        text: "HTML5",
        replay: true
      },
      optionD:{
        text: "All HTML versions",
        replay: false
      }
    },
    {
      id: 11,
      ask: "Which option is correct to display a '.gif' in html?",
      optionA:{
        text: "<video src='archivo.gif' autoplay/>",
        replay: false
      },
      optionB:{
        text: "<video src='archivo.gif'/>",
        replay: false
      },
      optionC:{
        text: "<img src='archivo.gif' autoplay alt='...'/>",
        replay: false
      },
      optionD:{
        text: "<img src='archivo.gif' alt='...'/>",
        replay: true
      }
    },
    {
      id: 12,
      ask: 'Do older HTML files work in newer browsers?',
      optionA:{
        text: "Only on Google",
        replay: false
      },
      optionB:{
        text: "No",
        replay: false
      },
      optionC:{
        text: "Only in major browsers: Google, Firefox and Edge",
        replay: false
      },
      optionD:{
        text: "Yes",
        replay: true
      }
    },
    {
      id: 13,
      ask: "Can I write Javascript code in HTML?",
      optionA:{
        text: "No",
        replay: false
      },
      optionB:{
        text: "Yes, with tag 'script'",
        replay: true
      },
      optionC:{
        text: "Only with frameworks",
        replay: false
      },
      optionD:{
        text: "Yes, with tag 'body'",
        replay: false
      }
    },
    {
      id: 14,
      ask: 'What is the Canva element used for in HTML?',
      optionA:{
        text: "Doesn't exist",
        replay: false
      },
      optionB:{
        text: "To build graphics",
        replay: true
      },
      optionC:{
        text: "To create a table",
        replay: false
      },
      optionD:{
        text: "To create a big form",
        replay: false
      }
    },
    {
      id: 15,
      ask: 'what is the latest version of HTML?',
      optionA:{
        text: "HTML 5",
        replay: true
      },
      optionB:{
        text: "HTML 5.2",
        replay: false
      },
      optionC:{
        text: "HTML 6",
        replay: false
      },
      optionD:{
        text: "HTML 5.5",
        replay: false
      }
    },
  ],
  javascript: [
    {
      id: 1,
      ask: "Inside which HTML element do we put the JavaScript?",
      optionA:{
        text:"<js>",
        replay: false
      },
      optionB:{
        text:"<script>",
        replay: true
      },
      optionC:{
        text:"<scripting>",
        replay: false
      },
      optionD:{
        text:"<javascript>",
        replay: false
      }
    },
    {
      id: 2,
      ask: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      optionA:{
        text:"<script src='xxx.js'>",
        replay: true
      },
      optionB:{
        text:"<script to='xxx.js'>",
        replay: false
      },
      optionC:{
        text:"<script name='xxx.js'>",
        replay: false
      },
      optionD:{
        text:"<script href='xxx.js'>",
        replay: false
      }
    },
    {
      id: 3,
      ask: "How do you write 'Hello World' in an alert box?",
      optionA:{
        text:"msgBox('Hello World')",
        replay: false
      },
      optionB:{
        text:"alert('Hello World')",
        replay: true
      },
      optionC:{
        text:"msg('Hello World')",
        replay: false
      },
      optionD:{
        text:"console.log('Hello World')",
        replay: false
      }
    },
    {
      id: 4,
      ask: "How do you create a function in JavaScript?",
      optionA:{
        text:"function myFunction()",
        replay: true
      },
      optionB:{
        text:"function  = myFunction()",
        replay: false
      },
      optionC:{
        text:"Function myFunction()",
        replay: false
      },
      optionD:{
        text:"function = myFunction() => ",
        replay: false
      }
    },
    {
      id: 5,
      ask: "How do you call a function named 'myFunction'?",
      optionA:{
        text:"myFunction()",
        replay: true
      },
      optionB:{
        text:"call myFunction()",
        replay: false
      },
      optionC:{
        text:"constructor myFunction()",
        replay: false
      },
      optionD:{
        text:"call function myFunction",
        replay: false
      }
    },
    {
      id: 6,
      ask: "How to write an IF statement in JavaScript?",
      optionA:{
        text:"if i = 5 then",
        replay: false
      },
      optionB:{
        text:"if (i = 5)",
        replay: false
      },
      optionC:{
        text:"if i == 5 then",
        replay: false
      },
      optionD:{
        text:"if (i == 5)",
        replay: true
      }
    },
    {
      id: 7,
      ask: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      optionA:{
        text:"if i <> 5",
        replay: false
      },
      optionB:{
        text:"if i =! 5",
        replay: false
      },
      optionC:{
        text:"if i != 5",
        replay: true
      },
      optionD:{
        text:"if i !== 5",
        replay: false
      }
    },
    {
      id: 8,
      ask: "How does a FOR loop start?",
      optionA:{
        text:"for (i = 0; i <= 5; i++)",
        replay: true
      },
      optionB:{
        text:"for (i = 0, i <= 5, i++)",
        replay: false
      },
      optionC:{
        text:"for (i = 0, i <= 5, i+)",
        replay: false
      },
      optionD:{
        text:"for (i = 0; i <= 5; i+)",
        replay: false
      }
    },
    {
      id: 9,
      ask: "How can you add a comment that has one line in a JavaScript?    ",
      optionA:{
        text:"<!--This is a comment-->",
        replay: false
      },
      optionB:{
        text:"*/This is a comment/*",
        replay: false
      },
      optionC:{
        text:"//This is a comment",
        replay: true
      },
      optionD:{
        text:"{* This is a comment *}",
        replay: false
      }
    },
    {
      id: 10,
      ask: "What is the correct way to write a JavaScript array?",
      optionA:{
        text:"const colors = [('red'), ('blue'), ('black')]",
        replay: false
      },
      optionB:{
        text:"const colors = ('red'), ('blue'), ('black')",
        replay: false
      },
      optionC:{
        text:"const colors = ['red', 'blue', 'black']",
        replay: true
      },
      optionD:{
        text:"const colors = [1:'red', 2:'blue', 3:'black']",
        replay: false
      }
    },
    {
      id: 11,
      ask: "How do you round the number 7.25, to the nearest integer?",
      optionA:{
        text:"Math.floor(7.25)",
        replay: false
      },
      optionB:{
        text:"Math.around(7.25)",
        replay: false
      },
      optionC:{
        text:"Math.round(7.25)",
        replay: true
      },
      optionD:{
        text:"Math.nearNumber(7.25)",
        replay: false
      }
    },
    {
      id: 12,
      ask: "How can you detect the client's browser name?",
      optionA:{
        text:"browser.name",
        replay: false
      },
      optionB:{
        text:"window.appName",
        replay: false
      },
      optionC:{
        text:"document.appName",
        replay: false
      },
      optionD:{
        text:"navigator.appName",
        replay: true
      }
    },
    {
      id: 13,
      ask: "Which event occurs when the user clicks on an HTML element?",
      optionA:{
        text:"onchange",
        replay: false
      },
      optionB:{
        text:"onclick",
        replay: true
      },
      optionC:{
        text:"click",
        replay: false
      },
      optionD:{
        text:"onmouseclick",
        replay: false
      }
    },
    {
      id: 14,
      ask: "Which operator is used to assign a value to a variable?",
      optionA:{
        text:"?",
        replay: false
      },
      optionB:{
        text:"=",
        replay: true
      },
      optionC:{
        text:"==",
        replay: false
      },
      optionD:{
        text:"===",
        replay: false
      }
    },
    {
      id: 15,
      ask: "Which operator is used to assign a value to a variable?",
      optionA:{
        text:"Ignores the statements",
        replay: true
      },
      optionB:{
        text:"Throws an error",
        replay: false
      },
      optionC:{
        text:"Prompts to complete the statement",
        replay: false
      },
      optionD:{
        text:"Shows a warning",
        replay: false
      }
    },
  ],
  sports:[
    {
      id: 1,
      ask: 'What is the diameter of a basketball hoop in inches?',
      optionA:{
        text: "15 inches",
        replay: false
      },
      optionB:{
        text: "18 inches",
        replay: true
      },
      optionC:{
        text: "20 inches",
        replay: false
      },
      optionD:{
        text: "17 inches",
        replay: false
      }
    },
    {
      id: 2,
      ask: 'The Olympics are held every how many years?',
      optionA:{
        text: "4 years",
        replay: true
      },
      optionB:{
        text: "2 years",
        replay: false
      },
      optionC:{
        text: "Each year",
        replay: false
      },
      optionD:{
        text: "8 years",
        replay: false
      }
    },
    {
      id: 3,
      ask: 'What sport is best known as the "king of sports"?',
      optionA:{
        text: "Basketball",
        replay: false
      },
      optionB:{
        text: "Soccer",
        replay: true
      },
      optionC:{
        text: "Tennis",
        replay: false
      },
      optionD:{
        text: "Baseball",
        replay: false
      }
    },
    {
      id: 4,
      ask: "What's the national sport of Canada?",
      optionA:{
        text: "Lacrosse",
        replay: true
      },
      optionB:{
        text: "American Football",
        replay: false
      },
      optionC:{
        text: "Golf",
        replay: false
      },
      optionD:{
        text: "Tennis",
        replay: false
      }
    },
    {
      id: 5,
      ask: "What country has competed the most times in the Summer Olympics yet hasn't won a gold medal?",
      optionA:{
        text: "The Philippines",
        replay: true
      },
      optionB:{
        text: "The Americans",
        replay: false
      },
      optionC:{
        text: "The Colombians",
        replay: false
      },
      optionD:{
        text: "I don't know",
        replay: false
      }
    },
    {
      id: 6,
      ask: 'In soccer, what body part can’t touch the ball?',
      optionA:{
        text: "Legs",
        replay: false
      },
      optionB:{
        text: "Eyes",
        replay: false
      },
      optionC:{
        text: "Face",
        replay: false
      },
      optionD:{
        text: "Hands",
        replay: true
      }
    },
    {
      id: 7,
      ask: 'What country was champion in the 2010 world cup?',
      optionA:{
        text: "Germany",
        replay: false
      },
      optionB:{
        text: "France",
        replay: false
      },
      optionC:{
        text: "Spain",
        replay: true
      },
      optionD:{
        text: "Italy",
        replay: false
      }
    },
    {
      id: 8,
      ask: 'Who is the soccer player who has scored the most official goals in history?',
      optionA:{
        text: "Cristiano Ronaldo",
        replay: true
      },
      optionB:{
        text: "Pele",
        replay: false
      },
      optionC:{
        text: "Messi",
        replay: false
      },
      optionD:{
        text: "Maradona",
        replay: false
      }
    },
    {
      id: 9,
      ask: 'Who is the soccer player who has scored the most official goals in history?',
      optionA:{
        text: "Stephen Curry",
        replay: false
      },
      optionB:{
        text: "Michael Jordan",
        replay: false
      },
      optionC:{
        text: "Lebron James",
        replay: true
      },
      optionD:{
        text: "Kobe Bryant",
        replay: false
      }
    },
    {
      id: 10,
      ask: 'What retired basketball player tried out for the Chicago White Sox in 1994?',
      optionA:{
        text: "Lebron James",
        replay: false
      },
      optionB:{
        text: "Bill Russel",
        replay: false
      },
      optionC:{
        text: "Michael Jordan",
        replay: true
      },
      optionD:{
        text: "Kareem Abdul-Jabbar",
        replay: false
      }
    },
    {
      id: 11,
      ask: 'What is the record for red cards given in a single soccer game?',
      optionA:{
        text: "43",
        replay: false
      },
      optionB:{
        text: "36",
        replay: true
      },
      optionC:{
        text: "15",
        replay: false
      },
      optionD:{
        text: "29",
        replay: false
      }
    },
    {
      id: 12,
      ask: 'Who was the first British player to win league titles in four countries?',
      optionA:{
        text: "Steven Gerrard",
        replay: false
      },
      optionB:{
        text: "Wayne Rooney",
        replay: false
      },
      optionC:{
        text: "Bobby Moore",
        replay: false
      },
      optionD:{
        text: "David Beckham",
        replay: true
      }
    },
    {
      id: 13,
      ask: "Which country won the first women's World Cup?",
      optionA:{
        text: "France",
        replay: false
      },
      optionB:{
        text: "The United States",
        replay: true
      },
      optionC:{
        text: "Brazil",
        replay: false
      },
      optionD:{
        text: "Germany",
        replay: false
      }
    },
    {
      id: 14,
      ask: 'What is the only country to have played in every single soccer World Cup?',
      optionA:{
        text: "Argentina",
        replay: false
      },
      optionB:{
        text: "Brazil",
        replay: true
      },
      optionC:{
        text: "Italy",
        replay: false
      },
      optionD:{
        text: "Spain",
        replay: false
      }
    },
    {
      id: 15,
      ask: 'How much does an NFL football weigh?',
      optionA:{
        text: "1 pound",
        replay: true
      },
      optionB:{
        text: "5 pound",
        replay: false
      },
      optionC:{
        text: "2 pound",
        replay: false
      },
      optionD:{
        text: "3 pound",
        replay: false
      }
    },
  ]
 }
]

module.exports = info
