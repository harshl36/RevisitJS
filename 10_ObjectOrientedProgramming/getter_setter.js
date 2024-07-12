class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email}11`
    }
    set email(_value){
        this._email = _value;
    }
    get password(){                //getter
        // return this._password.toUpperCase()
        return `${this._password}harsh`
    }
    set password(value){           //setter
        this._password = value;           
    }
}


const harsh = new User("harsh@gmail.com", "abcd")
console.log(harsh.password);
console.log(harsh.email);