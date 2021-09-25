const base_url = "http://127.0.0.1:3000"
const quoteService = new QuoteService(base_url)


Quote.quoteForm.addEventListener('submit', handleSubmit)

quoteService.getQuotes()
Quote.renderForm()

function handleSubmit(){
    event.preventDefault()
    quoteService.createQuote()
    event.target.reset()
}