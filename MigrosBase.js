class MigrosBase {
    constructor(name, surname, hasLoyaltyCard, shoppinhList) {
        this.name = name;
        this.surname = surname;
        this.hasLoyaltyCard = hasLoyaltyCard;
        this.shoppinhList = shoppinhList;
    }

    calculateCartTotal() {
        let total = 0;
        if (this.hasLoyaltyCard) {
            let discountAmount = 20;
            this.shoppinhList.forEach(element => {
                total += element.price*(100-discountAmount)/100;
            });
        }
        else{
            this.shoppinhList.forEach(element => {
                total += element.price;
            });
        }
        return total;
    }

}