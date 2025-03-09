import { EmitterConfigV3 } from "@pixi/particle-emitter";

export const emitterSparksConfig:EmitterConfigV3={
    "lifetime": {
        "min": 1,
        "max": 1.5
    },
    "frequency": 0.01,
    "emitterLifetime": -1,
    "maxParticles": 2,
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
                            "value": 1
                        },
                        {
                            "time": 0.9,
                            "value": 1
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
                            "value": 0.2
                        },
                        {
                            "time": 1,
                            "value": 0.3
                        }
                    ]
                },
                "minMult": 1
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
                            "value": "f35a00"
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
                "minStart": 250,
                "maxStart": 290
            }
        },
        {
            "type": "textureRandom",
            "config": {
                "textures": [
                    "Particle"
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
                    "w": 50,
                    "h": 10
                }
            }
        }
    ]
};