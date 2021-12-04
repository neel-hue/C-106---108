function modelloaded() {
    console.log("model is loaded");
    classifier.classify(gotresults);
}

function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GA_7LNwXr/model.json", modelloaded);
}

function gotresults(error, results) {
    if (error)

    { 
        
        console.log(error);
    
    }

    else
    
    { 
        
        console.log(results);


        rnr = Math.floor(Math.random()*255) + 1;
        rnb = Math.floor(Math.random()*255) + 1;
        rng = Math.floor(Math.random()*255) + 1;

        document.getElementById("soundrecognizer").innerHTML = 'I can hear : ' + results[0].label + '.';
        document.getElementById("accuracy").innerHTML =  'Accuracy : '   + results[0].confidence + '.';
        document.getElementById("soundrecognizer").style.color = "rgb(" + rnr + "," + rnb + "," + rng + ")";
        document.getElementById("accuracy").style.color = "rgb(" + rnr + "," + rnb + "," + rng + ")";

        i1 = document.getElementById("im1");
        i2 = document.getElementById("im2");
        i3 = document.getElementById("im3");
        i4 = document.getElementById("im4");
        
        if(results[0].label == "Monkey noise"){
            i1.src = "aliens-01.gif";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.png";

            
            
        }
        else if(results[0].label == "Clap"){
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.gif";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.png";
            
            
            
        }
        else if(results[0].label == "Drum"){
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.gif";
            i4.src = "aliens-04.png";
            
            
            
        }
        else {
            i1.src = "aliens-01.png";
            i2.src = "aliens-02.png";
            i3.src = "aliens-03.png";
            i4.src = "aliens-04.gif";
            
            
            
        }


        }

}



