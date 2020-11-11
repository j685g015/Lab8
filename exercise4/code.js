function change()
{
  var list = ["r", "g", "b", "w"];
	var id = document.querySelector("#dummyText");
	var arr = [];
  for (let x = 1; x < 3; x = x + 1)
	{
  	for (const l of list)
		{
    	arr.push(document.querySelector(`#${l}${x}`).value)
    }
  }
  id.style.border = `${arr[3]}px solid rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
  id.style.backgroundColor = `rgb(${arr[4]}, ${arr[5]}, ${arr[6]})`
  id.style.width = `${arr[7]}px`
}
