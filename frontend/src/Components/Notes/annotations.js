import React from "react";
import './styles.css'
import './style-priority.css'
import { AiTwotoneDelete, AiTwotoneExclamationCircle } from "react-icons/ai";

function Notes({ data }) {
    return (
        <>
            <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
                <div>
                    <strong>{data.title}</strong>
                    <div>
                        <AiTwotoneDelete size="24" />
                    </div>
                </div>
                <textarea defaultValue={data.notes}></textarea>
                <span>
                    <AiTwotoneExclamationCircle size="24" />
                </span>
            </li>
        </>
    )
}

export default Notes;