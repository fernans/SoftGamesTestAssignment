import { Manager } from "./Manager";
import { LoaderScene } from "./scenes/LoaderScene";

Manager.initialize(0x6495ed);

// We no longer need to tell the scene the size because we can ask Manager!
const loading: LoaderScene = new LoaderScene( ()=>{
		// Change scene to the game scene!
		Manager.initMenu();
		loading.visible=false;
	}
);
Manager.changeScene(loading);

// launh fullscreen on user touch (needed a user interaction)
document.onclick=()=>{
	document.documentElement.requestFullscreen();
}