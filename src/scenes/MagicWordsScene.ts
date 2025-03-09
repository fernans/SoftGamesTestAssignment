import { Assets, Container } from "pixi.js";
import { IScene, Manager } from "../Manager";
import { DialogPanel } from "../DialogPanel";
import { Group, Tween } from "@tweenjs/tween.js";


export class MagicWordsScene extends Container implements IScene {

    private wordsData:any;
    private nextPhrase:number=0;

    private history:Array<DialogPanel>=new Array<DialogPanel>();
    private tweenGroup:Group=new Group();

    constructor() {
        super();

        setTimeout(this.preload.bind(this));

    }

    private async preload() {
        this.wordsData=await Assets.load("Words");

        // parse "avatars" to load images
        for (var i:number=0;i<this.wordsData.avatars.length;i++) {
            await Assets.load({src: this.wordsData.avatars[i].url, loadParser: 'loadTextures'});
        }
        this.showNextPhrase();
    }

    private async showNextPhrase() {

        //move up old dialogs
        this.history.forEach(p => {
            const t:Tween=new Tween(p);
            t.to({y: (p.y-(p.height*0.7))}, 200);
            t.start();
            this.tweenGroup.add(t);
        });

        // create new dialog panel
        
        const phrase:any = this.wordsData.dialogue[this.nextPhrase];
        const character:string = phrase.name;
        const text:string = phrase.text;

        const avatarData:any=this.findAvatar(character);
        var icon=null;
        var isLeft=true;
        if (avatarData) {
            icon=avatarData.url;
            isLeft=(avatarData.position=="left");
        }

        const dialog:DialogPanel=new DialogPanel();
        await dialog.init(text, icon, isLeft);
        dialog.y=Manager.height-dialog.height;

        this.history.push(dialog);
        this.addChild(dialog);

        this.nextPhrase++;
        if (this.nextPhrase<this.wordsData.dialogue.length) {
            setTimeout(this.showNextPhrase.bind(this),2000);
        }
    }

    findAvatar(character:string) {
        return this.wordsData.avatars.find((a:any) => a.name==character);
    }

    public update(): void {
        this.tweenGroup.update();
    }
}