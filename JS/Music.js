// let cookieBtn = document.getElementsByClassName("cookieBtn")[0];
// cookieBtn.addEventListener("click", () => {
//     let cookie = document.getElementsByClassName("cookieCon")[0];
//     cookie.style.opacity = 0;

//     setTimeout(() => {
//         delete cookie;
//         delete cookieBtn;
//         cookie.style.display = "none";
//     }, 200);
// })
let gs = gsap;
let musics = {
    lofi: [
        `(FREE) Lo-fi Type Beat - I Need a Girl.mp3`,
        `1 A.M Study Session books - (Lofi HipHop, chill beats).m4a`,
        `1 hour of chill aesthetic music for creatives- vintage, lofi music playlist.m4a`,
        `2 A.M Study Session _books_ - _lofi hip hop_chill beats_.m4a`,
        `3am lullaby ~ lofi hip hop mix.mp3`,
        `330 a.m. ~ Lofi HipHop  (chillhop mix for Study, Sleep, Homework).m4a`,
        `Amazing Chillstep Collection 2016 [ 1 Hour ].m4a`,
        `Bazzi X DEAN Type Beat _Wish_ _ Chill Wave _.mp3`,
        `Believe in the dream [studysleephomework music].m4a`,
        `Blue Wednesday - New Shoes.mp3`,
        `C H I L L V I B E S - Chill & aesthetic music playlist.m4a`,
        `ＣＨＩＬＬ ＆ ＲＩＤＥ.mp3`,
        `ＣＨＩＬＬ　ＡＴ　ＨＯＭＥ.m4a`,
        `Chill Study Beats • jazz & Lofi HipHop Mix.mp3`,
        `Chillhop Essentials - Spring 2019・chill hiphop & beats to relax.m4a`,
        `ＣＨＩＬＬＯＵＴ.m4a`,
        `Coronavirus Safety - chill alone (Lofi HipHop for Study, Sleep, Homework).m4a`,
        `DEEP CHILLS 2020 _snowflake_️ (Deep House _ Chill Nation Mix).m4a`,
        `DLJ - Night Emotions.m4a`,
        `Dontcry x Glimlip - 777.m4a`,
        `dryhope - White Oak _chill hip hop beats_.m4a`,
        `Dusk to Dawn - Ultimate Winter Chillstep.m4a`,
        `holding on ~ sad lofi mix.m4a`,
        `i know you don't love me ~ sad lofi mix.m4a`,
        `i know you're not happy ~ sad lofi mix.m4a`,
        `idealism - last time.mp3`,
        `JOURNEY - A Chillwave Synthwave Mix.m4a`,
        `Kina - Nobody Cares (ft. Shiloh).mp3`,
        `Kina - u're mine (ft. shiloh).m4a`,
        `Kupla - Kingdom in Blue.mp3`,
        `late night vibes⁴... _sleeping_ calm chillhop beats.m4a`,
        `Like a dream ♡ (Lofi hip hop Mix).m4a`,
        `listening to lofi on your own for new years eve.mp3`,
        `Lofi hip hop mix - Beats to Relax & Study.m4a`,
        `lofi lockdown ~ lofi hip hop _ jazzhop _ chillhop mix _study_sleep_homework music_ ( 128kbps ).m4a`,
        `mell-ø x Ambulo - Afloat Again.m4a`,
        `ＭＩＤＮＩＧＨＴ　ＤＲＩＶＥ.m4a`,
        `Miserable - (a sad ambient_lofi mix).m4a`,
        `Monma - Calm Lands.m4a`,
        `more sad lofi to help you sleep.mp3`,
        `NCS - Chill Lo-fi Hip-Hop Beats.m4a`,
        `No Sleep - A Chill Mix.m4a`,
        `nobody loves me ~ sad lofi mix.mp3`,
        `ＰＥＡＣＥＦＵＬ.mp3`,
        `Rain, Coffee and You  [studysleephomework music].m4a`,
        `RAINING IN OSAKA (Lofi HipHop).mp3`,
        `Rainy Days In Tokyo [Lofi Hip Hop  Jazzhop  Chillhop Mix] - Beats.m4a`,
        `Rooftop - Jazz Hop (Lofi Chillhop).mp3`,
        `sad lofi for lost souls.mp3`,
        `Samurai Champloo - Lofi Hip Hop Mix.m4a`,
        `Ｓｈｉｌｏｈ Ｄｙｎａｓｔｙ Ｃｈｉｌｌ Ｍｉｘ.mp3`,
        `sleepy fish - for when it's warmer.mp3`,
        `sleepy lofi & shooting stars.m4a`,
        `ＳＬＥＥＰＹ.mp3`,
        `staying in. _lofi _ jazzhop _ chill mix_.mp3`,
        `Ward Wills - When to Say Goodbye - Chill Lofi beats.m4a`,
    ],
    adele: [
        `Adele - Chasing Pavements.mp3`,
        `Adele - Rolling in the Deep.mp3`,
        `Adele - Someone Like You.mp3`,
        `Adele_-_Hello_(Official_Lyrics_Video)_HD.mp3`
    ],
    agsunta: [
        `Dating Tayo - Agsunta Song Request.m4a`,
        `Ben & Ben - Kathang Isip (Agsunta Song Requests ft. Emmanuelle Vera).m4a`,
        `Moira Dela Torre - Tagpuan (Agsunta Song Requests).m4a`,
        `Orange and Lemons - Hanggang Kailan (Agsunta Song Requests ft. Joe Vince).m4a`,
        `Rivermaya - Kisapmata (Agsunta Jam Sessions ft. Reign Andi).m4a`,
        `Silent Sanctuary - Hiling (Agsunta Jam Sessions ft. Peds Casilihan).m4a`,
        `Tensionado - SoapDish (Agsunta Song Requests).m4a`,
    ],
    alan: [
        `Alan Walker - All Falls Down Feat. Noah Cyrus With Digital Farm Animals.m4a`,
        `Alan Walker - Alone.m4a`,
        `Alan Walker - Faded _32D AUDIO_  NOT 8D and 16D audio_24d audio_ _headphones_ ( 256kbps cbr ).mp3`,
        `Alan Walker - Faded (Live Performance).m4a`,
        `Alan Walker - Faded.m4a`,
        `Alan Walker - Spectre.m4a`,
        `Alan Walker - Sunday Sing Me To Sleep (Live Performance).m4a`,
        `Alan Walker & Ava Max - Alone, Pt. II ( 256kbps cbr ).mp3`,
        `Alan Walker_Noah Cyrus - Again.m4a`,
        `Alan Walker, Sabrina Carpenter & Farruko  - On My Way ( 256kbps cbr ).mp3`,
        `AlanWalker - All FallsDown(Cover By J.fla).m4a`,
        `vicii ft. Rita Ora - Lonely Together (Alan Walker Remix) .m4a`,
        `Ina Wroldsen - Strongest (Alan Walker Remix) .m4a`
    ],
    ali: [
        `Ali Gatie - How Things Used To Be (Lyric Video) ( 256kbps cbr ).mp3`,
        `Ali Gatie - It's You (Official Lyrics Video) ( 256kbps cbr ).mp3`,
        `Ali Gatie - Moonlight (Lyrics _ Lyric Video) ( 256kbps cbr ).mp3`,
        `Ali Gatie - What If I Told You That I Love You (Official Music Video) ( 256kbps cbr ).mp3`
    ],
    avicii: [
        `Avicii - Ain't A Thing (Lyric Video) ft. Bonn ( 256kbps cbr ).mp3`,
        `Avicii - Bad Reputation (Lyric Video) ft. Joe Janiak ( 256kbps cbr ).mp3`,
        `Avicii - Fades Away (Lyric Video) ft. Noonie Bao ( 256kbps cbr ).mp3`,
        `Avicii - Feeling Good.m4a`,
        `Avicii - For A Better Day.m4a`,
        `Avicii - Friend Of Mine (Original Video) ft. Vargas & Lagola ( 256kbps cbr ).mp3`,
        `Avicii - Heaven (Tribute Video) ( 256kbps cbr ).mp3`,
        `Avicii - Hey Brother.m4a`,
        `Avicii - Hold The Line (Lyric Video) ft. A R I Z O N A ( 256kbps cbr ).mp3`,
        `Avicii - I Could Be The One.m4a`,
        `Avicii - Lay Me Down.m4a`,
        `Avicii - Levels ( 256kbps cbr ).mp3`,
        `Avicii - Pure Grinding.m4a`,
        `Avicii - Silhouettes.m4a`,
        `Avicii - SOS (Fan Memories Video) ft. Aloe Blacc ( 256kbps cbr ).mp3`,
        `Avicii - Sunset Jesus (Lyric Video) ( 256kbps cbr ).mp3`,
        `Avicii - The Nights ( 256kbps cbr ).mp3`,
        `Avicii - Tribute Mix (One Year Anniversary) ( 128kbps ).m4a`,
        `Avicii - Trouble (Lyric Video) ( 256kbps cbr ).mp3`,
        `Avicii - Waiting For Love.m4a`,
        `Avicii - Wake Me Up (Official Video).m4a`,
        `Avicii - WithOut You ft. Sandro Cavazza.m4a`,
        `Avicii - You Be Love ft. Billy Raffoul.m4a`,
        `Avicii - You Make Me.m4a`,
        `Avicii ft. MØ - _Dear Boy_ ( 256kbps cbr ).mp3`,
        `Avicii ft. Rita Ora - Lonely Together (Alan Walker Remix) .m4a`,
        `Avicii vs Nicky Romero - I Could Be The One (Nicktim) ( 256kbps cbr ).mp3`,
        `Avicii, Imagine Dragons - Heart Upon My Sleeve (Lyric Video) ( 256kbps cbr ).mp3`,
        `Kygo, Avicii - Forever Yours (Official Lyric Video) ft. Sandro Cavazza ( 256kbps cbr ).mp3`
    ],
    avril: [
        `Avril Lavigne - Complicated (Official Music Video) ( 256kbps cbr ).mp3`,
        `Avril Lavigne - Head Above Water (Official Video) .m4a`,
        `Avril Lavigne - I Love You ( 256kbps cbr ).mp3`,
        `Avril Lavigne - My Happy Ending (Official Music Video) ( 256kbps cbr ).mp3`,
        `Avril Lavigne - Smile (Official Music Video) ( 256kbps cbr ).mp3`,
        `Avril Lavigne - When You're Gone (Officia Music Video) ( 256kbps cbr ).mp3`,
        `Avril Lavigne - Wish You Were Here (Official Music Video) ( 256kbps cbr ).mp3`,
        `Breakaway - Avril Lavigne.mp3`,
        `Goodbye - Avril Lavigne.mp3`,
        `Here's_To_Never_Growing_Up_(Explicit)-Avril_Lavigne.mp3`,
        `I Love You - Avril Lavigne.mp3`,
        `Rock N Roll - Avril Lavigne.mp3`,
        `Smile - Avril Lavigne.mp3`,
        `The Best Damn Thing - Avril Lavigne.mp3`,
        `Things I'll Never Say - Avril Lavigne.mp3`,
        `What The Hell - Avril Lavigne.mp3`
    ],
    bazzi: [
        `Bazzi - I.F.L.Y. [Official Video] 128 kbps.m4a`,
        `Bazzi - Mine (Lyrics).mp3`,
        `Bazzi - Myself (Official Video) ( 256kbps cbr ).mp3`,
        `Bazzi - Paradise _Official Video_ ( 256kbps cbr ).mp3`,
        `Bazzi X DEAN Type Beat _Wish_ _ Chill Wave _ ( 256kbps cbr ).mp3`
    ],
    billie: [
        `Billie Eilish - bad guy ( 256kbps cbr ).mp3`,
        `billie eilish - can't help falling in love (lyrics) ( 256kbps cbr ).mp3`,
        `Billie Eilish - Everything I Wanted _16D AUDIO _ NOT 8D_ _headphones_ ( 256kbps cbr ).mp3`,
        `Billie Eilish - everything i wanted (Audio) ( 256kbps cbr ).mp3`,
        `Billie Eilish - everything I wanted (slowed_reverb) ( 256kbps cbr ).mp3`,
        `Billie Eilish - idontwannabeyouanymore (Vertical Video) ( 256kbps cbr ).mp3`,
        `Billie Eilish - No Time To Die (Audio) ( 256kbps cbr ).mp3`,
        `Billie Eilish - Ocean Eyes (Official Music Video) ( 256kbps cbr ).mp3`,
        `Billie Eilish - sHE's brOKen ( 128kbps ).m4a`,
        `Billie Eilish - when the party's over ( 256kbps cbr ).mp3`,
        `Billie Eilish - xanny ( 256kbps cbr ).mp3`,
        `Billie Eilish & Khalid - Lovely (Lyrics _ Lyrics Video) ( 128kbps ).m4a`
    ],
    benben: [
        `Ben&Ben - Araw-Araw _ Official Music Video ( 256kbps cbr ).mp3`,
        `Ben&Ben - Leaves (Official Lyric Video) ( 256kbps cbr ).mp3`,
        `Ben&Ben - Masyado Pang Maaga (Official Lyrics and Chords) ( 256kbps cbr ).mp3`,
        `Ben&Ben - Maybe The Night _OFFICIAL LYRIC VIDEO_ Exes Baggage OST ( 256kbps cbr ).mp3`,
        `Ben&Ben - Pagtingin _ Official Music Video ( 256kbps cbr ).mp3`,
        `Ben&Ben - Ride Home (Official Lyric Video) ( 256kbps cbr ).mp3`,
        `Ben&Ben - Sa Susunod na Habang Buhay _ Official Lyric Video ( 256kbps cbr ).mp3`,
        `Bibingka - BEN & BEN (Lyric Video) ( 256kbps cbr ).mp3`,
        `kathang_isip_c_ben_ben_agsuntasongrequests_ft._emmanuelle_vera_aac_52039.m4a`
    ],
    blg: [
        `Boys Like Girls - Thunder.mp3`,
        `Boys Like Girls - Two Is Better Than One (Official Video) ( 256kbps cbr ).mp3`
    ],
    bmth: [
        `Bring Me The Horizon - Avalanche (Official Video) ( 256kbps cbr ).mp3`,
        `Bring Me The Horizon - True Friends (Official Lyric Video) ( 256kbps cbr ).mp3`
    ],
    bruno: [
        `Bad Meets Evil - Lighters ft. Bruno Mars.mp3`,
        `Bruno Mars - 24K Magic (SING OFF vs. Alex Aiono).mp3`,
        `Bruno Mars - Grenade _OFFICIAL VIDEO_ ( 256kbps cbr ).mp3`,
        `Bruno Mars - It Will Rain - Lyrics.mp3`,
        `Bruno Mars - Just The Way You Are _Official Video_ ( 256kbps cbr ).mp3`,
        `Bruno Mars - Just the Way You Are.mp3`,
        `Bruno Mars - Runaway Baby (Official Audio Video) HD.mp3`,
        `Bruno Mars - That's What I Like 24K MAGIC - Lyric Video.mp3`,
        `Bruno Mars - Today my life begins.mp3`,
        `Bruno Mars - Versace on The Floor Official Audio.mp3`,
        `Count On Me - Bruno Mars - Lyrics [LoudTronix.me](1).mp3`
    ],
    calum: [
        `Calum Scott - No Matter What 128 kbps.m4a`,
        `Calum Scott - You Are The Reason (Official).mp3`
    ],
    camila: [
        `Camila Cabello - Havana (SING OFF vs. My Little Sister).mp3`,
        `Machine Gun Kelly Camila Cabello - Bad Things.mp3`,
        `Shawn Mendes, Camila Cabello - Señorita ( 256kbps cbr ).mp3`
    ],
    charlie: [
        `Attention by Charlie Puth _ Alex Aiono and Sabrina Carpenter Cover.mp3`,
        `Charlie Puth - Attention [Official Video].mp3`,
        `Charlie Puth - Kiss Me (Lyrics) ( 128kbps ).m4a`,
        `Charlie Puth - Up All Night [Official Audio].mp3`,
        `Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez) [Official Video].mp3`
    ],
    chelsea: [
        `Chelsea Cutler - Are You Listening (Lyrics) ( 256kbps cbr ).mp3`,
        `Chelsea Cutler - Sixteen (Lyrics _ Lyric Video) ( 256kbps cbr ).mp3`
    ],
    coldPlay: [
        `Coldplay - Cry Cry Cry (Official Video) ( 256kbps cbr ).mp3`,
        `The Chainsmokers & Coldplay - Something Just Like This (Lyric) ( 256kbps cbr ).mp3`
    ],
    dabin: [
        `Jason Ross, Dabin - One That Got Away (Lyrics) With Dylan Matthew ( 256kbps cbr ).mp3`,
        `Said The Sky & Dabin - Hero (Lyrics) ft. Olivver The Kid ( 256kbps cbr ).mp3`
    ],
    decemberA: [
        `December Avenue - Kahit Di Mo Alam ( 256kbps cbr ).mp3`,
        `December Avenue - Kung Di Rin Lang Ikaw (OFFICIAL LYRIC VIDEO).mp3`,
        `December Avenue - Magkunwari ('Di Man Tayo) _TODA One I Love Official Soundtrack_ ( 256kbps cbr ).mp3`,
        `December Avenue - Sa Ngalan Ng Pag-Ibig (OFFICIAL MUSIC VIDEO) ( 256kbps cbr.mp3`,
        `December Avenue feat. Moira Dela Torre  - Kung 'Di Rin Lang Ikaw (OFFICIAL L.mp3`,
        `December Avenue performs _Bulong_ LIVE on Wish 107.5 Bus ( 256kbps cbr ).mp3`,
        `December Avenue performs “Kahit 'Di Mo Alam_ LIVE on Wish 107.5 Bus ( 256kbps cbr ).mp3`,
        `december_avenue_bulong_official_music_video_aac_20121.m4a`
    ],
    diamondE: [
        `Diamond Eyes - Flutter _NCS Release_ ( 256kbps cbr ).mp3`,
        `Diamond Eyes - Gravity _NCS Release_ ( 256kbps cbr ).mp3`,
        `Diamond Eyes - Hold On _NCS Release_ ( 256kbps cbr ).mp3`
    ],
    djKhaled: [
        `Dj Khaled - I'm the One Lyrics.mp3`,
        `DJ_Khaled_-_Gold_Slugs_(Audio)_ft._Chris_Brown,_August_Alsina,_Fetty_Wap.mp3`
    ],
    djSnake: [
        `Dj Snake -  Middle (Lyrics) ft. Bipolar Sunshine.mp3`,
        `Major Lazer  DJ Snake - Lean On (feat. MØ) (Official Lyric Video).mp3`
    ],
    drake: [
        `Drake - Hotline Bling.mp3`,
        `Drake - In My Feelings (Rock Cover By Twenty One Two).m4a`,
        `Drake - Started From The Bottom.m4a`,
        `drake_in_my_feelings_rock_cover_by_twenty_one_two_aac_18092.m4a`,
        `Fake Love_ Broccoli & Caroline - Drake_ D.R.A.M. & Aminé (William Singe & Alex .mp3`,
        `Leave It All To Me - Miranda Cosgrove ft Drake Bell.mp3`,
        `Rihanna-Work_feat_Drake_.mp3`
    ],
    dubstep: [
        `Best Of 2019 Mix ♫♫ Gaming Music ♫ Trap x House x Dubstep x EDM 128 kbps.m4a`,
        `Gravity Falls Theme Song (OVA Dubstep Remix) 128 kbps.m4a`,
        `Made_Me_Realize_(Gravity_Falls_Theme_Dubstep_Remix)_-_Made_Me_Realize_(Gravi.mp3`,
        `Spag Heddy - Permanent.mp3`,
        `Teminite & Panda Eyes - Highscore ( 256kbps cbr ).mp3`
    ],
    edS: [
        `Ed Sheeran - Barcelona.m4a`,
        `Ed Sheeran - Beautiful People (feat. Khalid) [Official Video] 128 kbps.m4a`,
        `Ed Sheeran - Castle On The Hill (Official Video).m4a`,
        `Ed Sheeran - Dive [Official Audio].mp3`,
        `Ed Sheeran - Give Me Love.mp3`,
        `Ed Sheeran - Happier Official Audio [LoudTronix] [HQ].mp3`,
        `Ed Sheeran - I See Fire (Kygo Remix) ( 128kbps ).mp3`,
        `Ed Sheeran - Lego House.mp3`,
        `Ed Sheeran - Perfect [Official Audio].mp3`,
        `Ed Sheeran - Photograph.m4a`,
        `Ed Sheeran - Shape Of You (Official Lyric Video).m4a`,
        `Ed Sheeran - Thinking Out Loud _Official Video_ ( 256kbps cbr ).mp3`,
        `Ed Sheeran - What Do I Know.mp3`,
        `Ed Sheeran & Justin Bieber - I Don't Care _Official Lyric Video_ ( 256kbps cbr ).mp3`,
        `Ed_Sheeran_-_How_Would_You_Feel_(Paean)_[Official_Audio].mp3`,
        `Eminem - River ft. Ed Sheeran (Official Video) ( 256kbps cbr ).mp3`,
        `Perfect - Ed Sheeran.mp3`,
        `Supermarket Flowers - Ed Sheeran _Lyric_ ( 256kbps cbr ).mp3`
    ],
    eminem: [
        `Eminem - Love The Way You Lie ft. Rihanna ( 256kbps cbr ).mp3`,
        `Eminem - River ft. Ed Sheeran (Official Video) ( 256kbps cbr ).mp3`,
        `Lose youre self.mp3`
    ],
    eraserH: [
        `Eraserheads - Huwag Kang Matakot.mp3`,
        `Eraserheads - Spolarium.mp3`,
        `eraserheads - with a smile.mp3`,
        `eraserheads_ang_huling_el_bimbo_aac_39198.m4a`,
        `eraserheads_with_a_smile_aac_38993.m4a`
    ],
    fettyW: [
        `Fetty Wap   Trap Queen lyrics.mp3`,
        `Fetty Wap _My Way_ feat. Monty _Official Video_ ( 256kbps cbr ).mp3`,
        `Fetty Wap - Jimmy Choo (Clean Lyrics) [LoudTronix] [SQ].mp3`,
        `Fetty Wap - RGF Island [Audio Only].mp3`,
        `Fetty Wap - Trap Queen (Crankdat Remix).mp3`,
        `Fetty Wap-'679' Ft.Remy Boys OnScreen Lyrics.mp3`
    ],
    findingH: [
        `Finding Hope - 3_00 AM (Lyric Video) ( 256kbps cbr ).mp3`,
        `Finding Hope - Love (Lyric Video) ( 256kbps cbr ).mp3`,
        `Finding Hope - Without You (Lyric Video) feat. Holly Drummond ( 256kbps cbr ).mp3`
    ],
    finneas: [`FINNEAS - I Lost A Friend (Official Video) ( 256kbps cbr ).mp3`],
    FMstatic: [
        `FM Static - Moment Of Truth (Lyrics).mp3`,
        `FM Static- Tonight _ Lyrics ( 256kbps cbr ).mp3`
    ],
    galantis: [`Galantis - No Money (Official Video) ( 256kbps cbr ).mp3`],
    gorillaz: [
        `Gorillaz - Clint Eastwood (Official Video) ( 256kbps cbr ).mp3`
    ],
    greenDay: [
        `Green Day - 21 Guns.m4a`,
        `Green Day - American Idiot.m4a`,
        `Green Day - Basket Case.m4a`,
        `Green Day - Boulevard Of Broken Dreams.m4a`,
        `Green Day - Holiday.m4a`,
        `Green Day - Wake Me Up When September Ends.m4a`
    ],
    gryffin: [
        `Gryffin - Just For A Moment.m4a`,
        `Gryffin - Nobody Compares To You (Lyrics _ Lyric Video) ft. Katie Pearlman ( 256kbps cbr ).mp3`
    ],
    halsey: [
        `Alone - Halsey Lyrics ( 256kbps cbr ).mp3`,
        `benny blanco, Halsey & Khalid – Eastside (official video) 128 kbps.m4a`,
        `Halsey - 3am (Lyrics) ( 256kbps cbr ).mp3`,
        `Halsey - Without Me ( 256kbps cbr ).mp3`,
        `The Chainsmokers - Closer (Lyric) ft. Halsey.mp3`,
        `The Chainsmokers - Closer ft. Halsey (Official Lyric Video) ( 256kbps cbr ).mp3`,
        `The Chainsmokers - Closer ft. Halsey (T-Mass Remix) ( 256kbps cbr ).mp3`
    ],
    hillsongs: [
        `05_-_Hillsong_United_-_Draw_Me_Closer.mp3`,
        `05_-_Lord_Of_Lords.mp3`,
        `Alive.mp3`,
        `At_The_Cross-Hillsong.mp3`,
        `Back To Life (Studio Version).mp3`,
        `Broken Vessels (Amazing Grace).mp3`,
        `Christ Is Enough.mp3`,
        `Everything_That_Has_Breath.mp3`,
        `Hallelujah-Hillsong.mp3`,
        `Hillsong United - _Oceans_ (Live at RELEVANT) ( 256kbps cbr ).mp3`,
        `Hillsong_United_-_All_Of_The_Above_-_08_-_Hosanna.mp3`,
        `Hosanna - Hillsong lyrics ( 256kbps cbr ).mp3`,
        `I_Give_You_My_Heart-Hillsong.mp3`,
        `Look To The Son - Hillsong Worship ( 256kbps cbr ).mp3`,
        `My_Redeemer_Lives_(2).mp3`,
        `Saving_Grace.mp3`,
        `Through_It_All-Hillsong.mp3`,
        `With_All_I_Am.mp3`,
        `Worthy_Is_The_Lamb-Hillsong.mp3`,
        `You,_You_Are_God.mp3`
    ],
    ibelong: [
        `I Belong to the Zoo - Balita (Official Lyric Video) ( 256kbps cbr ).mp3`,
        `I Belong to the Zoo performs _Balang Araw_ LIVE on Wish 107.5 Bus ( 256kbps cbr ).mp3`,
        `i_belong_to_the_zoo_sana_official_music_video_aac_82112.m4a`,
        `Sana - I Belong To The Zoo (Official Music Video).m4a`
    ],
    illenium: [
        `Illenium - Needed You (ft. Dia Frampton) _LYRICS_ ( 256kbps cbr ).mp3`,
        `ILLENIUM, X Ambassadors - In Your Arms (Visualizer) 128 kbps.m4a`,
        `The Chainsmokers - Don't Let Me Down (Illenium Remix) ( 128kbps ).mp3`
    ],
    imagineD: [
        `Avicii, Imagine Dragons - Heart Upon My Sleeve (Lyric Video) ( 256kbps cbr ).mp3`,
        `Demons - Imagine Dragons ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Bad Liar (Lyric Video) ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Believer ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Birds (Audio) ft. Elisa ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Love (Music Video) ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Natural (Lyrics) ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Next To Me (Audio) ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Nothing Left To Say (Art Film) ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Radioactive Cover by Our Last Night.mp3`,
        `Imagine Dragons - Ready Aim Fire (Audio) ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Whatever It Takes ( 256kbps cbr ).mp3`,
        `Imagine Dragons - Zero (Acoustic) ( 256kbps cbr ).mp3`
    ],
    jasonM: [
        `Jason Mraz - I Won't Give Up (Official Video) ( 256kbps cbr ).mp3`,
        `Jason Mraz - Lucky (feat. Colbie Caillat) _Official Video_ ( 256kbps cbr ).mp3`
    ],
    jeremyZ: [
        `Jeremy Zucker - all the kids are depressed (Audio) ( 128kbps ).m4a`,
        `Jeremy Zucker - comethru ( 256kbps cbr ).mp3`
    ],
    jessieJ: [
        `Jessie J - Flashlight (1).mp3`,
        `Jessie J - Price Tag ft. B.o.B ( 256kbps cbr ).mp3`
    ],
    juiceWrld: [
        `Juice Wrld - Lucid Dreams (Lofi Remix By Notime) ( 256kbps cbr ).mp3`,
        `Juice WRLD – Lucid Dreams (8D Audio) _headphones_ ( 256kbps cbr ).mp3`,
        `Juice WRLD Lucid Dreams (Lyrics).mp3`,
        `Post Malone - Take It Back _ft. Juice WRLD_ 2019 ( 256kbps cbr ).mp3`,
        `XXXTENTACION & Juice WRLD - where did u go_ (Ocean Mix) ( 256kbps cbr ).mp3`
    ],
    justineB: [
        `Ed Sheeran & Justin Bieber - I Don't Care _Official Lyric Video_ ( 256kbps cbr ).mp3`,
        `Justin Bieber - Love Yourself  (PURPOSE _ The Movement).mp3`,
        `Justin Bieber - Love Yourself  (PURPOSE - The Movement).mp3`,
        `Justin Bieber - Love Yourself [Rock Cover by Twenty One Two] .m4a`,
        `Justin Bieber - Sorry (Dance Video).mp3`,
        `Justin Bieber - Sorry (PURPOSE - The Movement).mp3`,
        `Justin Bieber - What Do You Mean_.mp3`,
        `Justin Timberlake - Can't Stop the Feeling ( Lyrics Video ).mp3`,
        `Justin_Bieber_-_Ill_Show_You.mp3`,
        `justin_bieber_life_is_worth_living_purpose_the_movement_aac_9497.m4a`,
        `justin_bieber_what_do_you_mean-_mp3_39322.mp3`,
        `Luis Fonsi - Despacito ft. Daddy Yankee & Justin Bieber (SING OFF vs. Pixie Lott.mp3`,
        `Major Lazer - Cold Water (feat. Justin Bieber & MØ) (Official Lyric Video) ( 256kbps cbr ).mp3`,
        `Major Lazer - Cold Water (feat. Justin Bieber & MØ) (Official Lyric Video).mp3`,
        `Major Lazer - Cold Water ft. Justin Bieber & MØ (Official Video).mp3`
    ],
    justineT: [
        `Justin Timberlake - Can't Stop the Feeling ( Lyrics Video ).mp3`,
        `Justin Timberlake - Mirrors (Official Music Video) ( 256kbps cbr ).mp3`,
        `Justin Timberlake, Anna Kendrick - True Colors (Lyric).mp3`,
        `justin_timberlake_hair_up_lyrics_aac_57153.m4a`,
        `True Colors - Justin Timberlake & Anna Kendrick.mp3`
    ],
    kattyP: [
        `Katy Perry - California Gurls (Official) ft. Snoop Dogg ( 256kbps cbr ).mp3`,
        `Katy Perry - E.T. (Official) ft. Kanye West ( 256kbps cbr ).mp3`,
        `Katy Perry - Firework (Official) ( 256kbps cbr ).mp3`,
        `Katy Perry - The One That Got Away (Official) ( 256kbps cbr ).mp3`
    ],
    khalid: [
        `benny blanco, Halsey & Khalid – Eastside (official video) 128 kbps.m4a`,
        `Billie Eilish & Khalid - Lovely (Lyrics _ Lyrics Video) ( 128kbps ).m4a`,
        `Ed Sheeran - Beautiful People (feat. Khalid) [Official Video] 128 kbps.m4a`,
        `Khalid - Better (Official Video) 128 kbps.m4a`,
        `Khalid - Talk (Lyrics) ( 256kbps cbr ).mp3`,
        `Khalid - Young Dumb & Broke (Official Video).mp3`,
        `Marhmello - Silence ft. Khalid.m4a`,
        `Young Dumb  Broke   Khalid   Lyrics.mp3`
    ],
    kina: [
        `Kina - Can We Kiss Forever ( 256kbps cbr ).mp3`,
        `Kina - Can We Kiss Forever_ (ft. Adriana Proenza) ( 256kbps cbr ).mp3`,
        `Kina - get you the moon (ft. Snow) ( 256kbps cbr ).mp3`,
        `Kina - i'm in love with you (lyrics) ( 256kbps cbr ).mp3`
    ],
    kygo: [
        `Ed Sheeran - I See Fire (Kygo Remix) ( 128kbps ).mp3`,
        `Kygo - Firestone ft. Conrad Sewell (Official Video) ( 256kbps cbr ).mp3`,
        `Kygo - Happy Now ft. Sandro Cavazza ( 256kbps cbr ).mp3`,
        `Kygo - Here for You (Official Video) ft. Ella Henderson ( 256kbps cbr ).mp3`,
        `Kygo - Raging (Lyric Video) ft. Kodaline ( 160kbps ).mp3`,
        `Kygo - Stay (Lyric Video) ft. Maty Noyes ( 256kbps cbr ).mp3`,
        `Kygo, Avicii - Forever Yours (Official Lyric Video) ft. Sandro Cavazza ( 256kbps cbr ).mp3`,
        `Kygo, Labrinth - Fragile (Lyric Video) ( 256kbps cbr ).mp3`,
        `Kygo, Sasha Sloan - I'll Wait (Lyric Video) ( 256kbps cbr ).mp3`,
        `Kygo, Zara Larsson, Tyga - Like It Is ( 256kbps cbr ).mp3`
    ],
    ladyG: [
        `Bad_Romance_Radio_Edit_Radio_Edit_-_Lady_Gaga.mp3`,
        `Born_This_Way_-_Lady_Gaga.mp3`,
        `Poker_Face_-_Lady_Gaga.mp3`,
        `Telephone_-_Lady_Gaga_feat._Beyoncé.mp3`
    ],
    lany: [
        `LANY - ILYSB ( Stripped ) 128 kbps.m4a`,
        `LANY - Super Far (Official Video) ( 256kbps cbr ).mp3`,
        `LANY ~ MALIBU NIGHTS LYRICS 128 kbps.m4a`,
        `Lauv & LANY - Mean It.mp3`
    ],
    lauv: [
        `Lauv - Getting Over You Official Audio.mp3`,
        `Lauv - I Like Me Better Audio.mp3`,
        `Lauv - Paris In The Rain (Lyric Video) 128 kbps.m4a`,
        `Lauv - Paris In The Rain.mp3`,
        `Lauv & LANY - Mean It.mp3`,
        `Lauv & Troye Sivan - i'm so tired... _Official Audio_ ( 256kbps cbr ).mp3`
    ],
    lewisC: [
        `Lewis Capaldi - Before You Go (Official Video) ( 256kbps cbr ).mp3`,
        `Lewis Capaldi - Someone You Loved (Laibert Remix)  _Bass Boosted_ ( 256kbps cbr ).mp3`,
        `Lewis Capaldi - Someone You Loved (Lyrics) ( 256kbps cbr ).mp3`
    ],
    majorL: [
        `Major Lazer  DJ Snake - Lean On (feat. MØ) (Official Lyric Video).mp3`,
        `Major Lazer - Cold Water (feat. Justin Bieber & MØ) (Official Lyric Video) ( 256kbps cbr ).mp3`
    ],
    maroon: [
        `Chocolate Factory - Memories (Maroon 5 Cover) ( 256kbps cbr ).mp3`,
        `Maroon 5 - Animals (Official Music Video) ( 256kbps cbr ).mp3`,
        `Maroon 5 - Animals.mp3`,
        `Maroon 5 - Beautiful Goodbye lyrics.mp3`,
        `Maroon 5 - Cold (Audio) ft. Future.mp3`,
        `Maroon 5 - Don't Wanna Know.mp3`,
        `Maroon 5 - Girls Like You ft. Cardi B.m4a`,
        `Maroon 5 - Girls Like You ft. Cardi B.mp3`,
        `Maroon 5 - Love Somebody Lyrics.mp3`,
        `Maroon 5 - Maps (Lyric Video) ( 256kbps cbr ).mp3`,
        `Maroon 5 - Maps.mp3`,
        `Maroon 5 - Memories ( 256kbps cbr ).mp3`,
        `Maroon 5 - Payphone (Explicit) ft. Wiz Khalifa ( 256kbps cbr ).mp3`,
        `Maroon 5 - Payphone (Lyrics) ft. Wiz Khalifa.mp3`,
        `Maroon 5 - She Will Be Loved (Official Music Video) ( 256kbps cbr ).mp3`,
        `Maroon 5 - She Will Be Loved.mp3`,
        `Maroon 5 - Sunday Morning (Lyrics).mp3`,
        `Maroon 5 - This Love (lyrics).mp3`,
        `Maroon 5 - What Lovers Do (Lyrics  Lyric Video) feat. SZA.mp3`,
        `Maroon 5 - Won't Go Home Without You (Official Music Video) ( 256kbps cbr ).mp3`,
        `Payphone - Maroon 5 ft. Wiz Khalifa (Lyrics) _musical_note_ ( 256kbps cbr ).mp3`,
        `Won't Go Home Without You.mp3`
    ],
    marshmello: [
        `HAPPIER x SUNFLOWER _Mashup_ _ Marshmello, Post Malone, Swae Lee, Bastille ( 256kbps cbr ).mp3`,
        `Marshmello - Alone.m4a`,
        `Marshmello - Blocks.m4a`,
        `Marshmello - Fly.m4a`,
        `Marshmello - Keep It Mello ft. Omar Linx.m4a`,
        `Marshmello - Love U.m4a`,
        `Marshmello - Summer.m4a`,
        `Marshmello - Take It Back.m4a`,
        `Marshmello - You Me.m4a`,
        `Marshmello & Kane Brown - One Thing Right (Official Music Video) ( 256kbps cbr ).mp3`,
        `Marshmello x Flux Pavilion - Room To Fall (Feat. ELOHIM) _Official Lyric Video_ ( 256kbps cbr ).mp3`,
        `Marshmello x Lil Peep - Spotlight.m4a`,
        `Marshmello_Anne Marie - Friends.m4a`,
        `marshmello_ft._bastille_happier_official_music_video_aac_37318.m4a`
    ],
    martinG: [
        `Martin Garrix - Animals (Official Video) ( 256kbps cbr ).mp3`,
        `Martin Garrix - High On Life (feat. Bonn) with lyrics ( 256kbps cbr ).mp3`,
        `Martin Garrix & David Guetta - So Far Away (Lyrics _ Lyric Video) feat. Jamie Scott & Romy Dya ( 256kbps cbr ).mp3`,
        `Martin Garrix feat. Bonn - No Sleep (Official Video) ( 256kbps cbr ).mp3`
    ],
    meghanT: [
        `Better When I'm Dancin' - Meghan Trainor.mp3`,
        `I'm A Lady - Meghan Trainor.mp3`,
        `Meghan Trainor - All About That Bass.mp3`
    ],
    mikeP: [
        `Mike Posner - Be As You Are ( 256kbps cbr ).mp3`,
        `Mike Posner - I Took A Pill In Ibiza (Original).mp3`,
        `Mike Posner - Nothing Is Wrong ( 256kbps cbr ).mp3`,
        `Mike Posner - Please Don't Go (Official Music Video) ( 256kbps cbr ).mp3`,
        `Mike Posner - Prince Akeem ft. Wiz Khalifa (Official Visualizer) ( 256kbps cbr ).mp3`,
        `Naughty Boy, Mike Posner - Live Before I Die ( 256kbps cbr ).mp3`
    ],
    mesuicidesheep: [
        `Billie Eilish - everything I wanted (slowed_reverb) ( 256kbps cbr ).mp3`,
        `Call Me Karizma - Quarantine With Me ( 256kbps cbr ).mp3`,
        `FRND - Friend ( 256kbps cbr ).mp3`,
        `Kina - i'm in love with you (lyrics) ( 256kbps cbr ).mp3`,
        `Ollie - Stuck ( 256kbps cbr ).mp3`,
        `PLÜM - Play Me ( 256kbps cbr ).mp3`,
        `Shallou - Older (with Daya) ( 256kbps cbr ).mp3`,
        `Stephen - Crossfire ( 256kbps cbr ).mp3`,
        `Syence - Temporary High (feat. Heather Sommer) ( 256kbps cbr ).mp3`,
        `Teflon Sega - Beretta Lake (feat. SAINt JHN) ( 256kbps cbr ).mp3`,
        `Two Feet - I Can’t Relate ( 128kbps ).m4a`,
        `Unlike Pluto - Life In A Hole (lyrics) ( 256kbps cbr ).mp3`,
        `Yas - Empty Crown ( 256kbps cbr ).mp3`
    ],
    nailH: [
        `Finally_Free_-_Niall_Horan.mp3`,
        `On The Loose - Niall Horan.mp3`,
        `Slow Hands - Niall Horan.mp3`,
        `This Town - Niall Horan.mp3`,
        `Too Much To Ask - Niall Horan.mp3`
    ],
    nationB: [
        `Aero Chord - Surface _Bass Boosted_.mp3`,
        `Aiivawn - Cant Take My Eyes Off You (LOFI) (BASS BOOST).mp3`,
        `antikvng - blue moon. (w_ skypierr).mp3`,
        `Bass & Beard - Dimensions.mp3`,
        `Bass Nation - Quarantine Mix 2020.mp3`,
        `Freddie Dredd - Opaul (BASS BOOSTED).mp3`,
        `Headphone Activist - Cloud City _Bass Boosted_.mp3`,
        `LOUD - Thoughts.mp3`,
        `MCTR - Fearless.mp3`,
        `MYSTIC - UP!.mp3`,
        `noax - The End.mp3`,
        `OSIAS - BASS GOD.mp3`,
        `Osias - KING KALI.mp3`,
        `THROVN - Behind My Back.mp3`,
        `Trap Music Mix 2017 _radioactive_ Suicide Squad Trap _radioactive_ Trap & Bass _ Best EDM.mp3`,
        `Trap Nation X Bass Nation Mix 2019 __ Best Bass Trap Music Mix 2019.mp3`,
        `Trias - Lost _Bass Boosted_.mp3`,
        `Two Feet - Go F_ck Yourself _Bass Boosted_.mp3`,
    ],
    nationC: [
        `Abstract - Neverland (ft. Ruth B).mp3`,
        `All Yours - Chill Mix (R&B, Chill Trap Music).m4a`,
        `Blackbear - Idfc (Tarro Remix).mp3`,
        `DEEP CHILLS 2020 _snowflake_️ (Deep House _ Chill Nation Mix).m4a`,
        `Dynoro & Gigi D’Agostino - In My Mind.mp3`,
    ],
    nationT: [
        `All Yours _ Chill Mix (R&B, Chill Trap Music).m4a`,
        `Aywy. & EphRem - Adderall.mp3`,
        `Barren Gates - The Heist.mp3`,
        `Best Of 2019 Mix ♫♫ Gaming Music ♫ Trap x House x Dubstep x EDM.m4a`,
        `Kanye West - Heartless (Miles Away & braev Cover).mp3`,
        `Local Jane - No Light.mp3`,
        `Lost Sky - Fearless.mp3`,
        `The Chainsmokers - Closer ft. Halsey (T-Maass Remix).mp3`,
        `Trap Music ♫ Chill & Happy Trap Mix ♫ Gaming Music.m4a`,
        `Trap Music Mix 2017 _radioactive_ Suicide Squad Trap (Trap & Bass) _Best EDM.mp3`,
        `Trap Nation - New Year Music Mix 2020.mp3`,
        `Trap Nation X Bass Nation Mix 2019 __ Best Bass Trap Music Mix 2019.mp3`,
        `Vanic - Save Yourself ft. Gloria Kim.mp3`,
    ],
    ohwonder: [
        `Oh Wonder - Drive (Official Video) ( 256kbps cbr ).mp3`,
        `Oh Wonder - Hallelujah (Official One-Shot Video) 128 kbps.mp3`,
        `Oh Wonder - I Wish I Never Met You (Official Audio) ( 256kbps cbr ).mp3`,
        `Oh Wonder - In And Out Of Love (Official Video) ( 256kbps cbr ).mp3`,
        `Oh Wonder - Lose It (Jerry Folk Remix) ( 256kbps cbr ).mp3`,
        `Oh Wonder - Ultralife (Official Music Video) ( 256kbps cbr ).mp3`,
        `Oh Wonder - Ultralife (Official Music Video) 128 kbps.mp3`,
        `Oh Wonder - Without You (Official Music Video) 128 kbps.mp3`
    ],
    omfg: [
        `OMFG - Dyin.m4a`,
        `OMFG - Dying.m4a`,
        `OMFG - Everybody.m4a`,
        `OMFG - Hello (Will & Tim Remix).m4a`,
        `OMFG - Hello.m4a`,
        `OMFG - Hippo.m4a`,
        `OMFG - I Love You.m4a`,
        `OMFG - Ice Cream.m4a`,
        `OMFG - Jelly.m4a`,
        `OMFG - Mashed Potatoes.m4a`,
        `OMFG - Meant For You.m4a`,
        `OMFG - Nope.m4a`,
        `OMFG - Ok.m4a`,
        `OMFG - Pancakes.m4a`,
        `OMFG - Peanut Butter.m4a`,
        `OMFG - Robot (Bass Boosted).m4a`,
        `OMFG - Wonderful.m4a`,
        `OMFG - Yeah.m4a`
    ],
    oneD: [
        `18 - One Direction.mp3`,
        `Best Song Ever - One Direction.mp3`,
        `Better Than Words - One Direction.mp3`,
        `Change My Mind - One Direction.mp3`,
        `Does He Know - One Direction.mp3`,
        `Don't Forget Where You Belong - One Direction.mp3`,
        `Drag Me Down - One Direction.mp3`,
        `Everything About You - One Direction.mp3`,
        `Forever Young - One Direction.mp3`,
        `Gotta Be You - One Direction.mp3`,
        `Half A Heart - One Direction.mp3`,
        `History - One Direction.mp3`,
        `Home - One Direction.mp3`,
        `I Want - One Direction.mp3`,
        `I Would - One Direction.mp3`,
        `Illusion - One Direction.mp3`,
        `Irresistible - One Direction.mp3`,
        `Just Can't Let Her Go - One Direction.mp3`,
        `Kiss You - One Direction.mp3`,
        `Last First Kiss - One Direction.mp3`,
        `Little Things - One Direction.mp3`,
        `Live While We're Young - One Direction.mp3`,
        `Loved You First - One Direction.mp3`,
        `Midnight Memories - One Direction.mp3`,
        `More Than This - One Direction Lyrics.mp3`,
        `Na Na Na - One Direction.mp3`,
        `Night Changes - One Direction.mp3`,
        `No Control - One Direction.mp3`,
        `Nobody Compares - One Direction.mp3`,
        `One Direction - Summer Love.mp3`,
        `One Direction - Up All Night (lyrics+pictures).mp3`,
        `One Direction - What Makes You Beautiful (Official Video).mp3`,
        `One Direction - Where Do Broken Hearts Go.mp3`,
        `One Thing - One Direction.mp3`,
        `One Way Or Another (Teenage Kicks) - One Direction.mp3`,
        `Over Again.mp3`,
        `Perfect - One Direction.mp3`,
        `Rock Me - One Direction.mp3`,
        `She's Not Afraid - One Direction.mp3`,
        `Steal My Girl - One Direction.mp3`,
        `Still The One - One Direction.mp3`,
        `Stole My Heart - One Direction.mp3`,
        `Story of My Life - One Direction.mp3`,
        `Teenage Dirtbag - One Direction.mp3`,
        `They Don't Know About Us - One Direction.mp3`,
        `Through The Dark - One Direction.mp3`,
        `Truly Madly Deeply - One Direction.mp3`,
        `What Makes You Beautiful - One Direction.mp3`,
        `You and I - One Direction.mp3`
    ],
    oneR: [`Counting Stars - One Republic.mp3`],
    opms: [
        `Abra ft. Loonie & Ron Henley - Cerberus (Official Music Video) ( 256kbps cbr ).mp3`,
        `Ben & Ben - Kathang Isip (Agsunta Song Requests ft. Emmanuelle Vera).m4a`,
        `Biglang Liko- Ron Henley ft  Pow Chavez - Copy.mp3`,
        `Dating Tayo - Agsunta Song Request.m4a`,
        `December Avenue - Kahit Di Mo Alam ( 256kbps cbr ).mp3`,
        `December Avenue - Kung Di Rin Lang Ikaw (OFFICIAL LYRIC VIDEO).mp3`,
        `December Avenue - Magkunwari ('Di Man Tayo) _TODA One I Love Official Soundtrack_ ( 256kbps cbr ).mp3`,
        `December Avenue - Sa Ngalan Ng Pag-Ibig (OFFICIAL MUSIC VIDEO) ( 256kbps cbr.mp3`,
        `December Avenue feat. Moira Dela Torre  - Kung 'Di Rin Lang Ikaw (OFFICIAL L.mp3`,
        `December Avenue performs _Bulong_ LIVE on Wish 107.5 Bus ( 256kbps cbr ).mp3`,
        `December Avenue performs “Kahit 'Di Mo Alam_ LIVE on Wish 107.5 Bus ( 256kbps cbr ).mp3`,
        `december_avenue_bulong_official_music_video_aac_20121.m4a`,
        `Eraserheads - Huwag Kang Matakot.mp3`,
        `Eraserheads - Spolarium.mp3`,
        `eraserheads - with a smile.mp3`,
        `eraserheads_ang_huling_el_bimbo_aac_39198.m4a`,
        `eraserheads_with_a_smile_aac_38993.m4a`,
        `I Belong to the Zoo - Balita (Official Lyric Video) ( 256kbps cbr ).mp3`,
        `I Belong to the Zoo performs _Balang Araw_ LIVE on Wish 107.5 Bus ( 256kbps cbr ).mp3`,
        `i_belong_to_the_zoo_sana_official_music_video_aac_82112.m4a`,
        `Loonie and Ron Henley perform _Balewala_ LIVE on Wish 107.5 Bus ( 256kbps cbr ).mp3`,
        `Moira Dela Torre - Tagpuan (Agsunta Song Requests).m4a`,
        `Orange and Lemons - Hanggang Kailan (Agsunta Song Requests ft. Joe Vince).m4a`,
        `Rico Blanco - Antukin.mp3`,
        `Rivermaya - Kisapmata (Agsunta Jam Sessions ft. Reign Andi).m4a`,
        `Ron Henley - Hagdan (Official Music Video) feat. Kat Agarrado ( 256kbps cbr ).mp3`,
        `Ron Henley - Langit ft. Bea Valera (Lyrics).mp3`,
        `Ron Henley feat. Yumi - Venus (Produced by Boja.mp3`,
        `Sana - I Belong To The Zoo (Official Music Video).m4a`,
        `Silent Sanctuary - 14.mp3`,
        `Silent Sanctuary - Abot Langit (Official Lyric Video).mp3`,
        `Silent Sanctuary - Bumalik Ka Na Sakin.mp3`,
        `Silent Sanctuary - Di Na Kita Mahal.mp3`,
        `Silent Sanctuary - Hiling (Agsunta Jam Sessions ft. Peds Casilihan).m4a`,
        `Silent Sanctuary - Meron Nang Iba.mp3`,
        `Silent Sanctuary - Paalam.mp3`,
        `Silent Sanctuary - Sayo.mp3`,
        `Silent_Sanctuary_-_Pasensya_Ka_Na_(Official_Lyric_Video).mp3`,
        `Tensionado - SoapDish (Agsunta Song Requests).m4a`,
    ],
    oasis: [`OSIAS - BASS GOD.mp3`, `Osias - KING KALI.mp3`],
    owlCity: [
        `Fireflies - Owl City.mp3`,
        `Owl City - Vanilla Twilight (Official Music Video) ( 256kbps cbr ).mp3`,
        `Owl City & Carly Rae Jepsen - Good Time (Official Video) ( 256kbps cbr ).mp3`,
        `When Can I See You Again - Owl City.mp3`
    ],
    pink: [
        `P!nk - Can We Pretend (Sigala Remix) feat. Cash Cash ( 256kbps cbr ).mp3`,
        `P!nk - Just Give Me A Reason ft. Nate Ruess (Official Music Video) ( 256kbps cbr ).mp3`
    ],
    paramore: [
        `Paramore_ Still Into You _OFFICIAL VIDEO_ ( 256kbps cbr ).mp3`,
        `Paramore- crushcrushcrush [OFFICIAL VIDEO].mp3`,
        `Paramore- Playing God [OFFICIAL VIDEO].mp3`,
        `Paramore- The Only Exception [OFFICIAL VIDEO].mp3`,
        `Paramore- Turn It Off (Audio).mp3`,
        `Paramore- When It Rains (Audio).mp3`
    ],
    planetShakers: [
        `Planetshakers - All About You.mp3`,
        `Planetshakers - Born to Praise.mp3`,
        `Planetshakers - Bring It On.mp3`,
        `Planetshakers - Dance.mp3`,
        `Planetshakers - I'm Forever Yours.mp3`,
        `Planetshakers - Nothing Is Impossible.m4a`,
        `Planetshakers - Set_Me_Ablaze_(Live).mp3`
    ],
    postM: [
        `HAPPIER x SUNFLOWER _Mashup_ _ Marshmello, Post Malone, Swae Lee, Bastille ( 256kbps cbr ).mp3`,
        `Post Malone - Better Now ( 256kbps cbr ).mp3`,
        `Post Malone - Candy Paint (The Fate of the Furious- The Album) OFFICIAL AUDI.mp3`,
        `Post Malone - Circles ( 256kbps cbr ).mp3`,
        `Post Malone - Circles (Official Lofi Remix) ( 256kbps cbr ).mp3`,
        `Post Malone - Fiction _ft. Logic_ 2020 ( 256kbps cbr ).mp3`,
        `Post Malone - Goodbyes (Lyrics) ft. Young Thug.mp3`,
        `Post Malone - I Fall Apart Lo-fi ver. (Lyrics) ( 256kbps cbr ).mp3`,
        `Post Malone - I Fall Apart.m4a`,
        `Post Malone - Psycho ft. Ty Dolla Ign.m4a`,
        `Post Malone - Take It Back _ft. Juice WRLD_ 2019 ( 256kbps cbr ).mp3`,
        `Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse) ( 256kbps cbr ).mp3`
    ],
    powfu: [
        `Powfu - days we had (ft. king theta) Lyric Video ( 256kbps cbr ).mp3`,
        `Powfu - death bed 128 kbps.m4a`,
        `powfu - i can't sleep ( 256kbps cbr ).mp3`,
        `Powfu - laying on my porch while we watch the world end. (ft. Rxseboy) ( 256kbps cbr ).mp3`,
        `Powfu - letters in december (Lyrics) ft. Rxseboy ( 256kbps cbr ).mp3`,
        `Powfu - Life with you (Prod. Just big hills.) ( 256kbps cbr ).mp3`,
        `Powfu - step into my life (ft. sleep.ing) ( 256kbps cbr ).mp3`,
        `Powfu - What This Means (ft. Ouse) (Lyrics) ( 256kbps cbr ).mp3`,
        `Powfu - when things were awkward (Lyrics _ Lyric Video) prod. fenoaltea ( 256kbps cbr ).mp3`,
        `Powfu - would look perfect (ft. Rxseboy) ( 256kbps cbr ).mp3`,
        `skele ft. Powfu - fall in love ( 128kbps ).mp3`
    ],
    rihanna: [
        `Eminem - Love The Way You Lie ft. Rihanna ( 256kbps cbr ).mp3`,
        `Rihanna   Where Have You Been.mp3`,
        `Rihanna-Work_feat_Drake_.mp3`
    ],
    ronHenley: [
        `Abra ft. Loonie & Ron Henley - Cerberus (Official Music Video) ( 256kbps cbr ).mp3`,
        `Biglang Liko- Ron Henley ft  Pow Chavez - Copy.mp3`,
        `Loonie and Ron Henley perform _Balewala_ LIVE on Wish 107.5 Bus ( 256kbps cbr ).mp3`,
        `Rico Blanco - Antukin.mp3`,
        `Ron Henley - Hagdan (Official Music Video) feat. Kat Agarrado ( 256kbps cbr ).mp3`,
        `Ron Henley - Langit ft. Bea Valera (Lyrics).mp3`,
        `Ron Henley feat. Yumi - Venus (Produced by Boja.mp3`,
    ],
    saidTS: [
        `Said The Sky - All I Got (Lyric Video) With Kwesi.m4a`,
        `Said The Sky & Dabin - Hero (Lyrics) ft. Olivver The Kid ( 256kbps cbr ).mp3`
    ],
    samSmith: [
        `Disclosure - Cooler Than Latch (feat. Sam Smith & Mike Posner).mp3`,
        `Sam Smith - Fire On Fire (From Watership Down) 128 kbps.m4a`,
        `Sam Smith - Stay With Me (Official Video) 128 kbps.m4a`,
        `Sam Smith, Normani - Dancing With A Stranger (Official Video) 128 kbps.m4a`
    ],
    shawnM: [
        `Señorita_-_Shawn_Mendes,_Camila_Cabello.mp3`,
        `Shawn Mendes - Treat You Better.mp3`,
        `Shawn Mendes, Camila Cabello - Señorita ( 256kbps cbr ).mp3`,
        `There's Nothing Holding Me Back - Shawn Mendes.mp3`,
        `Youth - Shawn Mendes.mp3`
    ],
    sia: [
        `Chandelier - Sia (Rock Cover by Fast Forward).m4a`,
        `David Guetta - Titanium ft. Sia (Official Video) ( 256kbps cbr ).mp3`,
        `Dusk Till Dawn - ZAYN ft Sia.mp3`,
        `LSD - Thunderclouds (Official Video) ft. Sia.m4a`,
        `Rainbow - SIA (MLP The Movie).mp3`
    ],
    silentS: [
        `Silent Sanctuary - 14.mp3`,
        `Silent Sanctuary - Abot Langit (Official Lyric Video).mp3`,
        `Silent Sanctuary - Bumalik Ka Na Sakin.mp3`,
        `Silent Sanctuary - Di Na Kita Mahal.mp3`,
        `Silent Sanctuary - Hiling (Agsunta Jam Sessions ft. Peds Casilihan).m4a`,
        `Silent Sanctuary - Meron Nang Iba.mp3`,
        `Silent Sanctuary - Paalam.mp3`,
        `Silent Sanctuary - Sayo.mp3`,
        `Silent_Sanctuary_-_Pasensya_Ka_Na_(Official_Lyric_Video).mp3`,
    ],
    simplePlan: [
        `Simple Plan - Perfect (Official Video).mp3`,
    ],
    spagH: [
        `Spag Heddy - Gospel ft. Born.m4a`,
        `Spag Heddy - Love On First Sine.m4a`,
        `Spag Heddy - Permanent.mp3`
    ],
    taylorS: [
        `Call It What You Want - Taylor Swift.mp3`,
        `Call It What You Want - Taylor_Swift.mp3`,
        `Enchanted - Taylor Swift.mp3`,
        `Gorgeous - Taylor Swift.mp3`,
        `Gorgeous-Taylor_Swift.mp3`,
        `Look What You Made Me Do - Taylor Swift.mp3`,
        `Mine.mp3`,
        `Ours - Taylor Swift.mp3`,
        `Style - Taylor Swift.mp3`,
        `Taylor Swift - Christmas Tree Farm ( 256kbps cbr ).mp3`,
        `Taylor Swift - Love Story ( 256kbps cbr ).mp3`,
        `Taylor Swift - The Man (Lyric Video) ( 256kbps cbr ).mp3`,
        `taylor_swift_look_what_you_made_me_do_aac_9298.m4a`,
        `The Way I Loved You - Taylor Swift.mp3`,
        `ZAYN & Taylor Swift - I Don't Wanna Live Forever (SING OFF vs. William Singe).mp3`
    ],
    theChain: [
        `The Chainsmokers - All We Know ft. Phoebe Ryan (Audio) ( 256kbps cbr ).mp3`,
        `The Chainsmokers - Closer (Lyric) ft. Halsey.mp3`,
        `The Chainsmokers - Closer ft. Halsey (Official Lyric Video) ( 256kbps cbr ).mp3`,
        `The Chainsmokers - Closer ft. Halsey (T-Mass Remix) ( 256kbps cbr ).mp3`,
        `The Chainsmokers - Don't Let Me Down (Illenium Remix) ( 128kbps ).mp3`,
        `The Chainsmokers - Don't Let Me Down ft. Daya (Official Music Video) ( 256kbps cbr ).mp3`,
        `The Chainsmokers - Paris (Lyric Video) ( 256kbps cbr ).mp3`,
        `The Chainsmokers - Roses ft. ROZES (Audio) ( 256kbps cbr ).mp3`,
        `The Chainsmokers - See the Way (Lyric Video) ft. Sabrina Claudio ( 256kbps cbr ).mp3`,
        `The Chainsmokers & Coldplay - Something Just Like This (Lyric) ( 256kbps cbr ).mp3`
    ],
    theFatRat: [
        `TheFatRat - Fly Away feat. Anjulie ( 256kbps cbr ).mp3`,
        `TheFatRat - Jackpot (Jackpot EP Track 1) ( 256kbps cbr ).mp3`,
        `TheFatRat - MAYDAY feat. Laura Brehm ( 256kbps cbr ).mp3`,
        `TheFatRat - No No No ( 256kbps cbr ).mp3`,
        `TheFatRat - Oblivion (feat. Lola Blanc) ( 256kbps cbr ).mp3`,
        `TheFatRat - The Calling (feat. Laura Brehm) ( 256kbps cbr ).mp3`,
        `TheFatRat - Unity ( 256kbps cbr ).mp3`
    ],
    TwentyO: [
        `Twenty One Pilots - Cancer.m4a`,
        `Twenty One Pilots - Chlorine (Official Video) .mp3`,
        `Twenty One Pilots - Heathens (Disto Remix).m4a`,
        `Twenty One Pilots - Heathens From Suicide Squad The Album.m4a`,
        `Twenty One Pilots - Morph (Official Audio) .m4a`,
        `Twenty One Pilots - My Blood (Official Video) .m4a`,
        `Twenty One Pilots - Ride (Video) .m4a`,
        `Twenty One Pilots - Stressed Out (Out Tomsize Remix).m4a`,
        `twenty one pilots_ Stressed Out _OFFICIAL VIDEO_ ( 256kbps cbr ).mp3`,
        `twenty one pilots_ The Hype (Official Video) ( 256kbps cbr ).mp3`
    ],
    wizK: [
        `Maroon 5 - Payphone (Explicit) ft. Wiz Khalifa ( 256kbps cbr ).mp3`,
        `Maroon 5 - Payphone (Lyrics) ft. Wiz Khalifa.mp3`,
        `Mike Posner - Prince Akeem ft. Wiz Khalifa (Official Visualizer) ( 256kbps cbr ).mp3`,
        `Payphone - Maroon 5 ft. Wiz Khalifa (Lyrics) _musical_note_ ( 256kbps cbr ).mp3`,
        `Snoop Dogg - Oh Na Na ft. Wiz Khalifa (Explicit) 2016.mp3`,
        `Wiz Khalifa - King of Everything [Official Video].mp3`,
        `Wiz Khalifa - Medicated feat. Chevy Woods & Juicy J [Official Audio].mp3`,
        `Wiz Khalifa - No Sleep [Music Video].mp3`,
        `Wiz Khalifa - Promises Official Video.mp3`,
        `Wiz Khalifa - True Colors ft. Nicki Minaj [Official Audio].mp3`,
        `wiz khalifa ft. snoop dogg - young, wild & free im1 (1).mp3`,
        `WORK HARD PLAY HARD- WIZ KHALIFA.mp3`
    ],
    zayn: [
        `Dusk Till Dawn - ZAYN ft Sia.mp3`,
        `ZAYN & Taylor Swift - I Don't Wanna Live Forever (SING OFF vs. William Singe).mp3`
    ],
    zedd: [
        `Ariana Grande - Break Free ft. Zedd.m4a`,
        `Zedd - Grey The Middle ft. Maren Morris.m4a`,
        `Zedd Maren Morris Grey - The Middle (Lyric Video).mp3`,
        `Zedd, Alessia Cara - Stay (Official Lyric Video) ( 256kbps cbr ).mp3`
    ]
};
let artists = {
    lofi: [],
    adele: [],
    agsunta: [],
    alan: [],
    ali: [],
    avicii: [],
    avril: [],
    bazzi: [],
    billie: [],
    benben: [],
    blg: [],
    bmth: [],
    bruno: [],
    calum: [],
    camila: [],
    charlie: [],
    chelsea: [],
    coldPlay: [],
    dabin: [],
    decemberA: [],
    diamondE: [],
    djKhaled: [],
    djSnake: [],
    drake: [],
    dubstep: [],
    edS: [],
    eminem: [],
    eraserH: [],
    fettyW: [],
    findingH: [],
    finneas: [],
    FMstatic: [],
    galantis: [],
    gorillaz: [],
    greenDay: [],
    gryffin: [],
    halsey: [],
    hillsongs: [],
    ibelong: [],
    illenium: [],
    imagineD: [],
    jasonM: [],
    jeremyZ: [],
    jessieJ: [],
    juiceWrld: [],
    justineB: [],
    justineT: [],
    kattyP: [],
    khalid: [],
    kina: [],
    kygo: [],
    ladyG: [],
    lany: [],
    lauv: [],
    lewisC: [],
    majorL: [],
    maroon: [],
    marshmello: [],
    martinG: [],
    meghanT: [],
    mikeP: [],
    mesuicidesheep: [],
    nailH: [],
    nationB: [],
    nationC: [],
    nationT: [],
    ohwonder: [],
    omfg: [],
    oneD: [],
    oneR: [],
    opms: [],
    oasis: [],
    owlCity: [],
    pink: [],
    paramore: [],
    planetShakers: [],
    postM: [],
    powfu: [],
    rihanna: [],
    ronHenley: [],
    saidTS: [],
    samSmith: [],
    shawnM: [],
    sia: [],
    silentS: [],
    simplePlan: [],
    spagH: [],
    taylorS: [],
    theChain: [],
    theFatRat: [],
    TwentyO: [],
    wizK: [],
    zayn: [],
    zedd: []
};
let pt = {
    lofi: "Lofi",
    adele: "Adele",
    agsunta: "Agsunta",
    alan: "Alan Walker",
    ali: "Ali Gatie",
    avicii: "Avicii",
    avril: "Avril Lavigne",
    bazzi: "Bazzi",
    billie: "Billie Eilish",
    benben: "Ben & Ben",
    blg: "Boys Like Girls",
    bmth: "Bring Me The Horizon",
    bruno: "Bruno Mars",
    calum: "Calum Scott",
    camila: "Camila Cabello",
    charlie: "Charlie Puth",
    chelsea: "Chelsea Cutler",
    coldPlay: "Cold Play",
    dabin: "Dabin",
    decemberA: "December Ave.",
    diamondE: "Diamond Eyes",
    djKhaled: "DJ Khaled",
    djSnake: "Dj Snake",
    drake: "Drake",
    dubstep: "Dubstep",
    edS: "Ed Sheeran",
    eminem: "Eminem",
    eraserH: "Eraser Heads",
    fettyW: "Fetty Wap",
    findingH: "Finding Hope",
    finneas: "Finneas",
    FMstatic: "FM Static",
    galantis: "Galantis",
    gorillaz: "Gorillaz",
    greenDay: "Green Day",
    gryffin: "Gryffin",
    halsey: "Halsey",
    hillsongs: "Hillsongs",
    ibelong: "I belong to the zoo",
    illenium: "Illenium",
    imagineD: "Imagine Dragons",
    jasonM: "Jason Mraz",
    jeremyZ: "Jeremy Zucker",
    jessieJ: "Jessie J",
    juiceWrld: "Juice WRLD",
    justineB: "Justine Beiber",
    justineT: "Justine Timberlake",
    kattyP: "Katty Perry",
    khalid: "Khalid",
    kina: "Kina",
    kygo: "Kygo",
    ladyG: "Lady Gaga",
    lany: "LANY",
    lauv: "Lauv",
    lewisC: "Lewis Capaldi",
    majorL: "Major Lazer",
    maroon: "Maroon 5",
    marshmello: "Marshmello",
    martinG: "Martin Garrix",
    meghanT: "Meghan Trainor",
    mikeP: "Mike Posner",
    mesuicidesheep: "Mr Suicidesheep",
    nailH: "Nail Horan",
    nationB: "Nation [Bass Nation]",
    nationC: "Nation [Chill Nation]",
    nationT: "Nation [Trap Nation]",
    ohwonder: "Oh Wonder",
    omfg: "OMFG",
    oneD: "One Direction",
    oneR: "One Republic",
    opms: "OPM (Compiled)",
    oasis: "Oasis",
    owlCity: "Owl City",
    pink: "P!nk",
    paramore: "Paramore",
    planetShakers: "Planetshakers",
    postM: "Post Malone",
    powfu: "Powfu",
    rihanna: "Rihanna",
    ronHenley: "Ron Henley",
    saidTS: "Said The Sky",
    samSmith: "Sam Smith",
    shawnM: "Shawn Mendes",
    sia: "Sia",
    silentS: "Silent Sanctuary",
    simplePlan: "Simple Plan",
    spagH: "Spag Heddy",
    taylorS: "Taylor Swift",
    theChain: "The Chainsmokers",
    theFatRat: "The FatRat",
    TwentyO: "Twenty One Pilots",
    wizK: "Wiz Khalifa",
    zayn: "Zayn",
    zedd: "Zedd"
};
let m = [],
    mList = [];
