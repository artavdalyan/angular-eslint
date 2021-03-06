import processors from './processors';
import bananaInABox, {
  RULE_NAME as bananaInABoxRuleName,
} from './rules/banana-in-a-box';
import cyclomaticComplexity, {
  RULE_NAME as cyclomaticComplexityRuleName,
} from './rules/cyclomatic-complexity';
import noNegatedAsync, {
  RULE_NAME as noNegatedAsyncRuleName,
} from './rules/no-negated-async';

export default {
  processors,
  rules: {
    [bananaInABoxRuleName]: bananaInABox,
    [cyclomaticComplexityRuleName]: cyclomaticComplexity,
    [noNegatedAsyncRuleName]: noNegatedAsync,
  },
};
