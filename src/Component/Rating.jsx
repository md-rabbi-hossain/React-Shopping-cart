
import { AiFillStar } from "react-icons/ai";
import { FaRegStar } from 'react-icons/fa';
const Rating = ({ rating, onClick, style }) => {
    return (

        <>
            {[...Array(5)].map((_, i) => (
                <span key={i} onClick={() => onClick(i + 1)} style={style}>
                    {rating > i ? (
                        <AiFillStar style={{ fontSize: '15px' }} />
                    ) : (
                        <FaRegStar style={{ fontSize: '15px' }} />
                    )}
                </span>
            ))}
        </>
    );
};

export default Rating;