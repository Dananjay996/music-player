"use client"

import React from "react";

import {Song} from "@/types";
import { MediaItem } from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

interface SearchContentProps {
    songs: Song[],
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {

    if(songs.length === 0){
        return(
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                No songs found!
            </div>
        )
    }

    return(
        <div className="flex flex-col gap-y-2 w-full px-6">
            {songs.map((song) => {
                return(
                    <div key={song.id} className="flex items-center gap-x-4 w-full" >
                        <div className="flex-1">
                            <MediaItem onClick={() => {}} data={song} />
                        </div>
                        {/* // @todo Add Like button */}
                        <LikeButton songId={song.id} songName={song.title}/>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchContent;