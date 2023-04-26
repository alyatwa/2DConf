import { useEffect } from "react";
import TemplateCard from "./components/TemplateCard";
import CanvasBox from "./components/CanvasBox";
import "./App.css";
import { useConfigurator } from "./ctx/Configurator";
import PropsMenu from "./components/PropsMenu";

function App() {
	const { setPattern,setfrontText, setLightText,setOverText, setobjFile } = useConfigurator();

	const dataTemplates = [
		{
			id: "manShirt",
			objFile: "../man_shirt/man_shirt_3d_model.glb",
			frontImg: "../man_shirt/man_shirt_front.png",
			lightImg: "../man_shirt/man_shirt_preview.png",
			previewImg: "../man_shirt/man_shirt_preview.png",
			overlayImg: "../man_shirt/man_shirt_overlay.png",
			pattern: "../patterns/1_texture_original.jpg",
			label: "Man shirt"
		},
		{
			id: "silkscarf",
			objFile: "../silk_scarf/silk_scarf_3d_model.glb",
			frontImg: "../silk_scarf/silk_scarf_front.png",
			previewImg: "../silk_scarf/silk_scarf_preview.png",
			lightImg: "../silk_scarf/silk_scarf_light.png",
			overlayImg: "../silk_scarf/silk_scarf_overlay.png",
			pattern: "../patterns/1_texture_original.jpg",
			label: "Silk scarf"
		}
	];

	useEffect(() => {
		handelTemplate("manShirt");
	}, []);

const handelTemplate = (id: string)=>{
	
	let i = dataTemplates.findIndex((item)=>item.id==id)
	setfrontText(dataTemplates[i].frontImg);
		setPattern(dataTemplates[i].pattern);
		setLightText(dataTemplates[i].lightImg);
		setOverText(dataTemplates[i].overlayImg);
		setobjFile(dataTemplates[i].objFile);
}

	return (
		<div className="App">
			<div className="flex grow flex-col h-screen">
				<div className="flex grow flex-row h-full max-h-[calc(100%-54px)]">
					<div className="border-solid border-r-[1px] border-neutral-75 max-h-screen overflow-y-auto flex flex-grow">
						<div id="settings-container" className="w-[252px]">
							<div className="flex flex-col mx-2 space-y-2 my-4">
								{dataTemplates.map((temp) => (
									<TemplateCard
										key={temp.id}
										img={temp.previewImg}
										text={temp.label}
										onClick={()=>handelTemplate(temp.id)}
									/>
								))}
							</div>
						</div>
					</div>

					<CanvasBox  />
					<PropsMenu />
				</div>
			</div>
		</div>
	);
}

export default App;
