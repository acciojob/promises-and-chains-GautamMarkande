//your JS code here. If required.
const submitbtn = document.getElementById("btn");
let prom1 = new Promise((resolve,reject)=>{
submitbtn.addEventListener("click", (e)=>{
	const age = parseInt(document.getElementById("age").value);
	const name = document.getElementById("name").value;
	if(age>18){
		resolve(name);
	}else{
		reject(name)
	}
	
})
})
prom1.then((name)=>{
	alert(`Welcome, ${name}. You can vote.`)
}).catch((name)=>{
	alert(`Oh sorry ${name}.You aren't old enough.`)
	//alert('Please enter valid details')
})
