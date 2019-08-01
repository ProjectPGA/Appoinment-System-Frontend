import { Action, ActionHandler, ActionTree } from '@/types';
import { mapValues, isObject } from 'lodash';

const errorHandlerInternal = <S>(wrappedAction: Action<S>) => async (
    args,
    payload
) => {
    try {
        const result = await (wrappedAction as ActionHandler<S>)(args, payload);
        return result;
    } catch (e) {
        console.error(e);
        args.commit('andres/setUnhandledExceptionOccured', null, {
            root: true,
        });
    }
};

export const errorHandlerTree = <S>(actions: ActionTree<S>) =>
    mapValues(actions, actionHandler => errorHandlerInternal(actionHandler));

export const errorHandler = <S>(handler: ActionHandler<S>) =>
    errorHandlerInternal(handler);
