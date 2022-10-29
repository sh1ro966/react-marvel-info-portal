import './skeleton.sass';

const Skeleton = () => {
    return (
            <div className="skeleton">
            <p className="skeleton__text">Please select a character to see information</p>
            <div className="skeleton__container">
                <div className="pulse skeleton__container_header">
                        <div className="pulse skeleton__container_circle"></div>
                        <div className="pulse skeleton__container_mini"></div>
                    </div>
                    <div className="pulse skeleton__container_block"></div>
                    <div className="pulse skeleton__container_block"></div>
                    <div className="pulse skeleton__container_block"></div>
            </div>
            </div>
    )
}

export default Skeleton;