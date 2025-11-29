# Introduction

<img
src="https://booth.pximg.net/fa10e05a-2beb-4ed5-bce0-808f4aa52e0b/i/4108136/1d135fdd-842f-4863-b438-e352b4528ce5_base_resized.jpg"
style={{ width: '300px' }}
/>

### Product Description

[Motchiri Shader](https://wataame89.booth.pm/items/4108136) is a shader that allows you to create a “squishy” feeling when touched, using Avatar Dynamics. It enables touch interaction with meshes using the index finger. Not only you but even other players who do not have this shader installed can interact with it.

Thanks to the setup system using Modular Avatar, you can easily implement it in a non-destructive manner. Even for avatars that are not officially supported, it can be set up by creating your own mask (explained later).

A mask that specifies how strongly the squish effect should be is required for use. This mask can help prevent distortion or keep certain parts like bones firmer. Compatible avatars come with a mask provided, but if you want to fine-tune or if the avatar is not supported, you will need to create one.

Since it is a shader based on lilLab’s [lilToon](https://booth.pm/ja/items/3087170), it is set up as a conversion from lilToon. By using lilToon’s tessellation (high poly) feature, even low-poly areas (like thighs) can have a squishy feel. Basically, if the mesh is consistent (face, body, tail, etc.), it can be made to feel squishy.

Only you and the single other player who is closest to you can touch the mesh. By default, it reacts to the index finger, but you can change it to another collider or set up additional colliders in the settings.  
Starting from ver2.0.0, thanks to support for Modular Avatar’s [Non-Destructive Modular Framework (NDMF)](https://github.com/bdunderscore/ndmf), non-destructive installation is now possible.

<iframe width="640" height="360" src="https://player.vimeo.com/video/1052573235?h=04bac04696&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

### Features

- Squishy function: Touch the skin with your index finger and feel it squish!
- Shader conversion function: Automatically converts from lilToon!
- Additional colliders: By setting EX colliders, you can enable touching with fingers other than the index finger!
- Various fine-tuned adjustments (fine-tuning of the squishy function, normal correction, etc.)

### Supported Avatars

Amanatsu, Anon, Carukia, Ciel, Haoran, Imeris, Karin, Kikyo, Kokoa, Koyuki, Leefa, Liqu, Luruleah, Mariel, Maya, Merino, Rindo, Rushina, Selestria, Tycho, Ururu, Wolferia, Chise, AA_body, Ash, Sephira, Elinyaa, Inuinu, Nayu, RadDollV2, Rainy, RearAlice, Rusk, Shinonome, Soraha, TETRA, Yuukosan, Zome, Kyoko, Rushka, LSbody, limilia, Ruary, Lilithia, Mona, Meiyun, Moe, DiEZ, kohaku, Lime, Lucifer, Manuka, Chiffon, DELTAFLAIR, Kuronatu, Lasyusha, Liloumois, Mizuki, Rurune, Sinra, Sio, Uzuki, Velle, Yollchang, Airi, Shinano

### Notes

- Not compatible with the Quest version of VRChat.
- Cannot be used together with lilToon custom shaders such as real shadow systems.
- The default index-finger collider is capsule-shaped, so there may be misalignment.
- It will not work if you are using VRChat avatar scaling. Please use it at the default size.
- Because tessellation (high poly) is used, the performance load is heavier. If it bothers you, reduce the subdivision level or disable it.
- Only Unity version 2022.3.22f1 is supported.
- It is not supported on mac environments due to errors.
- Please use it in compliance with public morals and decency.
