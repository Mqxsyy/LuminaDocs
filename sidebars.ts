import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
    gettingStartedSidebar: ["gettingStarted/index"],
    nodesSidebar: [
        "nodes/intro",
        {
            type: "category",
            label: "Spawn nodes",
            items: ["nodes/spawn/constantSpawn", "nodes/spawn/burstSpawn"],
        },
        {
            type: "category",
            label: "Initialize nodes",
            items: [
                "nodes/initialize/setColor",
                "nodes/initialize/setLifetime",
            ],
        },
        {
            type: "category",
            label: "Mixed nodes",
            items: [
                "nodes/mixed/directVelocity",
                "nodes/mixed/position",
                "nodes/mixed/rotation",
                "nodes/mixed/setEmission",
                "nodes/mixed/setSize",
                "nodes/mixed/setTransparency",
                "nodes/mixed/velocity",
            ],
        },
        {
            type: "category",
            label: "Update nodes",
            items: [
                "nodes/update/accelerate",
                "nodes/update/bounce",
                "nodes/update/drag",
                "nodes/update/lookTowards",
                "nodes/update/moveTowards",
                "nodes/update/multiplyRotationOverLife",
                "nodes/update/multiplySizeOverLife",
                "nodes/update/multiplyVelocityOverLife",
                "nodes/update/setColorOverLife",
                "nodes/update/setSizeOverLife",
                "nodes/update/setTransparencyOverLife",
            ],
        },
        {
            type: "category",
            label: "Render nodes",
            items: [
                "nodes/render/meshParticle",
                "nodes/render/planeParticle",
                "nodes/render/volumetricParticle",
            ],
        },
        {
            type: "category",
            label: "Logic nodes",
            items: [
                "nodes/logic/alivetime",
                "nodes/logic/clamp",
                "nodes/logic/getParentProperty",
                "nodes/logic/numberMath",
                "nodes/logic/randomNumber",
                "nodes/logic/remap",
                "nodes/logic/shape",
                "nodes/logic/time",
                "nodes/logic/trigonometry",
                "nodes/logic/valueOut",
                "nodes/logic/vectorMath",
            ],
        },
    ],
};

export default sidebars;
