import { matchers } from "@emotion/jest";
import "@testing-library/jest-dom";
import { matchMedia } from "mock-match-media";
import "vitest";

// @ts-expect-error Emotion matchers are written for jest, but they work fine in vitest
expect.extend(matchers);

globalThis.matchMedia = matchMedia;
Object.defineProperty(global, "matchMedia", matchMedia);
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: matchMedia,
});

export const mockScrollIntoView = vi.fn();
export const mockScrollTo = vi.fn();
const originalScrollIntoView = Element.prototype.scrollIntoView;
const originalScrollTo = Element.prototype.scrollTo;

beforeAll(() => {
  Element.prototype.scrollIntoView = mockScrollIntoView;
  Element.prototype.scrollTo = mockScrollTo;
});

afterAll(() => {
  Element.prototype.scrollIntoView = originalScrollIntoView;
  Element.prototype.scrollTo = originalScrollTo;
});
