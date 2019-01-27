import Matcher from './Matcher';

export class AnythingMatcher<T> extends Matcher<T> {
  // eslint-disable-next-line typescript/no-unused-vars
  match(value: unknown): value is T {
    return true;
  }
}

export default function anything<T>(): Matcher<T> {
  return new AnythingMatcher();
}
