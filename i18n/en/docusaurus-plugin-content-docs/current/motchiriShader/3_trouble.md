# Troubleshooting

:::info Page Description
Please refer to this page if you think the Motchiri Shader is not working properly.  
(If it is working correctly, see [“How to Use / Advanced”](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition) or [“Q&A”](https://wataame89.github.io/documents-wataameya/motchiriShader/qa))
:::

### Shader is not working

First, check if it works in Unity (Gesture Manager) and in VRChat, and see at which point it fails.

#### If it does not work in Unity (Gesture Manager):

If it does not work in Unity, there may be an issue with the avatar.

- It will not work if there is an animation that changes the mesh’s material.
- If WriteDefault is not unified in the FX layer, it may fail to work, so be sure it is unified.
- If a material error occurs, right-click on the motchiri_shader folder and select “Reimport,” which may fix the issue.
- If it still does not work, create a new project and set up the avatar there.
  - The default avatars derived from the prefab of supported avatars should work. Check at which point in your modifications it stops working. If you figure out which modification is interfering, it may be possible for the Motchiri Shader to support it, so please contact us.
  - Also, if the default avatar does not work, there may be an issue with the system, so please contact us.

#### If it does not work in VRChat:

If it works in Unity but not in VRChat, there may be a problem with the VRChat settings.

- If Avatar Interact > Self Interact (a setting preventing your own PhysBones from being touched) in VRChat’s settings is turned off, you cannot touch it yourself. (Reference: [Official Documentation](https://docs.vrchat.com/docs/permissions-and-settings))
- It will not work if you use the VRChat avatar scaling feature. Please use the default size.

### I can touch it, but my friend cannot

By design, only one other player who is closest to you can touch the mesh at a time. If multiple players try to touch it simultaneously, or there are multiple players around you, it may not function correctly. Also, depending on the Contact settings, it may be impossible to touch.

As a way to check, if that player can touch your PhysBones (ears, tails, etc.), they should also be able to touch the Motchiri Shader. If PhysBone can be touched but the squishy effect does not work, try resetting the avatar or changing to a different avatar; in many cases, it will then work. If PhysBone cannot be touched either, check the settings in Avatar Interact in VRChat. (Reference: [Official Documentation](https://docs.vrchat.com/docs/permissions-and-settings))

### Sometimes it’s hard to touch with the index finger due to misalignment

Since the default VRChat finger colliders are capsule-shaped, they can be off within that capsule. More specifically, the point of contact is determined by which point in the capsule is closest to the center (motchiri object). Therefore, sometimes the squishy contact can be at the fingertip or near the base of the finger. If you cannot touch it, try using the base of your finger. As a workaround, changing the default finger collider to a spherical collider helps prevent misalignment.

### Tights mesh is clipping through

Because only the body is high-poly, the polygons of the tights and the body do not align, causing clipping. ~If you enable tessellation on the tights so that it matches the body polygons, that should fix it.~ Currently, due to changes in lilToon specifications, the subdivision method has changed, so this cannot be solved by tessellation settings. If you slightly enable the shape key to hide the body mesh (about 5), you can eliminate clipping without ruining the appearance.

<!-- <img
src={require('/img/MotchiriShader/taitu.png').default}
style={{ width: '800px' }}
/> -->

### My avatar’s cheeks cannot squish well

Because the index finger collider’s misalignment tends to move toward the center of the motchiri prefab, when trying to touch the cheek, the contact point may shift to the base of the finger, making it hard to touch. Solutions include touching from below the cheek or changing the default collider settings so they do not misalign.

### The mesh breaks where it’s squishy

Please fill in black on the mask for the areas that crack. If there are sharp edges marked in Blender on the avatar, it can also cause the mesh to shift, so clear them in unneeded areas.

### It cannot be used simultaneously with the body “nadenade” shader (shadowdepth_body) that darkens the body

The shadowdepth_body shader refers to the mesh before it is turned high-poly, so when it is high-poly, the coordinates will no longer match, preventing normal operation. You can solve this by using the distance fade feature in lilToon, which functions similarly to shadowdepth_body. Remove shadowdepth_body and set the motchiri shader material as shown in the figure so that it works roughly the same.

<img
src={require('/img/MotchiriShader/shadow.png').default}
style={{ width: '800px' }}
/>

### If used together with the blackbody shader, squishy areas turn black

Remove the check at the very bottom in the figure to fix it.

<img
src={require('/img/MotchiriShader/black.png').default}
style={{ width: '400px' }}
/>

---

### Avatar-specific issues

(Under construction)

---

### Known Issues

### Issue where it does not work if contacts are concentrated

When Motchiri Shader and other avatars with many contacts gather in a dense area, the Motchiri Shader may fail to function correctly due to multiple contacts overlapping.  
This is a bug on VRChat’s side, where contact parameters are initialized, causing this phenomenon.

---

:::caution If this page does not solve your issue
Please refer to [Contact Us](https://wataame89.github.io/documents-wataameya/motchiriShader/howtocontact).
:::
