export default [
    {
        id: "gallery-project",
        img: "img/icon_gallery.png",
        title: "Gallery Project",
        text: "This will generate a project from multiple images (assets) displayed one by one on the observatory.",
        projectTemplate: {
            gallery: true,
            canvas: {
                layout: {
                    type: "grid",
                    cols: 1,
                    rows: 1
                },
                sections: [
                    {
                        name: "slide",
                        type: "section",
                        positionConstraints: { r: 0, c: 0, w: 1, h: 1 },
                        app: {}
                    }
                ]
            }
        }
    },
    {
        id: "single-page-project",
        img: "img/icon_single_section.png",
        title: "Full screen presentation",
        text: "This will generate a project from a single asset displayed as a single (full screen) section on the observatory.",
        projectTemplate: {
            gallery: false,
            canvas: {
                layout: {
                    type: "grid",
                    cols: 1,
                    rows: 1
                },
                sections: [
                    {
                        name: "slide",
                        type: "section",
                        positionConstraints: { r: 0, c: 0, w: 1, h: 1 },
                        app: {}
                    }
                ]
            }
        }
    },
    {
        id: "five-section-project",
        img: "img/icon_five_sections.png",
        title: "Five section project",
        text: "This will generate a project from 5 assets displayed as multiple sections on the observatory.",
        projectTemplate: {
            gallery: false,
            canvas: {
                layout: {
                    type: "grid",
                    cols: 16,
                    rows: 1
                },
                sections: [
                    {
                        name: "section1",
                        type: "section",
                        positionConstraints: { r: 0, c: 0, w: 3, h: 1 },
                        app: {}
                    },
                    {
                        name: "section2",
                        type: "section",
                        positionConstraints: { r: 0, c: 3, w: 3, h: 1 },
                        app: {}
                    },
                    {
                        name: "section3",
                        type: "section",
                        positionConstraints: { r: 0, c: 6, w: 4, h: 1 },
                        app: {}
                    },
                    {
                        name: "section4",
                        type: "section",
                        positionConstraints: { r: 0, c: 10, w: 3, h: 1 },
                        app: {}
                    },
                    {
                        name: "section5",
                        type: "section",
                        positionConstraints: { r: 0, c: 13, w: 3, h: 1 },
                        app: {}
                    }
                ]
            }
        }
    },
    {
        id: "four-section-project",
        img: "img/icon_five_sections.png",
        title: "Four section project",
        text: "This will generate a project from 4 assets displayed as multiple sections on the observatory.",
        projectTemplate: {
            gallery: false,
            canvas: {
                layout: {
                    type: "grid",
                    cols: 4,
                    rows: 1
                },
                sections: [
                    {
                        name: "section1",
                        type: "section",
                        positionConstraints: { r: 0, c: 0, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section2",
                        type: "section",
                        positionConstraints: { r: 0, c: 1, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section3",
                        type: "section",
                        positionConstraints: { r: 0, c: 2, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section4",
                        type: "section",
                        positionConstraints: { r: 0, c: 3, w: 1, h: 1 },
                        app: {}
                    }
                ]
            }
        }
    },
    {
        id: "eight-section-project",
        img: "img/icon_multiple_sections.png",
        title: "Four section x two columns project",
        text: "This will generate a project from 8 assets displayed as 4 columns over 2 rows.",
        projectTemplate: {
            gallery: false,
            canvas: {
                layout: {
                    type: "grid",
                    cols: 4,
                    rows: 2
                },
                sections: [
                    {
                        name: "section1_1",
                        type: "section",
                        positionConstraints: { r: 0, c: 0, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section2_1",
                        type: "section",
                        positionConstraints: { r: 0, c: 1, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section3_1",
                        type: "section",
                        positionConstraints: { r: 0, c: 2, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section4_1",
                        type: "section",
                        positionConstraints: { r: 0, c: 3, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section1_2",
                        type: "section",
                        positionConstraints: { r: 1, c: 0, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section2_2",
                        type: "section",
                        positionConstraints: { r: 1, c: 1, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section3_2",
                        type: "section",
                        positionConstraints: { r: 1, c: 2, w: 1, h: 1 },
                        app: {}
                    },
                    {
                        name: "section4_2",
                        type: "section",
                        positionConstraints: { r: 1, c: 3, w: 1, h: 1 },
                        app: {}
                    }
                ]
            }
        }
    }
];