for (let i in pt) {
    m.push(pt[i]);
    mList.push(i);
}
for (let i in musics) {
    artists[i] = musics[i].map(() => pt[i]);
}
let musicStates = {shuffle: false, loop: false};
let durations = {
    lofi: [
    ],
    adele: ["3:41", "3:53", "4:44", "4:54"],
    agsunta: [],
    alan: ["3:34", "4:05", "3:36", "3:14", "3:49"],
    ali: ["3:33", "3:34", "2:41", "3:48"],
    avicii: [
        "3:23",
        "3:02",
        "3:26",
        "4:14",
        "2:59",
        "4:02",
        "4:13",
        "3:05",
        "5:04",
        "4:23",
        "2:52",
        "4:45",
        "3:41",
        "3:18",
        "3:16",
        "4:44",
        "2:38",
        "2:25",
        "3:10",
        "3:10",
        "17:14",
        "2:52",
        "3:50",
        "4:32",
        "3:03",
        "3:30",
        "3:50",
        "5:37",
        "3:14",
        "4:45",
        "4:15",
        "4:12",
        "3:13"
    ],
    avril: [
        "4:12",
        "4:16",
        "4:06",
        "4:00",
        "3:35",
        "3:59",
        "3:46",
        "4:12",
        "4:35",
        "",
        "4:08",
        "3:26",
        "3:35",
        "3:11",
        "3:48",
        "3:45"
    ],
    bazzi: ["2:46", "2:10", "3:18", "2:48", "3:52"],
    billie: [],
    benben: [],
    blg: [],
    bmth: [],
    bruno: [],
    calum: [],
    camila: [],
    charlie: [],
    chelsea: [],
    coldPlay: [],
    dabin: [],
    decemberA: [],
    diamondE: [],
    djKhaled: [],
    djSnake: [],
    drake: [],
    dubstep: [],
    edS: [],
    eminem: [],
    eraserH: [],
    fettyW: [],
    findingH: [],
    finneas: [],
    FMstatic: [],
    galantis: [],
    gorillaz: [],
    greenDay: [],
    gryffin: [],
    halsey: [],
    hillsongs: [],
    ibelong: [],
    illenium: [],
    imagineD: [],
    jasonM: [],
    jeremyZ: [],
    jessieJ: [],
    juiceWrld: [],
    justineB: [],
    justineT: [],
    kattyP: [],
    khalid: [],
    kina: [],
    kygo: [],
    ladyG: [],
    lany: [],
    lauv: [],
    lewisC: [],
    majorL: [],
    maroon: [],
    marshmello: [],
    martinG: [],
    meghanT: [],
    mikeP: [],
    mesuicidesheep: [],
    nailH: [],
    nationB: [],
    nationC: [],
    nationT: [],
    ohwonder: [],
    omfg: [],
    oneD: [],
    oneR: [],
    opms: [],
    oasis: [],
    owlCity: [],
    pink: [],
    paramore: [],
    planetShakers: [],
    postM: [],
    powfu: [],
    rihanna: [],
    ronHenley: [],
    saidTS: [],
    samSmith: [],
    shawnM: [],
    sia: [],
    silentS: [],
    simplePlan: [],
    spagH: [],
    taylorS: [],
    theChain: [],
    theFatRat: [],
    TwentyO: [],
    wizK: [],
    zayn: [],
    zedd: []
};
for (let i in durations) {
    durations[i] = durations[i].map(e => {
        if (e == "" || e == undefined) {
            return "0";
        }
        return e;
    });
}
let parentDir = {
    lofi: "Lofi List/",
    adele: "Adele xxx/",
    agsunta: "Agsunta x/",
    alan: "Alan W xx/",
    ali: "Ali G xxx/",
    avicii: "Avicii xx/",
    avril: "Avril xxx/",
    bazzi: "Bazzi xxx/",
    billie: "Bellie xx/",
    benben: "Benben xx/",
    blg: "BLG xxxxx/",
    bmth: "BMTH xxxx/",
    bruno: "Bruno M x/",
    calum: "Calum S x/",
    camila: "Camila Cx/",
    charlie: "Charlie P/",
    chelsea: "Chelsea C/",
    coldPlay: "Cold Play/",
    dabin: "Dabin xxx/",
    decemberA: "DecemberA/",
    diamondE: "Diamond E/",
    djKhaled: "Dj Khaled/",
    djSnake: "Dj Snakex/",
    drake: "Drake xxx/",
    dubstep: "Dubstep x/",
    edS: "Ed S xxxx/",
    eminem: "Eminem xx/",
    eraserH: "Eraser Hx/",
    fettyW: "Fetty W x/",
    findingH: "Finding H/",
    finneas: "Finneas x/",
    FMstatic: "FM Static/",
    galantis: "Galantisx/",
    gorillaz: "Gorillazx/",
    greenDay: "Green Day/",
    gryffin: "Gryffin x/",
    halsey: "Halsey xx/",
    hillsongs: "Hillsongs/",
    ibelong: "I Belongx/",
    illenium: "Illeniumx/",
    imagineD: "Imagine D/",
    jasonM: "Jason M x/",
    jeremyZ: "Jeremy Zx/",
    jessieJ: "Jessie Jx/",
    juiceWrld: "JuiceWRLD/",
    justineB: "Justine B/",
    justineT: "Justine T/",
    kattyP: "Katty P x/",
    khalid: "Khalid xx/",
    kina: "Kina xxxx/",
    kygo: "Kygo xxxx/",
    ladyG: "Lady G xx/",
    lany: "LANY xxxx/",
    lauv: "Lauv xxxx/",
    lewisC: "Lewis C x/",
    majorL: "Major L x/",
    maroon: "Maroon 5x/",
    marshmello: "Marshmell/",
    martinG: "Martin Gx/",
    meghanT: "Meghan Tx/",
    mikeP: "Mike P xx/",
    mesuicidesheep: "MrSuicide/",
    nailH: "Nail H xx/",
    nationB: "Nation Bx/",
    nationC: "Nation Cx/",
    nationT: "Nation Tx/",
    ohwonder: "Oh wonder/",
    omfg: "OMFG xxxx/",
    oneD: "One D xxx/",
    oneR: "One R xxx/",
    opms: "OPMS xxxx/",
    oasis: "Oasis xxx/",
    owlCity: "Owl Cityx/",
    pink: "P!nk xxxx/",
    paramore: "Paramorex/",
    planetShakers: "Planet Sx/",
    postM: "Post M xx/",
    powfu: "Powfu xxx/",
    rihanna: "Rihanna x/",
    ronHenley: "Ron Hxxxx/",
    saidTS: "Said TS x/",
    samSmith: "Sam Smith/",
    shawnM: "Shawn M x/",
    sia: "Sia xxxxx/",
    silentS: "Silent Sx/",
    simplePlan: "Simple Px/",
    spagH: "Spag H xx/",
    taylorS: "Taylor Sx/",
    theChain: "The Chain/",
    theFatRat: "TheFatRat/",
    TwentyO: "Twenty Ox/",
    wizK: "Wiz K xxx/",
    zayn: "ZAYN xxxx/",
    zedd: "Zedd xxxx/"
};
let musicString = [];
for (let i in parentDir) {
    let string_i = i.toLocaleString();
    musicString.push(musics[string_i]);
}
let musicTitleText = document.getElementsByClassName("musicTitle"),
    musicArtistText = document.getElementsByClassName("musicArtist");
