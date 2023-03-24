var Time;
function run()
{
	Time=setTimeout(myFunction,3000);
}
function stop()
{
	clearTimeout(Time);
}
function myFunction()
{
	alert("hello");
}