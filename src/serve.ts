import express, { Application, NextFunction, Request, Response }  from "express";
import http from 'http';
import {Server, Socket} from "socket.io";



import { MessageRoutes } from './routes/message.routes';

class App {
	private app: Application;
	private http: http.Server;
	private io: Server;
	private messageRoutes = new MessageRoutes();

	constructor(){
	 this.app = express();
	 this.http  = http.createServer(this.app);
	 this.io = new Server(this.http);
	 this.listenSocket();
	 this.setupRoute();
	 
	}

	listenServer(){

		this.http.listen(3000,() => console.log('server is running'));
	}
	listenSocket(){
		this.io.on('connection',(socket) =>{
         console.log('user connected =>', socket.id);
		});

		}

		setupRoute(){
			this.app.get('/api', (req, res) =>{res.sendFile(__dirname + '/index.html');
			});
		}

	}


const app =  new App();

app.listenServer();