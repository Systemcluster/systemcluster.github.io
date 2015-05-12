---
layout: post
title: "Display Image Effects in the Scene View in Unity3D"
date: 2015-05-12 02:00:00
categories: Unity3d C#
author: Christian Sdunek
synopsis: >
  Image effects are a great way to improve the visual quality of a game. But working on a scene that relies on them can be inconvenient, since they're added to a game camera and thus only visible in the game view.

  A simple solution to avoid having to switch to the game view is to replicate all image effects from the games main camera in the scene view camera.

---

Image effects are a great way to improve the visual quality of a game. But working on a scene that relies on them can be inconvenient, since they're added to a game camera and thus only visible in the game view.

A simple solution to avoid having to switch to the game view is to replicate all image effects from the games main camera in the scene view camera. This can be achieved with a very small script.

{% highlight csharp %}

#if UNITY_EDITOR

using UnityEngine;
using UnityEditor;

using UnityStandardAssets.ImageEffects;

[InitializeOnLoad]
public static class EditorCamera {

    static System.DateTime time;
    static bool effectsEnabled = true;
    static double updateInterval = 5;

    [MenuItem("Window/Toggle SceneView Effects")]
    static void ToggleSceneViewEffects() {
        time = System.DateTime.Now;
        effectsEnabled = !effectsEnabled;
    }

  static EditorCamera() {
    SceneView.onSceneGUIDelegate += Delegate;

    time = System.DateTime.Now;
  }

  static void Delegate(SceneView sv) {

        if (Event.current.type != EventType.Layout)
            return;
        if (!Camera.main)
            return;
        if (System.DateTime.Now.CompareTo(time) <= 0)
            return;

        time = time.AddSeconds(updateInterval);

        Camera cam = sv.camera;

        foreach (PostEffectsBase script in cam.GetComponents<PostEffectsBase>()) {
            Object.DestroyImmediate(script);
        }

        if (!effectsEnabled)
            return;

        foreach (PostEffectsBase script in Camera.main.GetComponents<PostEffectsBase>()) {
            System.Type type = script.GetType();
            var component = cam.gameObject.AddComponent(type) as PostEffectsBase;
            EditorUtility.CopySerialized(script, component);
        }

        sv.camera.fieldOfView = Camera.main.fieldOfView;
  }
}

#endif

{% endhighlight %}

This script adds a delegate to the scene view that will be called each time the scene view updates. Every few seconds it removes all current `PostEffectsBase` components from the scene view camera (in case they have been updated), and subsequently replicates all components of the same type from the scenes main camera, thus making the image effects visible in the scene view.

All that's required is to add this script to the project. Scene view effects will be enabled by default and can be toggled in the menu bar.
