import React from "react";
export default class Loader extends React.Component {
    render() {
        return(
                <div className="cube_wrapper">
                    <div className="cube_loader_colum">
                        <div className="cube_loader_inner">
                            <div className="cube_folding">
                                <div className="leaf leaf1"></div>
                                <div className="leaf leaf2"></div>
                                <div className="leaf leaf3"></div>
                                <div className="leaf leaf4"></div>
                            </div>
                            <div className="loading">Loading ...</div>
                        </div>
                    </div>
                </div>
                )
    }
}