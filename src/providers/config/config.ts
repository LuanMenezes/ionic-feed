import {Injectable} from '@angular/core';

const config_key_name = "config";

/**
 * INJECTABLE é pq vai ser inserido via INJEÇÃO DE DEPENDENCIA
 * ou seja, sempre será usada em outra página
 */
@Injectable()
export class ConfigProvider {
	
	private config = {
		showSlide: false,
		name: "",
		username: ""
	};
	
	constructor() {
		console.log('Hello ConfigProvider Provider');
	}
	
	// RECUPERA AS CONFIGURACOES DO LOCALSTORAGE
	getConfigData(): any {
		return JSON.parse(localStorage.getItem(config_key_name));
	}
	
	// GRAVA AS CONFIGURACOES DO LOCALSTORAGE
	setConfigData(showSlide?: boolean, name?: string, username?: string) {
		let config = {
			showSlide: ( showSlide ? showSlide : false),
			name: (name ? name : ""),
			username: (username ? username : ""),
		};
		localStorage.setItem(config_key_name, JSON.stringify(config));
	}
	
}
