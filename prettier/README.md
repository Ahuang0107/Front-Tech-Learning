# README

## Prettier 是一个 Opinionated 的代码格式化工具

- Prettier 会去掉你代码里的所有样式风格，然后用统一固定的格式重新输出。
- Prettier 先把你的代码转换成一种中间状态，叫 AST(Abstract Syntax Tree)。
- Prettier 就是在这个 AST 上重新按照自己的风格输出代码。

> 用 Prettier 提供的[Playground](https://link.zhihu.com/?target=https%3A//prettier.io/playground)更直观一些

## Prettier 和各种 Linters 是什么关系？如何配合使用？

各种 Linters 是按照规则(Rules)去检查代码的，遇到不符合规则的代码就会提示你，有的规则还能自动帮你解决冲突。

这些规则分为两类：

- Formatting rules

当 ESLint 遇到 Formatting rules 的 incorrect code 的时候，会提示你违反规则，让你修改代码以符合规则。

而 Prettier 则不会这么麻烦，它根本不管你之前符不符合什么规则，都先把你的代码解析成 AST，然后按照它自己的风格给你重新输出代码。

- Code-quality rules

Prettier 对这类规则束手无策。而且这类规则也正是各种 Linters 的重点，因为它们真的能帮你发现很多低级的 Bug。

Prettier 并不会取代各种 Linters，而是能避免你的代码和这些 Linters 定义的 Formatting rules 冲突。
