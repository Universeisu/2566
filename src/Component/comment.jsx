export default Comment = ( props ) =>{
    return(
        <div className="dialogbox">
            <div className="body">
                <span className="tip tip-up">
                    <div className="messang">
                        <span>
                            <b>{props.userID}</b> - {props.message}
                        </span>
                    </div>
                </span>
            </div>
        </div>

    );
}