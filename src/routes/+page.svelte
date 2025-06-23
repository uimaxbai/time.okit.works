<style lang="scss">
@font-face {
  font-family:'JetBrains Mono';
  src: url(/fonts/JetBrainsMono-Bold.woff2);
  font-weight: bold;
  font-display: swap;
}
@font-face {
  font-family:'JetBrains Mono';
  src: url(/fonts/JetBrainsMono-Regular.woff2);
  font-weight: normal;
  font-display: swap;
}

* {
  user-select: none;
}

.timeStr {
  font-weight: bold;
  font-size: 5em;
}

.timezone {
  text-align: left;
  position: relative;
  left: 0;
}

.dateString, .dateString span {
  font-size: 2vw;
}

h1 time span {
  width: 100%;
  font-size: 14vw;
}

time div {
  font-size: 14vw;
}


:global(body) {
  color: #000;
  background: #fff;
  font-family: 'JetBrains Mono', monospace;
}

:global(.light) {
  color: #000!important;
  background: #fff!important;
}
:global(.dark) {
  color: #eee!important;
  background: #111!important;
}

.ms {
  font-size: 6vw;
}

/* .mode-button {
  border-radius: .25rem;
} */

/* .moon-button {
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  text-shadow: var(--shadow-md);
} */

:global(body) {
  --transition-d: 0.5s;
  -webkit-transition: var(--transition-d) ease;
  -moz-transition: var(--transition-d) ease;
  -o-transition: var(--transition-d) ease;
  transition: var(--transition-d) ease;
}

/* .react-toggle-track div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .8rem;
} */

@media (max-width: 800px) {

  .info-div,
  .info-div div {
    flex-direction: column;
  }

  .info-div div {
    align-items: baseline;
  }

  .tower-cell {
    font-size: 5vw;
  }
  
}
@media (max-width: 550px) {
  .info-div {
    margin-top: 0!important;
  }
  .techInfo {
    display: none!important;
  }
}

.tower-cell {
  font-size: 3vw;
}
.toggleButton {
  padding: .5rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  transition: .2s;
}
.info-div {
  margin-top: -1em;
}
.theme-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  border: 1px solid gray;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.25rem;
  flex-direction: row!important;
  button {
    padding: .5rem;
  }
  .light, .dark {
    border-right: 1px solid gray;
  }
  .seperator {
    margin-left: -40px;
    padding: 0;
    position: absolute;
  }
  .seperator:nth-child(2) {
    margin-left: 40px;
  }
  .light {
    background: #fff;
    color: black;
    border-radius: 5px 0 0 5px;
  }
  .dark {
    background: #111;
    color: #eee;
    border-radius: 0;
  }
  .custom {
    background-image: linear-gradient(315deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
    border-radius: 0 5px 5px 0;
    color: #000;
  }
}
:global(.color) {
  border: 1px solid #999;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  background: transparent;
}

.fs-button {
  font-size: 1.3em;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: .5em;
}
.delay {
  font-size: 1vw;
}

@media (orientation: portrait) {
  .colon, .dot {
    display: none;
  }
  div.time-container {
    flex-direction: column;
    .t {
      font-size: 30vh;
      line-height: 30vh;
    }
    .s {
      font-size: 15vh;
      line-height: 15vh;
    }
    .ms {
      font-size: 5vh;
      line-height: 5vh;
    }
  }
}

</style>


<svelte:head>
  <title>The Time - exact time, to the second</title>
  <meta name="description" content="A simple website that shows the time, to a tenth of a second. Night mode included as default. Custom themes. Open source. Clean interface. Timezones. And much more.">
  <meta name="keywords" content="time, thetime, current time">
  <link rel="manifest" href="/manifest.webmanifest" />
  <meta name="og:title" content="The Time - exact time, to the second" />
  <meta name="og:type" content="website" />
  <meta name="og:description" content="A simple website that shows the time, to a tenth of a second. Night mode included as default. Custom themes. Open source. Clean interface. Timezones. And much more." />
  <meta name="og:url" content="https://time.okit.works" />
  <meta name="og:site_name" content="The Time - exact time, to the second" />
  <meta name="og:locale" content="en_GB" />
  <meta name="og:locale:alternate" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The Time - exact time, to the second" />
  <meta name="twitter:description" content="A simple website that shows the time, to a tenth of a second. Night mode included as default. Custom themes. Open source. Clean interface. Timezones. And much more." />
  <meta name="twitter:creator" content="@uimaxbai" />
  <meta name="robots" content="index, follow, max-snippet: -1, max-image-preview:large, max-video-preview: -1">
  <meta name="theme-color" content="#111111">
  <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
  <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5">
  <link rel="shortcut icon" href="/icons/favicon.ico">
  <meta name="msapplication-TileColor" content="#2d89ef">
  <meta name="msapplication-config" content="/icons/browserconfig.xml">
  <link rel="canonical" href="https://time.okit.works">
  <meta name="og:image" content="https://time.okit.works/icons/opengraph.png">
  <meta name="og:image:alt" content="The Time">
  <meta name="twitter:image" content="https://time.okit.works/icons/opengraph.png">
  <script type="application/ld+json">
    {
      "@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "The Time",
      "alternateName" : "Time",
      "url" : "https://time.okit.works/"
    }
  </script>
