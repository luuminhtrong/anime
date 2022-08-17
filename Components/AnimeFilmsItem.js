import Link from "next/link";
import Image from "next/image";

const AnimeFilmsItem = () => {
    return ( 
    <div class="grid anime-item">
        <div class="col-5 img">
                <Link href='/details'>
                    <Image className="img" src='/index.jpeg' width={220} height={220} />
                </Link>
        </div>
        <div class="col-7">
            <h1>Anime Name</h1>
            <p className="anime-studio-name">Studio name</p>
            <p className="anime-episodes">24 episodes x 24mins</p>
            <p className="anime-desc">
                Descriptions. Add a crollbar here if the description is long (only scroll the description)
            </p>
        </div>
    </div> 
);
}
 
export default AnimeFilmsItem;