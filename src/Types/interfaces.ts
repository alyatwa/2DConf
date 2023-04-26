

interface ITemp {
	id?: string;
	label?: string;
	pattern: string;
	objFile: string;
	rotation: number;
	scale: number;
	position: number;
	light: number;
	lightImg: string;
	overlayImg: string;
	previewImg?: string;
	frontText:string,
    setfrontText: (front: string)=>void;
	setobjFile: (obj: string)=>void;
	setPattern: (pat: string)=>void;
	setOverText: (over: string)=>void;
	setLightText: (light: string)=>void;
	setLightValue: (light: number)=>void;
	setRotation: (rot: number)=>void;
	setScale: (scale: number)=>void;
	setPosition: (position: number)=>void;
  }

  export type {ITemp}