let totalPercent,
    botTitle,
    botArtist,
    musicDur,
    musicCur,
    sec,
    min,
    cur_T_el,
    total_D_el,
    artist,
    artistPic = document.getElementsByClassName("artistPic")[0],
    player = document.getElementsByTagName("audio")[0],
    botPlayer = document.getElementsByClassName("bottomPlayer")[0],
    bottomPlayIcon = document.getElementsByClassName("botPlayIcon")[0],
    bottom_T = document.getElementsByClassName("songTitleBot")[0],
    bottom_A = document.getElementsByClassName("artistBot")[0],
    prev = document.getElementsByClassName("prev")[0],
    next = document.getElementsByClassName("next")[0],
    elNum,
    setPlayEvent = key => {
        fire_animations();
        elNum = parseInt(key.target.classList[1] - 1);
        return x.logMusic(elNum);
    },
    t,
    musicBars,
    musicBarLengthLocal,
    plName = document.getElementsByClassName("plName"),
    minViewContainer = document.getElementsByClassName("minViewContainer")[0],
    minimizeAction = document.getElementsByClassName("minimizeAction")[0];
class Music {
    constructor(obj) {
        // this._playlist = playlist;
        this._music = obj[0];
        this._artist = obj[1];
        this._duration = obj[2];
        this._parentDir = obj[3];
        this._musicBarLength = obj[0].length;

        this.playing = false;
    }

