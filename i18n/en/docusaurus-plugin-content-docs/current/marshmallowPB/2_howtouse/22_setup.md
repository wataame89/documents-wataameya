
# Configuration Items

### Setup Tool Configuration Items

<img
src={require('/img/marshmallowPB/setup.png').default}
style={{ width: '80%' }}
/>

---

### Basic Settings

#### Preset

Select the avatar preset here.

#### Chest Bone

Select your avatar’s chest bone here.

#### Chest Size (blendshape)

For supported avatars, set the value of the **“increase chest size”** shape key.  
If your avatar uses a “decrease chest size” shape key, it’s not supported. Please configure it like an unsupported avatar.

#### Chest Bone Y Scale (Transform)

Enter the **Y scale** value of your chest bone here. X and Z scale values are not required.  
Different values for X, Y, and Z on the actual chest bone will not cause issues.

#### PB Preset

Select a PhysBone preset here.  
You can choose from three types of jiggle: “Smooth,” “PuruPuru,” and “TayunTayun,” each in three hardness levels.

---

### PhysBone

#### Pull

PhysBone’s “return-to-original-shape” strength parameter.

#### Momentum

PhysBone’s spring strength parameter.

#### Stiffness

How resistant the PhysBone is to bending (reduces “wobble”).

#### Gravity

Strength of gravity on the PhysBone.

#### GravityFalloff

How much the PhysBone retains its shape relative to its initial angle before gravity takes effect. The greater the angle from the start, the more gravity influences it.

#### Immobile

How resistant the PhysBone is to movement. This parameter does not affect behavior when pressing a collider.

#### LimitAngle

Angle limit for PhysBone movement.

#### CollisionRadius

Size of the PhysBone collider. Increasing this makes the detection for touching the chest larger.

#### LimitColliderPosition

A parameter for the position of the anti-clipping collider. Increasing it moderately can help prevent clipping.  
(Example: 0.135 → 0.18)

#### StretchMotion

An inertia parameter for how easily the chest squishes (how the chest reacts when the avatar moves forward, etc.).

#### MaxStretch

Maximum extension of the PhysBone. The larger the value, the more it can stretch.

#### MaxSquish

Maximum squish of the PhysBone. The larger the value, the deeper it squishes. Conversely, making it smaller results in shallower squishing, which reduces clipping.

#### Collider

Up to six colliders that interact with the PhysBone.

---

### Detailed Settings

#### Grab Function

Whether the PhysBone can be grabbed.

#### Floor Collider

Whether the PhysBone collides with the floor.

#### Chest Interference with Other Players

Whether to enable chest-to-chest interference with other players who also have Marshmallow PB. Also interacts with default head colliders.

#### Chest Jiggle Rotation

Whether the chest follows an elliptical jiggle motion. If off, it will jiggle in parallel.  
Because the upward motion of the chest is restricted, you may wish to turn it off if it feels odd.

#### Interference Between Left and Right Chest

Whether to place colliders so that the left and right chests of the avatar interfere with each other.

#### Size of Interference Colliders

The size of colliders for interference between the left and right chests.

#### Chest Bone Rotation Influence

How much PhysBone rotation affects the chest bone. Setting this to 0 causes the chest bone to move in parallel. Depending on the clothing, a lower value may reduce clipping. (Equivalent to the Weight of the Rotation Constraint on the chest bone.)

#### Squish Animation Strength

Adjust the intensity of the chest squish animation. If the chest is large, it might spread too wide horizontally when squishing, so reducing this parameter can make it look more natural. (Equivalent to the Weight of the Scale Constraint on the chest bone.)

#### How Easily the Chest Sags

Maximum value for how much the chest sags when bending forward. Setting it to 0 disables sagging.

#### Chest Squish Ease (On Back)

Maximum squish when lying on your back. Setting it to 0 disables squish in that situation.

---

### Advanced Settings

#### Apply Only Squish Function (Use Original PB)

Leaves the avatar’s original PB as is and applies only the squish function of Marshmallow PB. In practice, this disables Marshmallow PB’s jiggle function but keeps the original PB’s movement. If you use this, it’s recommended to turn off Allow Grabbing on the original PB.

#### Turn Off Squish Function (Clipping Countermeasure)

Disables the squish of Marshmallow PB, leaving only the jiggle function. If you absolutely cannot avoid clipping, turn this on.

#### Turn Off Gravity Function

Disables the mechanism that squishes the chest when lying on your back or stretches it when bending forward. It doesn’t disable the PhysBone “Gravity” parameter itself.

#### Remove All PB Under This Bone

Normally only the PB on the selected chest bone is removed, but enabling this also removes all PBs under that chest bone. If an unsupported avatar has a complex PB structure, turn this on.

#### Use This Object’s Transform as Offset

Uses marshmallow_PB_Setup’s position as an offset for Marshmallow PB’s position, rotation, and scale.  
If your avatar’s height changes due to heels, for example, the Marshmallow PB may shift. Turning this on and moving marshmallow_PB_Setup in the same direction/amount can prevent that shift.  
If Marshmallow PB is misaligned, you can fix it with this feature.

