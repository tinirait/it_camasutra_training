import {CityType} from "./02_02";

let city:CityType;

beforeEach(()=>{
    city = {
        title:"NewYork",
        houses:[{},{},{}],
        governmentBuildings:[],
        citizensNumber:100000
    }
});
test("test city should contains",() =>{

expect(city.houses.length).toBe(3);
//expect(city.houses[0].buildedAt).toBe(2012);
//expect(city.houses[0].repaired).toBe(false);
//expect(city.houses[0].address.street.title).toBe("White street");


});