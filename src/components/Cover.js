/* Front Cover of Website */
import deco from "../images/decoration.png";
import cake from "../images/cake.png"

const Cover = () => {
    return (
        <div id="cover">
            <div id="decoDiv">
            <img className="deco" id="decoLeft" src={deco} alt="Not found"/>
            <img className="deco" id="decoRight" src={deco} alt="Not found"/>
            </div>
            <div id="coverMessage">
                <img id="cake" src={cake} alt="Cake not found"/>
                <p id="title">Happy Birthday, XXXX!</p>
                <p id="subtitle">Birthday is better when you have us. </p>

            <svg id="coverButton" xmlns="http://www.w3.org/2000/svg" 
                width="143.796" height="93.907" viewBox="0 0 143.796 93.907">
                <g id="Group_5" data-name="Group 5" transform="translate(-888.102 -923.732)">
                <rect id="Rectangle_18" data-name="Rectangle 18" width="110" height="15" rx="7.5" transform="translate(899.593 923.732) rotate(50)" fill="#d4d4d4"/>
                <rect id="Rectangle_19" data-name="Rectangle 19" width="110" height="15" rx="7.5" transform="translate(1031.898 933.374) rotate(130)" fill="#d4d4d4"/>
                </g>
            </svg>

            </div>
        </div>
    )
}

export default Cover
