function sub() 
{
	a = document.getElementById('ip').value;
dec = atob(a);
var i;
var op="" ;
//1hh9ss2jn9jj-jj0fj9hh-dh1gh3kd
for (i=0;i<=30;i++)
{
	if (i % 3==0)
	{
		op+=dec.charAt(i) ;
		}
		}
		document.getElementById('op').value=op;
		} 