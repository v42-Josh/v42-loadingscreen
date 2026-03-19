window.LoadingConfig = {
    server: {
        name: "NOVA Roleplay",
        welcomeText: "Welkom bij NOVA Roleplay!",
        logo: "assets/img/logo.png",
        backgroundVideo: "assets/img/video.mp4",
        backgroundImage: "assets/img/v42.png", // optional fallback if you want images later
        useVideoBackground: true,
    },

    layout: {
        showThemeSwitcher: false,
        showSocialCards: true,
        showMusicPlayer: true,
        showPartners: true,
        showTopDivider: true,
        openLinksInNewTab: true
    },

    theme: {
        defaultPreset: "minimal-dark",

        defaultStyleMode: "glass",

        allowPlayerSelection: true,

        saveSelection: true,

        randomPresetOnLoad: false,

        showPresetNames: false,

        availablePresets: [
            "nova-blue",
            "purple-neon",
            "crimson-red",
            "emerald",
            "gold-luxe",
            "minimal-dark"
        ],

        availableStyleModes: [
            "glass",
            "solid",
            "outline",
            "neon",
            "minimal"
        ],

        overrides: {
            // accent: "#ffcc00",
            // panelBlur: "14px",
            // logoSize: "240px",
            // cardWidth: "340px"
        }
    },

    themePresets: {
        "nova-blue": {
            accent: "#00d9b8",
            accentSoft: "rgba(0, 217, 184, 0.12)",
            accentGlow: "rgba(0, 217, 184, 0.35)",

            textColor: "#ffffff",
            mutedText: "rgba(255,255,255,0.75)",

            bgOverlayLeft: "#001b2fc9",
            bgOverlayCenter: "#013d47eb",
            bgOverlayRight: "#001b2fc9",

            panelBg: "rgba(255, 255, 255, 0.03)",
            panelBorder: "rgba(255, 255, 255, 0.20)",
            panelBorderStrong: "#00d9b8",
            panelShadow: "0 0 20px rgba(0, 0, 0, 0.30)",
            panelBlur: "10px",

            buttonBg: "radial-gradient(circle, rgba(38, 94, 86, 0.68) 0%, rgba(31, 79, 72, 0.25) 100%)",
            buttonHoverBg: "rgba(0, 68, 57, 0.56)",
            buttonShadow: "0px 5px 20px 10px rgba(0, 217, 184, 0.30)",

            progressBg: "rgba(255,255,255,0.27)",
            volumeBg: "rgba(255,255,255,0.27)",

            dividerBg: "linear-gradient(to right, rgb(128 128 128 / 1%), rgb(255 255 255 / 26%), rgba(128, 128, 128, 1%))",
            dividerHighlight: "linear-gradient(to right, rgba(0, 230, 192, 0.09), rgb(255,255,255), rgba(0, 230, 192, 0.09))",

            radiusSm: "8px",
            radiusMd: "10px",
            radiusLg: "25px",

            cardWidth: "320px",
            logoSize: "210px",
            audioHeight: "50px",

            fontFamily: "\"Teko\", sans-serif",
            fontSizeBase: "1.1rem"
        },

        "purple-neon": {
            accent: "#b45cff",
            accentSoft: "rgba(180, 92, 255, 0.14)",
            accentGlow: "rgba(180, 92, 255, 0.42)",

            textColor: "#ffffff",
            mutedText: "rgba(255,255,255,0.78)",

            bgOverlayLeft: "#180827d0",
            bgOverlayCenter: "#38115fe8",
            bgOverlayRight: "#180827d0",

            panelBg: "rgba(255,255,255,0.04)",
            panelBorder: "rgba(255,255,255,0.18)",
            panelBorderStrong: "#b45cff",
            panelShadow: "0 0 24px rgba(0, 0, 0, 0.34)",
            panelBlur: "12px",

            buttonBg: "radial-gradient(circle, rgba(110, 48, 160, 0.60) 0%, rgba(71, 22, 110, 0.25) 100%)",
            buttonHoverBg: "rgba(91, 29, 140, 0.55)",
            buttonShadow: "0px 5px 20px 10px rgba(180, 92, 255, 0.32)",

            progressBg: "rgba(255,255,255,0.26)",
            volumeBg: "rgba(255,255,255,0.26)",

            dividerBg: "linear-gradient(to right, rgba(255,255,255,0.02), rgba(255,255,255,0.22), rgba(255,255,255,0.02))",
            dividerHighlight: "linear-gradient(to right, rgba(180,92,255,0.10), rgb(255,255,255), rgba(180,92,255,0.10))",

            radiusSm: "8px",
            radiusMd: "10px",
            radiusLg: "25px",

            cardWidth: "320px",
            logoSize: "210px",
            audioHeight: "50px",

            fontFamily: "\"Teko\", sans-serif",
            fontSizeBase: "1.1rem"
        },

        "crimson-red": {
            accent: "#ff4d6d",
            accentSoft: "rgba(255, 77, 109, 0.14)",
            accentGlow: "rgba(255, 77, 109, 0.38)",

            textColor: "#ffffff",
            mutedText: "rgba(255,255,255,0.78)",

            bgOverlayLeft: "#23040bd4",
            bgOverlayCenter: "#5a1021eb",
            bgOverlayRight: "#23040bd4",

            panelBg: "rgba(255,255,255,0.03)",
            panelBorder: "rgba(255,255,255,0.18)",
            panelBorderStrong: "#ff4d6d",
            panelShadow: "0 0 22px rgba(0,0,0,0.34)",
            panelBlur: "10px",

            buttonBg: "radial-gradient(circle, rgba(150, 39, 62, 0.62) 0%, rgba(90, 17, 34, 0.24) 100%)",
            buttonHoverBg: "rgba(110, 17, 39, 0.55)",
            buttonShadow: "0px 5px 20px 10px rgba(255, 77, 109, 0.28)",

            progressBg: "rgba(255,255,255,0.25)",
            volumeBg: "rgba(255,255,255,0.25)",

            dividerBg: "linear-gradient(to right, rgba(255,255,255,0.02), rgba(255,255,255,0.22), rgba(255,255,255,0.02))",
            dividerHighlight: "linear-gradient(to right, rgba(255,77,109,0.10), rgb(255,255,255), rgba(255,77,109,0.10))",

            radiusSm: "8px",
            radiusMd: "10px",
            radiusLg: "25px",

            cardWidth: "320px",
            logoSize: "210px",
            audioHeight: "50px",

            fontFamily: "\"Teko\", sans-serif",
            fontSizeBase: "1.1rem"
        },

        "emerald": {
            accent: "#22c55e",
            accentSoft: "rgba(34, 197, 94, 0.13)",
            accentGlow: "rgba(34, 197, 94, 0.35)",

            textColor: "#ffffff",
            mutedText: "rgba(255,255,255,0.78)",

            bgOverlayLeft: "#071e14d6",
            bgOverlayCenter: "#0f4d31e9",
            bgOverlayRight: "#071e14d6",

            panelBg: "rgba(255,255,255,0.03)",
            panelBorder: "rgba(255,255,255,0.18)",
            panelBorderStrong: "#22c55e",
            panelShadow: "0 0 22px rgba(0,0,0,0.34)",
            panelBlur: "10px",

            buttonBg: "radial-gradient(circle, rgba(36, 110, 63, 0.65) 0%, rgba(20, 67, 38, 0.24) 100%)",
            buttonHoverBg: "rgba(21, 81, 47, 0.56)",
            buttonShadow: "0px 5px 20px 10px rgba(34, 197, 94, 0.26)",

            progressBg: "rgba(255,255,255,0.25)",
            volumeBg: "rgba(255,255,255,0.25)",

            dividerBg: "linear-gradient(to right, rgba(255,255,255,0.02), rgba(255,255,255,0.22), rgba(255,255,255,0.02))",
            dividerHighlight: "linear-gradient(to right, rgba(34,197,94,0.10), rgb(255,255,255), rgba(34,197,94,0.10))",

            radiusSm: "8px",
            radiusMd: "10px",
            radiusLg: "25px",

            cardWidth: "320px",
            logoSize: "210px",
            audioHeight: "50px",

            fontFamily: "\"Teko\", sans-serif",
            fontSizeBase: "1.1rem"
        },

        "gold-luxe": {
            accent: "#f4c542",
            accentSoft: "rgba(244, 197, 66, 0.16)",
            accentGlow: "rgba(244, 197, 66, 0.36)",

            textColor: "#ffffff",
            mutedText: "rgba(255,255,255,0.80)",

            bgOverlayLeft: "#1f1703d6",
            bgOverlayCenter: "#4d3908e8",
            bgOverlayRight: "#1f1703d6",

            panelBg: "rgba(255,255,255,0.04)",
            panelBorder: "rgba(255,255,255,0.20)",
            panelBorderStrong: "#f4c542",
            panelShadow: "0 0 24px rgba(0,0,0,0.34)",
            panelBlur: "10px",

            buttonBg: "radial-gradient(circle, rgba(131, 103, 30, 0.62) 0%, rgba(76, 58, 14, 0.25) 100%)",
            buttonHoverBg: "rgba(92, 71, 18, 0.56)",
            buttonShadow: "0px 5px 20px 10px rgba(244, 197, 66, 0.28)",

            progressBg: "rgba(255,255,255,0.25)",
            volumeBg: "rgba(255,255,255,0.25)",

            dividerBg: "linear-gradient(to right, rgba(255,255,255,0.02), rgba(255,255,255,0.22), rgba(255,255,255,0.02))",
            dividerHighlight: "linear-gradient(to right, rgba(244,197,66,0.10), rgb(255,255,255), rgba(244,197,66,0.10))",

            radiusSm: "8px",
            radiusMd: "10px",
            radiusLg: "25px",

            cardWidth: "320px",
            logoSize: "210px",
            audioHeight: "50px",

            fontFamily: "\"Teko\", sans-serif",
            fontSizeBase: "1.1rem"
        },

        "minimal-dark": {
            accent: "#ffffff",
            accentSoft: "rgba(255,255,255,0.10)",
            accentGlow: "rgba(255,255,255,0.18)",

            textColor: "#ffffff",
            mutedText: "rgba(255,255,255,0.72)",

            bgOverlayLeft: "#0b0b0be0",
            bgOverlayCenter: "#181818d9",
            bgOverlayRight: "#0b0b0be0",

            panelBg: "rgba(255,255,255,0.02)",
            panelBorder: "rgba(255,255,255,0.12)",
            panelBorderStrong: "#ffffff",
            panelShadow: "0 0 18px rgba(0,0,0,0.32)",
            panelBlur: "8px",

            buttonBg: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
            buttonHoverBg: "rgba(255,255,255,0.08)",
            buttonShadow: "0px 5px 20px 10px rgba(255,255,255,0.08)",

            progressBg: "rgba(255,255,255,0.18)",
            volumeBg: "rgba(255,255,255,0.18)",

            dividerBg: "linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,255,255,0.18), rgba(255,255,255,0.01))",
            dividerHighlight: "linear-gradient(to right, rgba(255,255,255,0.08), rgb(255,255,255), rgba(255,255,255,0.08))",

            radiusSm: "8px",
            radiusMd: "10px",
            radiusLg: "20px",

            cardWidth: "320px",
            logoSize: "210px",
            audioHeight: "50px",

            fontFamily: "\"Teko\", sans-serif",
            fontSizeBase: "1.1rem"
        }
    },

    styleModes: {
        glass: {
            panelBg: "rgba(255,255,255,0.03)",
            panelBlur: "10px",
            panelBorder: "rgba(255,255,255,0.18)",
            panelShadow: "0 0 20px rgba(0,0,0,0.30)"
        },

        solid: {
            panelBg: "rgba(10,10,10,0.78)",
            panelBlur: "0px",
            panelBorder: "rgba(255,255,255,0.12)",
            panelShadow: "0 0 16px rgba(0,0,0,0.35)"
        },

        outline: {
            panelBg: "rgba(255,255,255,0.01)",
            panelBlur: "4px",
            panelBorder: "rgba(255,255,255,0.28)",
            panelShadow: "0 0 10px rgba(0,0,0,0.18)",
            buttonBg: "transparent"
        },

        neon: {
            panelBg: "rgba(255,255,255,0.025)",
            panelBlur: "14px",
            panelBorder: "rgba(255,255,255,0.24)",
            panelShadow: "0 0 30px rgba(0,0,0,0.38)"
        },

        minimal: {
            panelBg: "rgba(255,255,255,0.015)",
            panelBlur: "0px",
            panelBorder: "rgba(255,255,255,0.10)",
            panelShadow: "none",
            buttonShadow: "none"
        }
    },

    ui: {
        presetLabels: {
            "nova-blue": "Nova Blue",
            "purple-neon": "Purple Neon",
            "crimson-red": "Crimson Red",
            "emerald": "Emerald",
            "gold-luxe": "Gold Luxe",
            "minimal-dark": "Minimal Dark"
        },

        styleModeLabels: {
            glass: "Glass",
            solid: "Solid",
            outline: "Outline",
            neon: "Neon",
            minimal: "Minimal"
        }
    },

    socialCards: [
        {
            title: "Discord",
            subtitle: "Join gerust onze discord!",
            buttonText: "Join Discord",
            image: "assets/img/discord.png",
            url: "https://discord.com/invite/ackuWrBVV3"
        },
        {
            title: "Webshop",
            subtitle: "Bekijk onze webshop!",
            buttonText: "Bekijk shop",
            image: "assets/img/shop.png",
            url: "https://store.v42-scripts.com/"
        }
    ],

    musicPlayer: {
        enabled: true,
        defaultVolume: 0.5,
        autoPlay: true,
        rememberVolume: true,
        startIndex: 0,
        showTrackTitle: true,
        showTime: true,
        showProgressBar: true,
        songs: [
            {
                title: "Josylvio - PK's ft. Moeman, Bokke8, Philly & KA",
                src: "assets/songs/song1.mp3"
            },
            {
                title: "Lijpe - Mansory ft. Frenna",
                src: "assets/songs/song2.mp3"
            },
            {
                title: "Dopebwoy x 3robi - Marbella",
                src: "assets/songs/song3.mp3"
            }
        ]
    },

    partners: [
        {
            title: "v42 - Scripts",
            subtitle: "For top-quality FiveM scripts",
            image: "assets/img/v42.png",
            url: "https://store.v42-scripts.com/"
        },
        {
            title: "ClaudyApe Designs",
            subtitle: "For all your designs & logos",
            image: "assets/img/CAlogo.png",
            url: "https://mokumrp.nl/"
        },
        {
            title: "Mokum Roleplay",
            subtitle: "For High-end Roleplay",
            image: "assets/img/mokum.png",
            url: "https://mokumrp.nl/"
        }
    ],

    animation: {
        rotateInterval: 7000,
        bounceDuration: 2000,
        fullDuration: 2000,
        enabled: true,
        mode: "bounce-full" // bounce-full | full-only | bounce-only | none
    }
};