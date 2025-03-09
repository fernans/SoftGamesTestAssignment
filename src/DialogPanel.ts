import { Container, Sprite, Text } from "pixi.js"
import { Manager } from "./Manager";

export class DialogPanel extends Container {

    constructor() {
        super();
    }

    async init(text:string, icon:string, leftSide:boolean=true) {

        const base:Sprite=Sprite.from("Dialog");
        base.width=Manager.width;
        base.scale.y=base.scale.x;
        this.addChild(base);

        const textArea:Text=new Text();
        textArea.width=base.width*0.8;
        textArea.x=base.width*0.1;
        textArea.anchor.y=0.5;
        textArea.y=base.height/2;
        textArea.text=text;
        this.addChild(textArea);
        
        if (icon!=null) {
            const iconArea:Sprite=await Sprite.from(icon);
            iconArea.height=base.height*0.25;
            iconArea.scale.x=iconArea.scale.y;
            iconArea.anchor.y=0;
            iconArea.y=base.height/5;
            this.addChild(iconArea);

            if (leftSide) {
                iconArea.anchor.x=-1;
            }
            else {
                iconArea.anchor.x=2;
                iconArea.x=base.width;
            }
            
        }

        this.calculateBounds();

    }
}