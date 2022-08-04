import "./App.css"

function Appearwin(a, b){
    const handleReaload= ()=>{
        window.location.reload()
    }
    return(
        <>
            <div class="modal fade" id="myModal" role="dialog">
                <img src="images/anh_YouWin.jpg" alt="You Win" className="youwin" />
                <br/>
                <button onClick={handleReaload} className="reload" >Reload</button>
            </div>
        </>
    );
}
export default Appearwin;