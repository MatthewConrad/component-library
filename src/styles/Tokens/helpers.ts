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

export const outputThemeVars = <Group extends string, Member extends string>(
  tokens: ThemeTokenSet<Group, Member>,
  prefix?: string,
) => css`
  ${Object.entries(tokens).map(([group, members]) =>
    Object.entries(members as Record<Member, string>).map(
      ([member, value]) =>
        `$--${prefix ? `${prefix}-` : ""}-${group}-${member}: ${value};`,
    ),
  )}
`;
