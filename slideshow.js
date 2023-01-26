var num = 0;
 
imgArray = [
['assets/image.jpg'],
['assets/image1.jpg'],
['assets/image2.jpg'],
['assets/image3.jpg'],
['assets/image4.jpg'],
['assets/image5.jpg'],

]
 
function slideshow(slide_num) {
  document.getElementById('slide').src=imgArray[slide_num];
}

//next button
function slideshowUp() {
  num++;
  num = num % imgArray.length;
  slideshow(num);
}

//previous button
function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  slideshow(num);
}

//autoplay
function playImageArray(){
	if (num==imgArray.length){
		num=0;
		}
	document.getElementById('slide').src=imgArray[num][0];
	num=num+1;
	}
