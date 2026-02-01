# Introduction

::: warning
This documentation is a WIP, things may be incomplete or missing! This documentation assumes you have a basic understanding of GLSL
:::

## What are vanilla shaders?

Vanilla shaders (sometimes referred to as 'core shaders' or just 'shaders') are shaders which are used to render certain parts of the game, and can be modified using [resource packs](https://minecraft.wiki/w/Resource_pack). These are different from 'shader packs' provided by mods such as Iris or OptiFine as they aren't as capable of some of the more complex graphical effects typically seen in shader packs.

## Shaders in Minecraft

Minecraft has two distinct kinds of shader: [core shaders](/shaders/core) used for rendering game object such as guis, blocks or entities, and [post effects](/shaders/post) used to render full-screen effects such as the green overlay when spectating a creeper or menu background blur. [Include](/shaders/include) shaders also exist which contain common utility functions or definitions that can be used across multiple core or post shaders.

The game currently uses OpenGL 3.3 Core Profile, and uses the [OpenGL Shading Language (GLSL)](https://wikis.khronos.org/opengl/OpenGL_Shading_Language) for its shaders.
Both fragment and vertex shaders are used by the game

- Vertex shaders control the positions of individual vertices and use the `.vsh` file extension. These are typically used to create effects such as waving foliage.
- Fragment shaders run per fragment and control final output colour. They use the `.fsh` file extension and are typically used for effects such as blur.

## Finding the default shaders

It is recommended to use the default files as a starting point, they can be found in the [game jar](https://minecraft.wiki/w/Client.jar) located under `assets/minecraft/shaders/` and `assets/minecraft/post_effect/`. The game jar can be extracted using an archive tool of your choice.

Vanilla shaders change quite frequently, so make sure you are extracting the assets from the same game version you are working with!
