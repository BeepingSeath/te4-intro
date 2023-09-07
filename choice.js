export function choice(element) {
    const edu = element.querySelector('#education');

    edu.addEventListener('click', (e) => {
        console.log('Yo');
        e.preventDefault();
        var msg = document.getElementById("edu")
        msg.textContent += `**Education**

        *School of Aquatic Mysteries*
        - Location: Crystal Depths, Aqualoria
        - Degree Earned: Master of Water Magic
        - Graduation Date: [Insert Graduation Year]
        
        *Relevant Coursework*
        - Advanced Hydrotherapy Techniques
        - Elemental Healing Rituals
        - Aquatic Anatomy and Physiology
        - Emotional Resonance in Healing Magic
        
        *Thesis*
        - Title: "The Synergy of Water and Emotion: Unlocking the Healing Potential of Empathy"
        - Summary: Explored the profound connection between water magic and emotional empathy, demonstrating how the two synergize to enhance the effectiveness of healing spells.
        
        *Apprenticeship*
        - Master Healer: [Insert Mentor's Name]
        - Duration: [Insert Duration]
        - Description: Underwent an intensive apprenticeship with a highly skilled healer to refine practical healing skills and gain real-world experience in the Aquatic Sanctum.
        
        *Accolades*
        - Award for Excellence in Water Magic Research [Insert Year]
        - Commendation for Outstanding Dedication to Healing Arts [Insert Year]
        
        *Continuing Education*
        - Regularly attend conferences and seminars to stay updated on the latest developments in water magic and healing techniques.`

        
        
    })
}