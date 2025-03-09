import { Application, BitmapFont, BitmapText, DisplayObject } from "pixi.js";
import { Menu } from "./scenes/Menu";

export class Manager {
    private constructor() { /*this class is purely static. No constructor to see here*/ }

    // Safely store variables for our game
    private static app: Application;
    private static currentScene: IScene;

    private static menu: Menu;

    /*
        // ... for fixed size game area ...
        // Width and Height are read-only after creation (for now)
        private static _width: number;
        private static _height: number;
        // With getters but not setters, these variables become read-only
        public static get width(): number {
            return Manager._width;
        }
        public static get height(): number {
            return Manager._height;
        }
    //*/

    // ... for responsive size game area... (fullscreen)
    public static get width(): number {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    public static get height(): number {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    // Use this function ONCE to start the entire machinery
    public static initialize(background: number=0xFFFFFF): void {

        /*
        // ... for fixed size game area ...
        ////  ADD to constructor  ==>   width: number, height: number, 
        // store our width and height
        Manager._width = width;
        Manager._height = height;
        //*/

        // Create our pixi app
        Manager.app = new Application<HTMLCanvasElement>({
            view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: background,
            resizeTo: window
            //width: width,
            //height: height
        });

        // Add the FPS info
        Manager.addFps();

        // Add the ticker
        Manager.app.ticker.add(Manager.update)
    }

    // Call this function when you want to go to a new scene
    public static changeScene(newScene: IScene): void {
        // Remove and destroy old scene... if we had one..
        if (Manager.currentScene) {
            Manager.app.stage.removeChild(Manager.currentScene);
            Manager.currentScene.destroy();
        }

        // Add the new one
        Manager.currentScene = newScene;
        Manager.app.stage.addChildAt(Manager.currentScene,0);
    }

    private static fpsText:BitmapText;
    private static addFps() {
        BitmapFont.from("comic 32", {
            fill: "#ffffff", // White, will be colored later
            fontFamily: "Comic Sans MS",
            fontSize: 32
        }, {chars:[...BitmapFont.NUMERIC, '.']})
        this.fpsText=new BitmapText("@FPS",{
            fontName: "comic 32",
            fontSize: 32, // Making it too big or too small will look bad
            tint: 0xFF0000 // Here we make it red.
        });
        this.fpsText.zIndex=1000;
        Manager.app.stage.addChild(this.fpsText);
    }

    // This update will be called by a pixi ticker and tell the scene that a tick happened
    private static update(framesPassed: number): void {
        // Let the current scene know that we updated it...
        if (Manager.currentScene) {
            Manager.currentScene.update(framesPassed);
        }

        // update FPS info
        if (Manager.fpsText) {
            Manager.fpsText.text=Manager.app.ticker.FPS.toFixed(2);
        }
    }

    public static initMenu():void {
        // Add inGame menu
        Manager.menu=new Menu();
        Manager.app.stage.addChild(Manager.menu);
    }
}

// This could have a lot more generic functions that you force all your scenes to have. Update is just an example.
// Also, this could be in its own file...
export interface IScene extends DisplayObject {
    update(framesPassed: number): void;
}