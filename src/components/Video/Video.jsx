import './Video.scss'

export const Video = () => {
    return (
        <div className='videoWrapper'>
            <div className="container">
                <div className='videos row'>
                    <video className='col-lg-8 col-12' poster='./thumbnail1.webp' src='/modernp.mp4' controls>

                    </video>
                    <video className='col-lg-8 col-12' poster='./thumbnail2.webp' src='/vinci.mp4' controls>

                    </video>
                </div>

            </div>
        </div>
    )
}