// To save user information
const LOCAL_STORAGE_KEY = 'fsr-spotify-fake-auth';
// 用来存放用户的信息
class Client{
    constructor(){
        this.useLocalStorage = (typeof localStorage!== 'undefined');
        this.subscribers = [];

        if(this.useLocalStorage){
            this.token = localStorage.getItem(LOCAL_STORAGE_KEY);

            if(this.token){
                this.isTokenValid().then((bool) =>{
                    if(!bool){
                        this.token = null;
                    }
                })
            }
        }

    }
    isTokenValid(){
        // check if token is valid, here we make it always valid
        return true;
    }
    isLoggedIn(){
        return !!this.token;
    }
    subscribe(cb){
        this.subscribers.push(cb);
    }
    notifySubscribers(){
        this.subscribers.forEach((cb)=> cb(this.isLoggedIn()))
    }
    setToken(token){
        this.token = token;
        if(this.useLocalStorage){
            localStorage.setItem(LOCAL_STORAGE_KEY, token)
        }
    }
    removeToken(){
        this.token = null;
        if(this.useLocalStorage){
            localStorage.removeItem(LOCAL_STORAGE_KEY)
        }
    }
    login(){
        console.log('login')
    }
    logout(){
        this.removeToken();
    }

}

export const client= new Client();
