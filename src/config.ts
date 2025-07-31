import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Chill Token Exchange",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1ndr668h5j0f8mdfejfq67hjuk809l0zcyu2ydvgsg7rrqappny9qvncgy8",
            cw20: "andr1fays2ej8fr0qxdxg37flmq7wsw5agyew799dpulmxrzxru038quqn63672",
            name: "Chill Token Exchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
