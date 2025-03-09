import { EmitterConfigV3 } from "@pixi/particle-emitter";

export const emitterFireConfig:EmitterConfigV3={
    "lifetime": {
        "min": 0.5,
        "max": 0.8
    },
    "frequency": 0.1,
    "emitterLifetime": -1,
    "maxParticles": 8,
    "pos": {
        "x": 0,
        "y": 0
    },
    "addAtBack": false,
    "behaviors": [
        {
            "type": "alpha",
            "config": {
                "alpha": {
                    "list": [
                        {
                            "time": 0,
                            "value": 0
                        },
                        {
                            "time": 0.2,
                            "value": 1
                        },
                        {
                            "time": 0.8,
                            "value": 0.5
                        },
                        {
                            "time": 1,
                            "value": 0
                        }
                    ]
                }
            }
        },
        {
            "type": "scale",
            "config": {
                "scale": {
                    "list": [
                        {
                            "time": 0,
                            "value": 0.5
                        },
                        {
                            "time": 1,
                            "value": 1
                        }
                    ]
                },
                "minMult": 2
            }
        },
        {
            "type": "color",
            "config": {
                "color": {
                    "list": [
                        {
                            "time": 0,
                            "value": "fdff69"
                        },
                        {
                            "time": 1,
                            "value": "e32a00"
                        }
                    ]
                }
            }
        },
        {
            "type": "moveSpeedStatic",
            "config": {
                "min": 100,
                "max": 250
            }
        },
        {
            "type": "rotation",
            "config": {
                "accel": 0,
                "minSpeed": -50,
                "maxSpeed": 50,
                "minStart": 260,
                "maxStart": 280
            }
        },
        {
            "type": "textureRandom",
            "config": {
                "textures": [
                    "FireParticle"
                ]
            }
        },
        {
            "type": "spawnShape",
            "config": {
                "type": "rect",
                "data": {
                    "x": 0,
                    "y": 0,
                    "w": 20,
                    "h": 5
                }
            }
        },
        {
            type: 'blendMode',
            config: {
                blendMode: 'Normal',
            }
        }
    ]
};