    appendPlaylistBars(
        container = document.getElementsByClassName("playlistBars")[0]
    ) {
        container.innerHTML = "";
        let p_B;
        musicString.map((_e, index) => {
            p_B = `<div class="_playlistBar ${index}">
                             <div class="plName">${m[index]}</div>
                             <div class="plSongCount">${musicString[index].length} songs</div>
                         </div>`;
            container.innerHTML += p_B;
        });

        // Automatically Clicks defalt selected playlist
        (function() {
            var def = document.getElementsByClassName("_playlistBar")[0];

            setTimeout(() => {
                def.click();
            }, 1000);
        })();
    }

    appendMusicBars(container, elCount = this._music.length) {
        container.innerHTML = ``;
        let els;
        container.style.gridTemplateRows = `repeat(${elCount}, auto)`;
        let classCount = 0;
        let artist;
        for (let i = 0; i < elCount; i++) {
            classCount += 1;
            artist = this._artist[i];
            // if (artist == undefined) { artist = "Unknown"; }
            artist == undefined ? "Unknown" : artist;
            els = `<div class="musicBar mb${classCount}">
                <div class="overflowController">
                    <div class="musicTitle">${this._music[i].slice(
                        0,
                        this._music[i].length - 4
                    )}</div>
                    <div class="musicArtist">${artist}</div>
                    <div class="dur">${this._duration[i]}</div>
                </div>
                <div class="iconContainer">
                    <div class="iconHolder">
                        <div class="playCon ${classCount}">
                            <img src="SVG/Play.svg" class="playIcon">
                        </div>
                        <div class="heartCon">
                            <img src="SVG/Heart - Unfilled.svg">
                        </div>
                    </div>
                </div>
            </div>`;
            container.innerHTML += els;
        }
        pBtn = [...document.getElementsByClassName("playCon")];
        pBtn.map(el => {
            el.addEventListener("click", setPlayEvent);
        });
    }
    setBottomPlayerTexts(elNum) {
        bottom_T.innerHTML = musicTitleText[elNum].textContent;
        bottom_A = musicArtistText[elNum].textContent;
        sec = 0;
        min = 0;
        cur_T_el = document.getElementsByClassName("currentDuration")[0];
        total_D_el = document.getElementsByClassName("totalDuration")[0];
        artist = document.getElementsByClassName("artistBot")[0];

        elNum == 0
            ? gs.to(".prev", {pointerEvents: "none", opacity: 0.4})
            : gs.to(".prev", {pointerEvents: "auto", opacity: 1});
        elNum == this._musicBarLength - 1
            ? gs.to(".next", {pointerEvents: "none", opacity: 0.4})
            : gs.to(".next", {pointerEvents: "auto", opacity: 1});

        this._artist[elNum] == undefined ? "Unknown" : this._artist[elNum];
        artist.innerHTML = this._artist[elNum];

        setTimeout(() => {
            total_D_el.innerHTML = /*this._duration[elNum]*/ player.duration;
        }, 500);

        cur_T_el.innerHTML = `${min}:${sec}`;

        // player.currentTime = 245;
        setTimeout(() => {
            t = setInterval(nextStep, 1000);
            musicDur = player.duration;
            function nextStep() {
                player.ended ? clearInterval(t) : null;
                musicCur = player.currentTime;
                sec = Math.round(musicCur) % 60;
                sec === 59 ? (min += 1) : sec;
                sec.toLocaleString().length == 1 ? (sec = `0${sec}`) : sec;

                totalPercent = Math.round((musicCur / musicDur) * 100);
                isNaN(totalPercent)
                    ? (totalPercent = Math.round((musicCur / musicDur) * 100))
                    : totalPercent;
                // if (isNaN(totalPercent)) { totalPercent = Math.round((musicCur / musicDur) * 100); }
                cur_T_el.innerHTML = `${min}:${sec}`;
                totalPercent = `${totalPercent}%`;
                // Move components during audio playing
                gs.to(".durationBarTimestamp", {
                    width: totalPercent,
                    duration: 0,
                    ease: Power0.easeNone
                });
                gs.to(".timestampCirc", {
                    left: totalPercent,
                    duration: 0,
                    ease: Power0.easeNone
                });
            }
        }, 400);
    }
    pauseAndPlay() {
        let playIcon = document
            .getElementsByClassName("active")[0]
            .getElementsByTagName("img")[0];

        let play = () => {
            this.playing = true;
            player.play();
            playIcon.src = "SVG/Pause.svg";
            bottomPlayIcon.src = "SVG/Pause.svg";
        };
        let pause = () => {
            this.playing = false;
            player.pause();
            playIcon.src = "SVG/Play.svg";
            bottomPlayIcon.src = "SVG/Play.svg";
        };
        this.playing == false ? play() : pause();
    }

