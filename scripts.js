document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    var button5 = document.getElementById("button5");
    var button6 = document.getElementById("button6");
    var button7 = document.getElementById("button7");
    var button8 = document.getElementById("button8");
    var button9 = document.getElementById("button9");
    var button10 = document.getElementById("button10");
    var button11 = document.getElementById("button11");
    var button12 = document.getElementById("button12");
    var button13 = document.getElementById("button13");
    var button14 = document.getElementById("button14");
    var button15 = document.getElementById("button15");
    var button16 = document.getElementById("button16");
    var button17 = document.getElementById("button17");
    var button18 = document.getElementById("button18");
    var button19 = document.getElementById("button19");
    var button20 = document.getElementById("button20");
    var button21 = document.getElementById("button21");
    var button22 = document.getElementById("button22");
    var button23 = document.getElementById("button23");
    var button24 = document.getElementById("button24");
    var button25 = document.getElementById("button25");
    var button26 = document.getElementById("button26");
    var button27 = document.getElementById("button27");

    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");
    var line5 = document.getElementById("line5");
    var line6 = document.getElementById("line6");
    var line7 = document.getElementById("line7");
    var line8 = document.getElementById("line8");
    var line9 = document.getElementById("line9");
    var line10 = document.getElementById("line10");
    var line11 = document.getElementById("line11");
    var line12 = document.getElementById("line12");
    var line13 = document.getElementById("line13");
    var line14 = document.getElementById("line14");

    var para1 = document.getElementById("para1");
    var para2 = document.getElementById("para2");
    var para3 = document.getElementById("para3");
    var para4 = document.getElementById("para4");
    var para5 = document.getElementById("para5");
    var para6 = document.getElementById("para6");
    var para7 = document.getElementById("para7");
    var para8 = document.getElementById("para8");
    var para9 = document.getElementById("para9");
    var para10 = document.getElementById("para10");
    var para11 = document.getElementById("para11");
    var para12 = document.getElementById("para12");
    var para13 = document.getElementById("para13");
    var para14 = document.getElementById("para14");
    var para15 = document.getElementById("para15");
    var para16 = document.getElementById("para16");
    var para17 = document.getElementById("para17");
    var para18 = document.getElementById("para18");
    var para19 = document.getElementById("para19");
    var para20 = document.getElementById("para20");
    var para21 = document.getElementById("para21");
    var para22 = document.getElementById("para22");
    var para23 = document.getElementById("para23");
    var para24 = document.getElementById("para24");
    var para25 = document.getElementById("para25");
    var para26 = document.getElementById("para26");
    var para27 = document.getElementById("para27");

    var button_container1 = document.getElementById("button_container1");
    var button_container2 = document.getElementById("button_container2");
    var button_container3 = document.getElementById("button_container3");
    var button_container4 = document.getElementById("button_container4");
    var button_container5 = document.getElementById("button_container5");
    var button_container6 = document.getElementById("button_container6");
    var button_container7 = document.getElementById("button_container7");
    var button_container8 = document.getElementById("button_container8");
    var button_container9 = document.getElementById("button_container9");
    var button_container10 = document.getElementById("button_container10");
    var button_container11 = document.getElementById("button_container11");
    var button_container12 = document.getElementById("button_container12");
    var button_container13 = document.getElementById("button_container13");

    const para2_option1 = `. . . and I hung up the phone. Immediately I recollected the voice that had spoken in German. It was that of Captain Richard Madden. Madden, in Viktor Runeberg's office, meant the end of all our work and - though this seemed a secondary matter, or should have seemed so to me - of our lives also. His being there meant that Runeberg had been arrested or murdered. Before the sun set on this same day, I ran the same risk. Madden was implacable. Rather, to be more accurate, he was obliged to be implacable. An Irishman in the service of England, a man suspected of equivocal feelings if not of actual treachery, how could he fail to welcome and seize upon this extraordinary piece of luck: the discovery, capture and perhaps the deaths of two agents of Imperial Germany?`
    const para2_option2 = `I went up to my bedroom. Absurd though the gesture was, I closed and locked the door. I threw myself down on my narrow iron bed, and waited on my back. The never changing rooftops filled the window, and the hazy six o'clock sun hung in the sky. It seemed incredible that this day, a day without warnings or omens, might be that of my implacable death. In despite of my dead father, in despite of having been a child in one of the symmetrical gardens of Hai Feng, was I to die now?`
    const para4_option1 = `In the midst of my hatred and terror (now that it no longer matters to me to speak of terror, now that I have outwitted Richard Madden, now that my neck hankers for the hangman's noose), I knew that the fast-moving and doubtless happy soldier did not suspect that I possessed the Secret - the name of the exact site of the new British artillery park on the Ancre. A bird streaked across the misty sky and, absently, I turned it into an airplane and then that airplane into many in the skies of France, shattering the artillery park under a rain of bombs. If only my mouth, before it should be silenced by a bullet, could shout this name in such a way that it could be heard in Germany... My voice, my human voice, was weak. How could it reach the ear of the Chief? The ear of that sick and hateful man who knew nothing of Runeberg or of me except that we were in Staffordshire. A man who, sitting in his arid Berlin office, leafed infinitely through newspapers, looking in vain for news from us. I said aloud, "I must flee."`
    const para4_option2 = `I sat up on the bed, in senseless and perfect silence, as if Madden was already peering at me. Something - perhaps merely a desire to prove my total penury to myself - made me empty out my pockets. I found just what I knew I was going to find. The American watch, the nickel-plated chain and the square coin, the key ring with the useless but compromising keys to Runeberg's office, the notebook, a letter which I decided to destroy at once (and which I did not destroy), a five shilling piece, two single shillings and some pennies, a red and blue pencil, a handkerchief - and a revolver with a single bullet. Absurdly I held it and weighed it in my hand, to give myself courage. Vaguely I thought that a pistol shot can be heard for a great distance.`
    const para6_option1 = `I am a timorous man. I can say it now, now that I have brought my incredibly risky plan to an end. It was not easy to bring about, and I know that its execution was terrible. I did not do it for Germany - no! Such a barbarous country is of no importance to me, particularly since it had degraded me by making me become a spy. Furthermore, I knew an Englishman - a modest man - who, for me, is as great as Goethe. I did not speak with him for more than an hour, but during that time, he was Goethe.`
    const para6_option2 = `I carried out my plan because I felt the Chief had some fear of those of my race, of those uncountable forebears whose culmination lies in me. I wished to prove to him that a yellow man could save his armies. Besides, I had to escape the Captain. His hands and voice could, at any moment, knock and beckon at my door.`
    const para8_option1 = `From utter terror I passed into a state of almost abject happiness. I told myself that the duel had already started and that I had won the first encounter by besting my adversary in his first attack - even if it was only for forty minutes - by an accident of fate. I argued that so small a victory prefigured a total victory. I argued that it was not so trivial, that were it not for the precious accident of the train schedule, I would be in prison or dead. I argued, with no less sophism, that my timorous happiness was proof that I was man enough to bring this adventure to a successful conclusion. From my weakness I drew strength that never left me.`
    const para8_option2 = `I foresee that man will resign himself each day to new abominations, that soon only soldiers and bandits will be left. To them I offer this advice: Whosoever would undertake some atrocious enterprise should act as if it were already accomplished, should impose upon himself a future as irrevocable as the past. Thus I proceeded, while with the eyes of a man already dead, I contemplated the fluctuations of the day which would probably be my last, and watched the diffuse coming of night.`
    const para10_option1 = `A lamp lit the platform, but the children's faces remained in a shadow. One of them asked me: "Are you going to Dr. Stephen Albert's house?" Without waiting for my answer, another said: "The house is a good distance away but you won't get lost if you take the road to the left and bear to the left at every crossroad." I threw them a coin (my last), went down some stone steps and started along a deserted road. At a slight incline, the road ran downhill. It was a plain dirt way, and overhead the branches of trees intermingled, while a round moon hung low in the sky as if to keep me company.`
    const para10_option2 = `For a moment I thought that Richard Madden might in some way have divined my desperate intent. At once I realized that this would be impossible. The advice about turning always to the left reminded me that such was the common formula for finding the central courtyard of certain labyrinths. I know something about labyrinths. Not for nothing am I the greatgrandson of Ts'ui Pen. He was Governor of Yunnan and gave up temporal power to write a novel with more characters than there are in the Hung Lou Meng, and to create a maze in which all men would lose themselves. He spent thirteen years on these oddly assorted tasks before he was assassinated by a stranger. His novel had no sense to it and nobody ever found his labyrinth. `
    const para12_option1 = `Under the trees of England I meditated on this lost and perhaps mythical labyrinth. I imagined it untouched and perfect on the secret summit of some mountain; I imagined it drowned under rice paddies or beneath the sea; I imagined it infinite, made not only of eight-sided pavilions and of twisting paths but also of rivers, provinces and kingdoms ... I thought of a maze of mazes, of a sinuous, ever growing maze which would take in both past and future and would somehow involve the stars. `
    const para12_option2 = `Lost in these imaginary illusions I forgot my destiny - that of the hunted. For an undetermined period of time I felt myself cut off from the world, an abstract spectator. The hazy and murmuring countryside, the moon, the decline of the evening, stirred within me. Going down the gently sloping road I could not feel fatigue. The evening was at once intimate and infinite.`
    const para14_option1 = `The damp path zigzagged like those of my childhood. When we reached the house, we went into a library filled with books from both East and West. I recognized some large volumes bound in yellow silk-manuscripts of the Lost Encyclopedia which was edited by the Third Emperor of the Luminous Dynasty. They had never been printed. A phonograph record was spinning near a bronze phoenix. I remember also a rose-glazed jar and yet another, older by many centuries, of that blue color which our potters copied from the Persians...`
    const para14_option2 = `Stephen Albert was watching me with a smile on his face. He was, as I have said, remarkably tall. His face was deeply lined and he had gray eyes and a gray beard. There was about him something of the priest, and something of the sailor. Later, he told me he had been a missionary in Tientsin before he "had aspired to become a Sinologist."`
    const para16_option1 = `"A strange destiny," said Stephen Albert, "that of Ts'ui Pen - Governor of his native province, learned in astronomy, in astrology and tireless in the interpretation of the canonical books, a chess player, a famous poet and a calligrapher. Yet he abandoned all to make a book and a labyrinth. He gave up all the pleasures of oppression, justice, of a well-stocked bed, of banquets, and even of erudition, and shut himself up in the Pavilion of the Limpid Sun for thirteen years. At his death, his heirs found only a mess of manuscripts. The family, as you doubtless know, wished to consign them to the fire, but the executor of the estate - a Taoist or a Buddhist monk - insisted on their publication."`
    const para16_option2 = `"Those of the blood of Ts'ui Pen," I replied, "still curse the memory of that monk. Such a publication was madness. The book is a shapeless mass of contradictory rough drafts. I examined it once upon a time: the hero dies in the third chapter, while in the fourth he is alive. As for that other enterprise of Ts'ui Pen ... his Labyrinth..."`
    const para18_option1 = `Albert rose. For a few moments he turned his back to me. He opened the top drawer in the high black and gilded writing cabinet. He returned holding in his hand a piece of paper which had once been crimson but which had faded with the passage of time: it was rose colored, tenuous, quadrangular. Ts'ui Pen's calligraphy was justly famous. Eagerly, but without understanding, I read the words which a man of my own blood had written with a small brush: "I leave to various future times, but not to all, my garden of forking paths."`
    const para18_option2 = `I handed back the sheet of paper in silence. Albert went on: "Before I discovered this letter, I kept asking myself how a book could be infinite. I could not imagine any other than a cyclic volume, circular. A volume whose last page would be the same as the first and so have the possibility of continuing indefinitely. I recalled, too, the night in the middle of The Thousand and One Nights when Queen Scheherezade, through a magical mistake on the part of her copyist, started to tell the story of The Thousand and One Nights, with the risk of again arriving at the night upon which she will relate it, and thus on to infinity. I also imagined a Platonic hereditary work, passed on from father to son, to which each individual would add a new chapter or correct, with pious care, the work of his elders.`
    const para20_option1 = `"Naturally, my attention was caught by the sentence, 'I leave to various future times, but not to all, my garden of forking paths: I had no sooner read this, than I understood. The Garden of Forking Paths was the chaotic novel itself. The phrase 'to various future times, but not to all' suggested the image of bifurcating in time, not in space. Rereading the whole work confirmed this theory. In all fiction, when a man is faced with alternatives he chooses one at the expense of the others. In the almost unfathomable Ts'ui Pen, he chooses - simultaneously - all of them. He thus creates various futures, various times which start others that will in their turn branch out and bifurcate in other times. This is the cause of the contradictions in the novel.`
    const para20_option2 = `"Fang, let us say, has a secret. A stranger knocks at his door. Fang makes up his mind to kill him. Naturally there are various possible outcomes. Fang can kill the intruder, the intruder can kill Fang, both can be saved, both can die and so on and so on. In Ts'ui Pen's work, all the possible solutions occur, each one being the point of departure for other bifurcations. Sometimes the pathways of this labyrinth converge. For example, you come to this house; but in other possible pasts you are my enemy; in others my friend.`
    const para22_option1 = `With proper veneration I listened to these old tales, although perhaps with less admiration for them in themselves than for the fact that they had been thought out by one of my own blood, and that a man of a distant empire had given them back to me, in the last stage of a desperate adventure, on a Western island. I remember the final words, repeated at the end of each version like a secret command: "Thus the heroes fought, with tranquil heart and bloody sword. They were resigned to killing and to dying."`
    const para22_option2 = `At that moment I felt within me and around me something invisible and intangible pullulating. It was not the pullulation of two divergent, parallel, and finally converging armies, but an agitation more inaccessible, more intimate, prefigured by them in some way. Stephen Albert continued: "I do not think that your illustrious ancestor toyed idly with variations. I do not find it believable that he would waste thirteen years laboring over a never ending experiment in rhetoric. In your country the novel is an inferior genre; in Ts'ui Pen's period, it was a despised one. Ts'ui Pen was a fine novelist but he was also a man of letters who, doubtless, considered himself more than a mere novelist. The testimony of his contemporaries attests to this, and certainly the known facts of his life confirm his leanings toward the metaphysical and the mystical. Philosophical conjectures take up the greater part of his novel. I know that of all problems, none disquieted him more, and none concerned him more than the profound one of time. Now then, this is the only problem that does not figure in the pages of The Garden. He does not even use the word which means time. How can these voluntary omissions be explained?" `
    const para24_option1 = `"Precisely," said Albert. "The Garden of Forking Paths is an enormous guessing game, or parable, in which the subject is time. The rules of the game forbid the use of the word itself. To eliminate a word completely, to refer to it by means of inept phrases and obvious paraphrases, is perhaps the best way of drawing attention to it. This, then, is the tortuous method of approach preferred by the oblique Ts'ui Pen in every meandering of his interminable novel. I have gone over hundreds of manuscripts, I have corrected errors introduced by careless copyists, I have worked out the plan from this chaos, I have restored, or believe I have restored, the original. I have translated the whole work. I can state categorically that not once has the word time been used in the whole book.`
    const para24_option2 = `"The explanation is obvious. The Garden of Forking Paths is a picture, incomplete yet not false, of the universe such as Ts'ui Pen conceived it to be. Differing from Newton and Schopenhauer, your ancestor did not think of time as absolute and uniform. He believed in an infinite series of times, in a dizzily growing, ever spreading network of diverging, converging and parallel times. This web of time - the strands of which approach one another, bifurcate, intersect or ignore each other through the centuries - embraces every possibility. We do not exist in most of them. In some you exist and not I, while in others I do, and you do not, and in yet others both of us exist. In this one, in which chance has favored me, you have come to my gate. In another, you, crossing the garden, have found me dead. In yet another, I say these very same words, but am an error, a phantom."`
    const para26_option1 = `Once again I sensed the pullulation of which I have already spoken. It seemed to me that the dew-damp garden surrounding the house was infinitely saturated with invisible people. All were Albert and myself, secretive, busy and multiform in other dimensions of time. I lifted my eyes and the short nightmare disappeared. In the black and yellow garden there was only a single man, but this man was as strong as a statue and this man was walking up the path and he was Captain Richard Madden. "The future exists now," I replied. "But I am your friend. Can I take another look at the letter?"`
    const para26_option2 = `Albert rose from his seat. He stood up tall as he opened the top drawer of the high writing cabinet. For a moment his back was again turned to me. I had the revolver ready. I fired with the utmost care: Albert fell without a murmur, at once. I swear that his death was instantaneous, as if he had been struck by lightning.`

    document.body.style.opacity=`1`;
    
    button1.addEventListener("click", function() {
        para1.style.display = "block"
        button_container1.style.display = "flex"
        button1.style.display = "none"
        line1.style.display = "block"
    });

    button2.addEventListener("click", function() {
        
            para2.style.display = "block"
            
            let center = document.getElementById("center1")
            let right = document.getElementById("right1")
            
            center.innerHTML = para2_option1;
            right.innerHTML = para2_option2;

            button_container1.style.display = "none"

            para3.style.display = "block"
            button_container2.style.display = "flex"
            line2.style.display = "block"
    });

    button3.addEventListener("click", function() {
        
            para2.style.display = "block"
        
            let left = document.getElementById("left1")
            let center = document.getElementById("center1")
            
            left.innerHTML = para2_option1;
            center.innerHTML = para2_option2;
            
            button_container1.style.display = "none"

            para3.style.display = "block"
            button_container2.style.display = "flex"
            line2.style.display = "block"
    });

    button4.addEventListener("click", function() {
        
        para4.style.display = "block"
            
        let center = document.getElementById("center2")
        let right = document.getElementById("right2")
        
        center.innerHTML = para4_option1;
        right.innerHTML = para4_option2;

        button_container2.style.display = "none"

        para5.style.display = "block"
        button_container3.style.display = "flex"
        line3.style.display = "block"
    });

    button5.addEventListener("click", function() {
        
        para4.style.display = "block"
            
        let left = document.getElementById("left2")
        let center = document.getElementById("center2")
        
        left.innerHTML = para4_option1;
        center.innerHTML = para4_option2;

        button_container2.style.display = "none"

        para5.style.display = "block"
        button_container3.style.display = "flex"
        line3.style.display = "block"
    });
    
    button6.addEventListener("click", function() {
        
        para6.style.display = "block"
            
        let center = document.getElementById("center3")
        let right = document.getElementById("right3")
        
        center.innerHTML = para6_option1;
        right.innerHTML = para6_option2;

        para7.style.display = "block"
        button_container3.style.display = "none"
        button_container4.style.display = "flex"
        line4.style.display = "block"
    });

    button7.addEventListener("click", function() {
        
        para6.style.display = "block"
            
        let left = document.getElementById("left3")
        let center = document.getElementById("center3")
        
        left.innerHTML = para6_option1;
        center.innerHTML = para6_option2;

        para7.style.display = "block"
        button_container3.style.display = "none"
        button_container4.style.display = "flex"
        line4.style.display = "block"
    });

    button8.addEventListener("click", function() {
        
        para8.style.display = "block"
            
        let center = document.getElementById("center4")
        let right = document.getElementById("right4")
        
        center.innerHTML = para8_option1;
        right.innerHTML = para8_option2;

        button_container4.style.display = "none"
        para9.style.display = "block"
        button_container5.style.display = "flex"
        line5.style.display = "block"
    });

    button9.addEventListener("click", function() {
        
        para8.style.display = "block"
            
        let left = document.getElementById("left4")
        let center = document.getElementById("center4")
        
        left.innerHTML = para8_option1;
        center.innerHTML = para8_option2;

        button_container4.style.display = "none"
        para9.style.display = "block"
        button_container5.style.display = "flex"
        line5.style.display = "block"
    });
    
    button10.addEventListener("click", function() {
        
        para10.style.display = "block"
            
        let center = document.getElementById("center5")
        let right = document.getElementById("right5")
        
        center.innerHTML = para10_option1;
        right.innerHTML = para10_option2;

        button_container5.style.display = "none"
        para11.style.display = "block"
        button_container6.style.display = "flex"
        line6.style.display = "block"
    });

    button11.addEventListener("click", function() {
        
        para10.style.display = "block"
            
        let left = document.getElementById("left5")
        let center = document.getElementById("center5")
        
        left.innerHTML = para10_option1;
        center.innerHTML = para10_option2;

        button_container5.style.display = "none"
        para11.style.display = "block"
        button_container6.style.display = "flex"
        line6.style.display = "block"
    });

    button12.addEventListener("click", function() {
        
        para12.style.display = "block"
            
        let center = document.getElementById("center6")
        let right = document.getElementById("right6")
        
        center.innerHTML = para12_option1;
        right.innerHTML = para12_option2;

        button_container6.style.display = "none"
        para13.style.display = "block"
        button_container7.style.display = "flex"
        line7.style.display = "block"
    });

    button13.addEventListener("click", function() {
        
        para12.style.display = "block"
            
        let left = document.getElementById("left6")
        let center = document.getElementById("center6")
        
        left.innerHTML = para12_option1;
        center.innerHTML = para12_option2;

        button_container6.style.display = "none"
        para13.style.display = "block"
        button_container7.style.display = "flex"
        line7.style.display = "block"
    });

    button14.addEventListener("click", function() {
        
        para14.style.display = "block"
            
        let center = document.getElementById("center7")
        let right = document.getElementById("right7")
        
        center.innerHTML = para14_option1;
        right.innerHTML = para14_option2;

        button_container7.style.display = "none"
        para15.style.display = "block"
        button_container8.style.display = "flex"
        line8.style.display = "block"
    });

    button15.addEventListener("click", function() {
        
        para14.style.display = "block"
            
        let left = document.getElementById("left7")
        let center = document.getElementById("center7")
        
        left.innerHTML = para14_option1;
        center.innerHTML = para14_option2;

        button_container7.style.display = "none"
        para15.style.display = "block"
        button_container8.style.display = "flex"
        line8.style.display = "block"
    });

    button16.addEventListener("click", function() {
        
        para16.style.display = "block"
            
        let center = document.getElementById("center8")
        let right = document.getElementById("right8")
        
        center.innerHTML = para16_option1;
        right.innerHTML = para16_option2;

        button_container8.style.display = "none"
        para17.style.display = "block"
        button_container9.style.display = "flex"
        line9.style.display = "block"
    });

    button17.addEventListener("click", function() {
        
        para16.style.display = "block"
            
        let left = document.getElementById("left8")
        let center = document.getElementById("center8")
        
        left.innerHTML = para16_option1;
        center.innerHTML = para16_option2;

        button_container8.style.display = "none"
        para17.style.display = "block"
        button_container9.style.display = "flex"
        line9.style.display = "block"
    });

    button18.addEventListener("click", function() {
        
        para18.style.display = "block"
            
        let center = document.getElementById("center9")
        let right = document.getElementById("right9")
        
        center.innerHTML = para18_option1;
        right.innerHTML = para18_option2;

        button_container9.style.display = "none"
        para19.style.display = "block"
        button_container10.style.display = "flex"
        line10.style.display = "block"
    });

    button19.addEventListener("click", function() {
        
        para18.style.display = "block"
            
        let left = document.getElementById("left9")
        let center = document.getElementById("center9")
        
        left.innerHTML = para18_option1;
        center.innerHTML = para18_option2;

        button_container9.style.display = "none"
        para19.style.display = "block"
        button_container10.style.display = "flex"
        line10.style.display = "block"
    });

    button20.addEventListener("click", function() {
        
        para20.style.display = "block"
            
        let center = document.getElementById("center10")
        let right = document.getElementById("right10")
        
        center.innerHTML = para20_option1;
        right.innerHTML = para20_option2;

        button_container10.style.display = "none"
        para21.style.display = "block"
        button_container11.style.display = "flex"
        line11.style.display = "block"
    });

    button21.addEventListener("click", function() {
        
        para20.style.display = "block"
            
        let left = document.getElementById("left10")
        let center = document.getElementById("center10")
        
        left.innerHTML = para20_option1;
        center.innerHTML = para20_option2;

        button_container10.style.display = "none"
        para21.style.display = "block"
        button_container11.style.display = "flex"
        line11.style.display = "block"
    });

    button22.addEventListener("click", function() {
        
        para22.style.display = "block"
            
        let center = document.getElementById("center11")
        let right = document.getElementById("right11")
        
        center.innerHTML = para22_option1;
        right.innerHTML = para22_option2;

        button_container11.style.display = "none"
        para23.style.display = "block"
        button_container12.style.display = "flex"
        line12.style.display = "block"
    });

    button23.addEventListener("click", function() {
        
        para22.style.display = "block"
            
        let left = document.getElementById("left11")
        let center = document.getElementById("center11")
        
        left.innerHTML = para22_option1;
        center.innerHTML = para22_option2;

        button_container11.style.display = "none"
        para23.style.display = "block"
        button_container12.style.display = "flex"
        line12.style.display = "block"
    });

    button24.addEventListener("click", function() {
        
        para24.style.display = "block"
            
        let center = document.getElementById("center12")
        let right = document.getElementById("right12")
        
        center.innerHTML = para24_option1;
        right.innerHTML = para24_option2;

        button_container12.style.display = "none"
        para25.style.display = "block"
        button_container13.style.display = "flex"
        line13.style.display = "block"
    });

    button25.addEventListener("click", function() {
        
        para24.style.display = "block"
            
        let left = document.getElementById("left12")
        let center = document.getElementById("center12")
        
        left.innerHTML = para24_option1;
        center.innerHTML = para24_option2;

        button_container12.style.display = "none"
        para25.style.display = "block"
        button_container13.style.display = "flex"
        line13.style.display = "block"
    });

    button26.addEventListener("click", function() {
        
        para26.style.display = "block"
            
        let center = document.getElementById("center13")
        let right = document.getElementById("right13")
        
        center.innerHTML = para26_option1;
        right.innerHTML = para26_option2;

        button_container13.style.display = "none"
        para27.style.display = "block"
        line14.style.display = "block"
    });

    button27.addEventListener("click", function() {
        
        para26.style.display = "block"
            
        let left = document.getElementById("left13")
        let center = document.getElementById("center13")
        
        left.innerHTML = para26_option1;
        center.innerHTML = para26_option2;

        button_container13.style.display = "none"
        para27.style.display = "block"
        line14.style.display = "block"
    });
});