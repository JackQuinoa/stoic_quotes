class Quote {

    static all = []
    static quotesContainer = document.getElementById("quotes-container")
    static quoteForm = document.getElementById('form-container')

    constructor({id, phrase, stoic_id}){
        this.id = id
        this.phrase = phrase
        this.stoic_id = stoic_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id 
        this.element.id = `quote-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Quote.all.push(this)
    }

    quoteHTML(){
        this.element.innerHTML += `
            <div>
                <h4>${this.phrase}</h4>
            </div>
            <button id='delete-bttn'>Delete</button>
            <br>

        `
        return this.element
    }

    slapOnDom(){
        Quote.quotesContainer.append(this.quoteHTML())
    }

    static renderForm(){
        Quote.quoteForm.innerHTML += `
            <form id="new-quote-form">
                Phrase: <input type="text" id="phrase">
                <input type="submit" id="create">
            <form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
           quoteService.deleteQuote(this.id)
        }
    }
}