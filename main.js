function check()
{
    img = document.getElementById('captured');
    classifier.classify(img, gotResult);
}

function gotResult()
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
