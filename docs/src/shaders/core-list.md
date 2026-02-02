# List of core shaders

## Entity (`entity.vsh` `entity.fsh`) {#entity}

Renders most entities including but not limited to:

- Mobs and other entities
- Items (in the world and in inventories) that can be used to place non-translucent blocks
- Block entities that use special rendering such as banners and chests
- Equipment and other overlays such as the charged creeper energy swirls
- End crystal beams

### Uniforms

<p>
<UniformLink ver="1.21.11" uniform="DynamicTransforms"/>,
<UniformLink ver="1.21.11" uniform="Fog"/>,
<UniformLink ver="1.21.11" uniform="Lighting"/>, and
<UniformLink ver="1.21.11" uniform="Projection"/>
</p>

### Samplers

- <Sampler name="Sampler0"/> The base texture of the entity.
- <Sampler name="Sampler1"/> Solid colour overlay, used for things like the red damage tint and tnt flashing animation.
- <Sampler name="Sampler2"/> The lightmap.

### Defines

- <DefineDirective name="ALPHA_CUTOUT" type="float"/> Minimum opacity before pixels are discarded, if not defined no pixels get discarded.
- <DefineDirective name="APPLY_TEXTURE_MATRIX"/> Whether or not the uv should be offset by the TextureMat uniform.
- <DefineDirective name="EMISSIVE"/> Whether or not lighting should be applied to the entity.
- <DefineDirective name="NO_CARDINAL_LIGHTING"/> Whether or not directional shading should be applied.
- <DefineDirective name="NO_OVERLAY"/> Whether or not the red damage tint should be applied.
- <DefineDirective name="PER_FACE_LIGHTING"/> Whether or not lighting should be calculated seperately for the front and back quad faces.
