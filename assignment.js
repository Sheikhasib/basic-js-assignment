// 1.Problem-1
function seerToMon(seers){
    mon = seers / 40;
    return mon;
}
var weight = seerToMon(100);
console.log(weight);

// 2.Problem-2

function totalSales(shirtQuantity, pantQuantity, shoesQuantity){
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoesPrice = 500;
    //product Calculation
    const totalShirtPrice = shirtQuantity * perShirtPrice;
    const totalPantPrice = pantQuantity * perPantPrice;
    const totalShoesPrice = shoesQuantity * perShoesPrice;
    // Adding all product
    const totalPrice =totalShirtPrice + totalPantPrice + totalShoesPrice;
    return totalPrice;
}

const firstOption = totalSales(3,8,7);
console.log(firstOption);

// 3.Problem-3

function deliveryCost(shirtQuantity){
    const firstShipmentCostOf100PerShirts = 100;
    const secondShipmentCostOf100PerShirts = 80;
    const restShipmentCostOfPerShirts = 50;
    if(shirtQuantity <= 100){
        const cost = shirtQuantity * firstShipmentCostOf100PerShirts;
        return cost;
    }
    else if(shirtQuantity <= 200){
        const firstDeliveryShirtQuantityCost = 100 * firstShipmentCostOf100PerShirts;
        const restShirtQuantity = shirtQuantity - 100;
        const secondDeliveryShirtQuantityCost = restShirtQuantity * secondShipmentCostOf100PerShirts;
        const totalDeliveryCost = firstDeliveryShirtQuantityCost + secondDeliveryShirtQuantityCost;
        return totalDeliveryCost;
    }
    else{
        const firstDeliveryShirtQuantityCost = 100 * firstShipmentCostOf100PerShirts;
        const secondDeliveryShirtQuantityCost = 100 * secondShipmentCostOf100PerShirts;
        const restShirtQuantity = shirtQuantity - 200;
        const restDeliveryShirtQuantityCost = restShirtQuantity * restShipmentCostOfPerShirts;
        const totalDeliveryCost = firstDeliveryShirtQuantityCost + secondDeliveryShirtQuantityCost + restDeliveryShirtQuantityCost;
        return totalDeliveryCost;
    }
}
const costs = deliveryCost(230);
// console.log(costs);

// 4.Problem-4

function perfectFriend(names){
    let largest = names[0];
    for(let i = 0; i < names.length; i++){
        const element = names[i];
        if(element.length == 5){
            largest = element;
        }
        if(typeof names != 'string'){
            return 'Please give a string';
        }
    }return largest;
}
const friendNames = ['Taj', 'Jim', 'Rumi', 'Hasan', 'Nafiz', 'Kayes'];
const perfect = perfectFriend(friendNames);
console.log(perfect);