    displayArtistPicture() {
        minViewContainer.style.backgroundImage = `url('Images/artist ${document
            .getElementsByClassName("artistBot")[0]
            .textContent.toLowerCase()}.jpg')`;

        artistPic.style.backgroundImage = `url('Images/artist ${document
            .getElementsByClassName("artistBot")[0]
            .textContent.toLowerCase()}.jpg')`;
    }

    searchCurrentMusicState() {
        // Show the bar lengths or the music length of current active playlist
        let barLength = this._musicBarLength;
        let songTitle = bottom_T.textContent;
        let cur_musicTitle = document.getElementsByClassName("musicTitle");

        let c = 0;
        for (var i of cur_musicTitle) {
            if (songTitle == i.textContent) {
                musicBars = document.getElementsByClassName("musicBar");
                pBtn[c].getElementsByClassName("playIcon")[0].src =
                    "SVG/Pause.svg";

                pBtn[c].removeEventListener("click", setPlayEvent);
                pBtn[c].addEventListener("click", this.pauseAndPlay);

                pBtn[c].classList.add(`active`);

                // For bottom Play icon only
                bottomPlayIcon.setAttribute("src", "SVG/Pause.svg");
                bottomPlayIcon.parentElement.addEventListener(
                    "click",
                    this.pauseAndPlay
                );
                break;
            }
            c += 1;
        }
    }

