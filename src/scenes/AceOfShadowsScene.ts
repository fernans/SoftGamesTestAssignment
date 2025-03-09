import { Container, IPointData, Sprite } from "pixi.js";
import { IScene, Manager } from "../Manager";
import { Group, Tween } from "@tweenjs/tween.js";

export class AceOfShadowsScene extends Container implements IScene {

    private cards: Array<Sprite>;
    private startPos:IPointData={x: 200, y: 20};
    private endPos:IPointData={x: 200, y: 20};
    private cardsAmount:number=144;
    private cardsOffset:number;
    private cardIndexToMove:number=0;
    private tweensGroup:Group;

    constructor() {
        super();

        this.sortableChildren=true; 

        // set start point
        this.startPos.x=Manager.width*0.2;
        this.startPos.y=Manager.height*0.2;
        // set end point
        this.endPos.x=Manager.width*0.8;
        this.endPos.y=Manager.height*0.2;

        // calculating cards size to fit into the stage
        const maxCardHeight:number=(Manager.height-(this.startPos.y*2))/(1+(0.1*this.cardsAmount));
        this.cardsOffset=maxCardHeight*0.1;

        this.cards=new Array<Sprite>()
        for (let i=0;i<this.cardsAmount;i++) {
            // Inside assets.ts we have a line that says `"Clampy from assets.ts!": "./clampy.png",`
            let card = Sprite.from("Card");
    
            const newScale=maxCardHeight/card.height;
            card.scale.set(newScale*2);
            card.zIndex=i;
            card.position.x=this.startPos.x;
            card.position.y=this.startPos.y+(i*this.cardsOffset);

            this.cards.push(card);
            this.addChild(card);
        }

        this.tweensGroup=new Group();
        this.cardIndexToMove=this.cards.length-1; // start from the last (top) one
        this.animCard();
        //setTimeout(this.animCard.bind(this), 2000);

    }

    public animCard():void {
        // anim card position
        let card:Sprite = this.cards[this.cardIndexToMove];
        card.zIndex=this.cards.length-this.cardIndexToMove+this.cardsAmount; // set on topmost
        const tm:Tween=new Tween(card).to({x: this.endPos.x, y:this.endPos.y}, 2000).start();
        this.tweensGroup.add(tm);

        // prepare for next card to anim
        this.endPos.y+=this.cardsOffset;
        this.cardIndexToMove--;
        if (this.cardIndexToMove>=0) {
            setTimeout(this.animCard.bind(this),1000);
        }
    }

    public update(): void {
        this.tweensGroup.update();
    }
}