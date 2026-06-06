const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },   
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }  
    
}
    //console.log(user) //{firstName: 'John', lastName: 'Doe', fullName: [Getter/Setter]}
    console.log(user.fullName) //John Doe - accessing the fullName property which is a getter method
    user.fullName = 'Jane Smith' //setting the fullName property which is a setter method
    console.log(user.firstName) //Jane - the setter method updates the firstName property
    console.log(user.lastName) //Smith - the setter method updates the lastName property