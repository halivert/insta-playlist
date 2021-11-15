import makeMatcher from "wouter/matcher";

const defaultMatcher = makeMatcher();

/*
 * A custom routing matcher function that supports multipath routes
 */
const multipathMatcher = (patterns, path) => {
	for (let pattern of [patterns].flat()) {
		const [match, params] = defaultMatcher(pattern, path);
		if (match) return [match, params];
	}

	return [false, null];
};

export default multipathMatcher;
