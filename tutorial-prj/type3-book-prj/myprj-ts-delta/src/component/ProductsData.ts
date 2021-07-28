export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    reviews: IReview[];
}

export interface IReview {
    comment: string;
    reviewer: string;
}

export const products: IProduct[] = [
    {
        description: "A collection of navigational components that compose declaratively with your app",
        id: 1,
        name: "React Router",
        price: 8,
        reviews: [
            {
                comment: "Excellent, this does everything I want",
                reviewer: "Billy"
            },
            {
                comment: "The best router I've ever worked with",
                reviewer: "Sally"
            }
        ]
    },
    {
        description: "A library that help manage state across your app",
        id: 2,
        name: "React Redux",
        price: 12,
        reviews: [
            {
                comment: "I've found this really helpful in a large app I'm working on",
                reviewer: "Nancy"
            }
        ]
    },
    {
        description: "A library that helps you interact with a GraphQL backend",
        id: 3,
        name: "React Apollo",
        price: 12,
        reviews: [
            {
                comment: "I'll vnever work with a REST API again.",
                reviewer: "Billy"
            },
            {
                comment: "It makes working with GraphQL backend a breeze",
                reviewer: "Sally"
            }
        ]
    }
]