    logMusic(elNum) {
        player.src = `${this._parentDir + this._music[elNum]}`;

        let errOccured = () => {
            var errorTimeline = gs.timeline();
            errorTimeline.to(".errorOccured", {
                bottom: 70,
                opacity: 1,
                duration: 0.35,
                ease: Circ.easeOut
            });

            setTimeout(() => {
                errorTimeline.reverse();
                elNum += 1;
                x.logMusic(elNum);
            }, 2500);
        };
        setTimeout(() => {
            isNaN(player.duration) == true || player.duration == 0
                ? errOccured()
                : null;
        }, 3000);
        gs.to(".bottomPlayer", {
            bottom: 0,
            duration: 1.25,
            delay: 0.5,
            ease: "expo.inOut"
        });

        for (let i = 0; i < pBtn.length; i++) {
            if (i == elNum) {
                clearInterval(t);
                musicBars = document.getElementsByClassName("musicBar");
                pBtn[i].getElementsByClassName("playIcon")[0].src =
                    "SVG/Pause.svg";

                pBtn[i].removeEventListener("click", setPlayEvent);
                pBtn[i].addEventListener("click", this.pauseAndPlay);

                pBtn[i].classList.add(`active`);

                // For bottom Play icon only
                bottomPlayIcon.setAttribute("src", "SVG/Pause.svg");
                bottomPlayIcon.parentElement.addEventListener(
                    "click",
                    this.pauseAndPlay
                );

                this.setBottomPlayerTexts(elNum);
                break;
            } else {
                clearInterval(t);
                pBtn[i].getElementsByClassName("playIcon")[0].src =
                    "SVG/Play.svg";

                pBtn[i].removeEventListener("clcick", this.pauseAndPlay);
                pBtn[i].addEventListener("click", setPlayEvent);
                pBtn[i].addEventListener("click", () => {
                    clearInterval(t);
                });

                pBtn[i].classList.remove("active");
            }
        }
        this.displayArtistPicture();
    }
}

