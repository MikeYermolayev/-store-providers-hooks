import { useStoreConsumer } from "../../../src";


export const storeConsumers = {
    useCounterStore: () => useStoreConsumer(`counter`),
    useMessageStore: () => useStoreConsumer(`message`),
};
