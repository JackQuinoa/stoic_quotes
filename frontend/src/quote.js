class Quote {

    static all = []

    constructor(id, phrase, stoic_id){
        this.id = id
        this.phrase = phrase
        this.stoic_id = stoic_id


        Quote.all.push(this)
    }


}