class QuoteService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    // Read/Index Action

    getQuotes(){
        fetch(`${this.endpoint}/quotes`)

    }



}