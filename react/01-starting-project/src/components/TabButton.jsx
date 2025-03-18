export default function TabButton({children, onSelect, isSelected}){
    // let  evnt = document.querySelector('button').addEventListener('click',()=>{
function handleClick(){
    console.log("Hello Virat");
}
    // }) this is how we used to do in java script

    return(
        <li>
            <button className = {isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}