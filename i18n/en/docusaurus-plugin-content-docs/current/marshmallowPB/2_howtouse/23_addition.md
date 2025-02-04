# Advanced Usage

:::info Page Description
Refer to this page if Marshmallow PB is working normally but you want more advanced usage.  
(For general troubleshooting, see [“If You Run into Trouble”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition) or [“Q&A”](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa).)
:::

### Using the Avatar’s Original PhysBone

If you want to keep your avatar’s original PB behavior and only apply Marshmallow PB’s squish, enable “Apply Only Squish Function (Use Original PB).” Basically, the avatar’s PB will behave as before, but it will squish when pressed. If you also want Marshmallow PB’s grabbing feature, be sure to turn off Allow Grabbing on the avatar’s original PB.

### Adjusting Marshmallow PB’s Jiggle

Marshmallow PB’s jiggle is determined by multiple parameters.  
The PB Preset sets the PhysBone parameters “Pull,” “Momentum,” “Stiffness,” “Gravity,” “GravityFalloff,” and “Immobile.”

Aside from the PB Preset, two additional parameters significantly influence the jiggle: “StretchMotion” and “Chest Bone Rotation Influence.”

- **“StretchMotion”**: An inertia parameter related to how easily the chest squishes when moving in a certain direction.
- **“Chest Bone Rotation Influence”**: A parameter that affects the angle of the chest bone and creates a sense of weight.
  - If set to 1, it behaves like a standard PB. Lower values make the chest move more in parallel, effectively shifting its pivot backward, which can feel more natural.
  - The default is 0.8, which is slightly parallel.

By tuning these parameters, you can fine-tune jiggle behavior. For details on each, see [Configuration Items](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup).

### Adjusting Marshmallow PB’s Position and Angle

For supported avatars, the Marshmallow PB bone position and angle are fixed by the preset. For unsupported avatars, your manual positioning is applied. If you’ve made the chest larger, etc., you can consider adjusting these further.

### Interacting with Other Players’ Marshmallow PB

In the Marshmallow PB settings, enable “Chest Interference with Other Players.” Both players must have this enabled for mutual interference. The default is off.

### Interacting with Head Colliders

~~When “Chest Interference with Other Players” is enabled, Marshmallow PB can also interact with the default head collider of players who do not have Marshmallow PB. However, since the default head collider is small, increasing the collider size under “Coliders” in the Avatar Descriptor can make it easier to detect.~~  
When “Chest Interference with Other Players” is enabled, Marshmallow PB will detect contacts from objects that have a head_tag VRC Contact Sender. By placing a VRC Contact Sender on someone’s head, you can allow their head to collide with your Marshmallow PB.

<img
src={require('/img/marshmallowPB/head.png').default}
style={{ width: '100%' }}
/>

### Modifying the Squish Animation

Marshmallow PB uses an animation that scales the chest bone to add a “mochi-like” effect when squishing. If you want to adjust the squish animation, edit the two animations named “MPB_L_Scale_squish” and “MPB_R_Scale_squish” under “marshmallow_PB/Animation,” adjusting the Scale x/y parameters.

### Adding a Custom Avatar Preset

Marshmallow PB includes a function that holds per-avatar configuration in “presets.”  
If you wish to introduce Marshmallow PB to multiple identical avatars, creating your own avatar preset can be very convenient.

#### How to Add a Custom Avatar Preset

1. Prepare two avatars with 0 and 100 for the chest blendshape values, then install Marshmallow PB as if they are unsupported avatars, noting the position, rotation, and scale of marshmallow_PB_L.
2. In the “Preset” folder, duplicate the “Preset0” file and rename it (note: a single digit name may cause an error).
3. Edit the fields in the new file: avatarName, Path, breast_L_position, breast_L_rotation, and breast_L_scale.  
   (Use “\_0” for the avatar with 0 chest blendshape, and “\_100” for the avatar with 100 chest blendshape.)  
   Other parameters can generally remain as is.
4. Check the setup tool to confirm your new preset is available.

#### Avatar Preset Configuration Items

<img
src={require('/img/marshmallowPB/preset.png').default}
style={{ width: '80%' }}
/>
Avatar preset settings are in “marshmallow_PB/Setup/Preset.”

#### Path

Relative path from the avatar to the chest bone and colliders.

#### breast_L_position, breast_L_scale

The local coordinates/scale of marshmallow_PB_L. The right side (marshmallow_PB_R) is mirrored automatically.

#### (Parameter)\_0, (Parameter)\_100

Values for each parameter when the chest blendshape is 0 and when it is 100. Intermediate values are interpolated. Each parameter corresponds to a PhysBone parameter described in [Configuration Items](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup).

<!-- If you want to officially share your preset for an unsupported avatar, please submit it via [this Google Form](https://forms.gle/9qfEqBHDyiEisy4G9). -->

<!-- ### Installing Manually (e.g. Prefabs)
If you want to install Marshmallow PB manually without using the tool, see this video (not recommended).
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->
