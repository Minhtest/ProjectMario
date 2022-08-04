import "./App.css"

function Appearlose(a, b){
    const handleReaload= ()=>{
        window.location.reload()
    }
    return(
        < >
            <div class="modal fade" id="myModal" role="dialog">
                <img src="images/anh_YouLose.jpg" alt="You Lose" className="youlose" />
                <br/>
                <button onClick={handleReaload} className="reload" >Reload</button>
            </div>
        </>
    );
}
export default Appearlose;