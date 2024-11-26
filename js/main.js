



function addQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `${arrayOfQuotes[random].quote}`;
    document.querySelector('#authorOutput').textContent = `${arrayOfQuotes[random].author}`;
    
}

const arrayOfQuotes = [
    {'author': '"Oscar Wilde"', 
     'quote': '“Be yourself; everyone else is already taken.”'
    },
    {'author': '"Frank Zappa"', 
     'quote': '“So many books, so little time.”'
    },
    {'author': '"Marcus Tullius Cicero"', 
     'quote': '“A room without books is like a body without a soul.”'
    },
    {'author': '"Mae West"', 
     'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {'author': '"Mahatma Gandhi"', 
     'quote': '“Be the change that you wish to see in the world.”'
    },
    {'author': '"Mark Twain"', 
     'quote': '“If you tell the truth, you dont have to remember anything.”'
    },
];








