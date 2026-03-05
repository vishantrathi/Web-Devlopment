class User{
        constructor(email,password){
            this.email=email
            this.password=password
        }

        get email(){
            return this._email.toUpperCase()
        }
        set email(value){
            this._email=value // setters ki value return nahi karte hai
        }
        get password(){
            return`${this._password}EncryptedPasswardHere`
        }
        set password(value){
            this._password=value.toUpperCase()
            
        }
    }


    const pass = new User("h@email.com","abc")
    console.log(pass.password)
    console.log(pass.email);

