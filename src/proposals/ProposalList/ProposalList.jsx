import React from "react";
import { Link } from "react-router-dom";

import ProposalRow from "../ProposalRow";
import { getTalks, getCallForPapers } from '../../api'
import "./ProposalList.css";

const data = async () => {
    // const d = await getCallForPapers();
    const d = getTalks;
    console.log(d)
    return d;
}

const ProposalList = () => (
    <ul data-testid="proposal-list" className="ProposalList">
        {[getTalks()].map((proposal) => (
            <li
                key={proposal.id}
                className="ProposalList__item"
            >
                <Link
                    key={proposal.id}
                    className="ProposalList__item__link"
                    to={`/proposals`}
                >
                    <ProposalRow
                        proposal={proposal}
                        onStatusUpdate={() => { }}
                    />
                </Link>
            </li>
        ))}
    </ul>
);

export default ProposalList;
