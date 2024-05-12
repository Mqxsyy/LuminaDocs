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
        "nodes/initialize/setEmission",
        "nodes/initialize/setLifetime",
        "nodes/initialize/setLifetimeRandom",
        "nodes/initialize/setPosition",
        "nodes/initialize/addPosition",
        "nodes/initialize/setPositionToParent",
        "nodes/initialize/setRotationZ",
        "nodes/initialize/setRotationZRandom",
        "nodes/initialize/setSize",
        "nodes/initialize/setSizeRandom",
        "nodes/initialize/setTransparency",
        "nodes/initialize/setVelocity",
        "nodes/initialize/setVelocityRandom",
      ],
    },
    {
      type: "category",
      label: "Update nodes",
      items: [
        "nodes/update/accelerate",
        "nodes/update/addRotationZ",
        "nodes/update/addRotationZRandom",
        "nodes/update/addVelocity",
        "nodes/update/drag",
        "nodes/update/multiplySizeOverLife",
        "nodes/update/setColorOverLife",
        "nodes/update/setSizeOverLife",
        "nodes/update/setTransparencyOverLife",
      ],
    },
    {
      type: "category",
      label: "Render nodes",
      items: ["nodes/render/particlePlane"],
    },
    {
      type: "category",
      label: "Logic nodes",
      items: ["nodes/logic/randomNumber"],
    },
  ],
  plannedFeaturesSidebar: [
    "plannedFeatures/index",
    {
      type: "category",
      label: "Higher Priority",
      items: [
        "plannedFeatures/higherPriority/index",
        "plannedFeatures/higherPriority/aBunchOfLogic",
        "plannedFeatures/higherPriority/actions",
        "plannedFeatures/higherPriority/customVariables",
        "plannedFeatures/higherPriority/differentVelocityChangers",
        "plannedFeatures/higherPriority/physics",
        "plannedFeatures/higherPriority/shapeSpawns",
        "plannedFeatures/higherPriority/volumetricParticles",
      ],
    },
    {
      type: "category",
      label: "Lower Priority",
      items: [
        "plannedFeatures/lowerPriority/index",
        "plannedFeatures/lowerPriority/beams",
        "plannedFeatures/lowerPriority/delays",
        "plannedFeatures/lowerPriority/groupings",
        "plannedFeatures/lowerPriority/groupSelection",
        "plannedFeatures/lowerPriority/imageBrowser",
        "plannedFeatures/lowerPriority/miniSystems",
        "plannedFeatures/lowerPriority/qol",
        "plannedFeatures/lowerPriority/splitSystemGroups",
        "plannedFeatures/lowerPriority/undoSupport",
      ],
    },
  ],
};

export default sidebars;
