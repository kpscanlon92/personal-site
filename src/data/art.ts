export interface ArtItem {
    title: string;
    image: string;
    description?: string;
}

export interface ArtSeries {
    description: string;
    pieces: ArtItem[];
}

export const artData: Record<string, ArtSeries> = {
    "Pet Portraits": {
        description: "Portraits were done with acrylic paint on 6\"x 6\" wood blocks. The technique that was used is " +
            "based on a class taken at Ulna Studio in Portland Oregon taught by Erinn Kathryn: https://www.erinnkathryn.com",
        pieces: [
            {
                title: "Bowie",
                image: "/petportraits/bowie.jpeg",
            },
            {
                title: "Juniper",
                image: "/petportraits/junie.jpeg",
            },
            {
                title: "Bramble",
                image: "/petportraits/bramble.jpeg",
            },
            {
                title: "Idris",
                image: "/petportraits/idris.jpeg",
            },
            {
                title: "Alanna",
                image: "/petportraits/alanna.jpeg",
            },
        ]
    }
}