const obj = {
    employees: [ 'John', 'Jane', 'Mark' ],
    increments: [ 10, 20, 30 ],
    printIncrements: function() {
        console.log( this );
        const that = this;
        this.employees.forEach(( employee, idx ) => { // arrow function syntax makes sure the "this" is inherited from the printIncrements()
            console.log( this );
            console.log( `${employee} has increment ${that.increments[idx]}` );
        }/*.bind( this )*/);
    }
}

obj.printIncrements();