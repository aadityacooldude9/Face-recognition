Webcam.set({
width: 375,
height: 350,
image_format: 'png',
png_quality: 90
});
var camera= document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
});
}
console.log('ml5.version', ml5.version);
var classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/03Xf4HPLu/model.json',modelLoaded);
function modelLoaded(){
console.log('Model Loaded');
}
function identifyImage(){
img= document.getElementById('capture_image');
classifier.classify(img, gotResult);
}
function gotResult(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("person_name").innerHTML=results[0].label;
document.getElementById("person_accuracy").innerHTML=results[0].confidence.toFixed(3);

}
}