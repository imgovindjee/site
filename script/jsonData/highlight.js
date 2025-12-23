const highlights = {
	"Cafe": {
		highlightName: "Cafe",
		highlightCoverImage: "cafe.jpeg",
		previousHighlightID: null,
		nextHighlightID: "Dive",
		stories: [
			{ type: "img", src: "cafe/1.jpeg" },
			{ type: "img", src: "cafe/2.jpeg" },
			{ type: "img", src: "cafe/3.jpeg" },
			{ type: "img", src: "cafe/4.jpeg" },
			{ type: "img", src: "cafe/5.jpeg" },
			{ type: "img", src: "cafe/6.jpeg" },
			{ type: "img", src: "cafe/7.jpeg" },
			{ type: "img", src: "cafe/8.jpeg" }
		],
		location: {
			locationText: "DTU - Cafe",
			locationLink: "...",
			locationDetailsLink: "....",
			locationGoogleEarthLink: "...."
		}
	},
    "Dive": {
        highlightName: "Dive",
        highlightCoverImage: "dive.jpeg",
        previousHighlightID: "Cafe",
        nextHighlightID: "StarBucks",
        stories: [
            { type: "img", src: "dive/1.jpeg" },
            { type: "img", src: "dive/2.jpeg" },
            { type: "img", src: "dive/3.jpeg" },
            { type: "img", src: "dive/4.jpeg" },
            { type: "img", src: "dive/5.jpeg" },
            { type: "img", src: "dive/6.jpeg" },
            { type: "img", src: "dive/7.jpeg" },
            { type: "img", src: "dive/8.jpeg" }
        ],
        location: {
            locationText: "New Delhi",
            locationLink: "....",
            locationDetailsLink: "...",
            locationGoogleEarthLink: "...."
        }
    },
    "StarBucks": {
        highlightName: "Starbucks",
        highlightCoverImage: "starbucks.jpeg",
        previousHighlightID: "Dive",
        nextHighlightID: "tajshamiana",
        stories: [
            { type: "img", src: "starbucks/1.jpg" },
            { type: "img", src: "starbucks/2.jpg" },
            { type: "img", src: "starbucks/3.jpg" },
        ],
        location: {
            locationText: "CP, New Delhi",
            locationLink: "....",
            locationDetailsLink: "...",
            locationGoogleEarthLink: "...."
        }
    },
	"tajshamiana": {
		highlightName: "The Taj Mahal Palace Hotel",
		highlightCoverImage: "tajshamiana.jpeg",
		previousHighlightID: "StarBucks",
		nextHighlightID: "Lonavala",
		stories: [
			{ type: "img", src: "tajshamiana/1.jpeg" },
			{ type: "img", src: "tajshamiana/2.jpeg" },
			{ type: "img", src: "tajshamiana/3.jpeg" },
			{ type: "img", src: "tajshamiana/4.jpeg" },
			{ type: "img", src: "tajshamiana/5.jpeg" },
			{ type: "video", src: "tajshamiana/6.mp4" },
			{ type: "img", src: "tajshamiana/7.jpeg" },
			{ type: "video", src: "tajshamiana/8.mp4" },
			{ type: "video", src: "tajshamiana/9.mp4" },
			{ type: "img", src: "tajshamiana/10.jpeg" },
			{ type: "img", src: "tajshamiana/11.jpeg" },
			{ type: "img", src: "tajshamiana/12.jpeg" },
		],
		location: {
			locationText: "The Taj Mahal Palace Hotel - Shamiana",
			locationLink: "...",
			locationDetailsLink: "...",
			locationGoogleEarthLink: "..."
		}
	},
	"Lonavala": {
		highlightName: "Lonavala",
		highlightCoverImage: "lonavala.jpeg",
		previousHighlightID: "tajshamiana",
		nextHighlightID: "Chruch",
		stories: [
			{ type: "img", src: "lonavala/1.jpg" },
			{ type: "img", src: "lonavala/2.jpg" },
			{ type: "img", src: "lonavala/3.jpg" },
			{ type: "img", src: "lonavala/4.jpeg" },
			{ type: "img", src: "lonavala/5.jpg" },
			{ type: "img", src: "lonavala/6.jpg" },
			{ type: "img", src: "lonavala/7.jpg" },
			{ type: "img", src: "lonavala/8.jpg" },
			{ type: "img", src: "lonavala/9.jpg" },
		],
		location: {
			locationText: "Lonavala - Mumbai",
			locationLink: "....",
			locationDetailsLink: "...",
			locationGoogleEarthLink: "...."
		}
	},
	"Chruch": {
		highlightName: "Church",
		highlightCoverImage: "church.jpeg",
		previousHighlightID: "Lonavala",
		nextHighlightID: "National Park",
		stories: [
			{ type: "img", src: "church/1.jpg" },
			{ type: "img", src: "church/2.jpg" },
			{ type: "img", src: "church/3.jpg" },
			{ type: "img", src: "church/4.jpg" },
		],
		location: {
			locationText: "Church",
			locationLink: "....",
			locationDetailsLink: "...",
			locationGoogleEarthLink: "...."
		}
	},
	"National Park": {
		highlightName: "National Park",
		highlightCoverImage: "nationalpark.jpeg",
		previousHighlightID: "Chruch",
		nextHighlightID: null,
		stories: [
			{ type: "img", src: "nationalpark/1.jpg" },
			{ type: "img", src: "nationalpark/2.jpg" },
			{ type: "img", src: "nationalpark/3.jpg" },
			{ type: "img", src: "nationalpark/4.jpg" },
			{ type: "img", src: "nationalpark/5.jpg" },
			{ type: "video", src: "nationalpark/6.mp4" },
			{ type: "video", src: "nationalpark/7.mp4" },
			{ type: "video", src: "nationalpark/8.mp4" },
			{ type: "img", src: "nationalpark/9.jpg" },
			{ type: "video", src: "nationalpark/10.mp4" },
			{ type: "video", src: "nationalpark/11.mp4" },
			{ type: "img", src: "nationalpark/12.jpg" },
		],
		location: {
			locationText: "National Park",
			locationLink: "....",
			locationDetailsLink: "...",
			locationGoogleEarthLink: "...."
		}
	},
}