import React from "react";

function Searchbar () {
    return(
        <div className='searchbar'>
        <div className='searchForm'>
            <input type='text' placeholder="Find a user"/>
        </div>
            <div className='userChat'>
                <img src='' alt='' />
                <div className='userChatInfo'>
                    <span>Kariem</span>
                </div>
            </div>

        </div>
    )
}

export default Searchbar
