import { Container, ParticleContainer, Ticker } from "pixi.js";
import { IScene, Manager } from "../Manager";
import { Emitter } from "@pixi/particle-emitter";
import { emitterFireConfig } from "../particleFireConfig";
import { emitterSparksConfig } from "../particleSparksConfig";

export class PhoenixFlameScene extends Container implements IScene {

    private fireContainer:ParticleContainer;
    private sparksContainer:ParticleContainer;
    private emitterFire:Emitter;
    private emitterSparks:Emitter;


    constructor() {
        super();

        this.fireContainer=new ParticleContainer(8,{
            scale: true,
            position: true,
            rotation: true,
            uvs: true,
            alpha: true,
        });
        this.addChild(this.fireContainer);

        this.sparksContainer=new ParticleContainer(8,{
            scale: true,
            position: true,
            rotation: true,
            uvs: true,
            alpha: true,
        });
        this.addChild(this.sparksContainer);

        emitterFireConfig.pos.x=Manager.width*0.5;
        emitterFireConfig.pos.y=Manager.height*0.8;
        this.emitterFire=new Emitter(this, emitterFireConfig);
        this.emitterFire.emit=true;

        emitterSparksConfig.pos.x=Manager.width*0.5;
        emitterSparksConfig.pos.y=Manager.height*0.8;
        this.emitterSparks=new Emitter(this, emitterSparksConfig);
        this.emitterSparks.emit=true;
    }

    public update(): void {
        this.emitterFire.update(Ticker.system.deltaMS*0.001);
        this.emitterSparks.update(Ticker.system.deltaMS*0.001);
    }
}