import { useRouter } from "next/router"

function AmbassadorInfo({ambassador}){
    const router = useRouter();

    const name = ambassador.attributes.name
    const bio = ambassador.attributes.biography
    const slug = ambassador.attributes.slug

    const img = ambassador.attributes.profile_picture.data
    let img_url = `${process.env.API_BASE_URL}/uploads/thumbnail_avatar_8677caed30.png`
    if (img){
        img_url = `${process.env.API_BASE_URL}${img.attributes.formats.thumbnail.url}`
    }

    return (
        <div onClick={() => router.push(`/ambassador/${slug}`)} className="col-lg-3 col-md-6">
            <div className="item cir md-mb50">
                <div className="img">
                    <img src={img_url} alt={name} />
                    
                    <div id="circle1">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="300px"
                            height="300px"
                            viewBox="0 0 300 300"
                            enableBackground="new 0 0 300 300"
                            xmlSpace="preserve"
                        >
                            <defs>
                            <path
                                id="circlePath1"
                                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none" />
                            <g>
                            <use xlinkHref="#circlePath1" fill="none" />
                            <text fill="#fff">
                                <textPath xlinkHref="#circlePath1">

                                </textPath>
                            </text>
                            </g>
                        </svg>
                    </div>
                    <div className="info">
                        <h6>{name}</h6>
                        <span>{bio}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmbassadorInfo;