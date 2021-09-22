/*scroll to top of page onn reloading*/
window.onbeforeunload = function() {
  window.scrollTo({top: 0, behavior: "smooth"});
 // document.getElementById("main").style.visibility = "hidden";

  }

/*script for trigger warning*/
      var modal = document.getElementById("myModal");
      var span = document.getElementById("closeBtn");

      span.onclick = function(){
        modal.style.display = "none";

         // document.getElementById("main").style.visibility = "visible";
      }

/*script for image modal*/
      var imgModal = document.getElementById("imgModal");
      var captionText = document.getElementById("caption");
      var img = document.getElementById("worldMap");
      var image = document.getElementById("img1");
      var imgSpan = document.getElementById("imgCloseBtn");

      img.onclick = function(){
        imgModal.style.display = "block";
        image.src = this.src;
        captionText.innerHTML = this.alt;
      }

      imgSpan.onclick = function(){
        imgModal.style.display = "none";
      }

/*script for fact generator*/
    var factList = [
      "More than 1.39 lakh Indians died by suicide in the year 2019, 67% of which were adults (18-45 years), shows the latest data released by National Crimes Record Bureau (NCRB).",

       "2019 saw an increase in the number of student suicides in India from 10,159 in 2018 and 9,905 in 2017. There was a 27% increase in the number of student suicides between 2015-2019 and 2010-2014.",

       "Failure in examinations led to 2,413 suicides by students in India in 2016 -- or seven every day -- accounting for 25 per cent of student suicides.",
    ]

      var count = 0;
      var fact = document.getElementById("fact");
      var factBtn = document.getElementById("factBtn");

      if(factBtn){
        factBtn.addEventListener("click", displayFact);
      }

      function displayFact(){
        fact.innerHTML = factList[count];
        count +=1;
        if(count == factList.length){
            count =0;
        }

       // window.scrollTo(0, document.body.scrollHeight);
       window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
      }