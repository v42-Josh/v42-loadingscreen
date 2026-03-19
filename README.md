# 🔥 v42-loadingscreen [FiveM Loading Screen]

A modern, highly customizable, and theme-driven loading screen for FiveM.  
Built with flexibility in mind supporting dynamic themes, music player, background video/image switching, and modular UI components.


**💬 Support Discord**: [Join the Community](https://discord.com/invite/ackuWrBVV3)  
**🎥 Showcase Video**: [Watch on YouTube](-)

<img width="1915" height="1074" alt="image" src="https://github.com/user-attachments/assets/2ff409f7-c4d2-459b-b92b-907c00e34517" />

---

## 🎥 Features

- 🎨 **Fully Theme System**
  - Preset themes (blue, purple, gold, etc.)
  - Custom overrides
  - Style modes (glass, neon, minimal, etc.)
  - Optional player theme selector

- 🎬 **Background System**
  - Video or image backgrounds
  - Automatic fallback if video fails

- 🎵 **Built-in Music Player**
  - Multiple songs
  - Skip, pause, volume control
  - Progress bar + time display
  - Auto-play support

- 🧩 **Modular Layout System**
  - Toggle elements on/off:
    - Social cards
    - Music player
    - Partners section
    - Theme switcher
    - Top divider

- 🔗 **Interactive UI**
  - Clickable social cards
  - Partner links
  - Configurable link behavior (new tab / same tab)

- ⚡ **Animation System**
  - Logo rotation modes
  - Bounce / full rotate / disabled

---

## 📦 Installation

### 1. Download Resource
Place the folder inside your `resources` directory:

```
resources/[local]/v42-loadingscreen
```

---

### 2. Add to server.cfg

```
ensure v42-loadingscreen
```

---

### 3. Restart your server

```
refresh
ensure v42-loadingscreen
```

---

## ⚙️ Configuration

All settings are located in:

```
ui/assets/js/config.js
```

---

## 🖼️ Server Settings

```
server: {
    name: "NOVA Roleplay",
    welcomeText: "Welkom bij NOVA Roleplay!",
    logo: "assets/img/logo.png",

    backgroundVideo: "assets/img/video.mp4",
    backgroundImage: "assets/img/bg.jpg",

    useVideoBackground: true
}
```

---

## 🎨 Theme System

### Default Theme Setup

```
theme: {
    defaultPreset: "nova-blue",
    defaultStyleMode: "glass",

    allowPlayerSelection: true,
    saveSelection: true,

    overrides: {}
}
```

---

## 🧩 Layout Control

```
layout: {
    showThemeSwitcher: true,
    showSocialCards: true,
    showMusicPlayer: true,
    showPartners: true,
    showTopDivider: true,
    openLinksInNewTab: true
}
```

---

## 🎵 Music Player

```
musicPlayer: {
    enabled: true,
    autoPlay: true,
    defaultVolume: 0.2,

    songs: [
        {
            title: "Song Name",
            src: "assets/songs/song1.mp3"
        }
    ]
}
```

---

## 📂 File Structure

```
v42-loadingscreen/
├── ui/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css
│   │   ├── img/
│   │   ├── js/
│   │   │   ├── config.js
│   │   │   └── main.js
│   │   └── songs/
│   └── index.html
├── fxmanifest.lua
```

---

## 💬 Support

Join our [Discord Community](https://discord.com/invite/ackuWrBVV3) for support or to showcase your setup.

Made with ❤️ by [v42-Josh](https://github.com/v42-Josh).

