class MigrosCustomer extends MigrosBase {
    constructor(name, surname, hasLoyaltyCard, shoppinhList) {
        super(name, surname, hasLoyaltyCard, shoppinhList);
    }

    calculateCartTotal() {
        return super.calculateCartTotal();
    }
}