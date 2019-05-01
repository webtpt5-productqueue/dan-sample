class Customer {
    constructor(customerElement) {
      this.customerElement = customerElement
      this.customerImage = this.customerElement.querySelector('img')
      this.data = this.customerElement.dataset.quote;
      this.quote = document.querySelector(`.quote-item[data-quote='${this.data}']`)
  
      this.customerImage.addEventListener('click', () => {
        this.select()
      })
    }
  
    select() {
      const quotes = document.querySelectorAll('.quote-item')
      quotes.forEach(quote => quote.classList.remove('selected'))
      this.quote.classList.add('selected')
    }
  }
  
  const customers = document.querySelectorAll('.customer')
  customers.forEach(customer => new Customer(customer))