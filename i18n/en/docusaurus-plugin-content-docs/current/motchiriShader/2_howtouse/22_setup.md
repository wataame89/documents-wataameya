
# Settings

### Setup Tool Settings

<img
src={require('/img/MotchiriShader/setup.png').default}
style={{ width: '80%' }}
/>

---

### Basic Settings

#### Preset

Where you choose a supported avatar.

---

### Shader Application Locations 1~3

#### Mesh

Select the mesh to which you will apply the shader.

#### Material Slot Number

Specify the material slot number of the material to which the shader will be applied.  
Check the Skinned Mesh Renderer’s Materials on your mesh. Identify the slot number for the relevant material. Be careful if the mesh uses multiple materials (e.g., for the face).

#### Subdivision (High Load)

Subdivide the mesh to make it smoother. If you are applying it to a body, enabling this gives a more natural result.

#### Range Specification Mask

Use a mask (black-and-white texture) to specify which areas will be squishy under the shader. If you apply it to a detailed part of the mesh (e.g., fingers, nails), it may break, so use a mask to exclude those areas from reacting. If you don’t use a mask, the portion near the index finger that contains a collider will permanently break. Therefore, if you are applying it to the body, you must use a mask.

---

### Basic Settings

#### Squishy Strength

Set the depth of the squishy effect.

#### Effect Range

Set how far the squishy effect spreads.

#### Shadow Color

Set the color of the shadow that appears when squishing. Adjust based on skin color.

#### Shadow Strength

Set the strength of the shadow that appears when squishing.

#### Shadow Blur Range

Set how much the shadow blur spreads when squishing.

---

### Detailed Settings

#### Squish Detection Adjustment Parameter

This adjusts the depth of the squish detection. Usually, the surface can squish even without full contact, but increasing this parameter (around 0.03) moves the detection deeper, requiring the collider to penetrate further before squishing.

#### Squishy Parameters 1~3

Parameters for the squishy function. Changing these will alter the shape of the squish effect.

#### Normal Correction

Recalculates normals for the squished area of the mesh. Turn this on if you are using MatCap or rim light.

#### Normal Correction Parameter

Parameter for recalculating normals. Adjust if the normals look odd.

#### Use EX Colliders

Configure whether to use EX colliders. EX colliders are colliders other than the index finger.  
When enabled, it reacts to the VRC Contact Sender’s EX1~3 tags. EX1~3 behave like a straight line (like a capsule) between them.  
See motchiri_shader/EX/Motchiri_Stick (Motchiri Stick).prefab for an example of its behavior. (Due to a bug, it does not work in Gesture Manager, so please check in VRChat.)

#### EX Collider Scaling Factor

If you want to change the range of squishy effect only for the EX colliders, set this. It multiplies the effect range of additional colliders. It does not affect the default colliders. Use this if you want to adjust only the additional colliders’ range.

#### Contact Range

Currently cannot be configured. Do not change from the default.

#### Contact Placement Radius

Currently cannot be configured. Do not change from the default.

