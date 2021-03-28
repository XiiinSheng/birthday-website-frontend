/* Button component */

const Button = ({onToggle, value, myClass}) => {
    return (
        <>
            <button className={myClass}
                onClick={()=>{
                onToggle()
                }}>
                {value}
            </button>
        </>
    )
}

export default Button
