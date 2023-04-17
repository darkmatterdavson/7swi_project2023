export default function LoginAlt(){
    return(
        <>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Log In/Register</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Tady bude masíčko
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" >Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}