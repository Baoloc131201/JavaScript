const image = document.querySelector(".screen-image__img");
const cover = document.querySelector(".screen-image__cover");
cover.addEventListener("mousemove", function(e) {
    const screenImage = document.querySelector(".screen-image");
    image.style = "width:auto;height:auto;max-height:unset";
    let imageWidth = image.offsetWidth;
    console.log(imageWidth);
    let imageHeight = image.offsetHeight;
    console.log(imageHeight);
    const screenWidth = screenImage.offsetWidth;
    const screenHeight = screenImage.offsetHeight;

    const spaceX = (imageWidth / 2 - screenWidth) * 2;
    const spaceY = (imageHeight / 2 - screenHeight) * 2;

    imageWidth = imageWidth + spaceX;
    imageHeight = imageHeight + spaceY;
    let X = e.pageX - screenImage.offsetParent.offsetLeft - screenImage.offsetLeft;
    let Y = e.pageY - screenImage.offsetParent.offsetTop - screenImage.offsetTop;

    const positonX = (imageWidth / screenWidth / 2) * X;
    const positonY = (imageHeight / screenHeight / 2) * Y;

    image.style = `left:${-positonX}px;top:${-positonY}px;width:auto;height:auto;max-height:unset;transform:none;`;
});

cover.addEventListener("mouseleave", function(e) {
    image.style = "";
})