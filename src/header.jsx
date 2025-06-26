// react icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";


function header() {

    return <div className="card-header">
        <div className="back-link">
            <FaArrowLeftLong size={18} color="gray" /> <a href="#">Go back</a>
        </div>

        <div className="heart">
            <FaRegHeart />
        </div>
    </div>
}

export default header