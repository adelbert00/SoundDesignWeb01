<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="Navbar">
      <button class="Navbutton" @click="scrollToSection('about')">About</button>
      <button class="Navbutton" @click="scrollToSection('reels')">Reel</button>
      <button class="Navbutton" @click="scrollToSection('music')">Music</button>
      <button class="Navbutton" @click="scrollToSection('sound-effects')">SFX</button>
      <button class="Navbutton" @click="scrollToSection('contact')">Contact</button>
    </nav>

    <!-- Header Section -->
    <section>
      <header class="HeaderClass">
        <div id="Me">
          <h1 class="H1Name">Wojciech Faber</h1>
          <p class="PDescribe">Sound designer & Mix/master engineer</p>
        </div>
        <img :src="imageSrc" alt="My Photo">
      </header>
    </section>

    <!-- About Section -->
    <section>
      <div id="About-Me">
        <h1 class="H1Name">ABOUT ME</h1>
        <p class="PDescribe">
          With nearly a decade of experience in sound manipulation, specializing in music production, game sound design, film scoring, and crafting audio for commercials and video clips. Committed to integrating modern solutions. Dedicated to fostering an enjoyable work environment while pushing boundaries and embracing new challenges. Constantly seeking to innovate and bring fresh perspectives to every project, whether through cutting-edge technologies or refined traditional methods.
        </p>
      </div>
    </section>

    <!-- Sample Packs Section -->
    <section id="samplepacks">
      <h1 class="headersample">SAMPLE PACKS</h1>
      <div class="reelsframes">
        <div class="reeldiv" v-for="(pack, index) in samplePacks" :key="index">
          <img :src="pack.imageSrc" class="samplepackimg" :alt="pack.name">
          <p class="opismuza">{{ pack.name }}</p>
          <p class="opismuza2">Contains</p>
          <p v-for="(content, cIndex) in pack.contents" :key="cIndex" class="opismuza3">{{ content }}</p>
          <br>
          <a :href="pack.previewLink" class="buttonsamplepack">PREVIEW</a>
        </div>
      </div>
    </section>

    <!-- Reels Section -->
    <section>
      <h1 class="H1-Head">SOUND DESIGN DEMOS WITH VIDEO</h1>
      <div class="reelsframes">
        <div class="reeldiv" v-for="reel in reels" :key="reel.title">
          <iframe :width="reel.width" :height="reel.height" :src="reel.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p class="opismuza">{{ reel.title }}</p>
          <p class="opismuza2">{{ reel.subtitle }}</p>
        </div>
      </div>
    </section>

    <!-- Music Section -->
    <section id="music">
      <h1 class="headerh1">MUSIC</h1>
      <div class="musicframes">
        <div class="musicdiv" v-for="music in musicList" :key="music.title">
          <iframe :width="music.width" :height="music.height" :src="music.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p class="opismuza">Produced by:</p>
          <p class="opismuza2">{{ music.producer }}</p>
          <p class="opismuza3">Copyright ©</p>
          <p class="opismuza4">{{ music.rights }}</p>
        </div>
      </div>
    </section>

    <!-- Music Scores Section -->
    <section>
      <h1 class="H1-Head">MUSIC SCORES</h1>
      <div class="Music-Scores">
        <div class="Scores-Div" v-for="track in musicTracks" :key="track.src">
          <audio controls>
            <source :src="track.src" type="audio/mpeg" />
          </audio>
          <p class="opismuza">{{ track.title }}</p>
          <p class="opismuza4">{{ track.details }}</p>
        </div>
      </div>
    </section>

    <!-- Sound Effects Section -->
    <section>
      <h1 class="H1-Head">SOUND EFFECTS</h1>
      <div class="Sfx-Div">
        <div class="Audio-Controls" v-for="sfx in soundEffects" :key="sfx.src">
          <audio controls>
            <source :src="sfx.src" :type="sfx.type" />
          </audio>
          <p class="opismuza">{{ sfx.title }}</p>
          <p class="opismuza2">{{ sfx.details }}</p>
        </div>
      </div>
    </section>

    <!-- Foley Examples Section -->
    <section id="foley-examples">
      <h1 class="headerh1">FOLEY EXAMPLES</h1>
      <div class="sfxdiv">
        <div class="audiocontrols3" v-for="foley in foleyExamples" :key="foley.src">
          <audio controls>
            <source :src="foley.src" :type="foley.type" />
          </audio>
          <p class="opismuza">{{ foley.title }}</p>
        </div>
      </div>
    </section>

    <!-- Percs Examples Section -->
    <section id="percs-examples">
      <h1 class="headerh1">PERCS EXAMPLES</h1>
      <div class="sfxdiv">
        <div class="audiocontrols3" v-for="perc in percExamples" :key="perc.src">
          <audio controls>
            <source :src="perc.src" :type="perc.type" />
          </audio>
          <p class="opismuza">{{ perc.title }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="Contact">
      <h1 class="H1-Head">CONTACT</h1>
      <form @submit.prevent="handleSubmit">
        <label for="name" class="labels">Imię:</label>
        <input type="text" id="name" v-model="formData.name" required />
        
        <label for="email" class="labels">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
        
        <label for="message" class="labels">Wiadomość:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
        
        <button type="submit">Wyślij</button>
      </form>
    </section>

    <!-- Footer -->
    <footer>
      <div class="social-links">
        <a href="https://www.facebook.com/">
          <img src="C:\Users\tazor\Documents\GitHub\SoundDesignWeb01\Web01\src\assets\fb.png" class="icons" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/">
          <img src="C:\Users\tazor\Documents\GitHub\SoundDesignWeb01\Web01\src\assets\twitter.png" class="icons" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="C:\Users\tazor\Documents\GitHub\SoundDesignWeb01\Web01\src\assets\ig.png" class="icons" alt="Instagram" />
        </a>
      </div>
      <p>&copy; 2024 Reserved to Wojciech Faber</p>
    </footer>
  </div>
</template>

<script src="./script.js"></script>
<style src="./src/output.css"></style>


