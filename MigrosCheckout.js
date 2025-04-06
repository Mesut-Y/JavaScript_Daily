let firm = "Migros";
let askLoyaltyCard = `${firm} Mağazamıza Hoşgeldiniz.
${firm} indirim kartınız var mı?`;

let hasLoyaltyCard = confirm(askLoyaltyCard);
let totalPrice;

let shoppingList = [
    {
        name: "Süt",
        price: 35
    },
    {
        name: "Tuvalet Kağıdı",
        price: 250
    },
    {
        name: "Ozmo",
        price: 25
    }
]

if (hasLoyaltyCard) {
    //there is a discount card.
    let name = prompt("Adınızı giriniz.");
    let surname = prompt("Soyadınızı giriniz.")
    let customer1 = new MigrosCustomer(name, surname, hasLoyaltyCard, shoppingList);
    totalPrice = customer1.calculateCartTotal();
    alert(`Toplam tutar: ${totalPrice}`);
}
else {
    //there is not a discount card
    let customer1 = new MigrosCustomer(null, null, hasLoyaltyCard, shoppingList)
    totalPrice = customer1.calculateCartTotal();
    alert(`Toplam tutar: ${totalPrice}`);
}
