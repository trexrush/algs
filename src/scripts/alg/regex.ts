export const isTriggerRegex: RegExp = /\[(.*?)\]/g
// https://stackoverflow.com/questions/19414193/regex-extract-string-not-between-two-brackets
export const algDelimiterWithTriggers: RegExp = /[\s\(\)]+(?![^\[]*\])/g
export const matchAllParenthesis: RegExp =  /([\(\)])/g