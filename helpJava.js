/*Script for affirmation generator */
    var affirmation = document.getElementById("affirmation");
      var scriptBtn = document.getElementById("scriptBtn");

      if(scriptBtn){
        scriptBtn.addEventListener("click", generateScript);
      }

      function generateScript(){
        var fName = document.getElementById("fName").value;
        var lName = document.getElementById("lName").value;

        affirmation.innerHTML = fName + " " + lName + "'s Daily Affirmations <br/><br/><br/>I treat myself with genuine self-respect and compassion every day. I tell the negative voice in my head to take a hike and make space only for loving, compassionate self-talk. <br/><br/>I prioritize my health, and think about what is truly serving me with each decision I make to take care of my body. <br/><br/>I forgive myself for being imperfect, because I am human. Every perceived failure provides an opportunity to learn and grow. <br/><br/>I constantly remind myself to be present. Maximizing the now is more important than ruminating on the past or agonizing over the future. <br/><br/>I am enough. I am enough. I am enough. Right now. Just the way I am. <br/><br/>I am " + fName + ".";

        window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
      }
