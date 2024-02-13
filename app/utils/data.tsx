export const results = [
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "Puneet Bajaj",
        email: "puneetbajaj591@gmail.com",
        university: "Georgia State University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        labels: ["Location", "Experience", "GPA"],
        new: true,
    },
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "John Doe",
        email: "johndoe@example.com",
        university: "Georgia State University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        labels: ["Location", "GPA"],
        new: true,
    },
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "Jane Doe",
        email: "janedoe@example.com",
        university: "Georgia State University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        labels: ["Location", "Experience"],
        new: true,
    },
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "John Smith",
        email: "johnsmith@example.com",
        university: "Georgia State University",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        labels: ["Experience", "GPA"],
        new: true,
    }    
]

export type Results = (typeof results)[number]