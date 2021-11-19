// import fetch from 'isomorphic-fetch';

// To save user information
const LOCAL_STORAGE_KEY = 'fsr-spotify-fake-auth';
const LOCAL_NAME = 'fsr-user-name';
const LOCAL_ADDRESS = 'fsr-user-address';
const LOCAL_PUBLIC_KEY = 'fsr-user-pubkey';
const LOCAL_PRIV_KEY = 'fsr-user-privkey';
const TOKEN_VALUE = '37219890'

// 用来存放用户的信息
class Client{
    constructor(){
        this.useLocalStorage = (typeof localStorage!== 'undefined');
        this.subscribers = [];
        this.userName = ''; // admin or someone else
        this.token= '';  // if this token is valid? 已经登录
        this.address = '';
        this.pubkey = '';
        this.privkey = '';

        if(this.useLocalStorage){
            this.token = localStorage.getItem(LOCAL_STORAGE_KEY);
            this.userName = localStorage.getItem(LOCAL_NAME);
            this.address = localStorage.getItem(LOCAL_ADDRESS)
            this.pubkey = localStorage.getItem(LOCAL_PUBLIC_KEY)
            this.privkey = localStorage.getItem(LOCAL_PRIV_KEY)

            if(this.token){
                if(!this.isTokenValid()){
                    this.token = null;
                }
            }
        }

    }
    isTokenValid(){
        // check if token is valid, here we make it always valid
        return this.token === TOKEN_VALUE;
    }
    isLoggedIn(){
        return !!this.token;
    }
    isAdminLoggedIn(){
        return this.isLoggedIn() && this.isAdmin()
    }
    isUserLoggedIn(){
        return this.isLoggedIn();
    }
    isAdmin(){
        return this.userName === 'admin';
    }
    isNormalUser(){
        return !this.isAdmin();
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
    setUsername(name){
        this.userName = name;
        if(this.useLocalStorage){
            localStorage.setItem(LOCAL_NAME, name)
        }
    }
    setPubkey(pubkey){
        this.pubkey = pubkey;
        if(this.useLocalStorage){
            localStorage.setItem(LOCAL_PUBLIC_KEY, pubkey);
        }
    }
    setAddress(addr){
        this.address = addr;
        if(this.useLocalStorage){
            localStorage.setItem(LOCAL_ADDRESS,addr)
        }
    }
    setPrivkey(priv){
        this.privkey = priv;
        if(this.useLocalStorage){
            localStorage.setItem(LOCAL_PRIV_KEY,priv)
        }
    }
    async login(name, password){
        console.log('login')
        // fetch from the server, RPC port,
        const url = "/rpc/v2"
        const data = {
            "id": 101,
            "jsonrpc": "2.0",
            "method": "login",
            "params": {
                "user": name,
                "secret": password
            }
        }
        const response = await 
        fetch(url,{
            method:'post',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        
        console.log(result)
        if(result.error){
            console.log('login failed')
            return result.error.message
        }
        if(result.result.data[0].result === 'OK' ){
            console.log('login OK')
            this.setToken(TOKEN_VALUE)
            this.setUsername(name)
            return 'OK'
        }
        return 'No response'
        // this.token = TOKEN_VALUE;
        // if(this.useLocalStorage){
        //     localStorage.setItem(LOCAL_STORAGE_KEY,this.token)
        // }
    }

    logout(){
        this.removeToken();
    }

}

export const client= new Client();