let obC = [],
    objData = {};
let dataSet = () => {
    let keys = [musics, artists, durations, parentDir],
        v = [];
    for (let i in parentDir) {
        v.push(i);
        obC.push([]);
    }

    for (let i = 0; i < obC.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            obC[i][j] = keys[j][v[i]];
        }
    }
    for (let i = 0; i < v.length; i++) {
        objData[v[i]] = obC[i];
    }
};
dataSet();
let x = new Music(objData.lofi),
    pBtn,
    b = document.querySelector(".musicBarContainer"),
    minilist = document.getElementsByClassName("miniList")[0];
x.appendMusicBars(b);
x.appendPlaylistBars();
let shuffleBtn = document.getElementById("shuffleCon"),
    loopBtn = document.getElementById("loopCon");
shuffleBtn.addEventListener("click", () => {
    if (musicStates.shuffle == true) {
        musicStates.shuffle = false;
        shuffleBtn.style.opacity = 0.45;
    } else {
        musicStates.shuffle = true;
        shuffleBtn.style.opacity = 1;
    }
});
loopBtn.addEventListener("click", () => {
    if (musicStates.loop == true) {
        musicStates.loop = false;
        loopBtn.style.opacity = 0.45;
    } else {
        musicStates.loop = true;
        loopBtn.style.opacity = 1;
    }
});
prev.addEventListener("click", () => {
    clearInterval(t);
    musicStates.shuffle
        ? (function() {
              elNum = ~~(Math.random() * musicBarLengthLocal);
              x.logMusic(elNum);
          })()
        : (function() {
              elNum -= 1;
              x.logMusic(elNum);
          })();
});
next.addEventListener("click", () => {
    clearInterval(t);
    musicStates.shuffle
        ? (function() {
              elNum = ~~(Math.random() * musicBarLengthLocal);
              x.logMusic(elNum);
          })()
        : (function() {
              elNum += 1;
              x.logMusic(elNum);
          })();
});
let _plylstB = [...document.getElementsByClassName("_playlistBar")],
    plylst_T = document.querySelector(".title"),
    title;
