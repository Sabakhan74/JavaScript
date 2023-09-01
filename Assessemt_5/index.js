console.log('ass_5')
//QUESTION NO 4
fetch("https://reqres.in/api/users?page=1")
.then(response=>{
    if(!response.ok){
    throw new Error("network is fail")
    }
    return response.json();
}).then(data =>{
    console.log(data)
        
}).catch(error =>{
    console.log(error)
 })

 //QUESTION NO 5

const fetchData =async()=>{
    try{
        const response_1 = await fetch("https://reqres.in/api/users?page=1")
        if(!response_1.ok){
            throw new Error("Not any response")
        }
        const data = await response_1.json()
        console.log(data);
        //return response.json
    
    }catch (error){
        console.log(error)
    }
}
fetchData()

