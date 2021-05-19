import { memo } from "react";
import ReactTooltip from 'react-tooltip';

export const Achievement = memo(
    ({ src, title }) => {
        return (
            <div>
                <a target="_blank" rel="noreferrer" href={src}>
                    <img border="" src={src} alt={title} data-tip={title} /><ReactTooltip />
                </a>
                <br /><br />
            </div>
        )
    });

