import "./Dialog.css"
function Dialog({message, onDialog}){
return(
    <div class="style">
    <div class="style1">
   <h3 class="style3">{message}</h3>
   <div class="style2">
    <button class="yes-btn" onClick={() => onDialog(true)}>Yes</button>
    <button class="no-btn" onClick={() => onDialog(false)}>No</button>
   </div>
    </div>
    </div>
)
}
export default Dialog