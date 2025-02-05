
# Q&A

:::info Page Description
Please refer to this page if Motchiri Shader is working normally but you have concerns or questions.  
(If you want to learn more advanced usage, check [“How to Use / Advanced”](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition). If it is not working, see [“Troubleshooting”](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition))
:::

### Why is there no face mask included?

Face masks are provided only for some avatars. For avatars that do not come with a face mask...

### I want to use this shader in a Unity game

We are developing a separate Motchiri Shader compatible with URP.  
We plan to release it in the future, but please contact us if you want to use it in your development environment.

Example of use: [Mr. Himitsu Shinnyu VR](https://www.dlsite.com/maniax/work/=/product_id/RJ01266526.html/?utm_medium=affiliate&utm_campaign=sns_link&utm_content=RJ01266526&utm_source=mr-vr-jp.github.io%2F)

### I want Poiyomi support

Because it’s impossible to create custom shaders with Poiyomi, there are currently no plans to support it.

### I want to revert my avatar that already has the Motchiri Shader back to its original state

#### In the new method:

Since the new method is a non-destructive installation, removing the marshmallow_PB_Setup under the avatar will revert it to the state before installation.

#### In the old method:

If the Motchiri Shader is applied to the avatar, switch the shader to lilToon, delete the motchiri object, and revert the FX layer to its pre-setup state.

