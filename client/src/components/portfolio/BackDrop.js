import React from "react";


const BackDrop = props => {


    let back_drop = "backDrop-visibility";
    if (props.menuBarState) {
        back_drop = "backDrop-visibility open";
    }
    return (
        <div className={back_drop} onClick={props.openMenu} />
    );


};

export default BackDrop;