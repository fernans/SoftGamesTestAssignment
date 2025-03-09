import type { AssetsManifest } from "pixi.js";

export const manifest:AssetsManifest = {
    bundles: [
        {
            name : "bundleName",
            assets:
            {
                "ButtonMenu": "./menu.png",
                "Button1": "./button1.png",
                "Button2": "./button2.png",
                "Button3": "./button3.png",
                "Card": "./card.png",
                "FireParticle": "./fireparticle.png",
                "Particle":"./particle.png",
                "Words":"./magicwords.json",
                "Dialog": "./buttonBase.png"
            }
        }
    ]
}