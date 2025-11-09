
import PropTypes from 'prop-types';
 
export function Project(props) {
    return (<>
        <div className="w-[33%] h-[100%] px-3 border-white mb-4 mt-5">
            <div className="max-w-sm rounded border-white border hover:border-purple overflow-hidden shadow-lg bg-orange-400">
                <div className="h-1/3">
                    {/* <video className="w-full object-contain block h-48" src={"https://youtu.be/J0g4pfrnQ1Y"} alt={`dakpark game video`} autoPlay /> */}
                    <iframe className="w-full object-contain block h-48" src={props.video} title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="px-6 py-4 pb-1/3">
                    <div className="font-bold text-xl mb-2">{props.name}</div>
                    <p className="text-gray-700 text-base h-72">
                        {props.description}
                    </p>
                    <a className="text-gray-700 text-base" href={props.link}>
                        Github repo
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}

Project.propTypes = {
  video: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

Project.defaultProps = {
  video: '',
  name: '',
  description: '',
  link: '',
};