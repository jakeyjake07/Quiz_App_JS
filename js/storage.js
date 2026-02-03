
function saveQuizzes(quizzes) {
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
}


function getQuizzes() {
    const quizzes = localStorage.getItem('quizzes');
    if (quizzes) {
        return JSON.parse(quizzes);
    }

    return [];

}

function initQuizzes() {
    if (getQuizzes().length === 0) {
        const sampleQuizzes = [
            {
                id: '1',
                title: 'Allmänbildning',
                description: 'Testa din allmänbildning med 15 frågor',
                questions: [
                    {
                        text: 'Vilket år startade första världskriget?',
                        options: ['1912', '1914', '1916', '1918'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vem skrev romanen "Pippi Långstrump"?',
                        options: ['Astrid Lindgren', 'Selma Lagerlöf', 'August Strindberg', 'Vilhelm Moberg'],
                        correctAnswer: 0
                    },
                    {
                        text: 'Vilket är det största organet i människokroppen?',
                        options: ['Hjärta', 'Lever', 'Hud', 'Tunntarm'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vad heter huvudstaden i Norge?',
                        options: ['Göteborg', 'Helsinki', 'Oslo', 'Stockholm'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vilken färg får man om man blandar rött och blått?',
                        options: ['Grönt', 'Orange', 'Lila', 'Brun'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Hur många centimeter går det på en meter?',
                        options: ['10', '100', '1000', '10000'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vilket djur är känd som "skogens konung"?',
                        options: ['Björn', 'Älg', 'Varg', 'Rådjur'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vem uppfann glödlampan?',
                        options: ['Thomas Edison', 'Nikola Tesla', 'Albert Einstein', 'Alexander Graham Bell'],
                        correctAnswer: 0
                    },
                    {
                        text: 'Vilket år kom första iPhone?',
                        options: ['2005', '2007', '2009', '2011'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vad är huvudstaden i Australien?',
                        options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vilken planet är närmast solen?',
                        options: ['Venus', 'Jorden', 'Mars', 'Merkurius'],
                        correctAnswer: 3
                    },
                    {
                        text: 'Vem målar "Mona Lisa"?',
                        options: ['Michelangelo', 'Leonardo da Vinci', 'Rembrandt', 'Van Gogh'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vilket är Sveriges nationalsång?',
                        options: ['Du gamla, du fria', 'Sveriges flagga', 'Kungssången', 'Vårt land'],
                        correctAnswer: 0
                    },
                    {
                        text: 'Hur många spelare finns i ett fotbollslag på planen?',
                        options: ['9', '10', '11', '12'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vilket år slutade andra världskriget?',
                        options: ['1943', '1944', '1945', '1946'],
                        correctAnswer: 2
                    }
                ]
            },
            {
                id: '2',
                title: 'Geografi',
                description: 'Testa dina geografikunskaper med 15 frågor',
                questions: [
                    {
                        text: 'Vilket är världens största land till ytan?',
                        options: ['Kanada', 'Kina', 'Ryssland', 'USA'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vilken är världens längsta flod?',
                        options: ['Nilen', 'Amazonfloden', 'Mississippi', 'Yangtze'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vilket är världens största ocean?',
                        options: ['Atlanten', 'Indiska oceanen', 'Stilla havet', 'Norra ishavet'],
                        correctAnswer: 2
                    },
                    {
                        text: 'I vilket land finns pyramiderna i Giza?',
                        options: ['Mexiko', 'Egypten', 'Peru', 'Sudan'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vilket land har flest invånare?',
                        options: ['Indien', 'USA', 'Kina', 'Indonesien'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vilken är huvudstaden i Japan?',
                        options: ['Osaka', 'Kyoto', 'Tokyo', 'Shanghai'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vilket berg är högst i världen?',
                        options: ['K2', 'Mount Everest', 'Kilimanjaro', 'Matterhorn'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vilken är den största ön i Medelhavet?',
                        options: ['Sicilien', 'Kreta', 'Cypern', 'Sardinien'],
                        correctAnswer: 0
                    },
                    {
                        text: 'Vilket land har formen av en känguru?',
                        options: ['Nya Zeeland', 'Australien', 'Sydafrika', 'Argentina'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vilken är huvudstaden i Brasilien?',
                        options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vilket land ligger norr om Sverige?',
                        options: ['Finland', 'Norge', 'Danmark', 'Island'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vilken är den största staden i Sverige?',
                        options: ['Göteborg', 'Malmö', 'Stockholm', 'Uppsala'],
                        correctAnswer: 2
                    },
                    {
                        text: 'Vilket land har flest sjöar?',
                        options: ['Sverige', 'Finland', 'Kanada', 'Ryssland'],
                        correctAnswer: 1
                    },
                    {
                        text: 'Vilken är den största ön i Sverige?',
                        options: ['Gotland', 'Öland', 'Södertörn', 'Orust'],
                        correctAnswer: 0
                    },
                    {
                        text: 'Vilket land har störst yta i Europa?',
                        options: ['Frankrike', 'Spanien', 'Ryssland', 'Ukraina'],
                        correctAnswer: 2
                    }
                ]
            }
        ];
        saveQuizzes(sampleQuizzes);
    }
}


initQuizzes();