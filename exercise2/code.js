var x = 0;
var pic = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

function prev()
{
	if (x <= 0)
  {
    x = pic.length;
  }
	x = x - 1;
	return(document.querySelector('.pictures').setAttribute('src', pic[x]));
}

function next()
{
	if (x >= pic.length - 1)
  {
    x = -1;
  }
	x = x + 1;
	return(document.querySelector('.pictures').setAttribute('src', pic[x]));
}
