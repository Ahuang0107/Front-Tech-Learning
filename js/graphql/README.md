# README

## graphql-tag

解析GraphQL查询的实用工具，包括：
* `gql` 将GraphQL查询字符串解析成标准GraphQL语法树的js模板字符串标签
* `/loader` 进行预处理查询的webpack loader

底层使用`graphql`依赖，所以需要同时安装`graphql-js`

### gql
`gql`模板字符串标签可以将简明的书写GraphQL查询，然后解析成标准GraphQL语法树。更加推荐将查询传递给Apollo Client，当然也可以用于任何GraphQL client
```js
import gql from 'graphql-tag';
 
const query = gql`
  {
    user(id: 5) {
      firstName
      lastName
    }
  }
`
```
以上查询包含下列语法树：
```json
{
  "kind": "Document",
  "definitions": [
    {
      "kind": "OperationDefinition",
      "operation": "query",
      "name": null,
      "variableDefinitions": null,
      "directives": [],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [
          {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "user",
              ...
            }
          }
        ]
      }
    }
  ]
}
```
### Fragments
`gql`标签也可以用来定义可重用片段，以便在其他查询中是使用
```js
import gql from 'graphql-tag';
 
const userFragment = gql`
  fragment User_user on User {
    firstName
    lastName
  }
`

const query = gql`
  {
    user(id: 5) {
      ...User_user
    }
  }
  ${userFragment}
`
```

### 为什么要用graphql-tag
GraphQL strings are the right way to write queries in your code, because they can be statically analyzed using tools like eslint-plugin-graphql. However, strings are inconvenient to manipulate, if you are trying to do things like add extra fields, merge multiple queries together, or other interesting stuff.

因为虽然在代码中使用GraphQL字符串书写查询才是正确方法，可以使用eslint-plugin-graphql等工具进行静态分析，但是当尝试执行诸如添加额外字段，将多个查询合并到一起等时，字符串会不太方便。
因此使用graphql-tag，可以使用ES6模板字符串编写查询，然后用`gql`将其编译成AST
