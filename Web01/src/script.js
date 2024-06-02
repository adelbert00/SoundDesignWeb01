import { ref } from 'vue';
import protImage from './assets/prot.jpg';

export default {
  setup() {
    const imageSrc = protImage;
    const samplePacks = ref([
      {
        imageSrc: new URL('./assets/1.jpg', import.meta.url).href,
        name: 'Look Inside Volume 1',
        contents: ['40 Melody loops', '7 MIDI Patterns, HiHats', 'Some Bass Shots'],
        previewLink: 'https://www.youtube.com/watch?v=UdmH48mIO5w'
      },
      {
        imageSrc: new URL('./assets/2.jpg', import.meta.url).href,
        name: 'Look Inside Volume 2',
        contents: ['40 Melody Loops', '15 Drums Loops', '15 MIDI patterns'],
        previewLink: 'https://www.youtube.com/watch?v=YcXC8cjytJY&t=2s'
      },
      {
        imageSrc: new URL('./assets/3.jpg', import.meta.url).href,
        name: 'Look Inside Volume 3',
        contents: ['50 Melody Loops', '60 Drums', '60 Chord hits'],
        previewLink: 'https://www.youtube.com/watch?v=Yd7HZ2V3UeM'
      },
      {
        imageSrc: new URL('./assets/4.jpg', import.meta.url).href,
        name: 'Look Inside Volume 4',
        contents: ['51 Melody Loops', '54 Drums', '11 MIDI patterns'],
        previewLink: 'https://www.youtube.com/watch?v=YiD0f6CnnWs'
      }
    ]);

    const reels = ref([
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/embed/2MHh9BsH2d0?si=7wmS9LTQq-GqEppo',
        title: 'GTA 5 Online: The Last Dose',
        subtitle: 'Music & Sfx Redesign'
      },
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/embed/v2xGSW5-t7g?si=3hAJFuX6br1WxmdH',
        title: 'League of Legends',
        subtitle: 'Rengar: Sound Redesign'
      },
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/embed/eeQrxWYofVo?si=7x7dgyDwyfh-HAtK',
        title: 'Stacko Bot',
        subtitle: 'Music & Sfx + UE5 Implementation'
      },
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/embed/EOn5UYs99oI?si=iQFsKM2VNCTLDdup',
        title: 'Ryno 8',
        subtitle: 'Sfx Redesign'
      },
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/embed/Hy76V2oZKl0?si=GZ2mxLC40Gzgo84a',
        title: 'MTS: Animation 04',
        subtitle: 'Music & Sfx + Voiceover Redesign'
      },
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/embed/rOXcvxUCFRQ?si=gFsNn9knLQhm_hoF',
        title: 'MTS: Animation 07',
        subtitle: 'Music + Sfx Redesign'
      }
    ]);

    const musicList = ref([
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/embed/h39mIcanMJA?si=M2LUJd4WTWsJwj8g',
        title: 'Produced by: Adelbert & Sparkheem',
        producer: 'AWGE, Create Music Group & Marino Infantry'
      },
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/watch?v=5s1_MOD2jaE',
        title: 'Produced by: Adelbert & Cool P',
        producer: 'ĆPAJ STAJL, Sony Music Poland'
      },
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/watch?v=DW1l-NKMnpg',
        title: 'Produced by: Adelbert & Cool P',
        producer: 'COOL PRODUCTIONS, Sony Music Poland'
      },
      {
        width: 720,
        height: 360,
        src: 'https://www.youtube.com/watch?v=mJXJ3hC7ig0',
        title: 'Produced by: Adelbert & Cool P',
        producer: 'COOL PRODUCTIONS, Sony Music Poland'
      }
    ]);

    const musicTracks = ref([
      {
        src: 'assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
        title: 'Track 1',
        details: 'Details of Track 1'
      },
      {
        src: 'assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
        title: 'Track 2',
        details: 'Details of Track 2'
      }
    ]);

    const soundEffects = ref([
      {
        src: 'assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
        type: 'audio/wav',
        title: 'SFX 1',
        details: 'Details of SFX 1'
      },
      {
        src: 'assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
        type: 'audio/wav',
        title: 'SFX 2',
        details: 'Details of SFX 2'
      }
    ]);

    const foleyExamples = ref([
      {
        src: 'assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
        type: 'audio/wav',
        title: 'Foley 1'
      },
      {
        src: 'assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
        type: 'audio/wav',
        title: 'Foley 2'
      }
    ]);

    const percExamples = ref([
      {
        src: 'assets/music/Ambient_No_Man_Sky_C_Minor_117BPM.mp3',
        type: 'audio/wav',
        title: 'Perc 1'
      },
      {
        src: 'path/to/perc2.wav',
        type: 'audio/wav',
        title: 'Perc 2'
      }
    ]);

    const formData = ref({
      name: '',
      email: '',
      message: ''
    });

    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with id '${sectionId}' not found`);
      }
    }

    function handleSubmit() {
      console.log('Form submitted:', formData.value);
      // Add your API call here
    }

    return {
      imageSrc,
      samplePacks,
      reels,
      musicList,
      musicTracks,
      soundEffects,
      foleyExamples,
      percExamples,
      formData,
      scrollToSection,
      handleSubmit
    };
  }
};