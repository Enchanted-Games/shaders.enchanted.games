# Core shaders

Core shaders are used to render most game objects including gui elements, entities, terrain, text, etc. Almost everything you see in-game is rendered with a core shader, however there are a few exceptions to this which are explained in more detail below.

The shader programs for core shaders are stored in the `assets/minecraft/shaders/core/` directory of a resource pack.

## List of core shaders

A full list of what each core shader is used for can be found [**here**](/shaders/core-list)

## Things that aren't drawn with shaders

Some objects are now drawn using core shaders, and as such their rendering cannot be modified through a resource pack. This includes:

- The sky in the nether and bottom half of the overworld. These are the opengl clear color which is set to the same value as the fog colour uniform
