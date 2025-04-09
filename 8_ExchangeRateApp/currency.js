class Currency{
    constructor(){ // api url ve currency
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_n9h9XqSA3xDWR9niZ9n7NgnoRoxN9RoNVZ6lmSqx&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const data = await response.json();
        console.log(data);
    }
}