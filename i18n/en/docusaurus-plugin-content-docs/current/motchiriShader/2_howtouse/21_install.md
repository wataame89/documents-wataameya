
# Installation

### For Supported Avatars

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BnpupxYl1XA?si=242cx5mi2yY1-sgL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### Importing the Package

1. Open your project with VRChat Creator Companion (VCC).
2. Add the [Modular Avatar](https://modular-avatar.nadena.dev/ja/) package to the VCC. ([Here is the package link](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))
3. In VCC’s Manage Project, add the following three items: "**Gesture Manager**," "**Modular Avatar**," and "**Non-Destructive Modular Framework**."
4. Reopen the project and confirm they have been imported.

:::caution
If versions prior to ver1.9.0 or a beta version of Motchiri Shader are already installed, please delete the motchiri_shader folder. (Do not delete the VGC folder, as it contains existing FX.)
:::

#### Installing the Motchiri Shader

5. Import the [latest Motchiri Shader](https://wataame89.booth.pm/items/4108136).
6. Make sure the avatar’s existing shader is lilToon.
7. Right-click the avatar, and in the menu select “wataameya → MotchiriShader.”
8. A motchiri_shader_Setup object will be generated. Configure the avatar preset for it.
9. Place the for test prefab found under “Asset/motchiri_shader” into the scene.
10. In the top menu bar, select “Tools → Gesture Manager Emulator.”
11. Start the Gesture Manager, bring for test near the skin, and if it squishes normally, you’re done.

:::caution
If it’s not working properly, check [“Troubleshooting”](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition) or [“Q&A”](https://wataame89.github.io/documents-wataameya/motchiriShader/qa).
:::

<br/>
<br/>

### For Unsupported Avatars

<!-- <iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->

#### Installing the Motchiri Shader

The installation process is almost the same as for supported avatars.  
Select “None” in the preset, and set up the mesh and mask.

If there is no mask, you will need to create one.

#### Creating a Mask

You need to create a mask on the avatar’s UV where you completely fill in black the areas you do NOT want to indent.

<img
src={require('/img/MotchiriShader/Rindo.png').default}
style={{ width: '50%' }}
/>

In the Motchiri Shader, areas that are white on the UV will indent, while areas that are black will not. (Gray acts as a mid-level strength.) Also, if there is a seam in the UV where the indentation differs, it can break, so set it to the same color. (It’s easy using texture paint in Blender.)

Use a painting tool to start with a white texture and fill in the hands and feet (and connected areas like the wrists and ankles) in black on the avatar’s UV. Make sure the boundary between the hands/feet and the rest of the body is also filled in black. Soften the boundary between white and black on the mesh.

:::caution

- It’s not strictly required, but for a more natural indent, you can also fill in black on areas such as the neck, forearms, elbows, knees, navel, pelvis, and shins.
- If your face texture is shared with your body, fill in black for the face as well.

:::

:::danger

- After importing the mask into Unity, please make sure to enable **Mip Streaming** in the texture settings. (Otherwise, you may get an error at upload time.)

:::

#### Example of Creation:

For Rindo-chan’s UV image, the mask might look like this:

<img
src={require('/img/MotchiriShader/hitaiou1.png').default}
style={{ width: '80%' }}
/>

For a face mask, create a texture filled entirely in black once, then paint white only on the cheek areas in the UV and blur the edges.

<img
src={require('/img/MotchiriShader/hitaiou2.png').default}
style={{ width: '30%' }}
/>

If you have created a mask for an unsupported avatar, we’d appreciate it if you could share it via [this form](https://forms.gle/KLTTSqsE4qs8uvfN8).  
([Mask sharing folder is here](https://drive.google.com/drive/folders/1stqqIn21kCK0fb2n-9iuPANs1vyrfCKaCaRX-rHcl3V3LFspC_EzBBgI0mktw_Ot9TtHXLb9?usp=sharing))

<br/>
<br/>

### Old Method (Without Modular Avatar)

:::danger Not recommended
This method duplicates the avatar and FX layer for setup, so it is currently not recommended.  
Use the new method unless you have a special reason.

Because we use Gesture Manager for testing, it only supports VRChat Creator Companion (VCC).  
(Though not recommended, if you test in VRChat directly, it can still work without VCC.)

[Click here for the old method manual](https://docs.google.com/document/d/12P_FFVJuNOV73QjRfC3pZ4aRZqmnqr281_yjS4hq_uY/edit?usp=share_link)
:::

