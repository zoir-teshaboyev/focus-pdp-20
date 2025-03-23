// interface Movie {
//     title: string;
//     genre: string;
//   }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//   interface State {
//     currentPage: number;
//     currentGenre: string | null;
//     movies: Movie[];
//   }
//   const state: State = {
//     currentPage: 1,
//     currentGenre: null,
//     movies: []
//   };
//   function setState(newState: Partial<State>) {
//     Object.assign(state, newState);
//   }
// setState({currentPage})
var a = { name: 'arsonbek', age: 23 };
var b = { name: 'arsonbk' };
state = __assign(__assign({}, a), b);
console.log(state);
