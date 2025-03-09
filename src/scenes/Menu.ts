import { Container, Sprite } from "pixi.js";
import { IScene, Manager } from "../Manager";
import { AceOfShadowsScene } from "./AceOfShadowsScene";
import { PhoenixFlameScene } from "./PhoenixFlameScene";
import { MagicWordsScene } from "./MagicWordsScene";


export class Menu extends Container {

    private bBurgerMenu:Sprite;
    private menuContainer:Container;
    private bAceOfShadows:Sprite;
    private bMagicWords:Sprite;
    private bPhoenixFlame:Sprite;

    constructor() {
        super();

        this.menuContainer=new Container();
        //this.menuContainer.visible=false;

        // Button for Ace of Shadows
        this.bAceOfShadows=Sprite.from("Button1");
        this.bAceOfShadows.width=Manager.width*0.2;
        this.bAceOfShadows.scale.y=this.bAceOfShadows.scale.x;
        this.bAceOfShadows.anchor.x=0.5;
        this.bAceOfShadows.x=Manager.width*0.5;
        this.bAceOfShadows.onpointertap=()=>{
            this.loadScene(new AceOfShadowsScene());
        }
        this.bAceOfShadows.eventMode="static";
        this.menuContainer.addChild(this.bAceOfShadows);

        // Button for Magic Words
        this.bMagicWords=Sprite.from("Button2");
        this.bMagicWords.width=Manager.width*0.2;
        this.bMagicWords.scale.y=this.bMagicWords.scale.x;
        this.bMagicWords.anchor.x=0.5;
        this.bMagicWords.x=Manager.width*0.5;
        this.bMagicWords.y=this.bAceOfShadows.y+this.bAceOfShadows.height*0.75;
        this.bMagicWords.onpointertap=()=>{
            this.loadScene(new MagicWordsScene());
        }
        this.bMagicWords.eventMode="static";
        this.menuContainer.addChild(this.bMagicWords);

        // Button for Phoenix Flame
        this.bPhoenixFlame=Sprite.from("Button3");
        this.bPhoenixFlame.width=Manager.width*0.2;
        this.bPhoenixFlame.scale.y=this.bPhoenixFlame.scale.x;
        this.bPhoenixFlame.anchor.x=0.5;
        this.bPhoenixFlame.y=this.bMagicWords.y+this.bMagicWords.height*0.75;
        this.bPhoenixFlame.x=Manager.width*0.5;
        this.bPhoenixFlame.onpointertap=()=>{
            this.loadScene(new PhoenixFlameScene());
        }
        this.bPhoenixFlame.eventMode="static";
        this.menuContainer.addChild(this.bPhoenixFlame);

        this.addChild(this.menuContainer);


        //Button for BurguerMenu
        this.bBurgerMenu=Sprite.from("ButtonMenu");
        this.bBurgerMenu.height=Math.min(Manager.height,Manager.width)*0.1;
        this.bBurgerMenu.scale.x=this.bBurgerMenu.scale.y;
        this.bBurgerMenu.anchor.x=1;
        this.bBurgerMenu.x=Manager.width;
        this.bBurgerMenu.onpointertap=()=>{
            this.menuContainer.visible=!this.menuContainer.visible;
        }
        this.bBurgerMenu.eventMode="static";
        this.addChild(this.bBurgerMenu);
    }

    private loadScene(scene:IScene) {
        this.menuContainer.visible=false;   // hide menu on Scene selection
        Manager.changeScene(scene);
    }
}