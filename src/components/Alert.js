import React from "react";

export default function Alert(props) {
    const capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
    return (
        <div style={{ height: "10px" }}>
            {props.alert && (
                <div>
                    <div
                        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                        role="alert"
                    >
                        {capatalize(props.alert.type)} : {props.alert.msg}
                    </div>
                </div>
            )}
        </div>
    );
}
