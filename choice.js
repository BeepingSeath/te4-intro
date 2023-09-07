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