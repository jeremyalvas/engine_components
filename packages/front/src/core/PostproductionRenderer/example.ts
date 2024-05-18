// Set up scene (see SimpleScene tutorial)

import Stats from "stats.js";
import * as THREE from "three";
// @ts-ignore
import * as dat from "three/examples/jsm/libs/lil-gui.module.min";
import * as OBC from "../..";

// Set up basic components

const container = document.getElementById("container")!;

const components = new OBC.Components();
const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
components.scene = sceneComponent;

// Set up postproduction renderer
const rendererComponent = new OBC.PostproductionRenderer(components, container);
components.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
components.camera = cameraComponent;

components.raycaster = new OBC.SimpleRaycaster(components);

components.init();

const grid = new OBC.SimpleGrid(components, new THREE.Color(0x666666));

cameraComponent.controls.setLookAt(12, 6, 8, 0, 0, -10);

// Set up stats

const stats = new Stats();
stats.showPanel(2);
document.body.append(stats.dom);
stats.dom.style.left = "0px";
rendererComponent.onBeforeUpdate.add(() => stats.begin());
rendererComponent.onAfterUpdate.add(() => stats.end());

/* MD
  ### 🧪 Cool Post-Production Effects
  ---
  Post-production effects enrich your 3D scenes. There are several post-production effects, such as
  adding shadows, rendering outlines, adding ambient occlusion and applying bloom, that can enhance
  and make your scene look cool.🍹

  :::tip First, let's set up a simple scene!

  👀 If you haven't started there, check out [that tutorial first](SimpleScene.mdx)!

  :::

  In this tutorial we will use **Post-Production Renderer** to add neat **Outlines** and **Ambient Occlusion** to the 3D Model.🦾

  ### 🏢 Adding Fragments
  ---
  We'll start by adding a **Fragment** to our scene using Fragment Manager.

  We'll use a simple fragment for the purposes of this tutorial, but the code is capable of handling big files as well.🏗️

  :::info Using Fragment Manager!

  🏋️ There is a dedicated tutorial on how to use Fragment Manager to load **IFC** files!

  :::

  */

const fragments = new OBC.FragmentsManager(components);
const file = await fetch("../../../resources/small.frag");
const data = await file.arrayBuffer();
const buffer = new Uint8Array(data);
const model = await fragments.load(buffer);

const meshes = [];

const culler = new OBC.ScreenCuller(components);
culler.setup();

for (const fragment of model.items) {
  meshes.push(fragment.mesh);
  culler.elements.add(fragment.mesh);
}
culler.elements.needsUpdate = true;

const controls = cameraComponent.controls;
controls.addEventListener("controlend", () => {
  culler.elements.needsUpdate = true;
});

/* MD
  ### 🎬 Activating the Post-Production
  ---

  We will activate the post-production effect.
  Also, we will enable the visibility for post-production layer.

  - `postproduction.active` - Enable or Disable the active status of the post-processing effect
  - `postproduction.visible` - Toggle the visibility of post-processing layer that is created to display the effect.

  */

rendererComponent.postproduction.enabled = true;
const postproduction = rendererComponent.postproduction;

postproduction.customEffects.excludedMeshes.push(grid.get());

const gui = new dat.GUI();

gui.add(postproduction, "enabled");

const guiGamma = gui.addFolder("Gamma");
guiGamma
  .add(postproduction.settings, "gamma")
  .name("Gamma correction")
  .onChange((value: any) => {
    postproduction.setPasses({ gamma: value });
  });

const guiCustomEffects = gui.addFolder("Custom effects");
guiCustomEffects
  .add(postproduction.settings, "custom")
  .name("Custom effects")
  .onChange((value: any) => {
    postproduction.setPasses({ custom: value });
  });
guiCustomEffects
  .add(postproduction.customEffects, "opacity")
  .name("Line opacity")
  .min(0)
  .max(1)
  .step(0.1);
guiCustomEffects
  .add(postproduction.customEffects, "tolerance")
  .name("Line tolerance")
  .min(0)
  .max(6)
  .step(1);
guiCustomEffects
  .addColor(postproduction.customEffects, "lineColor")
  .name("Line color");
guiCustomEffects
  .add(postproduction.customEffects, "glossEnabled")
  .name("Gloss enabled")
  .min(0)
  .max(2)
  .step(0.1);
guiCustomEffects
  .add(postproduction.customEffects, "glossExponent")
  .name("Gloss exponent")
  .min(0)
  .max(5)
  .step(0.1);
guiCustomEffects
  .add(postproduction.customEffects, "maxGloss")
  .name("Max gloss")
  .min(-2)
  .max(2)
  .step(0.05);
guiCustomEffects
  .add(postproduction.customEffects, "minGloss")
  .name("Min gloss")
  .min(-2)
  .max(2)
  .step(0.05);

const guiAO = gui.addFolder("SAO");
const configuration = postproduction.n8ao.configuration;
guiAO
  .add(postproduction.settings, "ao")
  .name("Ambient occlusion")
  .onChange((value: any) => {
    postproduction.setPasses({ ao: value });
  });
guiAO.add(configuration, "aoSamples").step(1).min(1).max(16);
guiAO.add(configuration, "denoiseSamples").step(1).min(0).max(16);
guiAO.add(configuration, "denoiseRadius").step(1).min(0).max(100);
guiAO.add(configuration, "aoRadius").step(1).min(0).max(16);
guiAO.add(configuration, "distanceFalloff").step(1).min(0).max(16);
guiAO.add(configuration, "intensity").step(1).min(0).max(16);
guiAO.add(configuration, "halfRes");
guiAO.add(configuration, "screenSpaceRadius");
guiAO.addColor(configuration, "color");

/* MD
  **Congratulations** 🎉 on completing this tutorial! Now you know how to add cool effects easily using
  Post Production 🖼️
  Let's keep it up and check out another tutorial! 🎓
  */
