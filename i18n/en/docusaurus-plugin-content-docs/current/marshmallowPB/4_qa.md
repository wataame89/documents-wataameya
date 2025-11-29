
# Q&A

:::info Page Description
Refer to this page if Marshmallow PB is functioning normally, but you still have concerns or questions.  
(If you want more advanced usage details, please refer to [“How to Use/Advanced”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition). If it isn’t working properly, see [“If You Run into Trouble”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition).)
:::

### Changing the Size of Marshmallow PB in VRChat

Due to how Marshmallow PB works, it’s not possible to change its size in VRChat.

### Using It on the Butt

Because only one Marshmallow PB can be introduced, you cannot use it on both the chest and butt at the same time.  
However, you might be able to if you bake it into the avatar using Modular Avatar’s Manual Bake Avatar. Note that this is not officially supported.

### Want to Squish It with Both Players’ Arms

On some avatars, colliders derived from the avatar’s own upper arms may already be set by presets.  
If you want to configure this yourself, add PB colliders to both upper arms and register those colliders in Marshmallow PB’s PhysBone Collider list.

### Chest Stretches Too Much

#### If it stretches too much when bending forward:

Reduce the value of “How easily the chest sags” in the setup so that it doesn’t stretch as much.

#### If it stretches too much when pulled:

You can reduce the PhysBone/MaxStretch value to address this.

### Want to Fix Marshmallow PB in Place Like a Normal PB

Due to the internal structure of Marshmallow PB, it cannot be fixed in place the way a standard PhysBone can.

### Selling an Avatar with Marshmallow PB Pre-Installed

This is **not permitted** under the usage rules.

### Reverting an Avatar That Has Marshmallow PB Installed

#### For the new method:

Since the new method introduces it non-destructively, just delete marshmallow_PB_Setup under the avatar to revert to the state before introduction.

#### For the old method:

In the old method, because the avatar and FX are duplicated, returning them to the exact original state requires some work. Marshmallow PB duplicates the same-named bones and nests the existing chest bone under them (e.g., Chest/breast_L/breast_L/…). Therefore, remove the child bone of the two same-named parent-child bones and delete the parent bone to restore it. Then delete all objects named “marshmallow,” revert the FX layer to the original avatar’s FX, and remove “\_MPB” from the end of the avatar name. (If the avatar or FX name ends with \_MPB, it will be rejected by the setup tool.)  
For details, please see the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nh1pLiSWz6I?si=6jGZxrHTBik8gz7L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

