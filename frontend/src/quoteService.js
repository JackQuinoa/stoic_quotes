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

    createQuote(){
        const quote = {
            phrase: document.getElementById('phrase').value,
            stoic_id: document.getElementById('stoic_id').value
            // i think we need to do getElementByID('stoic').value^
        }   

        const configObj = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(quote)
        }

       fetch(`${this.endpoint}/quotes`, configObj)
       .then(resp => resp.json())
       .then(quote => {
           const q = new Quote(quote)
           q.slapOnDom()
       })
    }

    deleteQuote(id){
        fetch(`${this.endpoint}/quotes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))

    }

}