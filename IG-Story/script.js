// Storing of dp and stories..
var arr = [
    {
        dp: "images/up.webp",
        story: "images/pardeep.webp"
    },
    {
        dp: "images/patna.webp",
        story: "images/sachin.webp"
    },
    {
        dp: "images/bengal.webp",
        story: "images/maninder.webp"
    },
    {
        dp: "images/bengalutu.webp",
        story: "images/vikash.webp"
    },
    {
        dp: "images/delhi.webp",
        story: "images/naveen.webp"
    },
    {
        dp: "images/haryana.webp",
        story: "images/siddharth.webp"
    },
    {
        dp: "images/gujarat.webp",
        story: "images/fazal.webp"
    },
    {
        dp: "images/jaiput.webp",
        story: "images/arjun.webp"
    },
    {
        dp: "images/telangana.webp",
        story: "images/pawan.webp"
    },
    {
        dp: "images/tamil.webp",
        story: "images/narender.webp"
    },
    {
        dp: "images/pune.webp",
        story: "images/aslam.webp"
    },
    {
        dp: "images/mumbai.webp",
        story: "images/surinder.webp"
    }
]

var clutter = "";
arr.forEach(function(element, numbering){
    clutter += `<div id = "${numbering}" class="story-icon"><img src="${element.dp}" alt="PKL-Team"></div>`
})

var stories = document.getElementById('stories')
stories.innerHTML = clutter;
stories.addEventListener("click", function(dets){
    var parentDiv = dets.target.closest('.story-icon');
    if (parentDiv) {
        var fullScreenStory = document.getElementById('full-screen-story');
        fullScreenStory.style.display = "block";
        fullScreenStory.style.zIndex = 999;
        fullScreenStory.style.backgroundImage = `url(${arr[parentDiv.id].story})`;
        setTimeout(function(){
            fullScreenStory.style.display = "none";
        },4000)
    }
    var cross = document.getElementById('cross-icon');
    cross.addEventListener("click", function(){
    fullScreenStory.style.display = "none";
})
})