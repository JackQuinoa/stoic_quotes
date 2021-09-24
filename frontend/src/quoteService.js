class QuoteService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    // Read/Index Action

    getQuotes(){
        fetch(`${this.endpoint}/quotes`)
        .then(resp => resp.json())
        .then(quotes => {
            for (const quote of quotes){
                const q = new Quote(quote)
                q.slapOnDom()
            }
        })

    }



}