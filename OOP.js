const groceryItem = {
    name: 'Apples',
    Quantity: 4,
    display (){
        console.log(`${this.Quantity} x ${this.name}`);
    }
};

function createGroceryItem (name, Quantity){
    return {
        name,
        Quantity,
        display(){
            console.log(`${this.Quantity} x ${this.name}`);
        }
    };
}
groceryItem.display();
const newItem = createGroceryItem('Bannas', 5);
newItem.display();