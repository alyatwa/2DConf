import { createContext, useContext, useState } from "react";
import { ITemp } from "../Types/interfaces";

const initState ={
    id:'',
     label: '', 
     objFile: '', 
     pattern: '', 
     rotation: 90, 
     scale: 9, 
     position: 10, 
     light: 10, 
     lightImg:'',
     overlayImg:'', 
     previewImg:'',
     frontText:'',
     setfrontText: ()=>{},
     setLightValue: ()=>{},
     setPattern: ()=>{},
     setOverText: ()=>{},
     setLightText: ()=>{},
     setRotation: ()=>{},
     setScale: ()=>{},
     setobjFile: ()=>{},
     setPosition: ()=>{}
}
const ConfiguratorContext = createContext<ITemp>(initState);

export const ConfiguratorProvider = ({ children }:any) => {
  const [objFile, setobjFile] = useState('');
  const [lightImg, setLightText] = useState('');
  const [light, setLightValue] = useState(10);
  const [overlayImg, setOverText] = useState('');
  const [frontText, setfrontText] = useState('');
  const [pattern, setPattern] = useState('');
  const [rotation, setRotation] = useState(90);
  const [scale, setScale] = useState(9);
  const [position, setPosition] = useState(10);
  return (
    <ConfiguratorContext.Provider
      value={{
        light,
        setLightValue,
        frontText,
        setfrontText,
        objFile,
        setobjFile,
        lightImg,
        setLightText,
        overlayImg,
        setOverText,
        pattern,
        setPattern,
        rotation,
        setRotation,
        scale,
        setScale,
        position,
        setPosition,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator:any = () => {
  return useContext(ConfiguratorContext);
};