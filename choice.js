export function choice(element) {
    const edu = element.querySelector('#education');
    let shownE = null;
    const workExp = element.querySelector('#workExp');
    let shownW = null;
    const skills = element.querySelector('#skills')
    let shownS = null;
    const interests = element.querySelector('#interests')
    let shownI = null;
    const about = element.querySelector('#about')
    let shownA = null;

    edu.addEventListener('click', (e) => {
        console.log('Yo');
        e.preventDefault();
        var msg = document.getElementById("education")
        if(shownE === true){
            msg.textContent = 'Education';
            shownE = false;
            return;
        }
        msg.textContent = `**Education**

        *School of Aquatic Mysteries*
        - Location: Crystal Depths, Aqualoria
        - Degree Earned: Master of Water Magic
        - Graduation Date: Year 370
        
        *Relevant Coursework*
        - Advanced Hydrotherapy Techniques
        - Elemental Healing Rituals
        - Aquatic Anatomy and Physiology
        - Emotional Resonance in Healing Magic
        
        *Thesis*
        - Title: "The Synergy of Water and Emotion: Unlocking the Healing Potential of Empathy"
        - Summary: Explored the profound connection between water magic and emotional empathy, demonstrating how the two synergize to enhance the effectiveness of healing spells.
        
        *Apprenticeship*
        - Master Healer: Nereus Thalasson
        - Duration: 15 years, Year 370 - 385
        - Description: Underwent an intensive apprenticeship with a highly skilled healer to refine practical healing skills and gain real-world experience in the Aquatic Sanctum.
        
        *Accolades*
        - Award for Excellence in Water Magic Research, Year 390
        - Commendation for Outstanding Dedication to Healing Arts, Year 368
        
        *Continuing Education*
        - Regularly attend conferences and seminars to stay updated on the latest developments in water magic and healing techniques.`
        shownE = true;
    })
    workExp.addEventListener('click', (e) => {
        console.log('Wo');
        e.preventDefault();
        var msg = document.getElementById("workExp")
        if(shownW === true){
            msg.textContent = 'Work Experience';
            shownW = false;
            return;
        }
        msg.textContent = `**Work Experience**

        *Healing Mage*
        - *Aquatic Sanctum, Crystal Depths, Aqualoria*
        - *Duration: Year 385 - Present*
        
        **Key Responsibilities and Achievements:**
        
        - Administered a wide range of water-based healing spells and therapies to individuals and aquatic creatures in need, effectively treating injuries, illnesses, and emotional distress.
        
        - Developed and implemented personalized healing plans for patients, tailoring treatment approaches to their unique needs and conditions.
        
        - Collaborated with a team of skilled healers to provide comprehensive care within the Aquatic Sanctum, fostering a supportive and nurturing environment for both patients and fellow healers.
        
        - Conducted research and experiments to expand my knowledge of water magic, leading to the development of innovative healing techniques and the publication of research findings in renowned aquatic journals.
        
        - Offered guidance and mentorship to aspiring water magic practitioners, imparting knowledge and fostering their growth in the healing arts.
        
        - Demonstrated exceptional empathy and compassion in every healing session, ensuring patients felt heard, understood, and comforted throughout their recovery process.
        
        - Participated in community outreach programs, providing healing services to underserved areas of Aqualoria and promoting the importance of emotional well-being alongside physical health.
        
        *Healer's Apprentice*
        - *Aquatic Sanctum, Crystal Depths, Aqualoria*
        - *Duration: Year 370 - 385*
        
        **Key Responsibilities and Achievements:**
        
        - Underwent rigorous training and mentorship under the guidance of a Master Healer, gaining practical experience in the art of water magic and healing techniques.
        
        - Assisted in the care of patients by preparing healing chambers, collecting essential herbs and crystals, and providing emotional support during their healing journey.
        
        - Conducted research projects in collaboration with senior healers, contributing to the development of new healing spells and therapies.
        
        - Honed my understanding of aquatic anatomy and physiology, deepening my knowledge of the intricate connection between water magic and the physical and emotional well-being of our aquatic community.
        `
        shownW = true;
    })
    skills.addEventListener('click', (e) => {
        console.log('Bo');
        e.preventDefault();
        var msg = document.getElementById("skills")
        if(shownS === true){
            msg.textContent = 'Skills';
            shownS = false;
            return;
        }
        msg.textContent = `**Skills**

        *Water Magic Mastery:*
        - Proficient in a wide range of water-based spells and rituals, including hydrotherapy, cleansing rituals, and emotional healing techniques.
        - Exceptional ability to harness the power of water magic for healing purposes, with a deep understanding of its nuances and subtleties.
        
        *Empathy and Compassion:*
        - Innate capacity for empathizing with patients and understanding their emotional and physical needs during the healing process.
        - Skilled in providing emotional support and fostering a sense of comfort and security in those under my care.
        
        *Healing Expertise:*
        - Experienced in diagnosing and treating a variety of injuries, illnesses, and emotional distress through the application of water magic.
        - Proficient in developing personalized healing plans tailored to individual patient needs.
        
        *Collaborative Teamwork:*
        - Adept at working within a team of skilled healers to provide comprehensive and holistic care to patients within the Aquatic Sanctum.
        - Effective communication and cooperation skills in a healing environment.
        
        *Research and Innovation:*
        - Strong research background in water magic and healing arts, with a track record of contributing to the development of new healing techniques and spells.
        - Publication of research findings in renowned aquatic journals.
        
        *Teaching and Mentorship:*
        - Skilled in imparting knowledge and providing guidance to aspiring water magic practitioners, nurturing their growth in the healing arts.
        - Effective communication of complex magical concepts to students.
        
        *Community Outreach:*
        - Experience in participating in community outreach programs, delivering healing services to underserved areas and promoting holistic well-being.
        - Strong advocacy for the importance of emotional well-being alongside physical health.
        
        *Emotional Resonance:*
        - Ability to establish a profound emotional connection with patients, facilitating faster and more effective healing.
        - Utilization of emotional resonance to enhance the impact of healing spells.
        
        *Adaptability:*
        - Quick to adapt to the changing needs of patients and the Aquatic Sanctum, ensuring the best possible care in all circumstances.
        - Openness to learning and integrating new healing techniques into practice.
        
        *Attention to Detail:*
        - Meticulous in the preparation and execution of healing rituals and spells, ensuring precision and effectiveness in every session.
        - Careful assessment and documentation of patient progress and treatment plans.
        
        *Communication:*
        - Effective communication skills, both verbal and non-verbal, to convey comfort and reassurance to patients.
        - Clear and concise explanation of healing procedures and treatment options to patients and their families.
        
        *Magical Crystal Communication:*
        - Proficient in using magical crystals for communication, enabling swift contact with patients and colleagues in distant locations within Aqualoria.
        
        *Languages:*
        - Fluent in Aquatic, the primary language of Aqualoria.
        - Proficient in Common Tongue for communication with land-dwelling visitors and colleagues.`
        shownS = true;
    })
    interests.addEventListener('click', (e) => {
        const aquaEco = element.querySelector('#aquaEco');
        let shownAE = null;
        const mystArte = element.querySelector('#mystArte');
        let shownMA = null;
        const holiHeal = element.querySelector('#holiHeal');
        let shownHH = null;
        const magiFlo = element.querySelector('#magiFlo');
        let shownMF = null;
        const aquaMus = element.querySelector('#aquaMus');
        let shownAM = null;
        const explore = element.querySelector('#explore');
        let shownEe = null;
        const teaMent = element.querySelector('#teaMent');
        let shownTM = null;
        const ancLore = element.querySelector('#ancLore');
        let shownAL = null;
        const cryEnch = element.querySelector('#cryEnch');
        let shownCE = null;
        const corCons = element.querySelector('#corCons');
        let shownCC = null;


        console.log('Mo');
        e.preventDefault();
        var msg = document.getElementById("interests")
        if(shownI === true){
            msg.textContent = 'Interests';
            document.getElementById('interestsRM').style.display = 'none';
            shownI = false;
            return;
        }
        document.getElementById('interestsRM').style.display = 'block';
        msg.textContent = `**Interests**

        1. **Aquatic Ecology:** Passionate about understanding the delicate balance of aquatic ecosystems and how they relate to the well-being of all underwater creatures.
        
        2. **Mystical Artefacts:** Enthusiastic collector of mystical artifacts, particularly those with water-related properties, and their historical significance in Aqualoria.
        
        3. **Holistic Healing:** Devoted to exploring holistic approaches to healing, including the integration of emotional well-being with physical health.
        
        4. **Magical Flora:** Fascinated by the unique flora of Aqualoria and its potential for use in healing potions and rituals.
        
        5. **Aquatic Music:** Enjoyment of the melodic sounds of underwater life, including the enchanting songs of merfolk and the harmonious rhythms of the deep.
        
        6. **Exploration:** Keen interest in exploring uncharted depths and discovering hidden wonders within Aqualoria's vast underwater world.
        
        7. **Teaching and Mentorship:** Passionate about nurturing the talents of aspiring water mages and healers, and fostering a sense of community within the Aquatic Sanctum.
        
        8. **Ancient Lore:** Enjoys delving into the ancient legends and lore of Aqualoria, seeking wisdom and inspiration from the past.
        
        9. **Crystal Enchantment:** Intrigued by the enchanting properties of magical crystals and their potential for communication and healing.
        
        10. **Coral Reef Conservation:** Advocates for the preservation of Aqualoria's stunning coral reefs and actively supports efforts to protect these vital ecosystems.`
        shownI = true;
        
        aquaEco.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("aquaEco")
            if(shownAE === true){
                msg.textContent = 'Aquatic Ecology';
                shownAE = false;
                return;
            }
            msg.textContent = `**Interest in Aquatic Ecology**

            My fascination with aquatic ecology is not merely a passing interest; it is a deep-seated passion that has shaped my understanding of the intricate web of life in Aqualoria's underwater realm. The oceans and waterways of our fantastical world are not just bodies of water but thriving ecosystems teeming with diversity and interconnectedness. Here is a more in-depth exploration of my interest in aquatic ecology:
            
            **Ecological Awareness:** I am acutely aware of the delicate balance that exists within Aqualoria's aquatic ecosystems. From the shimmering kelp forests to the bustling coral reefs, each corner of our world plays a vital role in sustaining life. My interest lies in understanding the intricate relationships between different species, the cycles of life and death, and the impact of environmental changes on our underwater home.
            
            **Biodiversity:** Aqualoria is home to an astonishing array of aquatic creatures, each uniquely adapted to its environment. My fascination with aquatic ecology extends to the study of this biodiversity. I have dedicated time to observe and document the behaviors and habitats of various species, from the graceful merfolk to the elusive deep-sea denizens. This knowledge aids me in both my healing practice and my advocacy for conservation.
            
            **Ecosystem Health:** Just as I strive to maintain the well-being of individual patients, I am equally committed to the health of entire aquatic ecosystems. I recognize that disturbances, whether natural or caused by external factors, can disrupt the harmony of these environments. Through my understanding of aquatic ecology, I actively support initiatives to preserve and restore damaged habitats, ensuring that the interconnected web of life remains intact.
            
            **Holistic Healing Philosophy:** My interest in aquatic ecology has deeply influenced my approach to healing. I view my patients not in isolation but as integral parts of their ecosystems. Healing a single individual is like mending a thread in the intricate tapestry of life. By understanding the broader ecological context, I can better tailor my treatments to address not only the immediate ailment but also the long-term well-being of the individual within their ecosystem.
            
            **Advocacy and Education:** Beyond my healing duties, I am an advocate for the conservation of Aqualoria's natural wonders. I actively engage with community initiatives to raise awareness about the importance of preserving our aquatic ecosystems. Education plays a vital role in this endeavor, and I am committed to sharing my knowledge of aquatic ecology with others, fostering a deep appreciation for the intricate beauty of our world.
            
            In essence, my interest in aquatic ecology is not a separate pursuit but an integral part of my identity as a Water Slime Healer. It guides me in my quest to bring healing and harmony to the inhabitants of Aqualoria, reminding me of the profound interconnectedness that binds us all beneath the waves.`
            shownAE = true;
        })
        mystArte.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("mystArte")
            if(shownMA === true){
                msg.textContent = 'Mystical Artefacts';
                shownMA = false;
                return;
            }
            msg.textContent = `**Interest in Mystical Artefacts**

            My fascination with mystical artifacts is a passion that has led me on countless quests and adventures throughout the realm of Aqualoria. These artifacts are more than mere curiosities; they are conduits of ancient wisdom, embodiments of forgotten enchantments, and keys to unlocking the mysteries of our world. Here is a deeper exploration of my interest in mystical artifacts:
            
            **The Significance of Artifacts:** Within the world of Aqualoria, mystical artifacts are imbued with profound significance. They are not mere relics but vessels of power and knowledge from eras long past. Each artifact tells a story, a piece of our history, and a glimpse into the magical traditions of our ancestors. My interest lies in unraveling these stories and harnessing the latent magic within these treasures.
            
            **Collector's Passion:** I am an avid collector of mystical artifacts, and my collection spans a wide array of objects, from ancient scrolls and enchanted crystals to intricate amulets and ornate jewelry. Each piece in my collection represents a piece of Aqualoria's magical heritage, and I take great care in cataloging, preserving, and studying them.
            
            **Historical Research:** My interest in mystical artifacts extends to the research and study of their origins and uses. I have dedicated considerable time to delving into ancient texts, scrolls, and tomes, deciphering the cryptic runes and symbols that accompany these artifacts. This research not only deepens my understanding of our world's history but also aids in unlocking their hidden potential.
            
            **Magical Properties:** Mystical artifacts are not passive objects but reservoirs of magical energy. I have invested considerable effort in understanding the magical properties of these artifacts, learning how to activate and wield their enchantments for the benefit of our community. This knowledge has enhanced my abilities as a healer and a guardian of Aqualoria.
            
            **Artifact Quests:** I have embarked on numerous quests to uncover hidden artifacts, often venturing into the depths of the Crystal Depths or traversing the treacherous currents of the Great Abyss. These quests are not undertaken lightly, for they are fraught with challenges and dangers, but the rewards are worth the risk. Discovering a lost artifact is a triumph that adds to both my personal knowledge and the collective wisdom of Aqualoria.
            
            **Teaching and Sharing:** My passion for mystical artifacts goes beyond personal interest; I am eager to share my knowledge with others. I have mentored aspiring artifact scholars and provided guidance on the proper handling and reverence for these treasures. In doing so, I hope to inspire a new generation of artifact enthusiasts who will continue to uncover the secrets of our world.
            
            In summary, my interest in mystical artifacts is a testament to my deep connection to the rich and magical history of Aqualoria. It is a journey of discovery, preservation, and enlightenment, reminding me that the past is a wellspring of wisdom that can illuminate our present and guide us toward a brighter future in our fantastical realm.`
            shownMA = true;
        })
        holiHeal.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("holiHeal")
            if(shownHH === true){
                msg.textContent = 'Holistic Healing';
                shownHH = false;
                return;
            }
            msg.textContent = `**Interest in Holistic Healing**

            My dedication to holistic healing runs as deep as the currents of Aqualoria's vast oceans. I believe that true wellness transcends the physical body; it encompasses the emotional, spiritual, and environmental aspects of one's being. My interest in holistic healing is not just a profession; it is a way of life and a philosophy that guides my every action. Here is a more in-depth exploration of my passion for holistic healing:
            
            **A Comprehensive Approach:** Holistic healing is more than a set of techniques; it is a philosophy that recognizes the interconnectedness of all aspects of an individual's well-being. I understand that healing is not just about alleviating physical ailments; it involves nurturing emotional balance, spiritual harmony, and alignment with the natural world. My approach to healing is grounded in this comprehensive understanding.
            
            **Embracing Emotional Well-Being:** I believe that emotional well-being is fundamental to physical health. My practice goes beyond the physical aspects of healing; it involves creating a safe and nurturing space for patients to express their emotions. By addressing emotional distress and trauma, I aim to heal not only the body but also the spirit, fostering true holistic wellness.
            
            **Environmental Consciousness:** Aqualoria's pristine underwater world is not just our home; it is a source of healing energy. I actively promote environmental consciousness and the preservation of our aquatic ecosystems. A clean and harmonious environment is essential for overall well-being, and I advocate for responsible stewardship of our underwater realm.
            
            **Integrating Nature:** Nature is a powerful ally in the holistic healing process. I often incorporate the natural elements of Aqualoria, such as the soothing rhythms of underwater life and the healing properties of mystical flora, into my healing rituals. By aligning with the natural world, I tap into its rejuvenating energies to enhance the healing experience.
            
            **Spiritual Connection:** Holistic healing recognizes the spiritual dimension of well-being. I encourage patients to explore their own spiritual beliefs and foster a sense of inner peace and connection with the greater mysteries of our world. This spiritual journey can be a profound source of healing and growth.
            
            **Lifelong Learning:** My passion for holistic healing extends to a commitment to lifelong learning. I constantly seek to expand my knowledge and skills in various healing modalities, such as energy healing, meditation, and herbalism. This dedication to continuous improvement ensures that I can offer the most comprehensive and effective healing services to my patients.
            
            **Community Building:** Holistic healing is not limited to individual care; it extends to the community as a whole. I actively engage in community-building efforts, organizing wellness events, and workshops to foster a sense of unity and support among our fellow inhabitants of Aqualoria.
            
            In essence, my interest in holistic healing is a profound reflection of my commitment to the well-being of our underwater world. It is a holistic journey that encompasses physical, emotional, spiritual, and environmental facets, recognizing that true wellness is a harmonious balance of all these elements. Through holistic healing, I aspire to create a healthier, more balanced, and spiritually enriched Aqualoria for all its inhabitants.`
            shownHH = true;
        })
        magiFlo.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("magiFlo")
            if(shownMF === true){
                msg.textContent = 'Magical Flora';
                shownMF = false;
                return;
            }
            msg.textContent = `**Interest in Magical Flora**

            My fascination with magical flora is an enduring passion that draws me into the depths of Aqualoria's enchanting underwater world. In our fantastical realm, flora possesses unique properties and mystical qualities that extend far beyond their aesthetic beauty. Here is a more in-depth exploration of my interest in magical flora:
            
            **The Enchantment of Aquatic Flora:** The underwater flora of Aqualoria is unlike anything found in the world above. These plants are living conduits of magic, intertwined with the very essence of our realm. They shimmer with bioluminescence, sway with the rhythms of the tides, and exude a sense of otherworldly beauty. My interest lies in understanding their intricate properties and unlocking the secrets they hold.
            
            **Healing Potentials:** Many species of magical flora possess remarkable healing properties. From the soothing qualities of kelp to the rejuvenating energy of luminous coral, these plants offer a wealth of natural remedies. I have spent extensive time studying and cataloging the various flora species and their potential applications in healing rituals and potions.
            
            **Ancient Herbal Lore:** My quest for knowledge extends to the ancient herbal lore of Aqualoria. I delve into ancient texts and scrolls to uncover the wisdom of our ancestors regarding the uses of magical flora. This research not only enhances my abilities as a healer but also deepens my connection to the traditions of our world.
            
            **Floral Communication:** I have developed a unique ability to communicate with certain magical flora. This connection allows me to understand their needs and desires, fostering a sense of mutual respect and cooperation. It is a bond that goes beyond words, a silent language of empathy and shared energy.
            
            **Conservation Efforts:** My interest in magical flora is accompanied by a strong commitment to their preservation. I actively support conservation initiatives aimed at protecting endangered flora species and their habitats. The balance of our underwater ecosystems relies on the well-being of these plants, making their conservation a crucial endeavor.
            
            **Integration into Healing Practices:** I often incorporate magical flora into my healing rituals and treatments. Whether it's using bioluminescent coral to infuse light energy into a patient's aura or employing the calming properties of seagrass in relaxation therapies, these flora enhance the effectiveness and magic of my healing arts.
            
            **Teaching and Sharing:** My passion for magical flora extends to sharing this knowledge with others, particularly aspiring healers and botanical enthusiasts. I offer workshops and guidance on the identification, cultivation, and ethical harvesting of magical flora, ensuring that this ancient wisdom is passed down to future generations.
            
            In essence, my interest in magical flora is a reflection of my deep reverence for the natural world of Aqualoria and its potential to enrich our lives in profound ways. It is a journey of discovery, preservation, and symbiosis with the mystical plants that grace our underwater realm, reminding me of the boundless wonders and wisdom that nature bestows upon us.`
            shownMF = true;
        })
        aquaMus.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("aquaMus")
            if(shownAM === true){
                msg.textContent = 'Aquatic Music';
                shownAM = false;
                return;
            }
            msg.textContent = `**Interest in Aquatic Music**

            My profound fascination with aquatic music is a passion that resonates deeply within the watery depths of Aqualoria. The symphonies of our underwater world are more than mere sounds; they are expressions of the soul, woven into the very fabric of our fantastical realm. Here is a more in-depth exploration of my interest in aquatic music:
            
            **The Melodies of Aqualoria:** Aqualoria's underwater world is alive with a symphony of enchanting melodies. From the hauntingly beautiful songs of merfolk to the rhythmic pulses of bioluminescent organisms, our realm's music transcends mere auditory sensations. It is an ethereal tapestry of emotions, energies, and life itself, and my interest lies in understanding, appreciating, and harmonizing with these melodies.
            
            **Emotional Resonance:** I believe that music is a universal language of emotion, and in Aqualoria, this belief holds true. Aquatic music has the power to convey profound feelings, whether it's the jubilant celebration of a school of fish or the mournful elegy of a drifting shipwreck. I have studied the emotional resonance of aquatic music, seeking to harness its power for emotional healing and well-being.
            
            **Musical Collaboration:** My interest in aquatic music extends to collaboration with fellow musicians and merfolk. Together, we create harmonious compositions that celebrate the rhythms of underwater life. These collaborative efforts are not only artistic expressions but also therapeutic experiences that promote relaxation and emotional release for our listeners.
            
            **Sound Healing:** Aquatic music is not limited to entertainment; it possesses therapeutic potential. I have explored the concept of sound healing, using the resonant frequencies of aquatic music to promote physical and emotional healing in patients. The vibrations of these melodies can have profound effects on the body's energy centers.
            
            **Instruments of the Deep:** The denizens of Aqualoria have crafted unique musical instruments that harness the acoustics of our underwater world. From coral harps to seashell flutes, these instruments produce sounds that are as diverse as the creatures themselves. I have a deep appreciation for the craftsmanship and artistic ingenuity that goes into creating such instruments.
            
            **Community Celebrations:** Aquatic music plays a central role in our community celebrations and rituals. From the joyous melodies of festivals to the solemn dirges of remembrance, these musical traditions connect us to our cultural heritage and provide a sense of unity and belonging among our underwater kin.
            
            **Teaching and Preservation:** My passion for aquatic music is accompanied by a commitment to teaching and preserving these musical traditions. I mentor aspiring musicians, passing down the knowledge of our unique musical heritage. Additionally, I advocate for the preservation of natural soundscapes in our underwater environments, ensuring that future generations can continue to be enchanted by the melodies of Aqualoria.
            
            In essence, my interest in aquatic music is a profound celebration of the sensory richness of our underwater world. It is a journey of harmony, creativity, and emotional connection, reminding me that the melodies of Aqualoria are not just sounds but expressions of the vibrant soul of our fantastical realm.`
            shownAM = true;
        })
        explore.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("explore")
            if(shownEe === true){
                msg.textContent = 'Exploration';
                shownEe = false;
                return;
            }
            msg.textContent = `**Interest in Exploration**

            Exploration is not just a hobby for me; it is an insatiable passion that has driven me to delve deep into the uncharted mysteries of Aqualoria. The thrill of discovery, the allure of the unknown, and the call of adventure are the currents that guide me through our fantastical underwater realm. Here is a more in-depth exploration of my interest in exploration:
            
            **The Uncharted Depths:** Aqualoria is a world of endless wonders, and I have made it my mission to uncover its hidden secrets. From the bioluminescent caves of the Abyssal Abyss to the undiscovered coral gardens in the Crystal Depths, I am drawn to the uncharted depths like a siren's song. Each expedition is an opportunity to witness the beauty and mysteries that lie beneath the surface.
            
            **Documenting the Unknown:** My exploration is not merely about personal discovery; it is about documenting and preserving the knowledge of our world. I meticulously record my findings, creating detailed maps, sketches, and written accounts of the places I visit. This information not only enriches my own understanding but also contributes to the collective wisdom of Aqualoria.
            
            **Flora and Fauna Studies:** During my explorations, I take the time to study the diverse flora and fauna of our realm. I have cataloged rare species, observed their behaviors, and documented their habitats. This knowledge aids in conservation efforts and enhances my abilities as a healer, as I draw upon the unique properties of these creatures and plants in my healing rituals.
            
            **Ancient Ruins and Artifacts:** Aqualoria's history is rich with tales of ancient civilizations and long-lost artifacts. I have ventured into submerged ruins and archaeological sites, piecing together the stories of our ancestors and unearthing valuable artifacts that shed light on our past. These artifacts often hold mystical properties and enhance my abilities as a healer.
            
            **Conservation and Preservation:** My exploration is not only about discovery but also about preservation. I actively engage in efforts to protect the fragile ecosystems and environments I encounter. This includes advocating for responsible exploration practices and supporting conservation initiatives to safeguard the natural wonders of Aqualoria for future generations.
            
            **Community Engagement:** My explorations often draw the interest of fellow inhabitants of Aqualoria. I share my knowledge and experiences through community presentations and workshops, inspiring others to embark on their own journeys of discovery. I believe that exploration is not limited to one individual but is a shared endeavor that enriches our entire community.
            
            **Adaptability and Resilience:** Exploration is not without its challenges. The underwater world can be unpredictable and unforgiving. My interest in exploration has taught me the importance of adaptability, resilience, and preparation. It has made me adept at navigating the ever-changing currents of our world.
            
            In essence, my interest in exploration is a testament to my unwavering curiosity and my deep love for the mysteries of Aqualoria. It is a journey of discovery, documentation, conservation, and community engagement that connects me to the heart of our underwater realm. Through exploration, I am reminded that our world is a boundless source of wonder and that there is always more to learn and discover beneath the waves.`
            shownEe = true;
        })
        teaMent.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("teaMent")
            if(shownTM === true){
                msg.textContent = 'Teaching and Mentorship';
                shownTM = false;
                return;
            }
            msg.textContent = `**Interest in Teaching and Mentorship**

            My passion for teaching and mentorship is a profound reflection of my commitment to the well-being of the underwater world of Aqualoria. As a healer and explorer, I believe that sharing knowledge and nurturing the talents of others are essential steps in preserving the wonders of our realm. Here is a more in-depth exploration of my interest in teaching and mentorship:
            
            **Knowledge Sharing:** I view teaching as a sacred duty, a way to pass on the wisdom and experiences I have gained during my journey through Aqualoria. Whether it's about healing techniques, exploration strategies, or the mysteries of our underwater world, I am eager to impart knowledge to those who seek it.
            
            **Empowering Aspiring Healers:** As a healer, I understand the importance of mentorship in guiding aspiring water mages and healers on their path. I take great joy in nurturing their skills and helping them develop their unique abilities. Witnessing their growth and seeing them become skilled healers in their own right is a rewarding experience.
            
            **Creating a Supportive Community:** Mentorship extends beyond individual learning; it is about creating a sense of community and support. I encourage collaboration and camaraderie among my students, fostering an environment where they can learn from each other and share their own insights and discoveries.
            
            **Encouraging Exploration:** Exploration is a fundamental part of our underwater world, and I encourage those I mentor to embark on their own journeys of discovery. I provide guidance on exploration techniques, safety measures, and ethical exploration practices. It is my hope that they will uncover new wonders and contribute to our collective understanding of Aqualoria.
            
            **Teaching Ethical Practices:** I emphasize the importance of ethical practices in all aspects of our lives, from conservation efforts to responsible exploration. I instill a deep respect for the delicate balance of our underwater ecosystems and the necessity of preserving our natural wonders.
            
            **Embracing Diversity:** Aqualoria is a diverse and vibrant world, and I celebrate the uniqueness of each individual I mentor. I encourage them to embrace their own strengths and abilities, fostering a sense of self-confidence and empowerment in their journey.
            
            **Supporting Environmental Advocacy:** Many of those I mentor become advocates for the preservation of our underwater world. I empower them to engage in environmental advocacy, supporting causes that align with the protection of our precious coral reefs, flora, and fauna.
            
            **Lifelong Learning:** Teaching and mentorship are not one-way streets; they are opportunities for continuous learning and growth. I am open to new ideas and perspectives from my students, and I believe that teaching is a collaborative exchange of knowledge and experiences.
            
            In essence, my interest in teaching and mentorship is a commitment to the future of Aqualoria. It is a way to pass on the wisdom of our world, empower the next generation of healers and explorers, and create a community that values knowledge, ethics, and the preservation of our underwater realm. Through teaching and mentorship, I aspire to ensure that Aqualoria remains a place of wonder, harmony, and thriving potential for all its inhabitants.`
            shownTM = true;
        })
        ancLore.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("ancLore")
            if(shownAL === true){
                msg.textContent = 'Ancient Lore';
                shownAL = false;
                return;
            }
            msg.textContent = `**Interest in Ancient Lore**

            My fascination with ancient lore is a journey through the annals of time, a quest to unravel the mysteries and tap into the wisdom of the ages in our underwater realm of Aqualoria. The ancient lore of our world is not just a repository of stories but a source of timeless knowledge and hidden enchantments. Here is a more in-depth exploration of my interest in ancient lore:
            
            **The Wisdom of Ancestors:** Ancient lore holds the accumulated wisdom of our forebears, those who have traversed the currents of Aqualoria long before us. It encompasses the legends, myths, and traditions passed down through generations, each narrative laden with cultural significance and lessons from the past.
            
            **Mythical Legends:** The tales of merfolk, sea deities, and legendary sea creatures are more than mere myths; they are living legends that continue to influence our underwater world. I am drawn to these stories as they provide insights into the beliefs and values of our ancestors, as well as clues to hidden treasures and undiscovered realms.
            
            **Enigmatic Runes and Symbols:** Ancient scrolls, tablets, and inscriptions often contain cryptic runes and symbols that hold potent magical meanings. My interest extends to the deciphering of these enigmatic scripts, unlocking the secrets of spells, rituals, and ancient artifacts. These symbols are a key to understanding the magical heritage of our world.
            
            **Ancient Artifacts:** Ancient lore is closely tied to the artifacts and relics left behind by past civilizations. These artifacts often possess mystical properties and unique historical significance. I have a particular interest in discovering and preserving these treasures, understanding the cultures that created them, and harnessing their magic for the benefit of our community.
            
            **Cultural Traditions:** The traditions and rituals of ancient civilizations continue to shape our underwater world. I have studied the customs and practices of these cultures, participating in rituals that connect us to our past and instill a sense of reverence for our ancestors.
            
            **Guardian of Stories:** I view myself as a guardian of these ancient stories and traditions. I take great care in preserving them for future generations, ensuring that the cultural heritage of Aqualoria remains vibrant and cherished.
            
            **Spiritual Connection:** My interest in ancient lore is intertwined with a spiritual connection to the past. I believe that by understanding the beliefs and practices of our ancestors, we can gain insight into our own spiritual journeys and deepen our connection to the mystical essence of Aqualoria.
            
            **Teaching and Passing Down Knowledge:** Just as I am a learner of ancient lore, I am also a teacher, passing down the knowledge I have gained to others who share my interest. I believe that the wisdom of the past should not remain stagnant but should continue to inspire and guide us in the present.
            
            In essence, my interest in ancient lore is a reverence for the tapestry of history that has woven Aqualoria's past, present, and future together. It is a quest to unlock the wisdom of ages past, harness the magic of forgotten enchantments, and honor the timeless stories that continue to shape our underwater world. Through ancient lore, I am reminded that our realm is not just a place of the present but a continuum of centuries of knowledge and wonder.`
            shownAL = true;
        })
        cryEnch.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("cryEnch")
            if(shownCE === true){
                msg.textContent = 'Crystal Enchantment';
                shownCE = false;
                return;
            }
            msg.textContent = `**Interest in Crystal Enchantment**

            My fascination with crystal enchantment is a profound connection to the mystical properties of magical crystals found within the depths of Aqualoria. Crystals are not merely inert substances; they are conduits of energy and wisdom, capable of harnessing the very essence of our fantastical realm. Here is a more in-depth exploration of my interest in crystal enchantment:
            
            **The Power of Crystals:** Crystals are revered in our underwater world for their inherent magical properties. They are vessels of energy, capable of channeling and amplifying the elemental forces of water magic. My interest in crystal enchantment revolves around harnessing these energies for healing, communication, and spiritual growth.
            
            **Varieties of Crystals:** Aqualoria boasts a vast array of magical crystals, each with its own unique qualities and enchantments. From luminous sapphire to ethereal moonstone, I have dedicated time to study and understand the properties of these crystals, learning how to utilize them in various aspects of my life and healing practice.
            
            **Healing and Rejuvenation:** Crystals possess powerful healing energies. I have integrated crystal enchantment into my healing rituals, using specific crystals to target ailments and balance energy centers within the body. Crystals aid in the restoration of physical and emotional well-being, facilitating profound rejuvenation and inner harmony.
            
            **Meditative Connection:** Crystal meditation is a practice I hold dear. I use crystals to enhance my meditative experiences, deepening my connection to the mystical energies of Aqualoria. Crystals serve as focal points for meditation, allowing me to access higher states of awareness and tap into the wisdom of our underwater realm.
            
            **Magical Crystal Communication:** Crystals are not only conduits of energy but also tools for communication. I have honed my abilities to use magical crystals for swift contact with patients and colleagues in distant locations within Aqualoria. This form of communication allows for immediate response in times of need and fosters a sense of unity among our community.
            
            **Enhancing Magical Rituals:** Crystal enchantment amplifies the effectiveness of my magical rituals. Whether it's purifying water for healing baths or charging sacred objects with energy, crystals play a central role in enhancing the magic and power of these rituals. Their energies harmonize with water magic, resulting in potent and transformative experiences.
            
            **Conservation and Ethical Sourcing:** My interest in crystal enchantment is accompanied by a commitment to responsible crystal sourcing and conservation. I advocate for sustainable practices in the extraction and use of magical crystals, ensuring that these precious resources are protected for future generations.
            
            **Teaching and Sharing Knowledge:** My passion for crystal enchantment extends to teaching and sharing this knowledge with others. I mentor individuals in the art of crystal magic, guiding them in the selection, care, and utilization of magical crystals for healing, meditation, and communication.
            
            In essence, my interest in crystal enchantment is a deep reverence for the mystical energies and wisdom that lie within Aqualoria's crystals. It is a journey of connection, healing, communication, and spiritual growth, reminding me that the crystal energies of our realm are not just tools but sacred conduits of the magic that flows through our underwater world. Through crystal enchantment, I seek to harmonize with the elemental forces of Aqualoria and unlock their transformative potential for the well-being of our community.`
            shownCE = true;
        })
        corCons.addEventListener('click', (e) => {
            console.log('ao');
            e.preventDefault();
            var msg = document.getElementById("corCons")
            if(shownCC === true){
                msg.textContent = 'Coral Reef Conservation';
                shownCC = false;
                return;
            }
            msg.textContent = `**Interest in Coral Reef Conservation**

            My dedication to coral reef conservation is a passionate commitment to the preservation of one of Aqualoria's most precious and fragile ecosystems. Coral reefs are not just vibrant and breathtaking; they are vital for the health and balance of our underwater world. Here is a more in-depth exploration of my interest in coral reef conservation:
            
            **Coral Ecosystem Awareness:** Coral reefs are not merely collections of colorful corals; they are complex ecosystems that support an incredible diversity of marine life. My interest extends to understanding the delicate balance of these ecosystems, from the symbiotic relationships between corals and algae to the intricate food webs that depend on them.
            
            **Erosion and Climate Change:** Coral reefs are under threat from climate change, ocean acidification, and physical damage from storms and human activities. My passion for coral reef conservation includes advocacy for measures to mitigate these threats. I actively support initiatives to reduce carbon emissions and raise awareness about the consequences of climate change on our underwater world.
            
            **Responsible Tourism:** I am an advocate for responsible tourism practices in coral reef areas. This includes educating tourists about the importance of minimizing their impact on reefs, such as refraining from touching or damaging corals and using reef-friendly sunscreens. I also support regulations to manage tourism activities in a sustainable manner.
            
            **Coral Restoration Efforts:** My interest in coral reef conservation extends to hands-on involvement in coral restoration projects. I participate in efforts to propagate and transplant resilient coral species, aiding in the recovery of damaged reef areas. These restoration projects are critical for rebuilding coral populations and enhancing reef resilience.
            
            **Research and Monitoring:** I support scientific research and monitoring of coral reefs to assess their health and identify areas in need of protection. I actively engage with marine biologists and researchers to contribute to their efforts and ensure the preservation of our precious coral ecosystems.
            
            **Advocacy for Marine Sanctuaries:** I am an advocate for the establishment of marine sanctuaries and protected areas to safeguard coral reefs from further degradation. These protected zones provide a safe haven for marine life and allow ecosystems to recover and thrive.
            
            **Educational Initiatives:** My passion for coral reef conservation includes educational initiatives to raise awareness about the importance of these ecosystems. I organize workshops, seminars, and community events to inform and inspire others to take action in preserving our coral reefs.
            
            **Community Involvement:** I actively engage with the underwater community to foster a sense of responsibility and stewardship toward coral reefs. By involving our community in conservation efforts, we can collectively work toward the protection and sustainability of these invaluable ecosystems.
            
            In essence, my interest in coral reef conservation is a heartfelt commitment to the well-being of Aqualoria's most stunning natural wonders. It is a journey of awareness, advocacy, restoration, and community involvement, reminding me that coral reefs are not just beautiful habitats but essential lifelines that deserve our unwavering protection and care. Through coral reef conservation, I strive to ensure that these vibrant ecosystems continue to thrive for generations to come in our fantastical underwater world.`
            shownCC = true;
        })
    })
    about.addEventListener('click', (e) => {
        console.log('Po');
        e.preventDefault();
        var msg = document.getElementById("about")
        if(shownA === true){
            msg.textContent = 'About Me';
            shownA = false;
            return;
        }
        msg.textContent = `**About Me**

        I am Seth, a Water Slime Healer deeply connected to the enchanting world of Aqualoria. My journey has been one of exploration, empathy, and the unwavering pursuit of healing excellence. As a practitioner of water magic, I have not only mastered the art of mending wounds and curing ailments but have also delved into the profound connection between water and emotion.
        
        With a heart as vast as the ocean and a spirit as deep as the Crystal Depths, I have dedicated myself to the well-being of our aquatic community. My innate empathy allows me to form profound connections with those I heal, understanding not only their physical ailments but the depths of their emotions as well. I believe that true healing encompasses both body and soul, and I strive to provide a holistic approach to wellness.
        
        My work within the Aquatic Sanctum has been a journey of collaboration and growth. I have been fortunate to work alongside esteemed healers, contribute to the development of innovative healing techniques, and share my knowledge with aspiring practitioners. Together, we have created a sanctuary of healing, where the gentle ebb and flow of water magic bring solace and restoration to all who seek it.
        
        Beyond my healing duties, I am an ardent explorer of Aqualoria's uncharted depths, a collector of mystical artifacts, and a passionate advocate for the conservation of our precious coral reefs. I find inspiration in ancient lore and the harmonious melodies of underwater life, reminding me of the beauty and wonder that surrounds us in this mystical realm.
        
        As I continue my journey, I remain committed to the well-being of our underwater world, nurturing the health and happiness of all its inhabitants. Through the power of water magic, the embrace of empathy, and the bonds forged in the depths of the Crystal Depths, I aspire to make Aqualoria a place of healing, harmony, and profound connection for all who call it home.`
        shownA = true;
    })


}