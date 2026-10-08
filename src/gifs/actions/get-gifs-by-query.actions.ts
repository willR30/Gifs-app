
import type { GiphyRespond } from "../interfaces/giphy.respond"
import type { Gif } from "../interfaces/gif.interface"
import { GiphyApi } from "./api/giphy.api"

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await GiphyApi<GiphyRespond>('/search',
        {
            params: {
                q: query,
                limit: 10,
            }
        }
    )

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }));
    //fetch(
    //   'https://api.giphy.com/v1/stickers/search?api_key=KKJB96WZMa0RxEPx1c7RLBd0f5a2oilL&q=5&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips')

}