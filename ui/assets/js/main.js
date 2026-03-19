$(document).ready(function () {
    const config = window.LoadingConfig || {};
    const audio = $("#audio")[0];

    let songs = [];
    let currentSongIndex = 0;
    let rotationInterval = null;

    initializeLoadingScreen();

    function initializeLoadingScreen() {
        applyLayoutSettings();
        applyTheme();
        renderThemeSwitcher();
        setupServerInfo();
        setupCards();
        setupPartners();
        setupMusicPlayer();
        setupRotation();
    }

    function applyLayoutSettings() {
        const layout = config.layout || {};

        if (!layout.showThemeSwitcher) {
            $(".theme-switcher").remove();
        }

        if (!layout.showSocialCards) {
            $("#left-card").hide();
            $("#right-card").hide();
        } else {
            $("#left-card").show();
            $("#right-card").show();
        }

        if (!layout.showMusicPlayer) {
            $(".audio-player").hide();
        } else {
            $(".audio-player").show();
        }

        if (!layout.showPartners) {
            $("#partners-row").hide();
        } else {
            $("#partners-row").show();
        }

        if (!layout.showTopDivider) {
            $(".devider1, .devider2").hide();
        } else {
            $(".devider1, .devider2").show();
        }
    }

    function applyTheme(themeName = null, styleModeName = null) {
        const themeConfig = config.theme || {};
        const presets = config.themePresets || {};
        const styleModes = config.styleModes || {};

        let selectedTheme =
            themeName ||
            (themeConfig.saveSelection ? localStorage.getItem("loadingTheme") : null) ||
            themeConfig.defaultPreset ||
            "nova-blue";

        let selectedStyleMode =
            styleModeName ||
            (themeConfig.saveSelection ? localStorage.getItem("loadingStyleMode") : null) ||
            themeConfig.defaultStyleMode ||
            "glass";

        if (!presets[selectedTheme]) {
            selectedTheme = themeConfig.defaultPreset || "nova-blue";
        }

        if (!styleModes[selectedStyleMode]) {
            selectedStyleMode = themeConfig.defaultStyleMode || "glass";
        }

        const preset = presets[selectedTheme] || {};
        const styleMode = styleModes[selectedStyleMode] || {};
        const overrides = themeConfig.overrides || {};

        const finalTheme = {
            ...preset,
            ...styleMode,
            ...overrides
        };

        const root = document.documentElement;

        const THEME_VAR_MAP = {
            accent: "--accent",
            accentSoft: "--accent-soft",
            accentGlow: "--accent-glow",
            textColor: "--text-color",
            mutedText: "--muted-text",
            bgOverlayLeft: "--bg-overlay-left",
            bgOverlayCenter: "--bg-overlay-center",
            bgOverlayRight: "--bg-overlay-right",
            panelBg: "--panel-bg",
            panelBorder: "--panel-border",
            panelBorderStrong: "--panel-border-strong",
            panelShadow: "--panel-shadow",
            panelBlur: "--panel-blur",
            buttonBg: "--button-bg",
            buttonHoverBg: "--button-hover-bg",
            buttonShadow: "--button-shadow",
            progressBg: "--progress-bg",
            volumeBg: "--volume-bg",
            dividerBg: "--divider-bg",
            dividerHighlight: "--divider-highlight",
            radiusSm: "--radius-sm",
            radiusMd: "--radius-md",
            radiusLg: "--radius-lg",
            cardWidth: "--card-width",
            logoSize: "--logo-size",
            audioHeight: "--audio-height",
            fontFamily: "--font-family",
            fontSizeBase: "--font-size-base"
        };

        Object.entries(THEME_VAR_MAP).forEach(([key, cssVar]) => {
            if (finalTheme[key] !== undefined) {
                root.style.setProperty(cssVar, finalTheme[key]);
            }
        });

        if (themeConfig.saveSelection) {
            localStorage.setItem("loadingTheme", selectedTheme);
            localStorage.setItem("loadingStyleMode", selectedStyleMode);
        }
    }

    function renderThemeSwitcher() {
        const themeConfig = config.theme || {};
        const layoutConfig = config.layout || {};
        const presets = config.themePresets || {};

        $(".theme-switcher").remove();

        if (!layoutConfig.showThemeSwitcher) return;
        if (!themeConfig.allowPlayerSelection) return;

        const allowedPresets = themeConfig.availablePresets?.length
            ? themeConfig.availablePresets
            : Object.keys(presets);

        if (!allowedPresets.length) return;

        const switcher = $('<div class="theme-switcher"></div>');

        allowedPresets.forEach((themeKey) => {
            if (!presets[themeKey]) return;

            const label = config.ui?.presetLabels?.[themeKey] || themeKey;

            const chip = $(`
                <div class="theme-chip" data-theme="${themeKey}">
                    ${label}
                </div>
            `);

            chip.on("click", function () {
                applyTheme(themeKey);
                $(".theme-chip").removeClass("active");
                $(this).addClass("active");
            });

            switcher.append(chip);
        });

        $("body").append(switcher);

        const currentTheme =
            localStorage.getItem("loadingTheme") ||
            themeConfig.defaultPreset ||
            "nova-blue";

        $(`.theme-chip[data-theme="${currentTheme}"]`).addClass("active");
    }

    function setupServerInfo() {
        const server = config.server || {};

        $("#welcome-title").text(server.welcomeText || "Welkom!");
        $("#rotating-image").attr("src", server.logo || "");

        const videoSource = document.getElementById("bg-video-source");
        const bgVideo = document.getElementById("bg-video");
        const useVideo = server.useVideoBackground !== false;

        function applyBackgroundImage() {
            if (server.backgroundImage) {
                $("body").css({
                    "background-image": `url("${server.backgroundImage}")`,
                    "background-size": "cover",
                    "background-position": "center",
                    "background-repeat": "no-repeat"
                });
            }
        }

        $("body").css({
            "background-image": "",
            "background-size": "",
            "background-position": "",
            "background-repeat": ""
        });

        if (bgVideo) {
            bgVideo.pause();
            bgVideo.style.display = "none";
        }

        if (useVideo && server.backgroundVideo && bgVideo && videoSource) {
            videoSource.src = server.backgroundVideo;
            bgVideo.load();
            bgVideo.style.display = "block";

            bgVideo.onerror = function () {
                bgVideo.style.display = "none";
                applyBackgroundImage();
            };

            bgVideo.play().catch(function () {
                bgVideo.style.display = "none";
                applyBackgroundImage();
            });

            return;
        }

        applyBackgroundImage();
    }

    function setupCards() {
        const layout = config.layout || {};
        if (!layout.showSocialCards) return;

        const cards = config.socialCards || [];

        function createCard(card) {
            if (!card) return "";

            return `
                <img class="card-main-image" src="${card.image}" alt="${card.title}">
                <div class="dc-info">
                    <div class="d-flex flex-column align-items-center w-100 pb-5" style="width: 80%; margin: 0 auto;">
                        <h1>${card.title}</h1>
                        <span style="font-size: 1rem;">${card.subtitle}</span>
                        <div class="spawn-btn mt-3 social-btn" data-url="${card.url || "#"}">
                            ${card.buttonText}
                        </div>
                    </div>
                </div>
            `;
        }

        $("#left-card").html(cards[0] ? createCard(cards[0]) : "");
        $("#right-card").html(cards[1] ? createCard(cards[1]) : "");
    }

    function setupPartners() {
        const layout = config.layout || {};
        if (!layout.showPartners) return;

        const partners = config.partners || [];
        const partnerRow = $("#partners-row");

        partnerRow.empty();

        const classes = ["", "justify-content-center", "justify-content-end"];

        partners.forEach((partner, index) => {
            partnerRow.append(`
                <div class="ad-item col-md-4 d-flex ${classes[index] || ""}">
                    <div class="ad-wrap partner-btn" data-url="${partner.url || "#"}">
                        <div class="ad-logo">
                            <img src="${partner.image}" alt="${partner.title}">
                        </div>
                        <div class="d-flex align-self-center flex-column w-100" style="margin-left: 2rem;">
                            <h3 class="m-0">${partner.title}</h3>
                            <span class="mt-2 ad-info">${partner.subtitle}</span>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    function setupMusicPlayer() {
        const layout = config.layout || {};
        const musicConfig = config.musicPlayer || {};

        if (!layout.showMusicPlayer || !musicConfig.enabled) {
            $(".audio-player").hide();
            return;
        }

        songs = musicConfig.songs || [];

        if (!songs.length) {
            $(".audio-player").hide();
            return;
        }

        audio.volume = musicConfig.defaultVolume ?? 0.2;
        $("#volume").val(audio.volume);

        loadSong(musicConfig.startIndex || 0, false);

        audio.onloadedmetadata = updatePlayPauseIcon;
        audio.onplay = updatePlayPauseIcon;
        audio.onpause = updatePlayPauseIcon;

        audio.ontimeupdate = function () {
            if (!audio.duration) return;

            const percentage = (audio.currentTime / audio.duration) * 100;
            $("#progress").css("width", percentage + "%");

            const minutes = String(Math.floor(audio.currentTime / 60)).padStart(2, "0");
            const seconds = String(Math.floor(audio.currentTime % 60)).padStart(2, "0");

            $("#time").text(`${minutes}:${seconds}`);
        };

        audio.onended = function () {
            const nextIndex = (currentSongIndex + 1) % songs.length;
            loadSong(nextIndex, true);
        };

        $("#skip-back").off("click").on("click", function () {
            const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            loadSong(prevIndex, true);
        });

        $("#play-pause").off("click").on("click", function () {
            if (!audio.src) return;

            if (audio.paused) {
                audio.play().catch(function (err) {
                    console.log("Playback failed:", err);
                });
            } else {
                audio.pause();
            }
        });

        $("#skip-forward").off("click").on("click", function () {
            const nextIndex = (currentSongIndex + 1) % songs.length;
            loadSong(nextIndex, true);
        });

        $("#volume").off("input change").on("input change", function () {
            audio.volume = parseFloat($(this).val());
        });

        $(".progress-bar").off("click").on("click", function (e) {
            if (!audio.duration) return;

            const posX = e.pageX - $(this).offset().left;
            const percentage = posX / $(this).width();
            audio.currentTime = audio.duration * percentage;
        });

        updatePlayPauseIcon();

        if (musicConfig.autoPlay) {
            audio.play().catch(function (err) {
                console.log("Autoplay failed:", err);
            });
        }
    }

    function loadSong(index, shouldPlay = true) {
        if (!songs.length) return;

        currentSongIndex = index;
        audio.src = songs[currentSongIndex].src;
        $("#title").text(songs[currentSongIndex].title);
        audio.load();

        if (shouldPlay) {
            audio.play()
                .then(updatePlayPauseIcon)
                .catch(function (err) {
                    console.log("Playback failed:", err);
                    updatePlayPauseIcon();
                });
        } else {
            updatePlayPauseIcon();
        }
    }

    function updatePlayPauseIcon() {
        if (!audio) return;

        if (audio.paused) {
            $("#play-pause").html('<i class="fa-solid fa-play"></i>');
        } else {
            $("#play-pause").html('<i class="fa-solid fa-pause"></i>');
        }
    }

    function setupRotation() {
        const rotatingImage = document.getElementById("rotating-image");
        if (!rotatingImage) return;

        const anim = config.animation || {};

        if (!anim.enabled || anim.mode === "none") {
            rotatingImage.classList.remove("bounce", "full");
            return;
        }

        if (rotationInterval) {
            clearInterval(rotationInterval);
        }

        const interval = anim.rotateInterval || 7000;
        const bounceDuration = anim.bounceDuration || 2000;
        const fullDuration = anim.fullDuration || 2000;

        function rotateImage() {
            rotatingImage.classList.remove("bounce", "full");

            if (anim.mode === "bounce-only") {
                rotatingImage.classList.add("bounce");
                setTimeout(() => rotatingImage.classList.remove("bounce"), bounceDuration);
                return;
            }

            if (anim.mode === "full-only") {
                rotatingImage.classList.add("full");
                setTimeout(() => rotatingImage.classList.remove("full"), fullDuration);
                return;
            }

            rotatingImage.classList.add("bounce");

            setTimeout(function () {
                rotatingImage.classList.remove("bounce");
                rotatingImage.classList.add("full");

                setTimeout(function () {
                    rotatingImage.classList.remove("full");
                }, fullDuration);
            }, bounceDuration);
        }

        rotateImage();
        rotationInterval = setInterval(rotateImage, interval);
    }

    $(document).on("click", ".social-btn, .partner-btn", function () {
        const url = $(this).data("url");
        const openNewTab = config.layout?.openLinksInNewTab !== false;

        if (!url || url === "#") return;

        if (openNewTab) {
            window.open(url, "_blank");
        } else {
            window.location.href = url;
        }
    });
});