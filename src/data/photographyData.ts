export interface Photo {
    id?: number;
    src: string;
    date: string;
    location: string;
    description: string;
    blurColor: string;
}

export interface PhotoSeries {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    cover: string;
    photoIds: number[];
    featured?: boolean;
    published: boolean;
}

export const photos: Photo[] = [
    {
        src: "/images/photography/photo-1.webp",
        date: "2025-03-01",
        location: "Dresden, Germany",
        description: "A cloudy day next to the Theaterplatz.",
        blurColor: "rgba(255, 99, 71, 0.1)",
    },
    {
        src: "/images/photography/photo-2.webp",
        date: "2025-03-03",
        location: "Dresden, Germany",
        description: "Sunset over the Theaterplatz.",
        blurColor: "rgba(30, 144, 255, 0.1)",
    },
    {
        src: "/images/photography/photo-3.webp",
        date: "2024-07-19",
        location: "Friedrichshafen, Germany",
        description: "Sunny day at the Bodensee.",
        blurColor: "rgba(50, 205, 50, 0.1)",
    },
    {
        src: "/images/photography/photo-4.webp",
        date: "2024-07-19",
        location: "Deggendorf, Germany",
        description: "Sunset walk in Deggendorf.",
        blurColor: "rgba(250, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-5.webp",
        date: "2024-07-19",
        location: "Deggendorf, Germany",
        description: "Locks near the Donau in Deggendorf.",
        blurColor: "rgba(250, 255, 50, 0.1)",
    },
    {
        src: "/images/photography/photo-6.webp",
        date: "2025-03-01",
        location: "Dresden, Germany",
        description: "A cloudy day at the Zwinger in Dresden.",
        blurColor: "rgba(0, 205, 100, 0.1)",
    },
    {
        src: "/images/photography/photo-7.webp",
        date: "2025-03-01",
        location: "Dresden, Germany",
        description: "Action on the Theaterplatz.",
        blurColor: "rgba(200, 200, 200, 0.1)",
    },
    {
        src: "/images/photography/photo-8.webp",
        date: "2025-05-23",
        location: "Deggendorf, Germany",
        description: "Aftershow-Party at the Deggendorf Institute of Technology.",
        blurColor: "rgba(50, 50, 150, 0.1)",
    },
    {
        src: "/images/photography/photo-9.webp",
        date: "2025-08-09",
        location: "Most, Czech Republic",
        description: "FSCzech Formula Student Event.",
        blurColor: "rgba(0, 0, 200, 0.1)",
    },
    {
        src: "/images/photography/photo-10.webp",
        date: "2025-08-07",
        location: "Most, Czech Republic",
        description: "Golden Hour - FSCzech Formula Student Event.",
        blurColor: "rgba(200, 200, 20, 0.1)",
    },
    {
        src: "/images/photography/photo-11.webp",
        date: "2025-06-13",
        location: "Deggendorf, Germany",
        description: "Testing at Formula Student.",
        blurColor: "rgba(0, 200, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-12.webp",
        date: "2025-09-07",
        location: "Wurmannsquick, Germany",
        description: "Sunset in the countryside.",
        blurColor: "rgba(250, 0, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-13.webp",
        date: "2025-09-07",
        location: "Passau, Germany",
        description: "The moon at the Three Rivers Corner in Passau.",
        blurColor: "rgba(0, 0, 25, 0.1)",
    },
    {
        src: "/images/photography/photo-14.webp",
        date: "2025-09-07",
        location: "Passau, Germany",
        description: "Walk in the moonlight with a view over the Inn River.",
        blurColor: "rgba(0, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-15.webp",
        date: "2025-09-07",
        location: "Passau, Germany",
        description: "View over the entire city from above.",
        blurColor: "rgba(250, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-16.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "Nightshot at the bus station.",
        blurColor: "rgba(255, 0, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-17.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "A cruising ship on its way through the 3 rivers in Passau at night.",
        blurColor: "rgba(250, 250, 0, 0.1)",
    },
    {
        src: "/images/photography/photo-18.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "Capturing a little moment in the small nightly streets.",
        blurColor: "rgba(0, 0, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-19.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "Nightview at the St. Stephen's Cathedral from the Inn-Side.",
        blurColor: "rgba(250, 150, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-20.webp",
        date: "2025-11-15",
        location: "Passau, Germany",
        description: "View at at St. Stephen's Cathedral from the Veste Oberhaus.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-21.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "View over Donaustauf through the pillars of the Wallhalla.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-22.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "Lightpainting at the Wallhalla at night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-23.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "Nightsky through the pillars of the Wallhalla.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-24.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "Wallhalla at night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-25.webp",
        date: "2025-11-22",
        location: "Donaustauf, Germany",
        description: "Wallhalla at night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-26.webp",
        date: "2026-01-01",
        location: "Wurmannsquick, Germany",
        description: "Silvester night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-27.webp",
        date: "2026-01-01",
        location: "Wurmannsquick, Germany",
        description: "Silvester night.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-28.webp",
        date: "2026-01-04",
        location: "Passau, Germany",
        description: "View over the city from the Veste Oberhaus.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-29.webp",
        date: "2026-02-02",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-30.webp",
        date: "2026-02-02",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-31.webp",
        date: "2026-02-02",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-32.webp",
        date: "2026-02-07",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-33.webp",
        date: "2026-02-07",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-34.webp",
        date: "2026-02-07",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-35.webp",
        date: "2026-02-07",
        location: "Passau, Germany",
        description: "Nightwalk through Passau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-36.webp",
        date: "2026-02-11",
        location: "Vilshofen, Germany",
        description: "View over the city and the Donau.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-37.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-38.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-39.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-40.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-41.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-42.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-43.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-44.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-45.webp",
        date: "2026-02-26",
        location: "Regensburg, Germany",
        description: "Taking a walk through the city.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-46.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-47.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-48.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-49.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-50.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-51.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-52.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    {
        src: "/images/photography/photo-53.webp",
        date: "2026-01-30",
        location: "Passau, Germany",
        description: "Part of my urban photo series about loneliness.",
        blurColor: "rgba(250, 2500, 250, 0.1)",
    },
    // Roadtrip and daytrip additions — IDs 54–152.
    {
        "id": 54,
        "src": "/images/photography/roadtrip/susa/jv_01186.webp",
        "date": "2026-09-01",
        "location": "Susa, Italy",
        "description": "Quiet streets, warm facades and glimpses of the surrounding mountains in Susa.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 55,
        "src": "/images/photography/roadtrip/susa/jv_01190.webp",
        "date": "2026-09-01",
        "location": "Susa, Italy",
        "description": "Quiet streets, warm facades and glimpses of the surrounding mountains in Susa.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 56,
        "src": "/images/photography/roadtrip/susa/jv_01202.webp",
        "date": "2026-09-01",
        "location": "Susa, Italy",
        "description": "Quiet streets, warm facades and glimpses of the surrounding mountains in Susa.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 57,
        "src": "/images/photography/roadtrip/susa/jv_01238.webp",
        "date": "2026-09-01",
        "location": "Susa, Italy",
        "description": "Quiet streets, warm facades and glimpses of the surrounding mountains in Susa.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 58,
        "src": "/images/photography/roadtrip/brisighella/jv_01917.webp",
        "date": "2026-09-05",
        "location": "Brisighella, Italy",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 59,
        "src": "/images/photography/roadtrip/brisighella/jv_01928.webp",
        "date": "2026-09-05",
        "location": "Brisighella, Italy",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 60,
        "src": "/images/photography/roadtrip/brisighella/jv_01941.webp",
        "date": "2026-09-05",
        "location": "Brisighella, Italy",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 61,
        "src": "/images/photography/roadtrip/brisighella/jv_01948.webp",
        "date": "2026-09-05",
        "location": "Brisighella, Italy",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 62,
        "src": "/images/photography/roadtrip/brisighella/jv_01950.webp",
        "date": "2026-09-05",
        "location": "Brisighella, Italy",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 63,
        "src": "/images/photography/roadtrip/brisighella/jv_01953.webp",
        "date": "2026-09-05",
        "location": "Brisighella, Italy",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 64,
        "src": "/images/photography/roadtrip/brisighella/jv_01961.webp",
        "date": "2026-09-05",
        "location": "Brisighella, Italy",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 65,
        "src": "/images/photography/roadtrip/brisighella/jv_01963.webp",
        "date": "2026-09-05",
        "location": "Brisighella, Italy",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 66,
        "src": "/images/photography/roadtrip/camochi/jv_02051.webp",
        "date": "2026-09-05",
        "location": "Camochi",
        "description": "Canals, bridges and reflections seen while exploring Camochi.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 67,
        "src": "/images/photography/roadtrip/camochi/jv_02139.webp",
        "date": "2026-09-05",
        "location": "Camochi",
        "description": "Canals, bridges and reflections seen while exploring Camochi.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 68,
        "src": "/images/photography/roadtrip/camochi/jv_02143.webp",
        "date": "2026-09-05",
        "location": "Camochi",
        "description": "Canals, bridges and reflections seen while exploring Camochi.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 69,
        "src": "/images/photography/roadtrip/camochi/jv_02161.webp",
        "date": "2026-09-05",
        "location": "Camochi",
        "description": "Canals, bridges and reflections seen while exploring Camochi.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 70,
        "src": "/images/photography/roadtrip/camogli/jv_01483.webp",
        "date": "2026-09-03",
        "location": "Camogli, Italy",
        "description": "Colourful waterfronts, narrow streets and coastal details in Camogli.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 71,
        "src": "/images/photography/roadtrip/camogli/jv_01504.webp",
        "date": "2026-09-03",
        "location": "Camogli, Italy",
        "description": "Colourful waterfronts, narrow streets and coastal details in Camogli.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 72,
        "src": "/images/photography/roadtrip/camogli/jv_01515.webp",
        "date": "2026-09-03",
        "location": "Camogli, Italy",
        "description": "Colourful waterfronts, narrow streets and coastal details in Camogli.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 73,
        "src": "/images/photography/roadtrip/camogli/jv_01520.webp",
        "date": "2026-09-03",
        "location": "Camogli, Italy",
        "description": "Colourful waterfronts, narrow streets and coastal details in Camogli.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 74,
        "src": "/images/photography/roadtrip/camogli/jv_01532.webp",
        "date": "2026-09-03",
        "location": "Camogli, Italy",
        "description": "Colourful waterfronts, narrow streets and coastal details in Camogli.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 75,
        "src": "/images/photography/roadtrip/camogli/jv_01541.webp",
        "date": "2026-09-03",
        "location": "Camogli, Italy",
        "description": "Colourful waterfronts, narrow streets and coastal details in Camogli.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 76,
        "src": "/images/photography/roadtrip/caorle/jv_02172.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 77,
        "src": "/images/photography/roadtrip/caorle/jv_02199.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 78,
        "src": "/images/photography/roadtrip/caorle/jv_02207.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 79,
        "src": "/images/photography/roadtrip/caorle/jv_02209.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 80,
        "src": "/images/photography/roadtrip/caorle/jv_02213.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 81,
        "src": "/images/photography/roadtrip/caorle/jv_02227.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 82,
        "src": "/images/photography/roadtrip/caorle/jv_02228.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 83,
        "src": "/images/photography/roadtrip/caorle/jv_02238.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 84,
        "src": "/images/photography/roadtrip/caorle/jv_02256.webp",
        "date": "2026-09-08",
        "location": "Caorle, Italy",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 85,
        "src": "/images/photography/roadtrip/finalborgo/jv_01337.webp",
        "date": "2026-09-02",
        "location": "Finalborgo and surroundings, Italy",
        "description": "Stone passages, small streets and moments from Finalborgo and the surrounding coast.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 86,
        "src": "/images/photography/roadtrip/finalborgo/jv_01348.webp",
        "date": "2026-09-02",
        "location": "Finalborgo and surroundings, Italy",
        "description": "Stone passages, small streets and moments from Finalborgo and the surrounding coast.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 87,
        "src": "/images/photography/roadtrip/finalborgo/jv_01354.webp",
        "date": "2026-09-02",
        "location": "Finalborgo and surroundings, Italy",
        "description": "Stone passages, small streets and moments from Finalborgo and the surrounding coast.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 88,
        "src": "/images/photography/roadtrip/finalborgo/jv_01361.webp",
        "date": "2026-09-02",
        "location": "Finalborgo and surroundings, Italy",
        "description": "Stone passages, small streets and moments from Finalborgo and the surrounding coast.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 89,
        "src": "/images/photography/roadtrip/finalborgo/jv_01375.webp",
        "date": "2026-09-02",
        "location": "Finalborgo and surroundings, Italy",
        "description": "Stone passages, small streets and moments from Finalborgo and the surrounding coast.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 90,
        "src": "/images/photography/roadtrip/finalborgo/jv_01379.webp",
        "date": "2026-09-02",
        "location": "Finalborgo and surroundings, Italy",
        "description": "Stone passages, small streets and moments from Finalborgo and the surrounding coast.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 91,
        "src": "/images/photography/roadtrip/finalborgo/jv_01418.webp",
        "date": "2026-09-02",
        "location": "Finalborgo and surroundings, Italy",
        "description": "Stone passages, small streets and moments from Finalborgo and the surrounding coast.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 92,
        "src": "/images/photography/roadtrip/florenz/jv_01844.webp",
        "date": "2026-09-04",
        "location": "Florence, Italy",
        "description": "Streets, architecture and warm light while exploring Florence.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 93,
        "src": "/images/photography/roadtrip/florenz/jv_01861.webp",
        "date": "2026-09-04",
        "location": "Florence, Italy",
        "description": "Streets, architecture and warm light while exploring Florence.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 94,
        "src": "/images/photography/roadtrip/florenz/jv_01866.webp",
        "date": "2026-09-04",
        "location": "Florence, Italy",
        "description": "Streets, architecture and warm light while exploring Florence.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 95,
        "src": "/images/photography/roadtrip/florenz/jv_01915.webp",
        "date": "2026-09-04",
        "location": "Florence, Italy",
        "description": "Streets, architecture and warm light while exploring Florence.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 96,
        "src": "/images/photography/roadtrip/frankreich-pt-1/jv_01002.webp",
        "date": "2026-08-31",
        "location": "France",
        "description": "Open landscapes, changing light and stars photographed during the French part of the roadtrip.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 97,
        "src": "/images/photography/roadtrip/frankreich-pt-1/jv_01011.webp",
        "date": "2026-08-31",
        "location": "France",
        "description": "Open landscapes, changing light and stars photographed during the French part of the roadtrip.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 98,
        "src": "/images/photography/roadtrip/frankreich-pt-1/jv_00966.webp",
        "date": "2026-08-30",
        "location": "France",
        "description": "Open landscapes, changing light and stars photographed during the French part of the roadtrip.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 99,
        "src": "/images/photography/roadtrip/frankreich-pt-1/jv_00969.webp",
        "date": "2026-08-30",
        "location": "France",
        "description": "Open landscapes, changing light and stars photographed during the French part of the roadtrip.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 100,
        "src": "/images/photography/roadtrip/frankreich-pt-1/jv_00984.webp",
        "date": "2026-08-30",
        "location": "France",
        "description": "Open landscapes, changing light and stars photographed during the French part of the roadtrip.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 101,
        "src": "/images/photography/roadtrip/frankreich-pt-2/jv_01136.webp",
        "date": "2026-09-01",
        "location": "France",
        "description": "Mountain scenery and bright turquoise water during the French part of the roadtrip.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 102,
        "src": "/images/photography/roadtrip/frankreich-pt-2/jv_01141.webp",
        "date": "2026-09-01",
        "location": "France",
        "description": "Mountain scenery and bright turquoise water during the French part of the roadtrip.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 103,
        "src": "/images/photography/roadtrip/la-spezia/jv_01581.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 104,
        "src": "/images/photography/roadtrip/la-spezia/jv_01583.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 105,
        "src": "/images/photography/roadtrip/la-spezia/jv_01606.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 106,
        "src": "/images/photography/roadtrip/la-spezia/jv_01628.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 107,
        "src": "/images/photography/roadtrip/la-spezia/jv_01629.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 108,
        "src": "/images/photography/roadtrip/la-spezia/jv_01640.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 109,
        "src": "/images/photography/roadtrip/la-spezia/jv_01643.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 110,
        "src": "/images/photography/roadtrip/la-spezia/jv_01650.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 111,
        "src": "/images/photography/roadtrip/la-spezia/jv_01653.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 112,
        "src": "/images/photography/roadtrip/la-spezia/jv_01656.webp",
        "date": "2026-09-03",
        "location": "La Spezia, Italy",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 113,
        "src": "/images/photography/roadtrip/noli/jv_01438.webp",
        "date": "2026-09-02",
        "location": "Noli, Italy",
        "description": "Narrow passages, warm street lights and the coast around Noli after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 114,
        "src": "/images/photography/roadtrip/noli/jv_01448.webp",
        "date": "2026-09-02",
        "location": "Noli, Italy",
        "description": "Narrow passages, warm street lights and the coast around Noli after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 115,
        "src": "/images/photography/roadtrip/noli/jv_01472.webp",
        "date": "2026-09-02",
        "location": "Noli, Italy",
        "description": "Narrow passages, warm street lights and the coast around Noli after sunset.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 116,
        "src": "/images/photography/roadtrip/porto-di-santa-margherita-ligure/jv_01550.webp",
        "date": "2026-09-03",
        "location": "Santa Margherita Ligure, Italy",
        "description": "Street scenes, harbour views and the meeting of land and sea around Santa Margherita Ligure.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 117,
        "src": "/images/photography/roadtrip/porto-di-santa-margherita-ligure/jv_01562.webp",
        "date": "2026-09-03",
        "location": "Santa Margherita Ligure, Italy",
        "description": "Street scenes, harbour views and the meeting of land and sea around Santa Margherita Ligure.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 118,
        "src": "/images/photography/roadtrip/porto-di-santa-margherita-ligure/jv_01567.webp",
        "date": "2026-09-03",
        "location": "Santa Margherita Ligure, Italy",
        "description": "Street scenes, harbour views and the meeting of land and sea around Santa Margherita Ligure.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 119,
        "src": "/images/photography/roadtrip/porto-di-santa-margherita-ligure/jv_01569.webp",
        "date": "2026-09-03",
        "location": "Santa Margherita Ligure, Italy",
        "description": "Street scenes, harbour views and the meeting of land and sea around Santa Margherita Ligure.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 120,
        "src": "/images/photography/roadtrip/porto-venere/jv_01758.webp",
        "date": "2026-09-04",
        "location": "Porto Venere, Italy",
        "description": "Coastal paths, stone architecture and views across the water in Porto Venere.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 121,
        "src": "/images/photography/roadtrip/porto-venere/jv_01768.webp",
        "date": "2026-09-04",
        "location": "Porto Venere, Italy",
        "description": "Coastal paths, stone architecture and views across the water in Porto Venere.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 122,
        "src": "/images/photography/roadtrip/porto-venere/jv_01774.webp",
        "date": "2026-09-04",
        "location": "Porto Venere, Italy",
        "description": "Coastal paths, stone architecture and views across the water in Porto Venere.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 123,
        "src": "/images/photography/roadtrip/porto-venere/jv_01782.webp",
        "date": "2026-09-04",
        "location": "Porto Venere, Italy",
        "description": "Coastal paths, stone architecture and views across the water in Porto Venere.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 124,
        "src": "/images/photography/roadtrip/ravenna/jv_01970.webp",
        "date": "2026-09-05",
        "location": "Ravenna, Italy",
        "description": "Architecture, framed views and street details from a walk through Ravenna.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 125,
        "src": "/images/photography/roadtrip/ravenna/jv_02019.webp",
        "date": "2026-09-05",
        "location": "Ravenna, Italy",
        "description": "Architecture, framed views and street details from a walk through Ravenna.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 126,
        "src": "/images/photography/roadtrip/ravenna/jv_02023.webp",
        "date": "2026-09-05",
        "location": "Ravenna, Italy",
        "description": "Architecture, framed views and street details from a walk through Ravenna.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 127,
        "src": "/images/photography/daytrips/mondsee-08-08/mondsee_instapost.webp",
        "date": "2026-08-08",
        "location": "Mondsee, Austria",
        "description": "Sailboats, lakeside details and the changing evening light at Mondsee.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 128,
        "src": "/images/photography/daytrips/mondsee-08-08/mondsee_instapost_1.webp",
        "date": "2026-08-08",
        "location": "Mondsee, Austria",
        "description": "Sailboats, lakeside details and the changing evening light at Mondsee.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 129,
        "src": "/images/photography/daytrips/mondsee-08-08/mondsee_instapost_2.webp",
        "date": "2026-08-08",
        "location": "Mondsee, Austria",
        "description": "Sailboats, lakeside details and the changing evening light at Mondsee.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 130,
        "src": "/images/photography/daytrips/mondsee-08-08/mondsee_instapost_3.webp",
        "date": "2026-08-08",
        "location": "Mondsee, Austria",
        "description": "Sailboats, lakeside details and the changing evening light at Mondsee.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 131,
        "src": "/images/photography/daytrips/mondsee-08-08/mondsee_instapost_4.webp",
        "date": "2026-08-08",
        "location": "Mondsee, Austria",
        "description": "Sailboats, lakeside details and the changing evening light at Mondsee.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 132,
        "src": "/images/photography/daytrips/passau-23-07/passau2307_instapost.webp",
        "date": "2026-07-24",
        "location": "Passau, Germany",
        "description": "Lanterns, quiet passages and the city lights during a night walk through Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 133,
        "src": "/images/photography/daytrips/passau-23-07/passau2307_instapost_1.webp",
        "date": "2026-07-24",
        "location": "Passau, Germany",
        "description": "Lanterns, quiet passages and the city lights during a night walk through Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 134,
        "src": "/images/photography/daytrips/passau-23-07/passau2307_instapost_2.webp",
        "date": "2026-07-23",
        "location": "Passau, Germany",
        "description": "Lanterns, quiet passages and the city lights during a night walk through Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 135,
        "src": "/images/photography/daytrips/passau-23-07/passau2307_instapost_3.webp",
        "date": "2026-07-24",
        "location": "Passau, Germany",
        "description": "Lanterns, quiet passages and the city lights during a night walk through Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 136,
        "src": "/images/photography/daytrips/passau-23-07/passau2307_instapost_4.webp",
        "date": "2026-07-24",
        "location": "Passau, Germany",
        "description": "Lanterns, quiet passages and the city lights during a night walk through Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 137,
        "src": "/images/photography/daytrips/passau-23-07/passau2307_instapost_5.webp",
        "date": "2026-07-24",
        "location": "Passau, Germany",
        "description": "Lanterns, quiet passages and the city lights during a night walk through Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 138,
        "src": "/images/photography/daytrips/passau-30-07/passau3007_instapost.webp",
        "date": "2026-07-30",
        "location": "Passau, Germany",
        "description": "Moonlit views, reflections and traces of movement during another summer night in Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 139,
        "src": "/images/photography/daytrips/passau-30-07/passau3007_instapost_1.webp",
        "date": "2026-07-30",
        "location": "Passau, Germany",
        "description": "Moonlit views, reflections and traces of movement during another summer night in Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 140,
        "src": "/images/photography/daytrips/passau-30-07/passau3007_instapost_2.webp",
        "date": "2026-07-30",
        "location": "Passau, Germany",
        "description": "Moonlit views, reflections and traces of movement during another summer night in Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 141,
        "src": "/images/photography/daytrips/passau-30-07/passau3007_instapost_3.webp",
        "date": "2026-07-30",
        "location": "Passau, Germany",
        "description": "Moonlit views, reflections and traces of movement during another summer night in Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 142,
        "src": "/images/photography/daytrips/passau-30-07/passau3007_instapost_4.webp",
        "date": "2026-07-31",
        "location": "Passau, Germany",
        "description": "Moonlit views, reflections and traces of movement during another summer night in Passau.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 143,
        "src": "/images/photography/daytrips/sterne-13-08/sterne1308_instapost.webp",
        "date": "2026-08-13",
        "location": "Night sky",
        "description": "A small collection of night-sky photographs, from the Milky Way to light on the horizon.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 144,
        "src": "/images/photography/daytrips/sterne-13-08/sterne1308_instapost_1.webp",
        "date": "2026-08-13",
        "location": "Night sky",
        "description": "A small collection of night-sky photographs, from the Milky Way to light on the horizon.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 145,
        "src": "/images/photography/daytrips/sterne-13-08/sterne1308_instapost_2.webp",
        "date": "2026-08-13",
        "location": "Night sky",
        "description": "A small collection of night-sky photographs, from the Milky Way to light on the horizon.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 146,
        "src": "/images/photography/daytrips/sterne-13-08/sterne1308_instapost_3.webp",
        "date": "2026-08-13",
        "location": "Night sky",
        "description": "A small collection of night-sky photographs, from the Milky Way to light on the horizon.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 147,
        "src": "/images/photography/daytrips/dn-04-08/dn_instapost.webp",
        "date": "2026-08-04",
        "location": "Deggendorf, Germany",
        "description": "Twilight, stars and quiet details from a night out in Deggendorf.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 148,
        "src": "/images/photography/daytrips/dn-04-08/dn_instapost_1.webp",
        "date": "2026-08-04",
        "location": "Deggendorf, Germany",
        "description": "Twilight, stars and quiet details from a night out in Deggendorf.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 149,
        "src": "/images/photography/daytrips/dn-04-08/dn_instapost_2.webp",
        "date": "2026-08-05",
        "location": "Deggendorf, Germany",
        "description": "Twilight, stars and quiet details from a night out in Deggendorf.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 150,
        "src": "/images/photography/daytrips/dn-04-08/dn_instapost_3.webp",
        "date": "2026-08-05",
        "location": "Deggendorf, Germany",
        "description": "Twilight, stars and quiet details from a night out in Deggendorf.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 151,
        "src": "/images/photography/daytrips/eclipse-12-08/eclipse_instapost.webp",
        "date": "2026-08-12",
        "location": "Solar eclipse",
        "description": "Two views of the partially eclipsed sun, framed by foreground silhouettes.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },
    {
        "id": 152,
        "src": "/images/photography/daytrips/eclipse-12-08/eclipse_instapost_1.webp",
        "date": "2026-08-12",
        "location": "Solar eclipse",
        "description": "Two views of the partially eclipsed sun, framed by foreground silhouettes.",
        "blurColor": "rgba(255, 255, 255, 0.04)"
    },

];

export const photoSeries: PhotoSeries[] = [
    {
        id: "urban-loneliness",
        title: "Urban Loneliness",
        subtitle: "Finding isolation in urban spaces",
        description:
            "An exploration of loneliness, isolation and quiet moments within the urban environment.",
        cover: "/images/photography/photo-46.webp",
        photoIds: [46, 47, 48, 49, 50, 51, 52, 53],
        featured: true,
        published: true,
    },
    {
        id: "nightwalks",
        title: "Nightwalks",
        subtitle: "Cities after dark",
        description:
            "Exploring familiar streets and urban landscapes after sunset.",
        cover: "/images/photography/photo-29.webp",
        photoIds: [16, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 35],
        published: true,
    },
    {
        id: "walhalla-at-night",
        title: "Walhalla at Night",
        subtitle: "Architecture after sunset",
        description:
            "A photographic exploration of the Walhalla monument after dark.",
        cover: "/images/photography/photo-22.webp",
        photoIds: [21, 22, 23, 24, 25],
        published: true,
    },
    // Individual stories for the new trips.
    {
        "id": "roadtrip-susa",
        "title": "Susa",
        "subtitle": "Roadtrip / Streets and mountain views",
        "description": "Quiet streets, warm facades and glimpses of the surrounding mountains in Susa.",
        "cover": "/images/photography/roadtrip/susa/jv_01186.webp",
        "photoIds": [
            54,
            55,
            56,
            57
        ],
        "published": true
    },
    {
        "id": "roadtrip-brisighella",
        "title": "Brisighella",
        "subtitle": "Roadtrip / Above the rooftops",
        "description": "A walk through Brisighella, from its streets and passages to views across the rooftops.",
        "cover": "/images/photography/roadtrip/brisighella/jv_01953.webp",
        "photoIds": [
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65
        ],
        "published": true
    },
    {
        "id": "roadtrip-camochi",
        "title": "Camochi",
        "subtitle": "Roadtrip / Along the canals",
        "description": "Canals, bridges and reflections seen while exploring Camochi.",
        "cover": "/images/photography/roadtrip/camochi/jv_02139.webp",
        "photoIds": [
            66,
            67,
            68,
            69
        ],
        "published": true
    },
    {
        "id": "roadtrip-camogli",
        "title": "Camogli",
        "subtitle": "Roadtrip / Along the coast",
        "description": "Colourful waterfronts, narrow streets and coastal details in Camogli.",
        "cover": "/images/photography/roadtrip/camogli/jv_01483.webp",
        "photoIds": [
            70,
            71,
            72,
            73,
            74,
            75
        ],
        "published": true
    },
    {
        "id": "roadtrip-caorle",
        "title": "Caorle",
        "subtitle": "Roadtrip / Evening by the sea",
        "description": "Seafront details, warm evening light and quiet moments in Caorle.",
        "cover": "/images/photography/roadtrip/caorle/jv_02238.webp",
        "photoIds": [
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84
        ],
        "published": true
    },
    {
        "id": "roadtrip-finalborgo",
        "title": "Finalborgo",
        "subtitle": "Roadtrip / Streets and surroundings",
        "description": "Stone passages, small streets and moments from Finalborgo and the surrounding coast.",
        "cover": "/images/photography/roadtrip/finalborgo/jv_01337.webp",
        "photoIds": [
            85,
            86,
            87,
            88,
            89,
            90,
            91
        ],
        "published": true
    },
    {
        "id": "roadtrip-florenz",
        "title": "Florence",
        "subtitle": "Roadtrip / Light between buildings",
        "description": "Streets, architecture and warm light while exploring Florence.",
        "cover": "/images/photography/roadtrip/florenz/jv_01866.webp",
        "photoIds": [
            92,
            93,
            94,
            95
        ],
        "published": true
    },
    {
        "id": "roadtrip-frankreich-pt-1",
        "title": "France — Part I",
        "subtitle": "Roadtrip / Landscapes and night skies",
        "description": "Open landscapes, changing light and stars photographed during the French part of the roadtrip.",
        "cover": "/images/photography/roadtrip/frankreich-pt-1/jv_01002.webp",
        "photoIds": [
            96,
            97,
            98,
            99,
            100
        ],
        "published": true
    },
    {
        "id": "roadtrip-frankreich-pt-2",
        "title": "France — Part II",
        "subtitle": "Roadtrip / Mountain water",
        "description": "Mountain scenery and bright turquoise water during the French part of the roadtrip.",
        "cover": "/images/photography/roadtrip/frankreich-pt-2/jv_01141.webp",
        "photoIds": [
            101,
            102
        ],
        "published": true
    },
    {
        "id": "roadtrip-la-spezia",
        "title": "La Spezia",
        "subtitle": "Roadtrip / After dark",
        "description": "Quiet streets, harbour lights and the city after sunset.",
        "cover": "/images/photography/roadtrip/la-spezia/jv_01628.webp",
        "photoIds": [
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112
        ],
        "published": true
    },
    {
        "id": "roadtrip-noli",
        "title": "Noli",
        "subtitle": "Roadtrip / Blue hour and warm lights",
        "description": "Narrow passages, warm street lights and the coast around Noli after sunset.",
        "cover": "/images/photography/roadtrip/noli/jv_01438.webp",
        "photoIds": [
            113,
            114,
            115
        ],
        "published": true
    },
    {
        "id": "roadtrip-porto-di-santa-margherita-ligure",
        "title": "Santa Margherita Ligure",
        "subtitle": "Roadtrip / Harbour and sea",
        "description": "Street scenes, harbour views and the meeting of land and sea around Santa Margherita Ligure.",
        "cover": "/images/photography/roadtrip/porto-di-santa-margherita-ligure/jv_01562.webp",
        "photoIds": [
            116,
            117,
            118,
            119
        ],
        "published": true
    },
    {
        "id": "roadtrip-porto-venere",
        "title": "Porto Venere",
        "subtitle": "Roadtrip / Between stone and sea",
        "description": "Coastal paths, stone architecture and views across the water in Porto Venere.",
        "cover": "/images/photography/roadtrip/porto-venere/jv_01774.webp",
        "photoIds": [
            120,
            121,
            122,
            123
        ],
        "published": true
    },
    {
        "id": "roadtrip-ravenna",
        "title": "Ravenna",
        "subtitle": "Roadtrip / Looking through the city",
        "description": "Architecture, framed views and street details from a walk through Ravenna.",
        "cover": "/images/photography/roadtrip/ravenna/jv_02023.webp",
        "photoIds": [
            124,
            125,
            126
        ],
        "published": true
    },
    {
        "id": "daytrips-mondsee-08-08",
        "title": "Mondsee",
        "subtitle": "Daytrip / 8 August 2026",
        "description": "Sailboats, lakeside details and the changing evening light at Mondsee.",
        "cover": "/images/photography/daytrips/mondsee-08-08/mondsee_instapost_3.webp",
        "photoIds": [
            127,
            128,
            129,
            130,
            131
        ],
        "published": true
    },
    {
        "id": "daytrips-passau-23-07",
        "title": "Passau — July 23",
        "subtitle": "Daytrip / A walk into the night",
        "description": "Lanterns, quiet passages and the city lights during a night walk through Passau.",
        "cover": "/images/photography/daytrips/passau-23-07/passau2307_instapost.webp",
        "photoIds": [
            132,
            133,
            134,
            135,
            136,
            137
        ],
        "published": true
    },
    {
        "id": "daytrips-passau-30-07",
        "title": "Passau — July 30",
        "subtitle": "Daytrip / Moonlight and reflections",
        "description": "Moonlit views, reflections and traces of movement during another summer night in Passau.",
        "cover": "/images/photography/daytrips/passau-30-07/passau3007_instapost_3.webp",
        "photoIds": [
            138,
            139,
            140,
            141,
            142
        ],
        "published": true
    },
    {
        "id": "daytrips-sterne-13-08",
        "title": "Under the Stars",
        "subtitle": "Night photography / 13 August 2026",
        "description": "A small collection of night-sky photographs, from the Milky Way to light on the horizon.",
        "cover": "/images/photography/daytrips/sterne-13-08/sterne1308_instapost_1.webp",
        "photoIds": [
            143,
            144,
            145,
            146
        ],
        "published": true
    },
    {
        "id": "daytrips-dn-04-08",
        "title": "Deggendorf at Night",
        "subtitle": "Daytrip / 4 August 2026",
        "description": "Twilight, stars and quiet details from a night out in Deggendorf.",
        "cover": "/images/photography/daytrips/dn-04-08/dn_instapost_2.webp",
        "photoIds": [
            147,
            148,
            149,
            150
        ],
        "published": true
    },
    {
        "id": "daytrips-eclipse-12-08",
        "title": "Solar Eclipse",
        "subtitle": "Sky photography / 12 August 2026",
        "description": "Two views of the partially eclipsed sun, framed by foreground silhouettes.",
        "cover": "/images/photography/daytrips/eclipse-12-08/eclipse_instapost.webp",
        "photoIds": [
            151,
            152
        ],
        "published": true
    },

];
