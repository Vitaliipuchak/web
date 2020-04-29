function multipulti() {
img_array = new Array();
img_array[0] = new Image(50,100) ;
img_array[1] = new Image(50,100) ;
img_array[2] = new Image(50,100) ;
img_array[3] = new Image(50,100) ;
img_array[4] = new Image(50,100) ;
img_array[5] = new Image(50,100) ;
img_array[6] = new Image(50,100) ;
img_array[7] = new Image(50,100) ;

if(document.forms["GalleryForm"]["I1"].alt=="Waterfalls")
{
document.forms["GalleryForm"]["I1"].alt = "Waterfalls2";
img_array[0].src = "1.jpg";
img_array[1].src = "2.jpg";
img_array[2].src = "3.jpg";
img_array[3].src = "4.jpeg";
img_array[4].src = "5.jpeg";
img_array[5].src = "6.jpg";
img_array[6].src = "7.jpeg";
img_array[7].src = "8.jpeg";
}

else
{
	document.forms["GalleryForm"]["I1"].alt="Waterfalls";
	img_array[0].src = "G1.jpg";
	img_array[1].src = "G2.jpg";
	img_array[2].src = "G3.jpg";
	img_array[3].src = "G4.jpg";
	img_array[4].src = "G5.jpg";
	img_array[5].src = "G6.jpg";
	img_array[6].src = "G7.jpg";
	img_array[7].src = "G8.jpg";
}

for(n=0; n<8; n=n+1)
{
document.images[n].src = img_array[n].src;
}
}