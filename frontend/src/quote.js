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

        Quote.all.push(this)
    }

    quoteHTML(){
        this.element.innerHTML += `
            <div>
                <h4>${this.phrase}</h4>
            </div>

        `
        return this.element
    }

    slapOnDom(){
        Quote.quotesContainer.append(this.quoteHTML())
    }
}