</svelte:head>

<Fullscreen>
  {#snippet children({ onToggle })}
    <main class="main transition flex min-h-screen flex-col items-center justify-center p-4" class:dark={theme === 1} class:light={theme === 0} style="background: {hex}; color: rgba({rgb.r}, {rgb.g}, {rgb.b}, {rgb.a});">
        <div>
          <h1 class="timeStr">
            <time datetime={dateStr} class="timeEl flex flex-col">
              <div class="dateString">
                <span class="day">{day}</span>
                <span class="date">{dateStr1}</span>
              </div>
              <div class="flex items-baseline time-container">
                {#if toggleShown}
                  <button transition:fade={{ delay: 0, duration: 200 }} aria-label="Show options" onclick={() => advancedShown = !advancedShown} class="toggleButton">
                    {#if advancedShown}
                      <div in:fade={{ delay: 0, duration: 200 }}>
                        <Fa icon={faAngleUp} style="font-size: initial;" />
                      </div>
                    {:else}
                      <div in:fade={{ delay: 0, duration: 200 }}>
                        <Fa icon={faAngleDown} style="font-size: initial;" />
                      </div>
                    {/if}
                  </button>
                {/if}
                <span class="t h">{h}</span>
                <span class="colon">:</span>
                <span class="t m">{m}</span>
                <span class="colon">:</span>
                <div class="flex items-baseline">
                  <span class="t s">{s}</span>
                  <span class="ms dot">.</span>
                  <span class='t ms'>{ms}</span>
                </div>
                {#if syncing}
                  <span id="tower-cell" class='tower-cell ml-2'><Fa icon={faRotate} /></span>
                {:else}
                  <span id="tower-cell" class='tower-cell ml-2'><Fa icon={faTowerCell} /></span>
                {/if}
                {#if toggleShown}
                    <div transition:fade={{ delay: 0, duration: 200 }} class="techInfo" style="display: flex; flex-direction: column;">
                      <span class="delay">D:{diff}ms</span>
                      <span class="delay">L:{lastUpdated}</span>
                    </div>
                {/if}
                </div>
            </time>
          </h1>
          <div class="info-div flex gap-2 flex-row justify-between w-full">
            <div class="gap-2 flex items-center">
              {#if advancedShown && toggleShown}
                <div transition:fade={{ delay: 0, duration: 200 }} class="theme-selector">
                  <button aria-label="Change to light mode" class="light" onclick={() => theme = 0}>{h}</button>
                  <span class="seperator">:</span>
                  <button aria-label="Change to dark mode" class="dark" onclick={() => theme = 1}>{m}</button>
                  <span class="seperator">:</span>
                  <button aria-label="Define a custom theme" class="custom" onclick={() => theme = 2}>{s}</button>
                </div>
                {#if theme === 2}
                  <ColorPicker
                    bind:hex
                    label=""
                  />
                  <ColorPicker
                    bind:rgb
                    label=""
                  />
                {/if}
                <button class="fs-button" onclick={() => {fullscreen = !fullscreen; onToggle();}}>
                  {#if fullscreen}
                    <Fa icon={faCompress} />
                  {:else if !fullscreen}
                    <Fa icon={faExpand} />
                  {/if}
                </button>
                <span id="timezone" transition:fade={{ delay: 0, duration: 200 }} class="timezone">Timezone: {timezone}</span>
              {/if}
            </div>
            {#if advancedShown && toggleShown}
              <span transition:fade={{ delay: 0, duration: 200 }}>UTC: <time id="utc" datetime={utcDateStr}>{utcDateStr1} {utcTimeStr}</time></span>
            {/if}
          </div>
          {#if advancedShown && toggleShown}
            <div transition:fade={{ delay: 0, duration: 200 }} class="flex flex-col gap-2 mt-4">
              <span>Unix: <time id="unix" datetime={date.toTimeString()}>{date.getTime()}</time> </span>
              <span>IP: {ip.ipAddress == "" || ip.ipAddress === undefined ? "None" : ip.ipAddress}</span>
              <span>Location: {ip.cityName}, {ip.regionName}, {ip.countryCode}</span>
            </div>
          {/if}
        </div>
        {#if toggleShown}
          <a class="footer" href="https://github.com/uimaxbai/time.okit.works" target="_blank">
            <Fa icon={faGithub} />
          </a>
        {/if}
    </main>
  {/snippet}
</Fullscreen>


<script lang="ts">
  import '../app.css';
  import Fa from '../../node_modules/svelte-fa/dist/fa.svelte';
  import { fade } from 'svelte/transition';
  import { faTowerCell, faAngleDown, faAngleUp, faExpand, faCompress, faRotate } from '@fortawesome/free-solid-svg-icons/index.js';
  import { faGithub } from '@fortawesome/free-brands-svg-icons/index.js';
  import { onMount } from 'svelte';
  import Fullscreen from "$lib/Fullscreen.svelte";
  import ColorPicker from 'svelte-awesome-color-picker';
  let theme = $state(1);
  let toggleShown = $state(true);
  let hex: string = $state("#000000ff");
  let lastUpdated = $state("Never");
  let fullscreen = $state(false);
  let syncing = $state(false);
  let rgb = $state({
    "r": 255,
    "g": 255,
    "b": 255,
    "a": 1,
  });
  let advancedShown = $state(false);
  var date = $state(new Date());
  let diff: number = $state(0);
  let ip = $state({
    "ipVersion": 4,
    "ipAddress": "Loading...",
    "latitude": 50,
    "longitude": 0,
    "countryName": "",
    "countryCode": "Loading...",
    "timeZone": "+00:00",
    "zipCode": "",
    "cityName": "Loading...",
    "regionName": "Loading...",
    "connectionType": false,
    "continent": "Loading...",
    "continentCode": "Loading...",
    "accuracy": 0,
    "language": "",
  });
  
  // console.log(ip);
  /* $effect(() => {
    console.log(ip);
  }) */
  const myHeaders = new Headers();
  myHeaders.append("Origin", "https://www.maxmind.com");
  myHeaders.append("Referer", "https://www.maxmind.com");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36");
  // myHeaders.append("Cookie", "_cfuvid=zGcahtEdqkzsWjhQxwlXlF756GPN3O0HSKtl_tBmFp0-1750693233628-0.0.1.1-604800000");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  onMount(() => {
    fetch("https://geoip.maxmind.com/geoip/v2.1/city/me", requestOptions).then((d) => {
      return d.json()
    }).then((d) => {
      ip.ipAddress = d.traits.ip_address;
      ip.cityName = d.city.names.en;
      ip.latitude = d.location.latitude;
      ip.longitude = d.location.longitude;
      ip.countryName = d.registered_country.names.en;
      ip.countryCode = d.registered_country.iso_code;
      ip.timeZone = d.location.time_zone;
      ip.zipCode = d.postal.code;
      ip.regionName = d.subdivisions[0].names.en;
      ip.connectionType = d.traits.connection_type;
      ip.accuracy = d.location.accuracy_radius;
    }).catch((e) => {
      ip = {
        "ipVersion": 4,
        "ipAddress": "Failed",
        "latitude": 50,
        "longitude": 0,
        "countryName": "",
        "countryCode": "Failed",
        "timeZone": "+00:00",
        "zipCode": "",
        "cityName": "Failed",
        "regionName": "Failed",
        "connectionType": "Failed",
        "continent": "Failed",
        "continentCode": "Failed",
        "accuracy": 0,
        "language": "Failed",
      };
      console.error("Failed to get IP data:", e);
    });
    theme = parseInt(localStorage.getItem("theme") || "1");
    localStorage.setItem("theme", theme.toString());

    if (localStorage.getItem("bg") !== null && localStorage.getItem("rgb") !== null) {
      hex = localStorage.getItem("bg")!;
      rgb = JSON.parse(localStorage.getItem("rgb")!);
    }

    /* document.querySelector(".fs-button")?.addEventListener("mousedown", () => {
      var fsEl = document.querySelector("html");
      fsEl?.requestFullscreen();
      fullscreen = !fullscreen;
    }); */
    var botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    var re = new RegExp(botPattern, 'i');
    var userAgent = navigator.userAgent; 
    setInterval(() => {
      date = new Date((new Date()).getTime() + diff);
      
      if (!(re.test(userAgent))) {
        document.title = `${timeStr} (${ip.cityName}, ${ip.countryCode}) | The Time`;
      }
      localStorage.setItem("theme", theme.toString());
      if (theme === 2) {
        localStorage.setItem("bg", hex);
        localStorage.setItem("rgb", JSON.stringify(rgb));
      }
    }, 10);
    actuallyGetTime().then((time) => {
      actuallyGetTime().then((time) => {
        // console.log("a");
        if (time !== null) {
          date = new Date(time);
        }
      });
    });
    var timeApiInterval = setInterval(() => {
      actuallyGetTime().then((time) => {
        // console.log("a");
        if (time !== null) {
          date = new Date(time);
        }
      });
    }, 10000);

    var mousedown = false;
    let timeout: number;
    var timeout2: number = 2500;

    const timeHideToggle = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        toggleShown = false;
      }, timeout2);
    };

    document.addEventListener("mousemove", () => {
      toggleShown = true;
      if (mousedown === false) {
        timeHideToggle();
      }
    });
    document.addEventListener("mousedown", () => {
      mousedown = true;
      toggleShown = true;
    });
    document.addEventListener("mouseup", () => {
      mousedown = false;
      timeHideToggle();
    });
    document.addEventListener("keydown", () => {
      mousedown = true;
      toggleShown = true;
    });
    document.addEventListener("keyup", () => {
      mousedown = false;
      timeHideToggle();
    });
    timeHideToggle();
  });

  const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let ms = $derived(('0' + Math.floor(date.getMilliseconds() / 10)).slice(-2));
  let s = $derived(('0' + date.getSeconds()).slice(-2));
  let m = $derived(('0' + date.getMinutes()).slice(-2));
  let h = $derived(('0' + date.getHours()).slice(-2));
  let d = $derived(('0' + date.getDate()).slice(-2));
  let dateStr = $derived(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + h + ":" + m + ":" + s + "." + ms);
  let day = $derived(days[date.getDay()].slice(0, 3));
  let dateStr1 = $derived(d + "/" + ('0' + (date.getMonth() + 1).toString()).slice(-2) + "/" + date.getFullYear());
  let timeStr = $derived(h + ":" + m + ":" + s);
  let msStr = $derived("." + ms);
  let utcDateStr = $derived(date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate() + "T" + ('0' + date.getUTCHours()).slice(-2) + ":" + ('0' + date.getUTCMinutes()).slice(-2) + ":" + ('0' + date.getUTCSeconds()).slice(-2) + "." + ('0' + Math.floor(date.getUTCMilliseconds() / 10)).slice(-2));
  let utcTimeStr = $derived(('0' + date.getUTCHours()).slice(-2) + ":" + ('0' + date.getUTCMinutes()).slice(-2) + ":" + ('0' + date.getUTCSeconds()).slice(-2) + "." + ('0' + Math.floor(date.getUTCMilliseconds() / 10)).slice(-2));
  let utcDateStr1 = $derived(('0' + date.getUTCDate()).slice(-2) + "/" + ('0' + (date.getUTCMonth() + 1).toString()).slice(-2) + "/" + date.getUTCFullYear());

  let timezone = $derived(Intl.DateTimeFormat().resolvedOptions().timeZone
                        + ` (${(date.getTimezoneOffset() > 0 ? "-" : "+") + ("00" + Math.floor(Math.abs(date.getTimezoneOffset()) / 60)).slice(-2) + ":" + ("00" + (Math.abs(date.getTimezoneOffset()) % 60)).slice(-2)})`);

  async function getTime(timezone: string) {
    try {
      const response = await fetch('https://use.ntpjs.org/v1/time.json');
      if (!response.ok) {
        throw new Error("Server returned non-OK status. Error code: "+response.status + " " + response.statusText)
      }
      const data = await response.json();
      const serverTime = new Date(data.now * 1000);
      // console.log(data.now);
      const localTime = new Date();
      diff = serverTime.getTime() - localTime.getTime();
      // console.log(diff);
      return diff;
    }
    catch (e) {
      console.error(e);
      syncing = false;
      return null;
    }
    
  }

  async function actuallyGetTime() {
    syncing = true;
    lastUpdated = "Syncing...";
    let timezoneRaw = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let response = await getTime(timezoneRaw);
    if (response === null) {
      document.getElementById("tower-cell")!.style.opacity = "0.5";
      syncing = false;
      return null;
    }
    else {
      if (Number.isNaN(response)) {
        document.getElementById("tower-cell")!.style.opacity = "0.5";
        syncing = false;
        return null;
      }
      else {
        document.getElementById("tower-cell")!.style.opacity = "1";
      }
      let date1 = new Date((new Date()).getTime() + response);
      syncing = false;
      lastUpdated = `${h}:${m}:${s}`
      return date1.getTime();
    }
  }
</script>