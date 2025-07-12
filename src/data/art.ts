export interface ArtItem {
    title?: string;
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
    },
    "Art Camp 2025 Combined Watercolor": {
        description: "An exercise done during Art Camp for Adults 2025 at Ulna Studio with instructor Lettie Jane: " +
            "https://www.lettiejane.com. Each person in the class had 5 minutes with the painting and a picture was" +
            " taken after ever rotation.",
        pieces: [
            { image: "/artcamp2025/watercolor_15.jpeg" },
            { image: "/artcamp2025/watercolor_14.jpeg" },
            { image: "/artcamp2025/watercolor_13.jpeg" },
            { image: "/artcamp2025/watercolor_12.jpeg" },
            { image: "/artcamp2025/watercolor_11.jpeg" },
            { image: "/artcamp2025/watercolor_10.jpeg" },
            { image: "/artcamp2025/watercolor_9.jpeg" },
            { image: "/artcamp2025/watercolor_8.jpeg" },
            { image: "/artcamp2025/watercolor_7.jpeg" },
            { image: "/artcamp2025/watercolor_6.jpeg" },
            { image: "/artcamp2025/watercolor_5.jpeg" },
            { image: "/artcamp2025/watercolor_4.jpeg" },
            { image: "/artcamp2025/watercolor_3.jpeg" },
            { image: "/artcamp2025/watercolor_2.jpeg" },
            { image: "/artcamp2025/watercolor_1.jpeg" },
        ]
    },
    "Charcol": {
        description: "Charcol pieces done in 2021 and 2022",
        pieces: [
            { image: "/charcol/birthday.jpeg" },
            { image: "/charcol/bowie.jpeg" },
            { image: "/charcol/box.jpeg" },
            { image: "/charcol/bramble.jpeg" },
            { image: "/charcol/camera.jpeg" },
            { image: "/charcol/candle.jpeg" },
            { image: "/charcol/catcomp.jpeg" },
            { image: "/charcol/junie.jpeg" },
            { image: "/charcol/lake.jpeg" },
            { image: "/charcol/lucky.jpeg" },
            { image: "/charcol/onion.jpeg" },
            { image: "/charcol/Penny.jpeg" },
            { image: "/charcol/plant.jpeg" },
            { image: "/charcol/pom.jpeg" },
            { image: "/charcol/sadplant.jpeg" },
            { image: "/charcol/shirt.jpeg" },
            { image: "/charcol/shirt2.jpeg" },
            { image: "/charcol/skate.jpeg" },
            { image: "/charcol/tallplant.jpeg" },
            { image: "/charcol/vase.jpeg" },
            { image: "/charcol/windowcat.jpeg" },
        ]
    }

}