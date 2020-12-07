import { timer } from "rxjs";
import { tap, map, filter } from "rxjs/operators";

const React = {
  createElement(type, props, ...children) {
    const operator = type.call(null, props);
    if (children.length !== 0) {
      return operator.pipe(...children);
    }
    return operator;
  },
};

const Timer = ({ dueTime, period }) => {
  return timer(dueTime, period);
};

const Tap = ({ value }) => {
  return tap(value);
};

const Filter = ({ predicate }) => {
  return filter(predicate);
};

const Map = ({ project }) => {
  return map(project);
};

export const blackMagicSubject = (
  <Timer dueTime={100} period={150}>
    <Filter predicate={(item) => item % 2 == 0} />
    <Map project={(item) => `item: ${item}`} />
    <Tap value={console.log} />
  </Timer>
);

blackMagicSubject.subscribe();
