import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import tasksReducer from './features/tasks/tasksSlice';
import rootSaga from "./rootSaga";

const sagaMiddlware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddlware],
});

sagaMiddlware.run(rootSaga);

export default store;