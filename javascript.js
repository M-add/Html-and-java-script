document.write("welcome to java script"+"<br/>");
document.write("The sum of two variables"+"<br/>");
var a,b,c;
var string="The result=";
a=7;
b=3;
c=a+b;
document.write(string);
document.write(c+"<br/>");
var first_string="Mathan";
var second_string="kumar";
var fname="Ramu";
var mname="Gnanasundhari";
var dob="17/06/2002";
document.write("NAME:"+first_string+" "+second_string+"<br/>"+"F_Name:"+fname+"<br/>"+"M_Name"+mname+"<br/>"+"dob"+dob+"<br/>"+"<br/>");
var n=5,i,sum=1;
for(i=1;i<=n;i++)
{
	sum=sum*i;
}
document.write("Factorial of "+n+" is:"+sum+"<br/>"+"<br/>");   
var sum1=0,n1=111;
var b1=n1;
while(n1!=0)
{
  sum1=sum1*10+(n1%10);
  n1=parseInt(n1/10);
}
if(b1==sum1)
{
  document.write(b1+" is Palindrome");
}
else
{
  document.write(b1+" is Not palindrome");
}
document.write("<br/>"+"<br/>"); 
var x1=1,x2=1,x3=0;
document.write(x1+","+x2);
for(i=2;i<8;i++)
{
	x3=x1+x2;
	x1=x2;
	x2=x3;
	document.write(","+x3);
}
