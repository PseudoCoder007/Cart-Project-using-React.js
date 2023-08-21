//5.6
function showAlert(){
    alert("Hello!,Saif");
}
function handleInputChange(e){
    console.log(e.target.value);
}
export default function App(){
    return(
        <div className="App">
            <button onClick={showAlert}>Show Alert</button>
            <input onChange={handleInputChange}/>
        </div>
    )
}