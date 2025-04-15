import { css } from "@emotion/react";

export type TokenSet<
  Group extends string,
  Member extends string,
  T = string,
> = Record<Group, Record<Member, T>>;

export type ThemeTokenSet<
  Group extends string,
  Member extends string,
  T = string | number,
> = TokenSet<Group, Member, T>;

export const generateTokenGroup = <Group extends string, Member extends string>(
  group: Group,
  members: Member[],
  prefix?: string,
) =>
  members.reduce(
    (acc, member) => ({
      ...acc,
      [member]: `var(--${prefix ? `${prefix}-` : ""}${group}-${member})`,
    }),
    {} as Record<Member, string>,
  );

export const generateTokens = <Group extends string, Member extends string>(
  [groups, members]: [Group[], Member[]],
  prefix?: string,
): TokenSet<Group, Member> =>
  groups.reduce(
    (tokens, group) => ({
      ...tokens,
      [group]: generateTokenGroup(group, members, prefix),
    }),
    {} as Record<Group, Record<Member, string>>,
  );

type Tokens<T> = {
  [k: string]: T | Tokens<T>;
};

const reduceToVarNames = (
  tokens: Tokens<string | number>,
  prefix?: string,
): Record<string, string | number> =>
  Object.entries(tokens).reduce((acc, [key, val]) => {
    const updatedKey = `${prefix ? `${prefix}-` : ""}${key}`;

    if (typeof val !== "string" && typeof val !== "number") {
      return { ...acc, ...reduceToVarNames(val, updatedKey) };
    }

    return { ...acc, [updatedKey]: val };
  }, {});

export const outputThemeVars = (
  tokens: Tokens<string | number>,
  prefix?: string,
) => css`
  ${Object.entries(reduceToVarNames(tokens, prefix)).map(
    ([varName, value]) => `--${varName}: ${value};`,
  )}
`;