_plylstB.forEach((e, index) => {
    e.addEventListener("click", _k => {
        for (let i = 0; i < _plylstB.length; i++) {
            i != index
                ? gs.to(_plylstB[i], {
                      backgroundColor: "#262626",
                      color: "#F8FFf9",
                      ease: "power1.out",
                      duration: 0.075
                  })
                : gs.to(_plylstB[i], {
                      backgroundColor: "#11E84A",
                      color: "#262626",
                      ease: "power1.out",
                      duration: 0.075
                  });
        }
        b.scrollIntoView(false);
        x = new Music(objData[mList[index]]);
        x.appendMusicBars(b);
        plylst_T.innerHTML = `Playlist ~ <span class="activeTitle">${m[index]}</span>`;
        x.searchCurrentMusicState();
    });
});
/* Search */ let pWizz = [...document.getElementsByClassName("wizzards")];
pWizz.map((e, index) => {
    e.addEventListener("click", () => {
        for (let i = 0; i < pWizz.length; i++) {
            i == index
                ? gs.to(pWizz[i], {
                      height: 25,
                      backgroundColor: "#343434",
                      duration: 0.25,
                      ease: "power1.out"
                  })
                : gs.to(pWizz[i], {
                      height: 10,
                      backgroundColor: "#fff",
                      duration: 0.25,
                      ease: "power1.out"
                  });
        }
        pages[index].scrollIntoView(true);
    });
});
let pages = [...document.getElementsByClassName("wrapper")];
/* Function for appending DOM ELEMENTS (Pages) && Styling DOM ELEMENTS */ (function() {
    let titles = [
        `DESIGNED BY MICHAEL GATMAITAN`,
        `UI / UX IMPROVED`,
        `DEVELOPER`,
        `CHILL AND GET LOST WITH`
    ];
    let headers = [
        `QUARANTINE RADIO<br>MUSIC<br>APPLICATION`,
        `UI / UX DESIGN<br>A & B TESTED`,
        `UI DESIGNER /<br>FRONT-END DEVELOPER`,
        `GET LOST WITH<br>THE MUSICS OF NATURE`
    ];
    let ps = [
        `<div class="paragraph">Quarantine radio is created by Michael Gatmaitan to make people chill their mind during the Enhanced Community Quarantine due to CoViD-19.</div>`,
        `<div class="paragraph">Study shows that users spent more of their time facing screens so I've plan to improve the UI / UX Design of Quarantine Radio.</div>`,
        `<div class="paragraph">I'm mainly a Front-end Developer for 2 years and now still studying React, NodeJs, etc. I applied my skills by creating this Music App Website.</div>`,
        `<div class="cta"><button class="listen">Listen Now</button><button class="hireme">Hire me</button></div>`
    ];
    for (let i = 0; i < 4; i++) {
        let content = `<div class="content-container"><div class="title">${titles[i]}</div><div class="header">${headers[i]}</div><div class="paragraph">${ps[i]}</div></div><div class="filt"></div><div class="parallax"></div>`;
        pages[i].innerHTML = content;
    }
    let filt = [...document.getElementsByClassName("filt")],
        parallax = [...document.getElementsByClassName("parallax")],
        filtStyle = [
            "linear-gradient(135deg,rgba(236,36,111,0.32),rgba(233,233,53,0.21))",
            "rgba(38,38,38,0.15)",
            "rgba(38,38,38,0.6)",
            "rgba(38,38,38,0.15)"
        ];
    for (let i = 0; i < filt.length; i++) {
        filt[i].style.background = filtStyle[i];
        parallax[i].style.backgroundImage = `url("./Images/Page-${i +
            1}-bg-min.jpg")`;
    }
})();
/*Scroll*/ let prllxEl = [...document.getElementsByClassName("parallax")],
    contentCon = [...document.getElementsByClassName("content-container")];
prllxEl.map((e, index) => {
    let tl = new TimelineMax();
    tl.fromTo(
        e,
        {backgroundPosition: "50% 50%"},
        {backgroundPosition: "50% 80%"}
    );
    let controller = new ScrollMagic.Controller(),
        scene = new ScrollMagic.Scene({
            triggerElement: pages[index],
            triggerHook: 0,
            duration: "250%"
        })
            .setTween(tl)
            .addTo(controller);
    let tl2 = new TimelineMax();
    tl2.fromTo(
        contentCon[index],
        {translateY: 0},
        {translateY: 150, ease: "power2.out"}
    );
    let controller2 = new ScrollMagic.Controller();
    let scene2 = new ScrollMagic.Scene({
        triggerElement: pages[index],
        triggerHook: 0,
        duration: "100%"
    })
        .setTween(tl2)
        .addTo(controller2);
});
let dP = 0,
    arrEvent = k => {
        let c = k.code;
        c == "ArrowDown" || c == "ArrowRight"
            ? (dP += 1)
            : c == "ArrowUp" || c == "ArrowLeft"
            ? (dP -= 1)
            : dP;
        dP < 0 ? (dP = 0) : dP > 3 ? (dP = 3) : dP;
        pages[dP].scrollIntoView(true);
        for (let i = 0; i < pWizz.length; i++) {
            i == dP
                ? gs.to(pWizz[i], {
                      height: 25,
                      backgroundColor: "#343434",
                      duration: 0.25,
                      ease: "power1.out"
                  })
                : gs.to(pWizz[i], {
                      height: 10,
                      backgroundColor: "#fff",
                      duration: 0.25,
                      ease: "power1.out"
                  });
        }
        c == "KeyF"
            ? musicStates.shuffle == false
                ? (musicStates.shuffle = true)
                : (musicStates.shuffle = false)
            : null;
    };
document.addEventListener("keyup", arrEvent);
let wheelEvent = k => {
    let d = k.deltaY;
    d > 1 ? (dP += 1) : d < -1 ? (dP -= 1) : dP;
    dP < 0 ? (dP = 0) : dP > 3 ? (dP = 3) : dP;
    pages[dP].scrollIntoView(true);
    for (let i = 0; i < pWizz.length; i++) {
        i == dP
            ? gs.to(pWizz[i], {
                  height: 25,
                  backgroundColor: "#343434",
                  duration: 0.25,
                  ease: "power1.out"
              })
            : gs.to(pWizz[i], {
                  height: 10,
                  backgroundColor: "#fff",
                  duration: 0.25,
                  ease: "power1.out"
              });
    }
};
document.addEventListener("wheel", wheelEvent);
let showMainPlayer = () => {
    document.removeEventListener("keyup", arrEvent);
    document.removeEventListener("wheel", wheelEvent);
    document
        .getElementsByClassName("listen")[0]
        .removeEventListener("click", showMainPlayer);
    let tl = gs.timeline();
    tl.to(".transitionToPlayer", 3, {width: 100 + "vw", ease: "expo.inOut"})
        .to(".mainPlayerMainContainer", 0, {opacity: 1, pointerEvents: "all"})
        .to("nav", 0, {display: "none"})
        .to(".transitionToPlayer img", 2.5, {
            opacity: 4,
            scale: 2,
            ease: "expo.inOut"
        })
        .to(".transitionToPlayer img", 1.5, {
            opacity: 0,
            ease: "expo.in",
            delay: -1.5
        })
        .to(".transitionToPlayer", 2, {
            width: 0 + "vw",
            left: 100 + "vw",
            ease: "expo.inOut",
            delay: 1
        });
};
document
    .getElementsByClassName("listen")[0]
    .addEventListener("click", showMainPlayer);
let btmPlyrTL = gs.timeline({paused: true}),
    defEase = Expo.easeOut;
btmPlyrTL
    .to(".bottomPlayer", {
        zIndex: 70,
        top: 0,
        height: 195,
        paddingTop: "45px",
        paddingBottom: 0,
        gridTemplateColumns: "580pxauto170px",
        duration: 2.5,
        ease: defEase
    })
    .to(".artistPic", {
        width: 150,
        height: 150,
        duration: 1.8,
        ease: defEase,
        delay: -1.5
    })
    .to(".songCon", {y: -40, duration: 4, ease: defEase, delay: -1.8})
    .to(".songTitleBot", {fontSize: 34, duration: 4, ease: defEase, delay: -5})
    .to(".artistBot", {fontSize: 20, duration: 4, ease: defEase, delay: -5})
    .to(".durationContainer", {
        /*width:400,*/ translateX: -580 + 150,
        padding: 15,
        duration: 4,
        ease: defEase,
        delay: -5
    })
    .to(".durationBarContainer", {
        y: 15,
        ease: defEase,
        duration: 0.5,
        delay: -5
    });
let h = window.innerHeight,
    mnPlyrTL = gs.timeline({paused: true});
mnPlyrTL.to(".mainPlayerMainContainer", {
    bottom: 0,
    height: `${((h - 195) / h) * 100}%`,
    ease: Expo.easeOut,
    duration: 5
});
let nvgtnBrTL = gs.timeline({paused: true});
nvgtnBrTL.to("nav", {
    opacity: 0,
    pointerEvents: "none",
    ease: Expo.easeOut,
    duration: 0.1
});
function fire_animations() {
    mnPlyrTL.play();
    btmPlyrTL.play();
    nvgtnBrTL.play();
}
player.onended = () => {
    let {shuffle, loop} = musicStates;
    clearInterval(t);
    if (shuffle) {
        if (loop) {
            x.logMusic(elNum);
        } else {
            x.logMusic(~~(Math.random() * musicBarLengthLocal));
        }
    } else {
        if (loop) {
            x.logMusic(elNum);
        } else {
            elNum += 1;
            x.logMusic(elNum);
        }
    }
};
let minButton_on_Click = gs.timeline({paused: true});
minButton_on_Click.to(".minimizeAction", {
    opacity: 1,
    duration: 0.15,
    ease: "expo.out"
});
let bptlC = gs.timeline({paused: true});
bptlC
    .to(".minViewContainer", {
        height: 100 + "vh",
        duration: 1.5,
        ease: "expo.inOut"
    })
    .to(".bottomPlayer", {
        top: window.innerHeight - 195 - 45,
        backgroundColor: "rgba(38,38,38,0)",
        duration: 1.5,
        ease: "expo.inOut",
        delay: -1.5
    })
    .to(".minimizeAction", {top: 195 + 15, duration: 1.5, delay: -1.5})
    .to(".minimizeAction img", {rotate: 180, duration: 1.5, delay: -1.5});
let minDisactivated = () => {
    bptlC.reverse();
    minimizeAction.addEventListener("click", minActivated);
    minimizeAction.removeEventListener("click", minDisactivated);
};
let minActivated = () => {
    bptlC.play();
    minimizeAction.removeEventListener("click", minActivated);
    minimizeAction.addEventListener("click", minDisactivated);
};
minimizeAction.addEventListener("click", minActivated);
let playMinimizeBoxTimeline = () => minButton_on_Click.play(),
    reverseMinimizeBoxTimeline = () => minButton_on_Click.reverse();
let minimize_event_remove = () => {
    minimizeAction.removeEventListener("mouseover", playMinimizeBoxTimeline);
    minimizeAction.removeEventListener("mouseout", reverseMinimizeBoxTimeline);
    minButton_on_Click.reverse();
};
let minimize_events_add = () => {
    minimizeAction.addEventListener("mouseover", playMinimizeBoxTimeline);
    minimizeAction.addEventListener("mouseout", reverseMinimizeBoxTimeline);
};
minimize_events_add();