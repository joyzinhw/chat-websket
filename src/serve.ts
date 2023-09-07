import express  from "express"
import http from  'http'
class App {

	constructor(){
		this.app = express()
		this.http  = http
	}

	listenServer(){

	}
}

const app =  new App()

app.listenServer()