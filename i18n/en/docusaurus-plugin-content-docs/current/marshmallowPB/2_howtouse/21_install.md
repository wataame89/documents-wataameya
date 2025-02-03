
# Installation

### If Your Avatar Is Supported

<iframe width="100%" height="480" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### Importing Packages

1. Open your project with the VRChat Creator Companion (VCC).
2. Install the [Modular Avatar](https://modular-avatar.nadena.dev/ja/) package into VCC. ([Package link here](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))
3. In VCC, open “Manage Project” for your project and add “**Gesture Manager**,” “**Modular Avatar**,” and “**Non-Destructive Modular Framework**.”
4. Reopen the project and confirm they have been imported.

:::caution
If **Marshmallow PB ver1.7.0 or earlier** is already present, move any generated FX from inside “marshmallow_PB/Setup/FX” elsewhere, then delete the marshmallow_PB folder. (Failure to do so may cause errors.)
:::

#### Installing Marshmallow PB

5. Import the [latest version of Marshmallow PB](https://wataame89.booth.pm/items/4511536).
6. Right-click on your avatar, then select “wataameya → MarshmallowPB.”
7. Set the avatar preset in the generated marshmallow_PB_Setup.
8. From the top menu bar, select “Tools → Gesture Manager Emulator.”
9. Run Gesture Manager, and if Marshmallow PB moves normally, you are done.

:::caution
If it does not work correctly, see [“If You Run into Trouble”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition) or [“Q&A”](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa).  
:::

<br/>
<br/>

### If Your Avatar Is Not Supported

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### Installing Marshmallow PB

5. Import the [latest version of Marshmallow PB](https://wataame89.booth.pm/items/4511536).
6. Right-click on your avatar, then select “wataameya → MarshmallowPB.”
7. In the generated marshmallow_PB_Setup, do not select any preset and set your chest bone manually.
8. Remove the avatar’s original chest PhysBone component(s). (In the video, it is mistakenly left on.)  
   Make sure to remove any PhysBones assigned to the chest area. There may be more than one on your avatar.
9. Under marshmallow_PB_Setup, enable “For Unsupported Avatar/marshmallow_PB_L.”
10. Check the position of the green capsule collider. If invisible, click “Gizmos” at the top of the Scene view.
11. Move/scale the capsule collider to the left chest area of the avatar. As a reference, from a direct side view, position the pivot (the point you move on the XYZ axes) at the curve boundary (red line) of the chest.
12. Adjust the scale so the capsule collider fits within the chest.
13. Run Gesture Manager, and if it works normally, you’re done.  
    (When starting, the capsule collider disappears and is replaced by a different collider. It may shift slightly, but that’s normal.)

:::caution
If you can’t set it properly, refer to “Q&A” or “If You Run into Trouble.”  
In particular, **not removing the avatar’s original chest PhysBone** is a common cause of issues, so be sure you’ve removed it.
:::

<img
src={require('/img/marshmallowPB/hitaioou2.png').default}
style={{ width: '100%' }}
/>

<br/>
<br/>

### Old Method (Without Modular Avatar)

:::danger Not Recommended
Because this method duplicates avatars and FX layers, it is no longer recommended.  
Use the new method unless you have a special reason.

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

For verification, we use Gesture Manager, so it supports only the VRChat Creator Companion (VCC).  
(Though not recommended, it will still work if tested in VRChat directly.)

[Here is the old-method documentation (Japanese)](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)

