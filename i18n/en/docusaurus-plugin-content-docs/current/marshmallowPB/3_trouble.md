# If You Run into Trouble

:::info Page Description
Refer to this page if you suspect Marshmallow PB is not working correctly.  
(If it is working correctly, see [“How to Use/Advanced”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition) or [“Q&A”](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa).)
:::

### If Clothing Clips Through

Due to the nature of Marshmallow PB, some outfits will inevitably clip. Try the following countermeasures:

- **Limit Marshmallow PB’s functionality in VRChat.**
  - From the EX menu, you can turn off squish, switch to normal PB, or turn Marshmallow PB off entirely.
  - You have to select it each time, but clipping caused by Marshmallow PB disappears.
- **Slightly reduce the chest shape key on the body mesh.**
  - Make the body mesh’s chest-size shape key slightly smaller than the clothing’s chest-size shape key (for example, body 90, clothing 100).
  - This is effective for many outfits.
- **Reduce the effects of Inertia and Parallel Bone.**
  - Lower Inertia’s Immobile value toward 1 and Parallel Bone’s parallel degree toward 0 to weaken their influence.
  - This is effective when clipping occurs during vertical motion.
- **Limit the chest bone’s angle.**
  - In the PhysBone Settings, reduce the value of “[LimitAngle (Angle Limit)](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup).”
  - This is effective when clipping occurs during large swings.
- **Make the chest squish shallower.**
  - In Anti-Penetration Settings, increase “[LimitColliderPosition](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup).”
  - In PhysBone Settings, lower “[MaxSquish](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)” to reduce squish in the normal pose.
  - In Gravity Settings, lower “[Chest Squish Ease (On Back)](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)” to reduce squish when lying on your back.
  - “LimitColliderPosition” takes priority over the other two, so in most cases changing only this parameter is enough.
  - This is effective when clipping occurs only while the chest is squished.
- **Turn off the squish function.**
  - Enable “[Turn Off Squish Function (Clipping Countermeasure)](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup).”
  - You can also toggle it from the EX menu in VRChat.
  - This is effective when clipping occurs only while squished and you don’t mind losing deformation.

### If Marshmallow PB Is Not Being Applied

If `marshmallow_PB_setup` still remains even after entering Play mode via Gesture Manager, Marshmallow PB has not been applied correctly.

#### If a message is displayed in the window

Check the installation steps again and fix the setup according to the message.

#### If errors appear in the NDMF Console

Some kind of issue has interrupted processing. Please copy the error code and send it via [Booth](https://wataame89.booth.pm) or [Twitter](https://twitter.com/wataameya_vr).  
However, errors that occur **when leaving** Play mode are unrelated to Marshmallow PB. Please send only the errors that occur **when entering** Play mode.

#### If no errors appear in the NDMF Console

Check that “Tools → NDM Framework → Apply on Play” is enabled.  
If it is enabled but Marshmallow PB still doesn’t work, check again for errors and contact us if necessary.

<!-- ### If There Is Excessive Shaking
When Marshmallow PB is pressed, there can be some jitter. Basically, increasing the Stiffness (resistance to deformation) will reduce this jitter.

### If an Error Window Appears
Most of the time, it’s because of an incorrect setup configuration. Please refer to the setup video and reconfigure. -->

### If the Chest Squishes on Its Own

If “Chest Interference with Other Players” is on, a bug may cause the chest to squish by itself even when not touched.  
In most cases, turning off “Chest Interference with Other Players” resolves the issue.

### If the Squish Animation Does Not Play

If another FX layer is assigned to the avatar, the squish animation may stop working.  
Assign an empty controller to the FX layer to restore the animation.

### If the Marshmallow PB Jiggle Feels Wrong

For avatars that have multiple PB components, the default settings may fail to delete all PBs, causing odd movement (for example, on Velle). In such a case, enabling “Remove All PB Under This Bone” should fix the issue.  
For unsupported avatars, existing PhysBone or Constraint components that manipulate the same bones can interfere, so delete as many as possible before installing Marshmallow PB.  
Also check for components placed directly under the avatar root, not just under the chest bone.

### If the Positioning of Marshmallow PB Is Wrong (Mesh Breaks When Moving)

If the Marshmallow PB object has shifted for some reason, the mesh may break when moving.  
Either set it up the same way as for an unsupported avatar, or enable “[Use This Object’s Transform as Offset](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)” and adjust the offset.

### If the Avatar’s Chest Mesh Twists or Breaks

If an avatar animation directly controls the chest bone, the chest mesh may twist or break (for example, on Lasyusha or Nepherisa).  
If replacing the FX layer with an empty controller fixes the problem, search for animations that manipulate the chest bone and delete or adjust them.

### If Only the Outfit’s Chest Twists or Breaks

If you are using VRCFury’s Armature Link, sometimes only the outfit mesh will twist.  
In that case, please use Modular Avatar’s outfit system instead.

---

### Avatar-Specific Issues

#### “Shinano” – Chest Jiggle Feels Wrong / Left and Right Are Different

For unknown reasons, a chest PB that should be removed ends up remaining.  
Deleting the chest PB in advance should resolve the issue.

#### “Kuronatu” – Marshmallow PB Does Not Work

For Kuronatu with the default chest size, the FX layer animation prevents the PB from moving.  
Deleting “Breast_DB” in Kuronatu’s FX layer should make it work.

#### “Rurune” – Strange Object Appears When AFK

Rurune’s AFK animation compresses the Armature, which conflicts with the Marshmallow PB constraints and leaves a stray mesh behind.  
You can handle this by moving the AFK animation underground. An animation fix patch is available [here](https://drive.google.com/file/d/1GFAQwwUsCjFp7VGXelsKM6SXsQ75dpNT/view?usp=sharing).

#### “Lasyusha” – Chest Twists

On Lasyusha, the FX layer animation manipulates the chest bone’s position, which can conflict with Marshmallow PB and cause twisting.  
In this case, set the “BreastPB Control” layer’s weight to 0 or delete the layer if unnecessary.

#### “Nepherisa” – Chest Twists

On Nepherisa, the FX layer animation manipulates the chest bone’s position, which can conflict with Marshmallow PB and cause twisting.  
In this case, set the “Bust Size” layer’s weight to 0 or delete the layer if unnecessary.

---

### Known Issues

#### Collider Detection Not Disappearing When Marshmallow PB Is Grabbed

When you grab Marshmallow PB, the collider’s detection may sometimes remain on.  
If you pull it away from the collider (for example by stretching it), the detection eventually disappears. Although unconfirmed, this is likely a VRChat-side issue.  
As of ver2.0, this function is disabled by default.

---

:::caution If Issues Are Not Resolved by This Page
Please see [Contact](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtocontact) for further assistance.
:::

