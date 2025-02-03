
# If You Run into Trouble

:::info Page Description
Refer to this page if you suspect Marshmallow PB is not working correctly.  
(If it is working correctly, see [“How to Use/Advanced”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition) or [“Q&A”](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa))
:::

### If Clothing Clips Through

Due to the nature of Marshmallow PB, clothing may inevitably clip in some situations. Here are some possible countermeasures:

- **Slightly reduce the chest shape key on the body mesh.**
  - Slightly adjust the body mesh’s chest size shape key relative to the clothing’s shape key so that the body mesh’s chest is a bit smaller.
  - In most cases, this solves the problem.
- **Make the chest squish shallower.**
  - Increase the value of “[LimitColliderPosition](https://wataame89.github.io/documents-marshmallowPB/setup#limitcolliderposition)” in the PhysBone settings or decrease “[MaxSquish](https://wataame89.github.io/documents-marshmallowPB/setup#maxsquish).”
  - For how much it squishes when lying on your back, you can decrease the value of “[Chest Squish Ease (On Back)](https://wataame89.github.io/documents-marshmallowPB/setup#%E8%83%B8%E3%81%AE%E3%81%A4%E3%81%B6%E3%82%8C%E3%82%84%E3%81%99%E3%81%95%EF%BC%88%E4%BB%B0%E5%90%91%E3%81%91%EF%BC%89).”
- **Reduce the deformation when squished.**
  - Lower the value of “[Squish Animation Strength](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%81%A4%E3%81%B6%E3%82%8C%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%BC%B7%E3%81%95)” to moderate the deformation.
- **Turn off the squish function.**
  - Enable “[Turn Off Squish Function (Clipping Countermeasure)](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%81%A4%E3%81%B6%E3%82%8C%E6%A9%9F%E8%83%BD%E3%82%AA%E3%83%95%E8%B2%AB%E9%80%9A%E5%AF%BE%E7%AD%96).”
  - This will stop Marshmallow PB from squishing, but it also stops clipping.

### If Marshmallow PB Is Not Being Applied

If marshmallow_PB_setup still remains even when you use Gesture Manager or enter Play mode, Marshmallow PB might not have been applied correctly.

#### If a message is displayed in the window:

Please check the installation method again and follow the instructions in the message.

#### If errors appear in the Console:

Some issue has caused the process to stop. Please send the detailed error code to us via [Booth](https://wataame89.booth.pm) or [Twitter](https://twitter.com/wataameya_vr).  
**However**, errors that appear when you exit Play mode are not related to Marshmallow PB. Please send us the errors that appear when you **enter** Play mode.

#### If no errors appear in the Console:

Check if Tools → NDM Framework → Apply on Play is checked. If not, please check it. If it is checked and still not working, check for errors again and contact us if necessary.

<!-- ### If There Is Excessive Shaking
When Marshmallow PB is pressed, there can be some jitter. Basically, increasing the Stiffness (resistance to deformation) will reduce this jitter.

### If an Error Window Appears
Most of the time, it’s because of an incorrect setup configuration. Please refer to the setup video and reconfigure. -->

### If the Chest Squishes on Its Own

When “Chest Interference with Other Players” is on, a bug may cause it to squish by itself. In most cases, turning off “Chest Interference with Other Players” solves the issue.

### If the Marshmallow PB Jiggle Feels Wrong

For avatars that have multiple PBs, the default settings may fail to remove all PB components, causing odd behavior (for example, on Velle). In such a case, enabling “Remove All PB Under This Bone” should fix the issue.

### If the Positioning of Marshmallow PB Is Wrong (Mesh Breaks When Moving)

Marshmallow PB may be misaligned for some reason. Please set it up as for an unsupported avatar, or turn on “[Use This Object’s Transform as Offset](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%82%AA%E3%83%95%E3%82%BB%E3%83%83%E3%83%88%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%81%AE%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AEtransform%E3%82%92%E4%BD%BF%E7%94%A8)”  
and adjust the offset accordingly.

---

### Avatar-Specific Issues

#### “Shinano” : Odd Chest Jiggle / Lopsided Left and Right

For unknown reasons, a chest PB that should be removed ends up remaining, causing this.  
If you delete the chest PB in advance, it should resolve the issue.

#### “Kuronatu” : Marshmallow PB Does Not Work

If the chest size is normal for Kuronatu, the FX layer animation prevents the PB from moving.  
Deleting the “Breast_DB” in Kuronatu’s FX layer should make it work.

#### “Rurune” : A Strange Object Appears When AFK

Rurune’s AFK compresses the Armature, which conflicts with the Marshmallow PB Constraint, leaving a stray mesh behind.  
You can handle this by burying the AFK animation underground. If you contact us by DM, we can provide a patch that fixes the animation.

---

### Known Issues

#### Collider Detection Not Disappearing When Marshmallow PB Is Grabbed

When you grab Marshmallow PB, the collider might remain active.  
If you pull it far enough away from the collider, the detection eventually vanishes. Though unconfirmed, it’s likely a VRChat bug.

#### Breast Size Fluctuates Slightly with Distance from Other Players

When multiple contacts (such as “Mocchiri” shaders) are involved, the chest size may oscillate slightly.  
This seems to be a VRChat bug caused by contact parameters being reset.

---

:::caution If Issues Are Not Resolved by This Page
Please see [Contact](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtocontact) for further assistance.
:::

