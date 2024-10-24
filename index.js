// Add your Circle class here
// class Bird {
//     #phrase;

//     constructor(name){
//         this.name = name;
//     }
//     set phrase(phrase) {
//         this.#phrase = phrase;
//     }

//     get speak() {
//         return `${this.name} says ${this.#phrase  || 'squack'}`;
//     }
// }

// const daffy = new Bird('Daffy');
// console.log(daffy.speak);

// daffy.phrase = 'it is a rabbit season';
// console.log(daffy.speak);

class Circle {
    constructor(radius) {
        this.radius = radius;
        
    }
    get diameter() {
        return 2*this.radius
    }

    set diameter(diameter) {
        this.radius = diameter/2
    }
    get circumference() {
        return 2* Math.PI * this.radius
    }

    set circumference(circumference) {
        this.radius = circumference/(2*Math.PI)
    }

    get area () {
        return Math.PI * this.radius**2
    }
    
    set area(area) {
        this.radius = Math.sqrt(area/Math.PI)
    } 
}