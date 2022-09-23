import React, {useState} from "react";

export default function FunctionSelector(props) {
    const [funcName, setFuncName] = useState("");
    const [args, setArgs] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmit(funcName, args)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Function Name
                <input
                    type="text"
                    value={funcName}
                    onChange={e => setFuncName(e.target.value)}
                />
            </label>
            <label>Arguments
                <input
                    type="text"
                    value={args}
                    onChange={e => setArgs(e.target.value)}
                />
            </label>

            <input type="submit" value="Submit" />

        </form>
    )
}