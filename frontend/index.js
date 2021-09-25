const base_url = "http://127.0.0.1:3000"
const quoteService = new QuoteService(base_url)

quoteService.getQuotes()
Quote.renderForm()