---
template: article
title: Display Image Effects in the Scene View in Unity 4
path: /articles/2015/05/12/display-image-effects-in-the-scene-view-in-unity3d
date: 2015-05-12
comments: true
categories: Unity3d C#
coverimage: /images/unity-generic-head.png
---

Image effects are a great way to improve the visual quality of a game. But working on a scene that relies on them can be inconvenient, since they're only visible in the game view - not in the editor view.

A simple solution to avoid having to switch to the game view to see the final result is to replicate all image effects from the games main camera in the scene view camera. This can be achieved with a small script.

__Note__: This code assumes Unity 4.x and the now outdated legacy image effects. The modern post-processing stack used in more recent versions of Unity already makes effects visible in the editor camera by default.

```csharp
#if UNITY_EDITOR

using UnityEngine;
using UnityEditor;

using UnityStandardAssets.ImageEffects;

[InitializeOnLoad]
public static class EditorCamera {

    static System.DateTime time;
    static double updateInterval = 5d;

    static bool effectsEnabled = true;
    static bool skipDestruction = false;

    [MenuItem("Window/Toggle SceneView Effects")]
    static void ToggleSceneViewEffects() {
        time = System.DateTime.Now;
        effectsEnabled = !effectsEnabled;
    }

    static EditorCamera() {
        // add the custom delegate
        SceneView.onSceneGUIDelegate += Delegate;
        // set base time for timeout calculation
        time = System.DateTime.Now;
    }

    static void Delegate(SceneView sv) {

        // skip camera modification if disabled or not necessary
        if (skipDestruction && !effectsEnabled ||
            Event.current.type != EventType.Layout ||
            !Camera.main ||
            System.DateTime.Now.CompareTo(time) <= 0)
            return;

        // set time to wait until the next update
        time = System.DateTime.Now.AddSeconds(updateInterval);

        // remove current post effects from the scene view
        Camera cam = sv.camera;
        foreach (PostEffectsBase script in cam.GetComponents<PostEffectsBase>()) {
            Object.DestroyImmediate(script);
        }

        // set the scene view tab title
        sv.titleContent.text = "Scene" + (effectsEnabled ? " (fx)" : "");

        // stop here if camera effects have been disabled since the last check
        skipDestruction = !effectsEnabled;
        if (!effectsEnabled)
            return;
        
        // copy the post effect scripts from the main camera
        foreach (PostEffectsBase script in Camera.main.GetComponents<PostEffectsBase>()) {
            if (script.enabled) {
                System.Type type = script.GetType();
                var component = cam.gameObject.AddComponent(type) as PostEffectsBase;
                EditorUtility.CopySerialized(script, component);
            }
        }
    }
}

#endif

```

This script adds a delegate to the scene view that will be called each time the scene view updates. Every few seconds it removes all current `PostEffectsBase` components from the scene view camera (in case they have been updated), and subsequently replicates all components of the same type from the scenes main camera, thus making the image effects visible in the scene view. Of course it can also be extended to include custom image effects or other scripts that don't derive from Unitys `PostEffectsBase`.

All that's required is to add this script to the project, placed inside an `Editor` subdirectory. Scene view effects will be enabled by default and can be toggled in the menu bar.
